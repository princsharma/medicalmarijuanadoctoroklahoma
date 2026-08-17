import { contributors } from "@/lib/contributors";
import { doctors } from "@/lib/doctors";
import { SITE_NAME, SITE_URL, absoluteUrl, pages, withTrailingSlash } from "@/lib/seo";

function link(label: string, path: string, description?: string) {
  let url: string;
  if (path.includes("#")) {
    const [pathname, hash] = path.split("#");
    const base = pathname && pathname !== "/" ? absoluteUrl(pathname) : `${SITE_URL}/`;
    url = `${base.replace(/\/$/, "")}/#${hash}`;
  } else {
    url = absoluteUrl(path);
  }
  return description ? `- [${label}](${url}): ${description}` : `- [${label}](${url})`;
}

/** Build llms.txt content from live site routes (same source of truth as sitemap). */
export function buildLlmsTxt() {
  const doctorLinks = doctors
    .map((doctor) =>
      link(
        `${doctor.name}, ${doctor.credentials}`,
        withTrailingSlash(`/doctors/${doctor.slug}`)
      )
    )
    .join("\n");

  const contributorLinks = contributors
    .map((person) =>
      link(
        `${person.name}, ${person.credentials}`,
        withTrailingSlash(`/contributors/${person.slug}`),
        `${person.role} — ${person.shortBio}`
      )
    )
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_NAME} is an Oklahoma-focused telehealth platform that connects patients with state-licensed physicians for online medical marijuana (MMJ) evaluations and physician certifications through HIPAA-compliant telehealth consultations. The company does not cultivate, sell, or dispense cannabis products. The platform facilitates physician-issued recommendations recognized under Oklahoma's OMMA (Oklahoma Medical Marijuana Authority) program, allowing qualifying patients to apply for a state medical marijuana patient license and access licensed dispensaries where permitted by law.

- Oklahoma-only medical marijuana evaluation service; headquartered in Oklahoma City, Oklahoma.
- Consultations are conducted entirely online; most physician recommendations can be completed in about 15–30 minutes if the patient is approved.
- Patients receive guidance for the OMMA application process after a successful physician recommendation.
- 100% refund guaranteed if the physician does not approve the patient (see Refund Policy).
- HIPAA-compliant intake and consultation; physician licensure verified for Oklahoma practice.
- Not a dispensary, not a recreational cannabis service, and not an in-person clinic chain.


## How It Works

${link(
  "How It Works",
  "/#how-it-works",
  "Step-by-step patient journey, including online intake, telehealth consultation with a licensed Oklahoma physician, digital recommendation, and OMMA patient license application guidance."
)}
${link(
  "What Is an Oklahoma MMJ Card?",
  "/#apply",
  "Plain-language explanation of Oklahoma medical marijuana patient licenses, physician recommendations, and how the OMMA process works."
)}
${link(
  "Why Choose Us",
  "/#about",
  "Platform benefits including online convenience, OMMA-focused guidance, licensed physicians, and secure HIPAA-compliant care."
)}


## Oklahoma Medical Marijuana Evaluations

${link(
  "Home",
  pages.home.path,
  "Primary landing page for Oklahoma medical marijuana card evaluations, telehealth consultations, and OMMA guidance."
)}
${link(
  "FAQ",
  pages.faq.path,
  "Answers about Oklahoma MMJ cards, telehealth evaluations, eligibility, OMMA applications, and renewals."
)}
${link(
  "Qualifying Conditions",
  "/#conditions",
  "Overview of conditions commonly discussed during Oklahoma medical marijuana evaluations (physician determination required)."
)}
${link(
  "Benefits of Cannabis",
  pages.home.path,
  "Educational overview of potential patient benefits discussed in the context of medical cannabis care (homepage section)."
)}


## Medical Marijuana Doctors

${link(
  "Our Doctors",
  pages.doctors.path,
  "Directory of licensed physicians providing Oklahoma medical marijuana evaluations via telehealth."
)}
${doctorLinks}


## Contributors

Content on the site is written or reviewed by the following contributors:

${link(
  "Contributors Hub",
  pages.contributors.path,
  "Overview of the medical content team and why writing and medical review are separated."
)}
${contributorLinks}


## Patient Feedback

${link(
  "Reviews",
  pages.reviews.path,
  "Verified Google patient feedback and testimonials from Oklahoma patients who completed telehealth evaluations."
)}


## Company & Legal

${link(
  "About Us",
  pages.about.path,
  "Platform mission, leadership, and how Medical Marijuana Doctor Oklahoma connects patients with licensed physicians."
)}
${link(
  "Contact Us",
  pages.contact.path,
  "Phone, email, Oklahoma City address, hours, and support options."
)}
${link(
  "Legal Policies Hub",
  pages.policy.path,
  "Index of privacy, HIPAA, telehealth consent, terms, refunds, accessibility, editorial, and disclaimer pages."
)}
${link(
  "Privacy Policy",
  pages.privacy.path,
  "How personal and health information is collected, used, and protected."
)}
${link(
  "Terms of Use",
  pages.terms.path,
  "Eligibility, telehealth consent, physician relationships, liability, and Oklahoma law."
)}
${link(
  "Disclaimer",
  pages.disclaimer.path,
  "Limits on medical advice and the platform's role as a technology facilitator."
)}
${link(
  "Refund Policy",
  pages.refund.path,
  "When patients qualify for a full refund on an Oklahoma MMJ evaluation."
)}
${link(
  "Editorial Policy",
  pages.editorial.path,
  "Standards for accuracy, sourcing, and content review."
)}
${link(
  "HIPAA Compliance",
  pages.hipaa.path,
  "How the platform protects patient health information during telehealth MMJ evaluations."
)}
${link(
  "Consent for Telehealth",
  pages.telehealth.path,
  "Patient acknowledgment of remote evaluation terms and limitations."
)}
${link(
  "Accessibility Statement",
  pages.accessibility.path,
  "Commitment to WCAG-oriented accessibility for patients with disabilities."
)}


---

*For current OMMA rules, qualifying guidance, or pricing, consult the linked pages directly, as Oklahoma cannabis regulations and fees can change.*

[XML Sitemap](${SITE_URL}/sitemap.xml)
`;
}
