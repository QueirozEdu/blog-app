"use server";

import { PublicPost } from "@/DTO/post/dto";

type CreatePostActionState = {
    formState: PublicPost;
    errors?: string[];
};

export async function createPostAction(
    prevState: CreatePostActionState,
    formData: FormData
): Promise<CreatePostActionState> {
    //TODO verify if user is logged

    if (!(formData instanceof FormData)) {
        return {
            formState: { ...prevState.formState },
            errors: ["Invalid credentials"],
        };
    }

    const formDataToObj = Object.fromEntries(formData.entries());

    return {
        formState: { ...prevState.formState },
        errors: ["Invalid credentials"],
    };
}
