"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";
import { BookingModal } from "@/components/booking-modal";

interface BookingButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  onClick?: () => void;
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
  onClick,
}: BookingButtonProps) {
  const [isOpen, setIsOpen] = useState(Boolean(defaultOpen));

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
