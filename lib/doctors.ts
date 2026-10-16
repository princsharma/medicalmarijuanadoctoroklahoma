export type Doctor = {
  slug: string;
  name: string;
  credentials: string;
  experience: string;
  category: string;
  image: string;
  bio: string;
  about: string;
  focusAreas: string[];
  headline?: string;
  description?: string;
  npi?: string;
  education?: string;
  residency?: string;
  educationHistory?: { institution: string; detail: string }[];
  roleParagraphs?: string[];
  conditionsIntro?: string;
  trust?: { yearsText: string; platformText: string; lastVerified: string };
  consultationDetails?: string[];
  faqs?: { question: string; answer: string }[];
};

export const doctors: Doctor[] = [
  {
    slug: "joel-durinka",
    name: "Joel Durinka",
    credentials: "MD",
    experience: "16 Years",
    category: "Family Medicine",
    image: "/media/image-of-joel-durinka.webp",
    bio: "Family medicine physician conducting a detailed evaluation of your medical history and qualifying conditions.",
    description:
      "Experienced physician providing professional medical evaluations through secure telehealth consultations. Dedicated to delivering patient-focused care through convenient and confidential online appointments with Oklahoma patients.",
    about:
      "Dr. Joel Durinka is a board-registered physician specializing in family medicine with additional surgical taxonomy credentials. Since receiving his National Provider Identifier in 2010, Dr. Durinka has maintained an active professional status within the U.S. healthcare system. His clinical background focuses on patient-centered care, comprehensive health evaluations, and evidence-based treatment planning designed to support individual patient needs.",
    focusAreas: [
      "Chronic Pain",
      "PTSD",
      "Seizures & Epilepsy",
      "Cancer Support",
      "Muscle Spasms",
      "Severe Nausea",
      "Parkinson's Disease",
      "Migraines",
    ],
    headline: "Specialist in Medical Marijuana & Cannabis Evaluations",
    npi: "1144541343",
    education: "St. George's University School of Medicine (2010)",
    residency: "Jacobs School of Medicine and Biomedical Sciences, University at Buffalo (2015–2018)",
    educationHistory: [
      {
        institution: "Jacobs School of Medicine and Biomedical Sciences, University at Buffalo",
        detail: "Residency (2015–2018)",
      },
      {
        institution: "Einstein Medical Center Philadelphia",
        detail: "Internship (2010–2011)",
      },
      {
        institution: "St. George's University School of Medicine",
        detail: "Class of 2010",
      },
    ],
    roleParagraphs: [
      "As a physician working with Medical Marijuana Doctor Oklahoma, I provide secure online medical evaluations through a HIPAA-compliant telehealth platform designed to make care accessible and convenient for patients. My approach focuses on delivering personalized consultations that prioritize patient comfort, privacy, and professional medical standards.",
      "Every appointment is designed to be efficient, supportive, and compliant with OMMA regulations. My goal is to provide a straightforward telehealth experience that maintains high standards of care while helping patients navigate their evaluation process with clarity and confidence.",
    ],
    conditionsIntro:
      "Dr. Durinka evaluates patients for the medical conditions recognized under Oklahoma's medical marijuana program. Final eligibility is determined during your consultation per Oklahoma's qualifying-condition list.",
    trust: {
      yearsText: "Dr. Durinka brings over 16 years of clinical medical experience.",
      platformText: "All evaluations conducted using encrypted, HIPAA-compliant technology.",
      lastVerified: "Doctor credentials and licensing information last verified: January 2026.",
    },
    consultationDetails: [
      "15-30 minute video consultation",
      "Medical history and symptom review",
      "Current medication assessment",
      "Same-day certification if approved",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Durinka evaluate?",
        answer:
          "Dr. Durinka evaluates patients for a range of qualifying medical conditions recognized under Oklahoma's medical marijuana program. These may include chronic pain, anxiety disorders, PTSD, cancer-related symptoms, and other conditions approved under OMMA.",
      },
      {
        question: "How long does a consultation with Dr. Durinka take?",
        answer:
          "Most consultations are completed efficiently, typically within 15 to 30 minutes. Dr. Durinka is committed to making the process straightforward while ensuring each patient receives a thorough and professional evaluation.",
      },
      {
        question: "Is the video consultation private?",
        answer:
          "Yes. All consultations with Dr. Durinka are conducted through a secure, encrypted, HIPAA-compliant telehealth platform. Your personal health information and session details are kept strictly confidential in accordance with federal and state privacy regulations.",
      },
      {
        question: "Are Dr. Durinka's medical credentials verifiable?",
        answer:
          "Yes. Dr. Durinka's credentials are publicly accessible through the NPPES NPI Registry (NPI: 1144541343). All licensing information is maintained and regularly updated.",
      },
      {
        question: "What happens if Dr. Durinka is unavailable when I request him?",
        answer:
          "If Dr. Durinka is unavailable at your preferred time, you may reschedule your appointment or be matched with another qualified Oklahoma-licensed physician on our platform. Our team is available to assist you in finding the earliest convenient slot.",
      },
    ],
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller",
    credentials: "MD",
    experience: "8 Years",
    category: "General Medicine",
    image: "/media/dr-johnathan-c-miller.webp",
    bio: "General practice physician using a holistic, patient-focused approach to every Oklahoma medical marijuana evaluation.",
    description:
      "Licensed physician providing professional medical evaluations through secure telehealth consultations, dedicated to patient-focused care and compliance with Oklahoma's medical cannabis regulations.",
    about:
      "Dr. Miller is a licensed general practice physician with extensive experience in providing patient-centered care through telehealth services since earning his National Provider Identifier in 2018. He has worked with patients across multiple states, helping them explore alternative treatment options for chronic and qualifying medical conditions.",
    focusAreas: [
      "Chronic Pain",
      "Cancer Support",
      "PTSD",
      "Seizures",
      "Multiple Sclerosis",
      "HIV/AIDS",
      "Severe Nausea",
    ],
    headline: "General Practice Physician — Medical Cannabis Evaluations",
    npi: "1235623372",
    education: "Columbia University Vagelos College of Physicians and Surgeons (2018)",
    residency: "Orthopaedic Surgery, Washington University/B-JH/SLCH Consortium (2018–2020)",
    educationHistory: [
      {
        institution: "Washington University/B-JH/SLCH Consortium",
        detail: "Residency, Orthopaedic Surgery (2018–2020)",
      },
      {
        institution: "Columbia University Vagelos College of Physicians and Surgeons",
        detail: "M.D., Class of 2018",
      },
      {
        institution: "University of Alabama at Birmingham",
        detail: "BA, Foreign Languages and Literatures – Spanish, Summa Cum Laude (2009–2014)",
      },
    ],
    roleParagraphs: [
      "As a physician with Medical Marijuana Doctor Oklahoma, I provide secure online medical cannabis evaluations for eligible Oklahoma patients seeking alternative treatment options.",
      "My consultations are quick, straightforward, and personalized, conducted through a HIPAA-compliant telehealth platform with same-day approvals for qualifying patients.",
    ],
    conditionsIntro:
      "Dr. Miller evaluates patients for the medical conditions recognized under Oklahoma's medical marijuana program. Final eligibility is determined during your consultation per Oklahoma's qualifying-condition list.",
    trust: {
      yearsText: "Dr. Miller brings over 8 years of clinical medical experience.",
      platformText: "All evaluations conducted using encrypted, HIPAA-compliant technology.",
      lastVerified: "Doctor credentials and licensing information last verified: January 2026.",
    },
    consultationDetails: [
      "15-30 minute video consultation",
      "Medical history and symptom review",
      "Current medication assessment",
      "Same-day certification if approved",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Miller evaluate?",
        answer:
          "He evaluates a wide range of OMMA-qualifying conditions, including chronic pain, cancer-related symptoms, PTSD, seizures, multiple sclerosis, and other conditions recognized under Oklahoma law.",
      },
      {
        question: "How long does an evaluation with Dr. Miller take?",
        answer: "Most consultations take approximately 15-30 minutes after completing the intake form.",
      },
      {
        question: "Is the consultation secure?",
        answer: "Yes. All visits occur through an encrypted, HIPAA-compliant telehealth platform.",
      },
      {
        question: "When will I receive certification?",
        answer:
          "If approved, your certification is filed with OMMA the same day so you can complete your Oklahoma medical marijuana card application.",
      },
      {
        question: "Do I need medical records?",
        answer:
          "Medical documentation may help but isn't always required — Dr. Miller will let you know during your consultation if anything additional is needed.",
      },
    ],
  },
  {
    slug: "kevin-kargman",
    name: "Kevin Kargman",
    credentials: "DO",
    experience: "19 Years",
    category: "Pediatrics",
    image: "/media/doctor-kevin-kargman.webp",
    bio: "Certified pediatrician providing thorough, regulation-compliant medical marijuana evaluations.",
    description:
      "Experienced physician providing professional medical evaluations through secure telehealth consultations. Dedicated to delivering patient-focused care through convenient and confidential online appointments with Oklahoma patients.",
    about:
      "Dr. Kargman is registered with an active professional status in the National Provider Identifier registry, with credentials verifiable through the Centers for Medicare & Medicaid Services (CMS). He holds a D.O. degree and brings extensive experience in healthcare evaluations and training to every Oklahoma medical marijuana evaluation.",
    focusAreas: ["Chronic Pain", "PTSD", "Anxiety Disorders", "Cancer Support"],
    headline: "Specialist in Medical Marijuana & Cannabis Evaluations",
    npi: "1407810302",
    education: "Kansas City University of Medicine and Biosciences College of Osteopathic Medicine",
    residency: "Pediatrics, Geisinger Health System (1996–1999)",
    educationHistory: [
      {
        institution: "Geisinger Health System",
        detail: "Residency, Pediatrics (1996–1999)",
      },
      {
        institution: "Kansas City University of Medicine and Biosciences College of Osteopathic Medicine",
        detail: "Medical School",
      },
    ],
    roleParagraphs: [
      "As a physician working with Medical Marijuana Doctor Oklahoma, I conduct secure online medical evaluations using a HIPAA-compliant telehealth platform.",
      "Consultations include a medical history review, symptom discussion, and a professional evaluation based on individual healthcare needs, maintaining compliance with OMMA guidelines.",
    ],
    conditionsIntro:
      "Dr. Kargman evaluates patients for the medical conditions recognized under Oklahoma's medical marijuana program. Final eligibility is determined during your consultation per Oklahoma's qualifying-condition list.",
    trust: {
      yearsText: "Dr. Kargman brings over 19 years of clinical medical experience.",
      platformText: "All consultations protected using encrypted, HIPAA-compliant technology.",
      lastVerified: "Doctor credentials and licensing information last verified: January 2026.",
    },
    consultationDetails: [
      "15-30 minute video consultation",
      "Medical history and symptom review",
      "Current medication assessment",
      "Same-day certification if approved",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Kargman evaluate?",
        answer:
          "He reviews Oklahoma's qualifying conditions, including chronic pain, cancer-related symptoms, PTSD, and anxiety disorders.",
      },
      {
        question: "How long does an evaluation with Dr. Kargman take?",
        answer: "The structured online consultation is efficient and usually takes 15 to 30 minutes.",
      },
      {
        question: "Is the video consultation private?",
        answer: "Yes. All appointments use an encrypted, HIPAA-compliant platform to protect your privacy.",
      },
      {
        question: "Are his medical credentials verifiable?",
        answer:
          "Yes. You can verify his active D.O. credentials on the federal NPI Registry (NPI: 1407810302).",
      },
      {
        question: "What happens if Dr. Kargman isn't available when I request him?",
        answer:
          "You can book his next open slot or be matched with another qualified Oklahoma-licensed physician on our platform.",
      },
    ],
  },
  {
    slug: "lewis-jassey",
    name: "Lewis Jassey",
    credentials: "DO",
    experience: "30+ Years",
    category: "Pediatrics",
    image: "/media/dr-lewis-jassey.webp",
    bio: "Board-certified pediatrician offering careful, experienced medical marijuana evaluations for Oklahoma patients.",
    description:
      "Experienced, board-certified pediatrician providing professional medical evaluations through secure telehealth consultations. Brings over 30 years of clinical practice and a national reputation in pharmacogenetics and pharmacology to every Oklahoma medical marijuana evaluation.",
    about:
      "Dr. Jassey is a board-certified Doctor of Osteopathic Medicine registered as an active provider in the National Provider Identifier (NPI) Registry. Over more than three decades in practice, he ran a pediatric practice serving over 15,000 patients, held staff privileges at five major hospitals, and developed expertise in pharmacogenetics, pharmacology, and care for patients on the autism spectrum and with a variety of mental health conditions.\n\nHe lectures on a national level and has served as Medical Director for Pediatric Medicine at a leading cannabis telemedicine platform.",
    focusAreas: [
      "Chronic Pain",
      "PTSD",
      "Seizures & Epilepsy",
      "Cancer Support",
      "Muscle Spasms",
      "Severe Nausea",
      "Parkinson's Disease",
      "Cachexia",
    ],
    headline: "Specialist in Medical Marijuana & Cannabis Evaluations",
    npi: "1740343847",
    education: "NYIT College of Osteopathic Medicine (1994)",
    residency: "Pediatrics, Nassau University Medical Center (1994–1997)",
    educationHistory: [
      {
        institution: "Nassau University Medical Center",
        detail: "Residency, Pediatrics (1994–1997)",
      },
      {
        institution: "NYIT College of Osteopathic Medicine",
        detail: "Class of 1994",
      },
    ],
    roleParagraphs: [
      "As a physician working with Medical Marijuana Doctor Oklahoma, I conduct secure online medical evaluations using a HIPAA-compliant telehealth platform designed to make access simple and convenient for patients. My approach emphasizes personalized consultations that prioritize patient comfort and evidence-based care in a fully virtual environment.",
      "During consultations, I carefully review each patient's medical history, discuss individual health concerns, and determine whether appropriate treatment options may support their medical needs — with the goal of a straightforward telehealth experience that maintains high standards of care.",
    ],
    conditionsIntro:
      "Dr. Jassey evaluates patients for the medical conditions recognized under Oklahoma's medical marijuana program. Final eligibility is determined during your consultation per Oklahoma's qualifying-condition list.",
    trust: {
      yearsText: "Dr. Jassey brings over three decades of clinical medical experience.",
      platformText: "All evaluations are conducted through encrypted, HIPAA-compliant technology.",
      lastVerified: "Doctor credentials and licensing information last verified: January 2026.",
    },
    consultationDetails: [
      "15-30 minute video consultation",
      "Medical history and symptom review",
      "Current medication assessment",
      "Same-day certification if approved",
    ],
    faqs: [
      {
        question: "What conditions does Dr. Jassey evaluate?",
        answer:
          "He evaluates patients for conditions including chronic pain, PTSD, cancer-related symptoms, seizures and epilepsy, severe nausea, Parkinson's disease, and cachexia, among other conditions recognized under Oklahoma law.",
      },
      {
        question: "How long does an evaluation with Dr. Jassey take?",
        answer:
          "Evaluations are typically brief and efficient — most consultations are completed within 15–30 minutes via secure video call.",
      },
      {
        question: "Is the video consultation private?",
        answer:
          "Yes. All consultations with Dr. Jassey are conducted through a HIPAA-compliant, fully encrypted telehealth platform to ensure your privacy and confidentiality.",
      },
      {
        question: "Are Dr. Jassey's medical credentials verifiable?",
        answer:
          "Yes. Dr. Jassey's NPI number (1740343847) is publicly listed in the NPPES registry maintained by the U.S. Department of Health & Human Services.",
      },
      {
        question: "What happens if Dr. Jassey isn't available when I request him?",
        answer:
          "If Dr. Jassey is unavailable at your requested time, our support team will help you schedule at the earliest available slot or connect you with another qualified Oklahoma-licensed physician.",
      },
    ],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}
