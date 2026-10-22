import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function AboutAppointment() {
  const stats = [
    { value: "11523+", label: "HAPPY PATIENTS" },
    { value: "5+", label: "QUALIFIED DOCTORS" },
    { value: "100%", label: "ONLINE CARE" },
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] shadow-xl shadow-[#0E3B2E]/10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-center bg-white p-8 text-center sm:p-12">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            Get Your Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-xs text-[#0E3B2E]/80">
            Obtain your card to get your appointment with our health physicians within few
            minutes.
          </p>
          <div className="mt-8 flex justify-center">
            <BookingButton
              className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Get Started <ArrowRight className="size-4" />
            </BookingButton>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/25 bg-gradient-to-br from-[#0E3B2E] to-[#8FD66B]/70 px-3 py-10 sm:px-10 sm:py-12">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center justify-center px-1 text-center">
              <p className="font-heading text-2xl font-medium text-white sm:text-4xl lg:text-5xl">{value}</p>
              <p className="mt-2 text-[10px] leading-tight font-semibold tracking-wide text-white/85 sm:mt-3 sm:text-xs lg:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
