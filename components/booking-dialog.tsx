"use client";

import { useState, type ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export function BookingButton({
  variant,
  size,
  className,
  children,
  onClick,
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
          setIsOpen(true);
        }}
      >
        {children}
      </Button>
      <BookingModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
