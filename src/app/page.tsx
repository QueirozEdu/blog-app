import clsx from "clsx";

export default function HomePage() {
    return (
        <div>
            <h1
                className={clsx(
                    "text-6xl",
                    "font-bold",
                    "text-blog",
                    "bg-gray-600",
                    "hover:text-gray-400",
                    "hover:bg-blog",
                    "transition-all",
                    "500"
                )}
            >
                This is a text
            </h1>
        </div>
    );
}
