import Image from "next/image";

export function AboutValues() {
  return (
    <section className="bg-[#0E3B2E] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] shadow-xl shadow-black/20 lg:min-h-[380px]">
          <Image
            src="/media/about-section-one.webp"
            alt="Doctor reviewing a patient's medical marijuana recommendation"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B8E89A]">WHY WE STARTED THIS</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Why We Built This for Oklahoma
          </h2>
          <p className="mt-4 text-white/85">
            Oklahoma has one of the most active medical marijuana programs in the country, but
            the process can still feel confusing on a first try. Between OMMA&apos;s requirements
            and knowing which conditions qualify, a lot of patients get stuck before they even
            book an appointment. We built Medical Marijuana Doctor Oklahoma to give patients here
            a clear, honest path to a physician certification, without hidden fees or confusing
            paperwork.
          </p>
        </div>
      </div>
    </section>
  );
}
