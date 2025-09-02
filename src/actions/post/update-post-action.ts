"use server";

import {
    makePartialPublicPost,
    makePublicPostFromDb,
    PublicPost,
} from "@/DTO/post/dto";
import { PostUpdateSchema } from "@/lib/post/validations";
import { postRepository } from "@/repositories/post";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { revalidateTag } from "next/cache";
import { toast } from "react-toastify";

type UpdatePostActionState = {
    formState: PublicPost;
    errors: string[];
    success?: true;
};

export async function updatePostAction(
    prevState: UpdatePostActionState,
    formData: FormData
): Promise<UpdatePostActionState> {
    // TODO: verify if user is logged

    if (!(formData instanceof FormData)) {
        return {
            formState: prevState.formState,
            errors: ["Invalid data"],
        };
    }

    const id = formData.get("id")?.toString() || "";

    if (!id || typeof id !== "string") {
        return {
            formState: prevState.formState,
            errors: ["Invalid ID"],
        };
    }

    const formDataToObj = Object.fromEntries(formData.entries());
    const zodParsedObj = PostUpdateSchema.safeParse(formDataToObj);

    if (!zodParsedObj.success) {
        const errors = getZodErrorMessages(zodParsedObj.error.format());
        return {
            errors,
            formState: makePartialPublicPost(formDataToObj),
        };
    }

    const validPostData = zodParsedObj.data;
    const newPost = {
        ...validPostData,
    };
    let post;
    try {
        post = await postRepository.update(id, newPost);
    } catch (e: unknown) {
        if (e instanceof Error) {
            return {
                formState: makePartialPublicPost(formDataToObj),
                errors: [e.message],
            };
        }

        return {
            formState: makePartialPublicPost(formDataToObj),
            errors: ["Unknown error"],
        };
    }

    revalidateTag("posts");
    revalidateTag(`post-${post.slug}`);
    toast.dismiss();
    toast.success("Post updated!");

    return {
        formState: makePublicPostFromDb(post),
        errors: [],
        success: true,
    };
}
