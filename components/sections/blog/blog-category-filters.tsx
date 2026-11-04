import Link from "next/link";
import type { ReactNode } from "react";
import { blogCategories } from "@/lib/blog-categories";

type BlogCategoryFiltersProps = {
  activeSlug?: string | null;
};

export function BlogCategoryFilters({ activeSlug = null }: BlogCategoryFiltersProps) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 overflow-x-auto pb-2">
      <FilterChip href="/blog/" active={!activeSlug}>
        All
      </FilterChip>
      {blogCategories.map((category) => (
        <FilterChip key={category.slug} href={category.path} active={activeSlug === category.slug}>
          {category.label}
        </FilterChip>
      ))}
    </div>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
        active
          ? "bg-[#0E3B2E] text-white shadow-xs"
          : "border border-[#0E3B2E]/15 bg-white text-[#0E3B2E]/80 hover:bg-[#0E3B2E]/5"
      }`}
    >
      {children}
    </Link>
  );
}
