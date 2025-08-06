import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSumary } from "../PostSummary";

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
            <PostSumary
                postHeading="h1"
                postLink={postLink}
                createdAt={"2025-04-06T00:24:38.616Z"}
                title="Como a escrita pode mudar sua carreira"
                excerpt="Muitas empresas e desenvolvedores individuais escolhem o Next.js justamente porque ele consegue unir simplicidade com recursos avançados."
            />
        </section>
    );
}
