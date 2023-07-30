import { MouseEventHandler } from "react";

declare global {
  interface Window {
    Kakao: any;
    gtag: any;
    ChannelIO: any;
  }
}

export interface ButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
