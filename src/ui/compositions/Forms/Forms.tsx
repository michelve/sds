import clsx from "clsx";
import { Form, type FormProps, TextContentTitle } from "primitives";
import { ReactNode } from "react";
import "./forms.css";

export type FormBoxProps = FormProps;
export function FormBox({ className, ...props }: FormBoxProps) {
  const classNames = clsx(className, "form-box");
  return <Form className={classNames} {...props} />;
}

export type FormWithTitleProps = FormProps & {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "start" | "center";
  className?: string;
};
export function FormWithTitle({
  title,
  subtitle,
  align = "start",
  className,
  ...props
}: FormWithTitleProps) {
  const classNames = clsx(className);
  return (
    <div className={classNames}>
      <TextContentTitle align={align} title={title} subtitle={subtitle} />
      <FormBox {...props} />
    </div>
  );
}
