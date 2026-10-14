import Image from "next/image";

export function AboutLeadership() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">LEADERSHIP</p>
        <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
          Who&apos;s Behind This
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-sm">
        <div className="flex flex-col items-center rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm">
          <div className="relative size-48 overflow-hidden rounded-full bg-[#EAF1EA] ring-4 ring-[#EAF1EA]">
            <Image
              src="/media/gaurav.webp"
              alt="Gourav Sharma"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <h3 className="mt-5 font-heading text-lg font-medium text-[#0E3B2E]">Gourav Sharma</h3>
          <p className="mt-1 text-xs font-semibold tracking-wide text-[#2F7A18]">Founder</p>
          <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/85">
            Gourav oversees how the platform runs, from scheduling to keeping our process aligned
            with Oklahoma&apos;s telehealth and medical marijuana regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
