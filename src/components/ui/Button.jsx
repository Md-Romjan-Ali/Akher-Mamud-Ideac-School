"use client";

export default function Button({
    children,
    variant = "primary",
    outlined = false,
    className = "",
    ...props
}) {
    const baseClasses =
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

    const variantClasses = outlined
        ? "border border-blue-600 bg-transparent text-blue-700 hover:bg-blue-50"
        : variant === "secondary"
            ? "bg-slate-900 text-white hover:bg-slate-700"
            : "bg-blue-600 text-white hover:bg-blue-700";

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
}
