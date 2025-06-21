import { buttonProps } from "@/interfaces";

export const Button = ({ style, text }: buttonProps) => {
  return <button className={`${style}`}>{text}</button>;
};
