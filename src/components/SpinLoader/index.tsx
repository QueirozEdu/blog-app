import clsx from "clsx";
import { type } from "os";

type SpinLoaderProps = {
    containerClasses?: string;
};

export default function SpinLoader({ containerClasses = "" }) {
    const classes = clsx(
        "flex",
        "items-center",
        "justify-center",
        containerClasses
    );
    return (
        <div className={classes}>
            <div
                className={clsx(
                    "w-10 h-10",
                    "border-5 border-t-transparent border-slate-900",
                    "rounded-full",
                    "animate-spin"
                )}
            ></div>
        </div>
    );
}
