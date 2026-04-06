import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
  id?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  external = false,
  id,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f4a020] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#c0272d] hover:bg-[#8b0000] text-white shadow-md hover:shadow-lg hover:scale-105",
    secondary: "bg-[#f4a020] hover:bg-[#c47c0a] text-white shadow-md hover:shadow-lg hover:scale-105",
    outline: "border-2 border-[#c0272d] text-[#c0272d] hover:bg-[#c0272d] hover:text-white",
    ghost: "text-[#5c3d1e] hover:bg-[#fdf6ec] hover:text-[#c0272d]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button id={id} type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
