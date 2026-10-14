import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this a walk-in clinic?",
    answer:
      "No. We are not a walk-in clinic. All medical marijuana evaluations are completed through secure telehealth with an Oklahoma-licensed physician. The Oklahoma City address on this page is for staff and administrative correspondence only.",
  },
  {
    question: "How soon can I get an appointment?",
    answer:
      "Depends on the day, but most people who reach out during business hours get scheduled the same day or the next one.",
  },
  {
    question: "Can I contact you about renewing my card instead of a new application?",
    answer:
      "Yes. Just let us know when you reach out that you're renewing, and we'll pull up your previous visit and get you booked before your card expires.",
  },
  {
    question: "What are your hours?",
    answer:
      "9:00 AM to 10:00 PM daily by phone. Emails and contact form messages received outside those hours are answered the next business day.",
  },
];

export function ContactFaq() {
  return (
    <section className="bg-[#EAF1EA] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            Common Contact Questions
          </h2>
        </div>

        <Accordion
          defaultValue={[0]}
          className="mt-10 flex flex-col gap-3 rounded-none border-none bg-transparent"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={index}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-[#0E3B2E] hover:no-underline sm:text-base [&_svg]:text-[#2F7A18]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-sm leading-relaxed text-[#0E3B2E]/85">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
