import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsLists";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostHeading } from "@/components/PostHeadingindex";
import { PostCoverImage } from "@/components/PostCoverImage";

export default async function HomePage() {
    return (
        <Container>
            <Header />

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <PostCoverImage
                    linkProps={{
                        href: "/post/asdfasdf",
                    }}
                    imageProps={{
                        width: 1200,
                        height: 720,
                        src: "/images/bryen_9.png",
                        alt: "Alt da imagem",
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

                    <PostHeading as="h1" url="#">
                        Quibusdam culpa laudantium, at incidunt nihil ac
                    </PostHeading>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt harum atque minima nostrum temporibus
                        repudiandae quasi quibusdam culpa laudantium, at
                        incidunt nihil accusamus rem dolores enim, libero magni
                        id impedit?
                    </p>
                </div>
            </section>

            <Suspense fallback={<SpinLoader />}>
                <PostsList />
            </Suspense>

            <footer>
                <p className="text-6xl font-bold text-center py-8">Footer</p>
            </footer>
        </Container>
    );
}
