"use server";

import { IMAGE_UPLOADER_MAX_SIZE } from "@/lib/constants";

type uploadImageActionResult = {
    url: string;
    error: string;
};

export async function uploadImageAction(
    formData: FormData
): Promise<uploadImageActionResult> {
    const makeResult = ({ url = "", error = "" }) => {
        return { url, error };
    };

    if (!(formData instanceof FormData)) {
        return makeResult({
            error: "Invalid Data",
        });
    }

    const file = formData.get("file");
    if (!(file instanceof File)) {
        return makeResult({ error: "Invalid File" });
    }

    if (file.size > IMAGE_UPLOADER_MAX_SIZE) {
        return makeResult({ error: "File size too large" });
    }

    if (!file.type.startsWith("image/")) {
        return makeResult({ error: "Invalid Image" });
    }
    //TODO send file
    return makeResult({ url: "URL" });
}
