import React, { useEffect, useState } from "react";
import cx from "classnames";

export enum ButtonVariant {
  Primary,
  Secondary,
}

export type ButtonProps = {
  variant?: ButtonVariant;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
} & React.HTMLProps<HTMLButtonElement>;

const baseClass = "rounded-full h-11 py-2 px-4";

const variantClass = {
  [ButtonVariant.Primary]: "text-white bg-orange-700 hover:bg-orange-600/75",
  [ButtonVariant.Secondary]:
    "bg-transparent text-orange-600 border border-solid border-orange-600 hover:text-white hover:bg-orange-600",
};

export function Button({
  variant = ButtonVariant.Primary,
  onClick,
  children,
  disabled,
  className = "",
  text = "",
  ...otherProps
}: ButtonProps) {
  const [currentText, setCurrentText] = useState(text);

  const handleClick = () => {
    setCurrentText("Hey, I was clicked");
    onClick?.(); 
  };

  useEffect(() => {
    setCurrentText(text); 
  }, [text]);

  return (
    <button
      {...otherProps}
      className={cx(`${variantClass[variant]} ${baseClass} ${className}`, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      {currentText || children}
    </button>
  );
}
