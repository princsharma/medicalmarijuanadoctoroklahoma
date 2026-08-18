"use client";

import { useState, type ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import dynamic from "next/dynamic";
import { Button, buttonVariants } from "@/components/ui/button";

const BookingModal = dynamic(
  () => import("@/components/booking-modal").then((mod) => mod.BookingModal),
  { ssr: false }
);

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

export function BookingButton({ variant, size, className, children }: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </Button>
      {isOpen && <BookingModal open={isOpen} onOpenChange={setIsOpen} />}
    </>
  );
}
