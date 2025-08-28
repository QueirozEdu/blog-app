"use client";

import { Button } from "@/components/Button";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

export function ImageUploder() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleChooseFile() {
        if (!fileInputRef.current) return;

        fileInputRef.current.click();
    }

    return (
        <div className="flex flex-col gap-2 py-4">
            <Button
                onClick={handleChooseFile}
                type="button"
                className="self-start"
            >
                <ImageUpIcon />
                Send an image
            </Button>
            <input
                ref={fileInputRef}
                className="hidden"
                name="file"
                type="file"
                accept="image/*"
            />
        </div>
    );
}
