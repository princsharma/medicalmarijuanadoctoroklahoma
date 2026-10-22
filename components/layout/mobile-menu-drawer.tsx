"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface MobileMenuDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navLinks: { href: string; label: string }[];
}

export function MobileMenuDrawer({ open, onOpenChange, navLinks }: MobileMenuDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-[#F6F5F0]">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg text-[#0E3B2E]">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile primary" className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <SheetClose
              key={link.href}
              nativeButton={false}
              render={<Link href={link.href} />}
              className="rounded-lg px-3 py-3 text-base font-medium text-[#0E3B2E]/80 transition-colors hover:bg-[#0E3B2E]/5 hover:text-[#0E3B2E]"
            >
              {link.label}
            </SheetClose>
          ))}
        </nav>
        <div className="mt-auto p-6">
          <BookingButton className="h-auto w-full gap-1.5 rounded-full bg-[#0E3B2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0E3B2E]/90">
            Get Your OK MMJ Card <ArrowRight className="size-4" />
          </BookingButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
