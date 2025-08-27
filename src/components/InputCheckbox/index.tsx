import clsx from "clsx";
import { useId } from "react";

type InputCheckBoxProps = {
    labelText?: string;
    type?: "checkbox";
} & React.ComponentProps<"input">;

export function InputCheckBox({
    labelText = "",
    type = "checkbox",
    ...props
}: InputCheckBoxProps) {
    const id = useId();

    return (
        <div className="flex flex-col gap-2">
            <input
                {...props}
                className={clsx(props.className)}
                id={id}
                type={type}
            />
            {labelText && (
                <label className="text-sm" htmlFor={id}>
                    {labelText}
                </label>
            )}
        </div>
    );
}
