// hooks/useScroll.ts
import { RefObject } from "react";

export const useScroll = () => {
  const scrollTo = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { scrollTo };
};