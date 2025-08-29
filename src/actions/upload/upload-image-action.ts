"use server";

import {
    IMAGE_SERVER_URL,
    IMAGE_UPLOAD_DIRECTORY,
    IMAGE_UPLOADER_MAX_SIZE,
} from "@/lib/constants";
import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

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

    const imageExtension = extname(file.name);
    const uniqueImageName = `${Date.now()}${imageExtension}`;

    const uploadsFullPath = resolve(
        process.cwd(),
        "public",
        IMAGE_UPLOAD_DIRECTORY
    );
    await mkdir(uploadsFullPath, { recursive: true });
    const fileArrayByffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileArrayByffer);

    const fileFullPath = resolve(uploadsFullPath, uniqueImageName);

    await writeFile(fileFullPath, buffer);

    const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

    return makeResult({ url });
}
