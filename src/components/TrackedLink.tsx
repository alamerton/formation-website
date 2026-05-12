"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventProps?: Record<string, string | number | boolean | null>;
};

export default function TrackedLink({
  eventName,
  eventProps,
  onClick,
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(eventName, eventProps);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
