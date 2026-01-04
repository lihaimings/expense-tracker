import { forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button type="button"
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300",
          {
            "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl": variant === "primary",
            "bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300": variant === "secondary",
            "text-primary-600 hover:text-primary-700 hover:bg-primary-50": variant === "ghost",
          },
          {
            "py-2 px-4 text-sm": size === "sm",
            "py-3 px-6": size === "md",
            "py-4 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
