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
                <InputText labelText="Name" placeholder="Enter your name" />
                <InputText
                    labelText="Lastname"
                    placeholder="Enter your lastname"
                />

                <InputText
                    disabled
                    labelText="Place Holder"
                    placeholder="This is a place holder"
                />
                <ImageUploder />
                <InputText
                    disabled
                    labelText="Default Value"
                    placeholder="This is a place holder"
                    defaultValue="This is a default value"
                />
                <InputText
                    labelText="Read only"
                    placeholder="This is a place holder"
                    defaultValue="This is a default value"
                    readOnly
                />
                <InputCheckBox labelText="Checkbox" />

                <MarkdownEditor
                    labelText="content"
                    disabled={false}
                    textAreaName="content"
                    value={contentValue}
                    setValue={setContentValue}
                ></MarkdownEditor>

                <div className="mt-4">
                    <Button type="submit">Send</Button>
                </div>
            </div>
        </form>
    );
}
