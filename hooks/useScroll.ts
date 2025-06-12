
import { RefObject } from "react";

export const useScroll = () => {
  const scrollTo = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollTo };
};