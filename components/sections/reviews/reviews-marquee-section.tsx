import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { REVIEWS_SUMMARY, reviews, type Review } from "@/lib/reviews";

const avatarTones = [
  "bg-[#0E3B2E] text-white",
  "bg-[#2F7A18] text-white",
  "bg-[#4C9A2A] text-white",
  "bg-[#8FD66B] text-[#0E3B2E]",
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-[#E0342A] text-[#E0342A]" />
      ))}
    </div>
  );
}

function ReviewCard({ review, i }: { review: Review; i: number }) {
  return (
    <Card className="relative mb-6 gap-0 overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <Quote
        className="pointer-events-none absolute -top-2 -right-2 size-14 text-[#0E3B2E]/5"
        aria-hidden
      />

      <div className="relative flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
              avatarTones[i % avatarTones.length]
            )}
          >
            {review.name.charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="truncate font-heading text-sm font-medium text-[#0E3B2E]">
              {review.name}
            </p>
            <span className="text-[10px] font-medium text-[#2F7A18]">Verified</span>
          </div>
        </div>
        <Stars count={review.rating} />
      </div>

      <p className="relative mt-3 line-clamp-5 text-sm leading-relaxed text-[#0E3B2E]/75">
        {review.text}
      </p>

      <span className="relative mt-3 block text-[10px] text-[#0E3B2E]/80">Posted on Google</span>
    </Card>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
}: {
  items: Review[];
  direction: "up" | "down";
  duration: string;
}) {
  return (
    <div className="relative h-[640px] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#F6F5F0] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#F6F5F0] to-transparent" />

      <div
        className="flex flex-col"
        style={{
          animation: `${direction === "up" ? "marquee-up" : "marquee-down"} ${duration} linear infinite`,
        }}
      >
        {[...items, ...items].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} i={i} />
        ))}
      </div>
    </div>
  );
}

type ReviewsMarqueeSectionProps = {
  /** Where the bottom CTA should go. Defaults to Google Maps reviews. */
  ctaHref?: string;
  ctaExternal?: boolean;
  /** Hide the section title when the page already has a hero intro. */
  showHeading?: boolean;
};

export function ReviewsMarqueeSection({
  ctaHref = REVIEWS_SUMMARY.googleMapsUrl,
  ctaExternal = true,
  showHeading = true,
}: ReviewsMarqueeSectionProps = {}) {
  const displayReviews = reviews.filter((review) => review.text.trim().length > 0);
  const col1 = displayReviews.filter((_, i) => i % 3 === 0);
  const col2 = displayReviews.filter((_, i) => i % 3 === 1);
  const col3 = displayReviews.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative overflow-hidden px-6 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 -right-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(143,214,107,0.2)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 size-80 rounded-full bg-[radial-gradient(circle,rgba(14,59,46,0.05)_0%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        {showHeading ? (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
              What Our <span className="text-[#2F7A18]">Patients</span> Say?
            </h2>
            <p className="mt-4 text-[#0E3B2E]/80">
              Trusted by Oklahoma patients—real stories of fast, affordable, and stress-free medical
              marijuana evaluations online.
            </p>
          </div>
        ) : null}

        <div
          className={`${showHeading ? "mt-14" : "mt-2"} hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3`}
        >
          <MarqueeColumn items={col1} direction="up" duration="38s" />
          <MarqueeColumn items={col2} direction="down" duration="44s" />
          <div className="hidden lg:block">
            <MarqueeColumn items={col3} direction="up" duration="32s" />
          </div>
        </div>

        <div className={`${showHeading ? "mt-14" : "mt-2"} flex flex-col gap-4 sm:hidden`}>
          {displayReviews.slice(0, 4).map((review, i) => (
            <ReviewCard key={review.name} review={review} i={i} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={ctaHref}
            {...(ctaExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex h-auto items-center justify-center rounded-full bg-[#0E3B2E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
          >
            Read More Reviews
          </a>
          <p className="text-xs text-[#0E3B2E]/80">
            Every patient&rsquo;s review helps us improve.
          </p>
        </div>
      </div>
    </section>
  );
}
