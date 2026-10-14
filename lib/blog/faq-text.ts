import type { BlogParagraph } from "@/lib/blog/paragraphs";

export function faqAnswerPlainText(answer: BlogParagraph) {
  return typeof answer === "string" ? answer : answer.map((part) => part.value).join("");
}
