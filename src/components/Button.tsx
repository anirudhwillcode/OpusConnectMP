// File: components/Button.tsx

import React from "react";

interface ButtonProps {
  onClick?: () => void; // Optional, since links might not use it
  disabled?: boolean;
  children?: React.ReactNode; // To support nested elements or icons
  variant?: "ghost" | "primary" | "secondary"; // Optional prop for button styles
  size?: "small" | "medium" | "large" | "icon"; // Optional prop for button sizes
  className?: string; // Add className prop to accept custom styles
  "aria-label"?: string; // For accessibility labels
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = "primary", // Default variant
  size = "medium", // Default size
  className, // Accept className prop
  "aria-label": ariaLabel,
}) => {
  // Set classes based on variant and size props and include the custom className prop
  const buttonClass = `btn ${variant} ${size} ${className ?? ""}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
