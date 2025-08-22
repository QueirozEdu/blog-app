"use client";

import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import { deletePostAction } from "@/actions/post/delete-post-action";
import { useState, useTransition } from "react";
import { Dialog } from "@/components/Dialog";

type DeletePostButtonProps = {
    id: string;
    title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [showDialog, setShowDialog] = useState(false);

    function handleClick() {
        setShowDialog(true);
        //     if (!confirm("Are you sure? ")) return;
        //     startTransition(async () => {
        //         const result = await deletePostAction(id);
        //         alert(`The result is ${result}`);
        //     });
    }
    return (
        <>
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
            {showDialog && (
                <Dialog
                    isVisible={showDialog}
                    title="Delete post?"
                    content={`Are you sure you want to delete ${title}?`}
                />
            )}
        </>
    );
}
