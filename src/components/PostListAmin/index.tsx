import { findAllPostsAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { DeletePostButton } from "../Admin/DeletePostButton";

export default async function PostsListAdmin() {
    const posts = await findAllPostsAdmin();

    return (
        <div className="mb-16">
            {posts.map((post) => {
                return (
                    <div
                        className={clsx(
                            "py-2 px-2",
                            !post.published && "bg-slate-300",
                            "flex gap-2 items-center justify-between"
                        )}
                        key={post.id}
                    >
                        <Link href={`/admin/post/${post.id}`}>
                            {post.title}
                        </Link>

                        {!post.published && (
                            <span className="text-xs text-slate-600 italic">
                                {" "}
                                Not published
                            </span>
                        )}

                        <DeletePostButton id={post.id} title={post.title} />
                    </div>
                );
            })}

            <div
                className={clsx(
                    "fixed z-50 inset-0 bg-black/50 backdrop-blur-xs",
                    "flex items-center justify-center"
                )}
            >
                <div
                    className={clsx(
                        "bg-slate-100 p-6 rounded-lg max-w-2xl mx-6",
                        "flex flex-col gap-6",
                        "shadow-lg shadow-black/30 text-center"
                    )}
                >
                    <h3 className="text-xl font-extrabold">Dialog Title</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At, asperiores. Vero provident at dolorum corporis
                        tempora, voluptate nostrum illo necessitatibus rerum
                        laboriosam quo similique quos, aut quas excepturi esse
                        distinctio.
                    </p>
                    <div className="flex items-center justify-around">
                        <button
                            className={clsx(
                                "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
                                "flex items-center justify-center",
                                "py-2 px-4 rounded-lg cursor-pointer"
                            )}
                            autoFocus
                        >
                            Cancel
                        </button>
                        <button
                            className={clsx(
                                "bg-blue-500 hover:bg-blue-600 transition text-blue-50",
                                "flex items-center justify-center",
                                "py-2 px-4 rounded-lg cursor-pointer"
                            )}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
