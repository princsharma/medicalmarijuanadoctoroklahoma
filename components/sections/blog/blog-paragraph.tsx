import Link from "next/link";
import type { BlogParagraph } from "@/lib/blog/paragraphs";

const inlineLinkClassName =
  "font-medium text-[#2F7A18] underline decoration-[#2F7A18]/35 underline-offset-4 transition hover:text-[#0E3B2E]";

export function paragraphKey(paragraph: BlogParagraph) {
  return typeof paragraph === "string" ? paragraph : paragraph.map((part) => part.value).join("");
}

export function BlogParagraphBlock({ paragraph }: { paragraph: BlogParagraph }) {
  if (typeof paragraph === "string") {
    return <p>{paragraph}</p>;
  }

  return (
    <p>
      {paragraph.map((part, index) =>
        part.type === "link" ? (
          part.href.startsWith("http") ? (
            <a
              key={index}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className={inlineLinkClassName}
            >
              {part.value}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link key={index} href={part.href} className={inlineLinkClassName}>
              {part.value}
            </Link>
          )
        ) : (
          <span key={index}>{part.value}</span>
        )
      )}
    </p>
  );
}
