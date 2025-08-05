import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeadingindex";

export function PostFeatured() {
    const slug = "something";
    const postLink = `/post/${slug}`;
    return (
        <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
            <PostCoverImage
                linkProps={{
                    href: "/post/asdfasdf",
                }}
                imageProps={{
                    width: 1200,
                    height: 720,
                    src: "/images/bryen_9.png",
                    alt: "Image alt",
                    priority: true,
                }}
            />

            <div className="flex flex-col gap-4 sm:justify-center">
                <time
                    className="text-slate-600 block text-sm/tight"
                    dateTime="2025/07/30"
                >
                    30/07/2025 09:41
                </time>

                <PostHeading as="h1" url={postLink}>
                    Quibusdam culpa laudantium, at incidunt nihil ac
                </PostHeading>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt harum atque minima nostrum temporibus repudiandae
                    quasi quibusdam culpa laudantium, at incidunt nihil
                    accusamus rem dolores enim, libero magni id impedit?
                </p>
            </div>
        </section>
    );
}
