"use client";

import { Receipt } from "lucide-react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "icon-only" | "text-only" | "badge";
  showText?: boolean;
  linkHome?: boolean;
  animated?: boolean;
}

export default function Logo({
  size = "md",
  variant = "default",
  showText = true,
  linkHome = true,
  animated = true
}: LogoProps) {
  const sizes = {
    sm: { container: "w-8 h-8", icon: "w-4 h-4", text: "text-base", badge: "text-xs" },
    md: { container: "w-10 h-10", icon: "w-5 h-5", text: "text-xl", badge: "text-sm" },
    lg: { container: "w-12 h-12", icon: "w-6 h-6", text: "text-2xl", badge: "text-base" },
    xl: { container: "w-16 h-16", icon: "w-8 h-8", text: "text-3xl", badge: "text-lg" },
  };

  // Logo图标容器 - 带渐变和阴影
  const IconContainer = () => (
    <div
      className={`
        ${sizes[size].container}
        rounded-2xl
        bg-gradient-to-br from-blue-500 to-emerald-600
        flex items-center justify-center
        shadow-lg shadow-primary-500/30
        ${animated ? "transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/40" : ""}
        relative overflow-hidden
      `}
    >
      {/* 光泽效果 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
      <Receipt className={`${sizes[size].icon} text-white relative z-10`} />
    </div>
  );

  // Badge风格 - 圆形带缩写
  const BadgeLogo = () => (
    <div
      className={`
        ${sizes[size].container}
        rounded-full
        bg-gradient-to-br from-blue-500 to-emerald-600
        flex items-center justify-center
        shadow-lg shadow-primary-500/30
        font-bold text-white
        ${sizes[size].badge}
        ${animated ? "transition-all duration-300 hover:scale-105" : ""}
      `}
    >
      ET
    </div>
  );

  // 纯文字Logo
  const TextLogo = () => (
    <span className={`${sizes[size].text} font-extrabold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent`}>
      Expense Tracker
    </span>
  );

  const renderLogo = () => {
    switch (variant) {
      case "icon-only":
        return <IconContainer />;
      case "text-only":
        return <TextLogo />;
      case "badge":
        return (
          <div className="flex items-center gap-2 sm:gap-3">
            <BadgeLogo />
            {showText && (
              <span className={`${sizes[size].text} font-bold text-gray-900`}>
                Expense Tracker
              </span>
            )}
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 sm:gap-3">
            <IconContainer />
            {showText && (
              <div className="flex flex-col">
                <span className={`${sizes[size].text} font-bold text-gray-900 leading-tight`}>
                  Expense Tracker
                </span>
              </div>
            )}
          </div>
        );
    }
  };

  if (linkHome) {
    return (
      <Link href="/" className="flex items-center">
        {renderLogo()}
      </Link>
    );
  }

  return renderLogo();
}
