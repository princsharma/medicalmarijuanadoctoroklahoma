import { Check } from "lucide-react";

export function BlogTrustBadges() {
  const badges = [
    "HIPAA Compliant Consultations",
    "Same-Day Telehealth Evaluations",
    "100% Refund If Not Approved",
  ];

  return (
    <div className="w-full border-y border-[#0E3B2E]/10 bg-[#FAF7F2] py-5 sm:py-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-16">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2.5 shrink-0">
              <div className="flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E] text-white shadow-2xs">
                <Check className="size-3.5 stroke-[3]" />
              </div>
              <span className="font-sans text-xs sm:text-[13px] lg:text-sm font-semibold text-[#0E3B2E] leading-tight">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
