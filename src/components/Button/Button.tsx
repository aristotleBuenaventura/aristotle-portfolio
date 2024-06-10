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
  [ButtonVariant.Primary]: "text-white bg-primary-light hover:opacity-75" ,
  [ButtonVariant.Secondary]:
    "text-white bg-secondary-dark hover:opacity-75",
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

  return (
    <button
      {...otherProps}
      className={cx(`${variantClass[variant]} ${baseClass} ${className}`, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
