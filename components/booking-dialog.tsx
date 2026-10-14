"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import type { VariantProps } from "class-variance-authority";
import { CalendarHeart, ShieldCheck, XIcon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { LeadCaptureForm } from "@/components/lead-capture-form";

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function ConsultQueryOpener() {
  const params = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (params.get("consult") === "1") setOpen(true);
  }, [params]);

  if (!open) return null;

  return (
    <BookingButton defaultOpen className="sr-only">
      Start your MMJ consultation
    </BookingButton>
  );
}

export function BookingButton({
  variant,
  size,
  className,
  children,
  defaultOpen,
}: BookingButtonProps) {
  return (
    <Dialog defaultOpen={defaultOpen}>
      <DialogTrigger render={<Button variant={variant} size={size} className={className} />}>
        {children}
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex w-[calc(100%-1rem)] flex-col gap-0 overflow-hidden rounded-t-[1.5rem] rounded-b-[1.5rem] border border-[#0E3B2E]/8 bg-white p-0 shadow-[0_25px_80px_-20px_rgba(14,59,46,0.45)] max-sm:top-auto max-sm:bottom-2 max-sm:max-h-[92dvh] max-sm:translate-y-0 sm:w-full sm:max-w-lg sm:rounded-[1.75rem]"
      >
        <div className="relative shrink-0 overflow-hidden bg-[#F6F5F0] px-5 pt-6 pb-4 sm:px-10 sm:pt-9 sm:pb-7">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 -right-10 h-40 w-40 rounded-full bg-[#8FD66B]/25 blur-[1px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-16 -left-12 h-32 w-32 rounded-full bg-[#8FD66B]/18"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#0E3B2E]/10 to-transparent"
          />

          <DialogClose
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-3 right-3 z-10 size-9 rounded-full bg-white/80 text-[#0E3B2E]/70 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#0E3B2E] sm:top-3.5 sm:right-3.5 sm:size-8"
              />
            }
          >
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <DialogHeader className="relative gap-2.5 pr-10 text-left sm:gap-3.5 sm:pr-8">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-[#0E3B2E] text-white shadow-[0_10px_24px_-8px_rgba(14,59,46,0.55)] ring-4 ring-[#8FD66B]/25 sm:size-12">
              <CalendarHeart className="size-4 sm:size-5" strokeWidth={1.75} />
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <DialogTitle className="font-heading text-[1.45rem] leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-[2rem]">
                Book Your Consultation
              </DialogTitle>
              <DialogDescription className="max-w-md text-sm leading-relaxed text-[#0E3B2E]/75 sm:text-base">
                Fill out the form below and we&apos;ll get you scheduled right away.
              </DialogDescription>
            </div>
            <p className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-[#2F7A18]">
              <ShieldCheck className="size-3.5 shrink-0" aria-hidden />
              <span className="sm:hidden">Licensed OK physicians</span>
              <span className="hidden sm:inline">Licensed OK physicians · Secure scheduling</span>
            </p>
          </DialogHeader>
        </div>

        <div className="min-h-0 flex-1 bg-white px-5 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] max-sm:overflow-y-auto max-sm:overscroll-contain sm:px-10 sm:pt-7 sm:pb-9">
          <LeadCaptureForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
