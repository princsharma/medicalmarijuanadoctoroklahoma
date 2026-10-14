import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlogParagraphBlock, paragraphKey } from "@/components/sections/blog/blog-paragraph";
import { BlogCta } from "@/components/sections/blog/blog-cta";
import { BookingButton } from "@/components/booking-dialog";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPostUsesGraphSchema } from "@/lib/blog";
import { faqAnswerPlainText } from "@/lib/blog/faq-text";
import type { BlogPost } from "@/lib/blog";
import { formatDisplayDate } from "@/lib/seo";

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article>
      <header className="px-6 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#2F7A18] uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 font-heading text-4xl leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-1 font-heading text-2xl font-medium tracking-tight text-[#0E3B2E]/85 sm:text-3xl">
            {post.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0E3B2E]/70">
            {post.excerpt}
          </p>
          <BookingButton className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#0E3B2E] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0E3B2E]/90">
            Get Your OK MMJ Card <ArrowRight className="size-4" aria-hidden="true" />
          </BookingButton>

          <div className="mx-auto mt-8 grid max-w-5xl divide-y divide-[#0E3B2E]/10 overflow-hidden rounded-[1.75rem] border border-[#0E3B2E]/15 bg-gradient-to-r from-[#EAF8F1] via-[#F5FCF8] to-[#EAF8F1] text-left shadow-[0_12px_35px_-28px_rgba(14,59,46,0.5)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <PersonByline
              label="Written by"
              name={post.author.name}
              credentials={post.author.credentials}
              description="Health & Medical Content Writer"
              roleLine={post.author.roleLine}
              slug={`/${post.author.profileKind ?? "contributors"}/${post.author.slug}/`}
              image={post.author.image}
            />
            <div className="flex items-center gap-3 px-4 py-4 sm:justify-center sm:px-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#DDF3E9] text-[#087F5B] ring-1 ring-[#0E3B2E]/10">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#087F5B]">Published</p>
                <time
                  dateTime={post.publishedAt}
                  className="mt-0.5 block text-sm font-bold text-[#0E3B2E]"
                >
                  {formatDisplayDate(post.publishedAt)}
                </time>
                <p className="mt-0.5 text-xs text-[#0E3B2E]/60">
                  Updated {formatDisplayDate(post.updatedAt)}
                </p>
              </div>
            </div>
            <PersonByline
              label="Medically reviewed by"
              name={post.reviewer.name}
              credentials={post.reviewer.credentials}
              description="Board-Certified Physician"
              roleLine={post.reviewer.roleLine}
              slug={`/${post.reviewer.profileKind ?? "doctors"}/${post.reviewer.slug}/`}
              image={post.reviewer.image}
            />
          </div>
        </div>
      </header>

      <div className="w-full">
        <figure className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#0E3B2E]/10 bg-white shadow-[0_20px_55px_-36px_rgba(14,59,46,0.55)]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={800}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>

        <div className="mt-10 grid w-full items-start gap-6 px-5 sm:px-8 lg:grid-cols-[minmax(280px,24vw)_minmax(0,1fr)] lg:gap-0 lg:px-0">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <TableOfContents post={post} className="lg:hidden" />
            <aside className="hidden min-h-[calc(100vh-5rem)] rounded-r-[2.5rem] bg-[#0E3B2E] p-6 text-white shadow-lg shadow-[#0E3B2E]/10 lg:sticky lg:top-20 lg:block lg:p-7">
              <TableOfContentsContent post={post} />
            </aside>
          </div>

          <div className="min-w-0 lg:px-8 xl:px-14">
            <div className="mx-auto max-w-5xl">
              {post.introBeforeKeyPoints?.length ? (
                <section className="scroll-mt-28">
                  <div className="space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                    {post.introBeforeKeyPoints.map((paragraph) => (
                      <BlogParagraphBlock key={paragraphKey(paragraph)} paragraph={paragraph} />
                    ))}
                  </div>
                </section>
              ) : (
                <section id="introduction" className="scroll-mt-28">
                  <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-[1.75rem]">
                    Introduction
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                    {post.introduction.map((paragraph) => (
                      <BlogParagraphBlock key={paragraphKey(paragraph)} paragraph={paragraph} />
                    ))}
                  </div>
                </section>
              )}

              <section
                aria-labelledby="key-points-heading"
                className="mt-8 rounded-2xl border border-[#0E3B2E]/15 bg-white/70 p-5 sm:p-6"
              >
                <h2
                  id="key-points-heading"
                  className="font-heading text-xl font-semibold text-[#0E3B2E]"
                >
                  {post.keyPointsHeading ?? "Key Points"}
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {post.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#0E3B2E]/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 rounded-full bg-[#0E3B2E] p-0.5 text-white"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {post.introBeforeKeyPoints?.length ? (
                <section id="introduction" className="mt-8 scroll-mt-28">
                  <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-[1.75rem]">
                    Introduction
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                    {post.introduction.map((paragraph) => (
                      <BlogParagraphBlock key={paragraphKey(paragraph)} paragraph={paragraph} />
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                    aria-labelledby={`${section.id}-heading`}
                  >
                    <h2
                      id={`${section.id}-heading`}
                      className="font-heading text-2xl leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-[1.75rem]"
                    >
                      {section.title}
                    </h2>
                    {section.paragraphs ? (
                      <div className="mt-4 space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                        {section.paragraphs.map((paragraph) => (
                          <BlogParagraphBlock
                            key={paragraphKey(paragraph)}
                            paragraph={paragraph}
                          />
                        ))}
                      </div>
                    ) : null}
                    {section.bullets ? (
                      <ul className="mt-4 space-y-3 text-base leading-7 text-[#0E3B2E]/80">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#2F7A18]"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.followingParagraphs ? (
                      <div className="mt-4 space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                        {section.followingParagraphs.map((paragraph) => (
                          <BlogParagraphBlock
                            key={paragraphKey(paragraph)}
                            paragraph={paragraph}
                          />
                        ))}
                      </div>
                    ) : null}
                    {section.table ? (
                      <div className="mt-4 overflow-x-auto rounded-2xl border border-[#0E3B2E]/15 bg-white shadow-sm">
                        <table className="w-full min-w-[320px] text-left text-sm sm:text-base">
                          <thead>
                            <tr className="bg-[#0E3B2E] text-white">
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold first:rounded-tl-2xl sm:px-5"
                              >
                                {section.table.headers[0]}
                              </th>
                              <th
                                scope="col"
                                className="px-4 py-3 font-semibold last:rounded-tr-2xl sm:px-5"
                              >
                                {section.table.headers[1]}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="text-[#0E3B2E]/85">
                            {section.table.rows.map((row, rowIndex) => (
                              <tr
                                key={`${row[0]}-${rowIndex}`}
                                className="border-t border-[#0E3B2E]/10 even:bg-[#F6F5F0]/60"
                              >
                                <td className="px-4 py-3 align-top font-medium text-[#0E3B2E] sm:px-5">
                                  {row[0]}
                                </td>
                                <td className="px-4 py-3 align-top sm:px-5">{row[1]}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title} className="mt-6">
                        <h3 className="font-heading text-xl font-medium text-[#0E3B2E]">
                          {subsection.title}
                        </h3>
                        {subsection.paragraphs ? (
                          <div className="mt-3 space-y-4 text-base leading-8 text-[#0E3B2E]/80">
                            {subsection.paragraphs.map((paragraph) => (
                              <BlogParagraphBlock
                                key={paragraphKey(paragraph)}
                                paragraph={paragraph}
                              />
                            ))}
                          </div>
                        ) : null}
                        {subsection.bullets ? (
                          <ul className="mt-3 space-y-3 text-base leading-7 text-[#0E3B2E]/80">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-start gap-3">
                                <span
                                  aria-hidden="true"
                                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#2F7A18]"
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                    {section.inlineCta ? (
                      <div
                        className="mt-8 rounded-2xl border border-[#0E3B2E]/12 bg-gradient-to-br from-[#EAF8F1] to-[#F5FCF8] p-6 sm:p-8"
                        aria-labelledby={`${section.id}-inline-cta-heading`}
                      >
                        <p className="text-xs font-semibold tracking-[0.14em] text-[#2F7A18] uppercase">
                          Online Evaluations
                        </p>
                        <h3
                          id={`${section.id}-inline-cta-heading`}
                          className="mt-2 font-heading text-xl font-semibold text-[#0E3B2E] sm:text-2xl"
                        >
                          {section.inlineCta.title}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-[#0E3B2E]/75">
                          {section.inlineCta.description}
                        </p>
                        <BookingButton className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#0E3B2E] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0E3B2E]/90">
                          {section.inlineCta.buttonLabel}{" "}
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </BookingButton>
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <section
                id="frequently-asked-questions"
                aria-labelledby="frequently-asked-questions-heading"
                className="mt-12 scroll-mt-28"
              >
                <h2
                  id="frequently-asked-questions-heading"
                  className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-[1.75rem]"
                >
                  Frequently Asked Questions
                </h2>
                <Accordion
                  defaultValue={[0]}
                  className="mt-5 flex flex-col gap-3 rounded-none border-none bg-transparent"
                >
                  {post.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={index}
                      className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-[#0E3B2E] hover:no-underline sm:text-base [&_svg]:text-[#2F7A18]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-sm leading-relaxed text-[#0E3B2E]/85">
                        <BlogParagraphBlock paragraph={faq.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                {blogPostUsesGraphSchema(post.slug) ? null : (
                  <JsonLd data={faqSchema(post)} />
                )}
              </section>

              <AboutAuthor author={post.author} />
            </div>
          </div>
        </div>
        <BlogCta compactSpacing />
      </div>
    </article>
  );
}

function PersonByline({
  label,
  name,
  credentials,
  description,
  roleLine,
  slug,
  image,
}: {
  label: string;
  name: string;
  credentials: string;
  description: string;
  roleLine?: string;
  slug: string;
  image: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
      <Image
        src={image}
        alt=""
        width={64}
        height={64}
        className="size-14 shrink-0 rounded-full border-2 border-[#9DDCC4] object-cover sm:size-16"
      />
      <div>
        <p className="text-sm font-semibold text-[#087F5B]">{label}</p>
        <Link
          href={slug}
          className="mt-0.5 block text-base font-bold text-[#0E3B2E] transition hover:text-[#2F7A18]"
        >
          {name}
        </Link>
        <p className="mt-0.5 text-sm text-[#0E3B2E]/75">
          {roleLine ?? (
            <>
              {description}
              {credentials ? <span className="text-[#087F5B]"> · {credentials}</span> : null}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function AboutAuthor({
  author,
}: {
  author: BlogPost["author"];
}) {
  return (
    <section aria-labelledby="about-author-heading" className="mt-10">
      <h2
        id="about-author-heading"
        className="font-heading text-2xl font-semibold tracking-tight text-[#0E3B2E] sm:text-3xl"
      >
        About the Author
      </h2>
      <div className="mt-5 grid gap-6 rounded-[1.75rem] border border-[#0E3B2E]/15 bg-gradient-to-b from-[#EAF8F1] to-[#FFFDF3] p-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:items-center sm:gap-8 sm:p-8">
        <Image
          src={author.image}
          alt={author.name}
          width={240}
          height={240}
          className="mx-auto aspect-square w-full max-w-[220px] rounded-[1.5rem] border-4 border-white object-cover shadow-[0_16px_32px_-18px_rgba(14,59,46,0.45)]"
        />
        <div>
          <h3 className="font-heading text-2xl font-semibold text-[#0E3B2E] sm:text-3xl">
            {author.name}
          </h3>
          <p className="mt-2 text-base font-semibold text-[#087F5B]">
            {author.aboutRoleLine ?? `Health & Medical Content Writer · ${author.credentials}`}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#0E3B2E]/75 sm:text-base">
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}

function TableOfContents({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <details
      className={`rounded-2xl border  border-white/15 bg-[#0E3B2E] p-4 text-white ${className ?? ""}`}
    >
      <summary className="cursor-pointer font-heading text-lg font-semibold text-white">
        Table of Contents
      </summary>
      <div className="mt-3 border-t  border-white/20 pt-3">
        <TableOfContentsContent post={post} />
      </div>
    </details>
  );
}

function TableOfContentsContent({ post }: { post: BlogPost }) {
  return (
    <>
      <h2 className="font-heading text-lg font-semibold text-inherit">Table of Contents</h2>
      <nav aria-label="Table of contents" className="mt-3">
        <ul className="space-y-2 border-t border-white/20 pt-3 text-sm">
          <li>
            <a
              href="#introduction"
              className="block rounded-lg px-2 py-1.5 text-white/85 transition hover:bg-white/10 hover:text-[#B8E89A]"
            >
              <span className="mr-2 text-[#B8E89A]" aria-hidden="true">
                •
              </span>
              Introduction
            </a>
          </li>
          {post.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block rounded-lg px-2 py-1.5 text-white/85 transition hover:bg-white/10 hover:text-[#B8E89A]"
              >
                <span className="mr-2 text-[#B8E89A]" aria-hidden="true">
                  •
                </span>
                {section.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#frequently-asked-questions"
              className="block rounded-lg px-2 py-1.5 text-white/85 transition hover:bg-white/10 hover:text-[#B8E89A]"
            >
              <span className="mr-2 text-[#B8E89A]" aria-hidden="true">
                •
              </span>
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function faqSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerPlainText(faq.answer),
      },
    })),
  };
}
