"use client";

import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useState } from "react";
import { ImageUploder } from "../ImageUploader";

export function ManagePostForm() {
    const [contentValue, setContentValue] = useState("");
    return (
        <form action="" className="mb-16">
            <div className="flex flex-col gap-6">
                {/* id: string; auto
    title: string; auto
    slug: string;
    excerpt: string;
    content: string;
    UPLOADER
    coverImageUrl: string;
    published: boolean;
    createdAt: string; auto
    updatedAt: string; auto
    author: string; */}

                <InputText
                    labelText="ID"
                    name="id"
                    placeholder="ID generated automatically"
                    type="text"
                    defaultValue={" "}
                    readOnly
                />
                <InputText
                    labelText="Slug"
                    name="slug"
                    placeholder="Slug generated automatically"
                    type="text"
                    defaultValue={" "}
                    readOnly
                />
                <InputText
                    labelText="Author"
                    name="author"
                    placeholder="Enter the author's name"
                    type="text"
                />
                <InputText
                    labelText="Title"
                    name="title"
                    placeholder="Your post title"
                    type="text"
                />
                <InputText
                    labelText="Excerpt"
                    name="excerpt"
                    placeholder="Enter excerpt"
                    type="text"
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
                />

                <InputCheckBox
                    labelText="Publish?"
                    name="published"
                    type="checkbox"
                />

                <div className="mt-4">
                    <Button type="submit">Send</Button>
                </div>
            </div>
        </form>
    );
}
