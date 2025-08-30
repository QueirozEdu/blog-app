"use client";

import { Button } from "@/components/Button";
import { InputCheckBox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { useActionState, useState } from "react";
import { ImageUploder } from "../ImageUploader";
import { makePartialPublicPost, PublicPost } from "@/DTO/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";

type ManagePostFormProps = {
    publicPost?: PublicPost;
};

export function ManagePostForm({ publicPost }: ManagePostFormProps) {
    const initialState = {
        formState: makePartialPublicPost(publicPost),
        erros: [],
    };
    const [state, action, isPending] = useActionState(
        createPostAction,
        initialState
    );

    const { formState } = state;
    const [contentValue, setContentValue] = useState(
        publicPost?.content || " "
    );

    return (
        <form action={action} className="mb-16">
            <div className="flex flex-col gap-6">
                <InputText
                    labelText="ID"
                    name="id"
                    placeholder="ID generated automatically"
                    type="text"
                    defaultValue={formState.id}
                    readOnly
                />
                <InputText
                    labelText="Slug"
                    name="slug"
                    placeholder="Slug generated automatically"
                    type="text"
                    defaultValue={formState.slug}
                    readOnly
                />
                <InputText
                    labelText="Author"
                    name="author"
                    placeholder="Enter the author's name"
                    type="text"
                    defaultValue={formState.author}
                />
                <InputText
                    labelText="Title"
                    name="title"
                    placeholder="Your post title"
                    type="text"
                    defaultValue={formState.title}
                />
                <InputText
                    labelText="Excerpt"
                    name="excerpt"
                    placeholder="Enter excerpt"
                    type="text"
                    defaultValue={formState.excerpt}
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
                    defaultValue={formState.coverImageUrl}
                />

                <InputCheckBox
                    labelText="Publish?"
                    name="published"
                    type="checkbox"
                    defaultChecked={formState.published}
                />

                <div className="mt-4">
                    <Button type="submit">Send</Button>
                </div>
            </div>
        </form>
    );
}
