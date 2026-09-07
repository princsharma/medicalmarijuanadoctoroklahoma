import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function ReviewsCta() {
  const options = [
    {
      icon: Phone,
      title: "Call Now",
      description: "Talk to our friendly team instantly.",
      href: "tel:+14054451637",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get answers to your medical cannabis questions.",
      href: "mailto:contact@medicalmarijuanadoctoroklahoma.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Connect with our support anytime.",
      href: "/contact-us/",
    },
  ];

  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#0E3B2E]/10 bg-[#EAF1EA] px-6 py-16 text-center sm:px-12">
        <h2 className="font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
          Access Your Medical Marijuana Card Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#0E3B2E]/70">
          Your trusted Oklahoma partner for medical cannabis care safe, stress-free MMJ evaluations
          with licensed physicians.
        </p>
        <div className="mt-8 flex justify-center">
          <BookingButton className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90">
            Get Your MMJ Card Today <ArrowRight className="size-4" />
          </BookingButton>
        </div>
        <p className="mt-5 text-xs tracking-wide text-[#0E3B2E]/70">
          Complete the process in 15-30 minutes &middot; 100% online &middot; No office visits
          required
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {options.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[#0E3B2E]/10 bg-white/70 p-6 text-center transition-colors hover:bg-white"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[#0E3B2E]/5 text-[#2F7A18]">
                <Icon className="size-5" />
              </div>
              <p className="mt-2 text-sm font-semibold text-[#0E3B2E]">{title}</p>
              <p className="text-xs leading-relaxed text-[#0E3B2E]/70">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
