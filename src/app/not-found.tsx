import clsx from "clsx";

export default function NotFoundPage() {
    return (
        <>
            <title>Page not found</title>
            <div
                className={clsx(
                    "min-h-[320px] bg-slate-900 text-slate-100",
                    "mb-16 p-8 rounded-xl",
                    "flex items-center justify-center",
                    "text-center"
                )}
            >
                <div>
                    <h1 className="text-7xl/tight mb-4 font-extrabold">404</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </div>
        </>
    );
}
