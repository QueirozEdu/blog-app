"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    function handleClick() {
        alert("button clicked " + id);
    }
    return (
        <button
            className={clsx(
                "text-red-400 cursor-pointer transition",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:scale-130 hover:text-red-700"
            )}
            aria-label={`Delete post: ${title}`}
            title={`Delete post: ${title}`}
            onClick={handleClick}
        >
            <Trash2Icon size={18} />
        </button>
    );
}
