export function FaqHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(191,231,176,0.4)_0%,transparent_70%)]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
          Medical Marijuana FAQ
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-[#0E3B2E]/85">
          You can get answer to your query here.
        </p>
      </div>
    </section>
  );
}
