import React from "react";
import Link from "@docusaurus/Link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
    asChild?: boolean;
}

export function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    children,
    ...props
}: ButtonProps) {
    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
    };

    const classes = `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className || ""}`;

    if (asChild) {
        // If asChild is true, we assume the child is a Link or similar component
        // We clone the child to add the classes
        const child = React.Children.only(children) as React.ReactElement;
        return React.cloneElement(child, { className: `${classes} ${child.props.className || ""}` });
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
