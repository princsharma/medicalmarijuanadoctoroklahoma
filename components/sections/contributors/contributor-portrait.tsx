import Image from "next/image";
import type { Contributor } from "@/lib/contributors";
import { cn } from "@/lib/utils";

type ContributorPortraitProps = {
  person: Contributor;
  className?: string;
  priority?: boolean;
  /** Circular avatar (hub) or tall portrait (bio). */
  shape?: "circle" | "portrait";
};

export function ContributorPortrait({
  person,
  className,
  priority = false,
  shape = "portrait",
}: ContributorPortraitProps) {
  const isCircle = shape === "circle";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#EAF1EA]",
        isCircle
          ? "aspect-square w-full max-w-[220px] rounded-full ring-4 ring-white shadow-lg shadow-[#0E3B2E]/10"
          : "aspect-[4/5] w-full",
        className
      )}
    >
      <Image
        src={person.image}
        alt={`${person.name}, ${person.credentials}   ${person.role}`}
        fill
        sizes={
          isCircle
            ? "(min-width: 640px) 220px, 180px"
            : "(min-width: 1024px) 300px, (min-width: 640px) 40vw, 80vw"
        }
        className={cn("object-cover", isCircle ? "object-center" : "object-top")}
        priority={priority}
      />
    </div>
  );
}
