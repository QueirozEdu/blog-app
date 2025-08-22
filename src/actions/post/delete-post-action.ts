"use server";
import { drizzleDb } from "@/db/drizzle";
import { postsTable } from "@/db/drizzle/schemas";
import { postRepository } from "@/repositories/post";
import { asyncDelay } from "@/utils/async-delay";
import { logColor } from "@/utils/log-color";
import { eq } from "drizzle-orm";

export async function deletePostAction(id: string) {
    //TODO: check user login
    //TODO remove lines below

    await asyncDelay(2000);
    logColor("" + id);

    if (!id || typeof id !== "string") {
        return {
            error: "Invalid data",
        };
    }

    const post = await postRepository.findById(id).catch(() => undefined);

    if (!post) {
        return {
            error: "Post does not exist",
        };
    }

    //TODO: move this method to repository
    await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

    //TODO: revalidateTag or revalidatePath

    return {
        error: "",
    };
}
