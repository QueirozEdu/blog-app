"use client";

import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploder } from "../ImageUploader";
import { PublicPost } from "@/DTO/post/dto";

type ManagePostFormProps = {
    publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
    const [contentValue, setContentValue] = useState(
        publicPost?.content || " "
    );
    return (
        <form action="" className="mb-16">
            <div className="flex flex-col gap-6">
                <InputText
                    labelText="ID"
                    name="id"
                    placeholder="ID generated automatically"
                    type="text"
                    defaultValue={publicPost?.id || " "}
                    readOnly
                />
                <InputText
                    labelText="Slug"
                    name="slug"
                    placeholder="Slug generated automatically"
                    type="text"
                    defaultValue={publicPost?.slug || " "}
                    readOnly
                />
                <InputText
                    labelText="Author"
                    name="author"
                    placeholder="Enter the author's name"
                    type="text"
                    defaultValue={publicPost?.author || " "}
                />
                <InputText
                    labelText="Title"
                    name="title"
                    placeholder="Your post title"
                    type="text"
                    defaultValue={publicPost?.title || " "}
                />
                <InputText
                    labelText="Excerpt"
                    name="excerpt"
                    placeholder="Enter excerpt"
                    type="text"
                    defaultValue={publicPost?.excerpt || " "}
                />
                <MarkdownEditor
                    labelText="Content"
                    value={contentValue}
                    setValue={setContentValue}
                    textAreaName="content"
                    disabled={false}
                />

                <ImageUploder />

                <InputText
                    labelText="Cover image URL"
                    name="coverImageUrl"
                    placeholder="Enter the image URL"
                    type="text"
                    defaultValue={publicPost?.coverImageUrl || " "}
                />

                <InputCheckBox
                    labelText="Publish?"
                    name="published"
                    type="checkbox"
                    defaultChecked={publicPost?.published || false}
                />

                <div className="mt-4">
                    <Button type="submit">Send</Button>
                </div>
            </div>
        </form>
    );
}
