import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl p-6 transition-all duration-300",
        {
          "bg-white shadow-sm border border-gray-100 hover:shadow-md": variant === "default",
          "bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-100": variant === "highlight",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
