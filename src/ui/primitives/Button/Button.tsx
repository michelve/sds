import { clsx } from "clsx";
import React, { ComponentPropsWithoutRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";
import { type AnchorOrButtonProps } from "utils";
import { Icon } from "primitives";
import "./button.css";

export type ButtonProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "danger-primary" | "danger-subtle"
  >;
};
export const Button = React.forwardRef(function Button(
  { 
    className, 
    size = "medium", 
    variant = "primary", 
    label,
    iconStart,
    iconEnd,
    hasIconStart,
    hasIconEnd,
    children,
    ...props 
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );

  const { style, ...sharedProps } = props;

  // Use label prop if provided, otherwise fall back to children
  const content = label || children;
  
  // Render icons based on props
  const startIcon = (hasIconStart && iconStart) ? iconStart : null;
  const endIcon = (hasIconEnd && iconEnd) ? iconEnd : null;

  return isAnchorProps(props) ? (
    <RACLink
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {startIcon}
      {content}
      {endIcon}
    </RACLink>
  ) : (
    <RACButton
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {startIcon}
      {content}
      {endIcon}
    </RACButton>
  );
});

export type ButtonDangerProps = Omit<ButtonBaseProps, "variant"> & {
  variant?: Exclude<
    ButtonBaseProps["variant"],
    "primary" | "subtle" | "neutral"
  >;
};
/**
 * Only used for destructive actions
 */
export const ButtonDanger = React.forwardRef(function Button(
  {
    className,
    size = "medium",
    variant = "danger-primary",
    label,
    iconStart,
    iconEnd,
    hasIconStart,
    hasIconEnd,
    children,
    ...props
  }: ButtonDangerProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const classNames = clsx(
    className,
    "button",
    `button-size-${size}`,
    `button-variant-${variant}`,
  );

  const { style, ...sharedProps } = props;

  // Use label prop if provided, otherwise fall back to children
  const content = label || children;
  
  // Render icons based on props
  const startIcon = (hasIconStart && iconStart) ? iconStart : null;
  const endIcon = (hasIconEnd && iconEnd) ? iconEnd : null;

  return isAnchorProps(props) ? (
    <RACLink
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      {startIcon}
      {content}
      {endIcon}
    </RACLink>
  ) : (
    <RACButton
      {...sharedProps}
      className={classNames}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
    >
      {startIcon}
      {content}
      {endIcon}
    </RACButton>
  );
});

type ButtonBaseProps = {
  type?: ComponentPropsWithoutRef<"button">["type"];
  size?: "small" | "medium";
  variant?:
    | "primary"
    | "neutral"
    | "subtle"
    | "danger-primary"
    | "danger-subtle";
  label?: string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  hasIconStart?: boolean;
  hasIconEnd?: boolean;
} & AnchorOrButtonProps;

function isAnchorProps(
  props: ButtonBaseProps | ButtonDangerProps,
): props is (ButtonBaseProps | ButtonDangerProps) &
  ComponentPropsWithoutRef<typeof RACLink> {
  return "href" in props;
}

export type ButtonGroupProps = React.ComponentPropsWithoutRef<"div"> & {
  align?: "start" | "end" | "center" | "justify" | "stack";
};
export const ButtonGroup = ({
  align = "start",
  className,
  ...props
}: ButtonGroupProps) => {
  const classNames = clsx(
    className,
    "button-group",
    `button-group-align-${align}`,
  );
  return <div className={classNames} {...props} />;
};
