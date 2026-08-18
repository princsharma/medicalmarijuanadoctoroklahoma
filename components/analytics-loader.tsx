"use client";

import { useEffect } from "react";

interface AnalyticsLoaderProps {
  gtmId?: string;
  gaId?: string;
}

export function AnalyticsLoader({ gtmId, gaId }: AnalyticsLoaderProps) {
  useEffect(() => {
    let initialized = false;

    const initScripts = () => {
      if (initialized) return;
      initialized = true;

      // Remove listener hooks
      window.removeEventListener("scroll", initScripts);
      window.removeEventListener("mousemove", initScripts);
      window.removeEventListener("pointerdown", initScripts);
      window.removeEventListener("touchstart", initScripts);
      window.removeEventListener("keydown", initScripts);
      window.removeEventListener("click", initScripts);

      // Initialize GTM
      if (gtmId) {
        (function (w: any, d: Document, s: string, l: string, i: string) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          const f = d.getElementsByTagName(s)[0];
          const j = d.createElement(s) as HTMLScriptElement;
          const dl = l !== "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f?.parentNode?.insertBefore(j, f);
        })(window, document, "script", "dataLayer", gtmId);
      }

      // Initialize GA
      if (gaId) {
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(gaScript);

        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        function gtag(...args: any[]) {
          w.dataLayer.push(args);
        }
        gtag("js", new Date());
        gtag("config", gaId);
      }
    };

    // User interaction events
    const eventOptions: AddEventListenerOptions = { passive: true, once: true };
    window.addEventListener("scroll", initScripts, eventOptions);
    window.addEventListener("mousemove", initScripts, eventOptions);
    window.addEventListener("pointerdown", initScripts, eventOptions);
    window.addEventListener("touchstart", initScripts, eventOptions);
    window.addEventListener("keydown", initScripts, eventOptions);
    window.addEventListener("click", initScripts, eventOptions);

    // Timeout fallback for users who stay idle without interacting for 6 seconds
    const timer = setTimeout(initScripts, 6000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", initScripts);
      window.removeEventListener("mousemove", initScripts);
      window.removeEventListener("pointerdown", initScripts);
      window.removeEventListener("touchstart", initScripts);
      window.removeEventListener("keydown", initScripts);
      window.removeEventListener("click", initScripts);
    };
  }, [gtmId, gaId]);

  return null;
}
