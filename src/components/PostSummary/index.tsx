import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";
import { PostHeading } from "../PostHeading";

type PostSumaryProps = {
    postHeading: "h1" | "h2";
    postLink: string;
    createdAt: string;
    title: string;
    excerpt: string;
};

export function PostSumary({
    postHeading,
    postLink,
    createdAt,
    title,
    excerpt,
}: PostSumaryProps) {
    return (
        <div className="flex flex-col gap-4 sm:justify-center">
            <time
                className="text-slate-600 block text-sm/tight"
                dateTime={createdAt}
                title={formatDateTime(createdAt)}
            >
                {formatDistanceToNow(createdAt)}
            </time>

            <PostHeading as={postHeading} url={postLink}>
                {title}
            </PostHeading>

            <p>{excerpt}</p>
        </div>
    );
}
