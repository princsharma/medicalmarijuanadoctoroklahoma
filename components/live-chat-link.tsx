"use client";

import type { ComponentProps, MouseEvent } from "react";

type TawkApi = {
  maximize?: () => void;
  onLoad?: () => void;
};

declare global {
  interface Window {
    Tawk_API?: TawkApi;
  }
}

const FALLBACK_HREF = "/contact-us/";
/** tawk.to is injected by GTM after the first interaction, so it may still be loading. */
const LOAD_TIMEOUT_MS = 6000;

export function openLiveChat() {
  const api = (window.Tawk_API ??= {});

  if (typeof api.maximize === "function") {
    api.maximize();
    return;
  }

  let opened = false;
  const previousOnLoad = api.onLoad;
  api.onLoad = () => {
    previousOnLoad?.();
    opened = true;
    window.Tawk_API?.maximize?.();
  };

  window.setTimeout(() => {
    if (!opened && typeof window.Tawk_API?.maximize !== "function") {
      window.location.href = FALLBACK_HREF;
    }
  }, LOAD_TIMEOUT_MS);
}

export function LiveChatLink({ onClick, ...props }: ComponentProps<"a">) {
  return (
    <a
      href={FALLBACK_HREF}
      {...props}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        openLiveChat();
      }}
    />
  );
}
