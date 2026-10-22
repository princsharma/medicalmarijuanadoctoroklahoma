"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

const COUPON_CODE = "BIZ420";

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

export function CouponBanner() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await copyText(COUPON_CODE);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section aria-label="Coupon offer" className="border-b border-[#0E3B2E]/10 bg-[#EAF1EA]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2.5 text-center sm:px-6">
        <p className="font-heading text-base leading-snug font-medium tracking-tight text-[#0E3B2E] sm:text-lg">
          Save 10% on Your Medical Marijuana Evaluation!
        </p>

        <div className="flex items-center gap-2.5">
          <span className="rounded-lg border-2 border-dashed border-[#2F7A18]/40 bg-white px-3 py-0.5 font-heading text-base font-medium tracking-wider text-[#0E3B2E]">
            {COUPON_CODE}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#0E3B2E] px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-[#0E3B2E]/90"
            aria-label={
              copied
                ? `Coupon code ${COUPON_CODE} copied`
                : `Copy coupon code ${COUPON_CODE}`
            }
          >
            {copied ? (
              <Check className="size-3.5" aria-hidden="true" />
            ) : (
              <Copy className="size-3.5" aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {copied ? "Coupon code copied to clipboard" : ""}
        </span>
      </div>
    </section>
  );
}
