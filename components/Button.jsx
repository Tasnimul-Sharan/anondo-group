"use client";
import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
    outline: "border border-white text-white hover:bg-white hover:text-black",
    dark: "bg-black text-white hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClass = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
