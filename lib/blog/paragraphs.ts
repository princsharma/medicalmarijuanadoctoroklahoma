export type BlogTextPart =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

export type BlogParagraph = string | BlogTextPart[];

export const IS_MARIJUANA_LEGAL_IN_OKLAHOMA_PATH = "/blog/is-marijuana-legal-in-oklahoma/";
export const OKLAHOMA_CANNABIS_LAWS_PATH = "/blog/oklahoma-cannabis-laws/";
export const GET_OK_MMJ_CARD_PATH = "/#apply";

export const MEDICAL_MARIJUANA_LEGAL_IN_OKLAHOMA_PHRASE = "Medical marijuana is legal in Oklahoma";
export const MEDICAL_MARIJUANA_LEGAL_IN_OKLAHOMA_LOWER = "medical marijuana is legal in Oklahoma";
export const STATE_QUESTION_788_PHRASE = "State Question 788";
export const STATE_QUESTION_788_SQ_PHRASE = "State Question 788 (SQ 788)";
export const OKLAHOMA_MEDICAL_MARIJUANA_AUTHORITY_OMMA_PHRASE =
  "Oklahoma Medical Marijuana Authority (OMMA)";
export const OMMA_PHRASE = "OMMA";
export const OMMA_PATIENT_RIGHTS_PHRASE = "OMMA Patient Rights & Responsibilities";

export const STATE_QUESTION_788_PDF_URL =
  "https://oklahoma.gov/content/dam/ok/en/omma/docs/sq_788_1.pdf";
export const OMMA_HOME_URL = "https://oklahoma.gov/omma.html";
export const OMMA_PATIENT_RIGHTS_URL =
  "https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html";
export const OMMA_RULES_URL = "https://oklahoma.gov/omma/rules-and-legislation/rules.html";
export const STATE_QUESTION_788_BALLOTPEDIA_URL =
  "https://ballotpedia.org/Oklahoma_State_Question_788,_Medical_Marijuana_Legalization_Initiative_(June_2018)";
export const OKLAHOMA_HIGHWAY_SAFETY_MARIJUANA_URL =
  "https://oklahoma.gov/highwaysafety/focus-areas/drug-impaired/marijuana.html";
export const FEDERAL_MARIJUANA_RECLASSIFICATION_URL =
  "https://oklahoma.gov/omma/about/news/2026/update-federal-reclassification-of-marijuana.html";

export const OMMA_CURRENT_PERMANENT_RULES_PHRASE = "OMMA's current permanent rules";
export const OMMA_CURRENT_PATIENT_RULES_PHRASE = "OMMA's current patient rules";
export const OKLAHOMA_HIGHWAY_SAFETY_OFFICE_PHRASE = "Oklahoma's Highway Safety Office";
export const FEDERAL_MARIJUANA_POLICY_PHRASE = "Federal marijuana policy";
export const MEDICAL_MARIJUANA_CARD_PHRASE = "medical marijuana card";
export const MMJ_CARD_PHRASE = "MMJ card";

export function blogSectionHref(postPath: string, sectionId: string) {
  const base = postPath.endsWith("/") ? postPath.slice(0, -1) : postPath;
  return `${base}#${sectionId}`;
}

export function linkPhrase(text: string, phrase: string, href: string): BlogParagraph {
  const index = text.indexOf(phrase);
  if (index === -1) return text;

  return [
    { type: "text", value: text.slice(0, index) },
    { type: "link", value: phrase, href },
    { type: "text", value: text.slice(index + phrase.length) },
  ];
}

export function linkPhraseIgnoreCase(text: string, phrase: string, href: string): BlogParagraph {
  const index = text.toLowerCase().indexOf(phrase.toLowerCase());
  if (index === -1) return text;

  const matched = text.slice(index, index + phrase.length);

  return [
    { type: "text", value: text.slice(0, index) },
    { type: "link", value: matched, href },
    { type: "text", value: text.slice(index + phrase.length) },
  ];
}

export function linkMedicalMarijuanaCard(text: string): BlogParagraph {
  return linkPhraseIgnoreCase(text, MEDICAL_MARIJUANA_CARD_PHRASE, GET_OK_MMJ_CARD_PATH);
}

export function linkMmjCard(text: string): BlogParagraph {
  return linkPhrase(text, MMJ_CARD_PHRASE, GET_OK_MMJ_CARD_PATH);
}

export function linkPhrases(
  text: string,
  specs: { phrase: string; href: string }[]
): BlogParagraph {
  const matches = specs
    .map(({ phrase, href }) => {
      const start = text.indexOf(phrase);
      if (start === -1) return null;
      return { start, end: start + phrase.length, phrase, href };
    })
    .filter((match): match is NonNullable<typeof match> => match !== null)
    .sort((a, b) => a.start - b.start);

  if (matches.length === 0) return text;

  const parts: BlogTextPart[] = [];
  let cursor = 0;

  for (const match of matches) {
    if (match.start < cursor) continue;
    if (match.start > cursor) {
      parts.push({ type: "text", value: text.slice(cursor, match.start) });
    }
    parts.push({ type: "link", value: match.phrase, href: match.href });
    cursor = match.end;
  }

  if (cursor < text.length) {
    parts.push({ type: "text", value: text.slice(cursor) });
  }

  return parts;
}

export function linkMedicalMarijuanaLegalInOklahoma(text: string): BlogParagraph {
  return linkPhrase(text, MEDICAL_MARIJUANA_LEGAL_IN_OKLAHOMA_PHRASE, IS_MARIJUANA_LEGAL_IN_OKLAHOMA_PATH);
}

export function linkStateQuestion788(
  text: string,
  postPath: string,
  sectionId: string
): BlogParagraph {
  return linkPhrase(text, STATE_QUESTION_788_PHRASE, blogSectionHref(postPath, sectionId));
}

export function linkOmmaCurrentPermanentRules(text: string): BlogParagraph {
  return linkPhrase(text, OMMA_CURRENT_PERMANENT_RULES_PHRASE, OMMA_RULES_URL);
}

export function linkOmmaCurrentPatientRules(text: string): BlogParagraph {
  return linkPhrase(text, OMMA_CURRENT_PATIENT_RULES_PHRASE, OMMA_PATIENT_RIGHTS_URL);
}

export function linkStateQuestion788Ballotpedia(text: string): BlogParagraph {
  return linkPhrase(text, STATE_QUESTION_788_PHRASE, STATE_QUESTION_788_BALLOTPEDIA_URL);
}
