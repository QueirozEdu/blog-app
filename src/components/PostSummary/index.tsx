import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { PostHeading } from "../PostHeading";

export function PostSumary() {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time
                className="text-slate-600 block text-sm/tight"
                dateTime={post.createdAt}
                title={formatDateTime(post.createdAt)}
            >
                {formatDistanceToNow(post.createdAt)}
            </time>

            <PostHeading as="h2" url={postLink}>
                {post.title}
            </PostHeading>

            <p>{post.excerpt}</p>
        </div>
    );
}
