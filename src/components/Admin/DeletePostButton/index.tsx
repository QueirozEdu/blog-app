"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { deletePostAction } from "@/actions/post/delete-post-action";
import { useTransition } from "react";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();

    function handleClick() {
        if (!confirm("Are you sure? ")) return;
        startTransition(async () => {
            const result = await deletePostAction(id);
            alert(`The result is ${result}`);
        });
    }
    return (
        <button
            className={clsx(
                "text-red-400 cursor-pointer transition",
                "[&_svg]:w-4 [&_svg]:h-4",
                "hover:scale-130 hover:text-red-700",
                "disabled:text-slate-600 disabled:cursor-progress"
            )}
            aria-label={`Delete post: ${title}`}
            title={`Delete post: ${title}`}
            onClick={handleClick}
            disabled={isPending}
        >
            <Trash2Icon size={18} />
        </button>
    );
}
