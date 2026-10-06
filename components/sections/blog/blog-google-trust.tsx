"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GoogleIcon } from "@/components/icons/google-icon";

declare global {
  interface Window {
    PREFERRED_SOURCE?: Array<
      (preferredSource: {
        init: (options: {
          theme?: "light" | "dark";
          lang?: string;
        }) => void;
        addPreferredSource: () => void;
      }) => void
    >;
  }
}

export function BlogGoogleTrustToast() {
  const [open, setOpen] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);

  useEffect(() => {
    window.PREFERRED_SOURCE = window.PREFERRED_SOURCE || [];

    window.PREFERRED_SOURCE.push((preferredSource) => {
      preferredSource.init({
        theme: "light",
        lang: "en",
      });

      setGoogleReady(true);
    });

    const script = document.querySelector(
      'script[src="https://news.google.com/swg/js/v1/publisher.js"]'
    );

    if (!script) {
      const googleScript = document.createElement("script");

      googleScript.async = true;
      googleScript.setAttribute(
        "preferred-sources-control",
        "manual"
      );
      googleScript.src =
        "https://news.google.com/swg/js/v1/publisher.js";

      document.head.appendChild(googleScript);
    }

    return () => {
      // We intentionally don't remove Google's script.
      // It can be reused by other blog pages/components.
    };
  }, []);

  const handlePreferredSource = () => {
    if (!googleReady) {
      setOpen(true);
      return;
    }

    window.PREFERRED_SOURCE?.push((preferredSource) => {
      preferredSource.addPreferredSource();
    });
  };

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="relative flex w-full justify-end px-6 py-3 sm:px-8">
      {/* Custom Google Preferred Source button */}
      <button
        type="button"
        onClick={handlePreferredSource}
        aria-label="Add this site as a preferred source on Google"
        className="inline-flex items-center gap-3 rounded-full border border-[#3c4043] bg-white px-4 py-2.5 text-left transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 sm:px-5 sm:py-3"
      >
        <span
          className="inline-flex size-8 shrink-0 items-center justify-center text-3xl sm:size-9"
          aria-hidden="true"
        >
          <GoogleIcon className="size-full" />
        </span>

        <span className="text-[16px] leading-tight font-bold tracking-tight text-dark-960 sm:text-sm">
          Add as a preferred
          <br />
          source on Google
        </span>
      </button>

      {/* Only show this if Google is not ready */}
      {open && (
        <div className="absolute top-full right-0 z-50 mt-3 w-[min(100vw-2rem,22rem)]">
          <div className="relative flex items-start gap-3 rounded-3xl border border-black/10 bg-white p-4 pr-10 shadow-lg">
            <span
              className="mt-0.5 inline-flex size-8 shrink-0"
              aria-hidden="true"
            >
              <GoogleIcon className="size-full" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-sm leading-snug text-[#202124]">
                Google is still loading. Please try again.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Dismiss"
              className="absolute top-2 right-2 rounded-full p-1 text-black/50 hover:bg-black/5"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}