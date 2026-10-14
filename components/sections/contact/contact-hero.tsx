import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">
            <span className="h-px w-8 bg-[#4C9A2A]/40" />
            CONTACT US
          </div>

          <h1 className="mt-6 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            Get In Touch - Medical Marijuana Doctor Oklahoma
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/85">
            Thinking about getting your Oklahoma Medical Marijuana card? We can help. Reach out to
            our team and we&apos;ll walk you through how scheduling works, what to bring to your
            visit, and what the Oklahoma Medical Marijuana Authority (OMMA) actually looks for
            during approval. If you just have a quick question before booking, that&apos;s fine
            too - call, email, or send us a message and someone will get back to you.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
          <Image
            src="/media/contact-us-hero-section.webp"
            alt="Doctor reviewing a patient's medical marijuana recommendation"
            width={800}
            height={640}
            priority
            className="h-[420px] w-full object-cover sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
