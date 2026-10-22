"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/booking-dialog";

const MobileMenuDrawer = dynamic(
  () => import("@/components/layout/mobile-menu-drawer").then((mod) => mod.MobileMenuDrawer),
  { ssr: false }
);

const navLinks = [
  { href: "/about-us/", label: "About Us" },
  { href: "/doctors/", label: "Our Doctors" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/faq/", label: "FAQ" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F5F0]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link
          href="/"
          prefetch={false}
          className="flex min-w-0 shrink items-center gap-2"
          aria-label="Medical Marijuana Doctor Oklahoma home"
        >
          <Image
            src="/oklahoma-logo.webp"
            alt="Medical Marijuana Doctor Oklahoma"
            width={220}
            height={56}
            style={{ width: "auto" }}
            className="h-11 w-auto sm:h-12 xl:h-14"
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium whitespace-nowrap text-[#0E3B2E]/85 xl:flex xl:gap-7 2xl:gap-8"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} prefetch={false} className="transition-colors hover:text-[#0E3B2E]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <BookingButton className="hidden h-auto gap-1.5 rounded-full bg-[#0E3B2E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0E3B2E]/90 xl:inline-flex">
            Get Your OK MMJ Card <ArrowRight className="size-4" aria-hidden="true" />
          </BookingButton>

          <BookingButton className="hidden h-auto gap-1 rounded-full bg-[#0E3B2E] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#0E3B2E]/90 sm:inline-flex xl:hidden">
            Get Card <ArrowRight className="size-3.5" aria-hidden="true" />
          </BookingButton>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="border-transparent text-[#0E3B2E] hover:bg-[#0E3B2E]/5 xl:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>

          {mobileMenuOpen && (
            <MobileMenuDrawer
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
              navLinks={navLinks}
            />
          )}
        </div>
      </div>
    </header>
  );
}
