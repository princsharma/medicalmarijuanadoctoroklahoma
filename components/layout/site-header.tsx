import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/booking-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/about-us/", label: "About Us" },
  { href: "/doctors/", label: "Our Doctors" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact-us/", label: "Contact Us" },
  { href: "/faq/", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F6F5F0]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          aria-label="Medical Marijuana Doctor Oklahoma home"
        >
          <Image
            src="/logo.png"
            alt="Medical Marijuana Doctor Oklahoma"
            width={220}
            height={56}
            className="h-11 w-auto sm:h-12 xl:h-14"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium whitespace-nowrap text-[#0E3B2E]/85 xl:flex xl:gap-7 2xl:gap-8"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#0E3B2E]">
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

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="border-transparent text-[#0E3B2E] hover:bg-[#0E3B2E]/5 xl:hidden"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
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
        </div>
      </div>
    </header>
  );
}
