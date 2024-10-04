// File: components/Button.tsx

import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode; // To support nested elements or icons
  variant?: "ghost" | "primary" | "secondary"; // Optional prop for button styles
  size?: "small" | "medium" | "large" | "icon"; // Optional prop for button sizes
  "aria-label"?: string; // For accessibility labels
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  variant = "primary", // Default variant
  size = "medium", // Default size
  "aria-label": ariaLabel,
}) => {
  // Set classes based on variant and size props
  const buttonClass = `btn ${variant} ${size}`;

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
