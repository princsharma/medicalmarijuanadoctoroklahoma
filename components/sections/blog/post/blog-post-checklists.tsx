import {
  Award,
  CalendarCheck,
  CheckCircle2,
  FileCheck,
  IdCard,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export function TenantChecklistInfographic() {
  const steps = [
    {
      num: "01",
      title: "Licensed State Physician",
      desc: "Confirm the doctor is an active MD/DO licensed in Oklahoma with CMS/NPI validation.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "Formal Clinical Evaluation",
      desc: "Ensure a real-time telehealth video or in-person medical evaluation occurred.",
      icon: CalendarCheck,
    },
    {
      num: "03",
      title: "Official OMMA Form",
      desc: "Physician must issue the signed OMMA Adult Recommendation Form within 30 days.",
      icon: FileCheck,
    },
    {
      num: "04",
      title: "Active State Registry",
      desc: "Your license is directly registered in the official OMMA state verification portal.",
      icon: Award,
    },
    {
      num: "05",
      title: "Verifiable Clinic Info",
      desc: "Letterhead must list real Oklahoma clinical address, phone number, and doctor details.",
      icon: PhoneCall,
    },
    {
      num: "06",
      title: "Avoid Fake Registries",
      desc: "Beware of instant fake IDs or websites promising cards without clinical assessments.",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="w-full relative rounded-[20px] overflow-hidden shadow-lg my-8 bg-gradient-to-b from-[#FAF7F2] to-white border border-[#DECDBB]">
      {/* Header Banner */}
      <div
        className="px-6 py-8 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#B8E89A] px-3.5 py-1 text-xs font-extrabold text-[#0E3B2E] uppercase tracking-wider mb-2">
          Oklahoma Patient Guide
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
          TENANT & PATIENT CHECKLIST
        </h3>
        <p className="text-sm text-white/80 max-w-md mx-auto mt-1">
          How to ensure your medical marijuana recommendation is 100% legitimate & OMMA compliant.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="p-6 sm:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="flex flex-col justify-between rounded-xl border border-[#DECDBB]/60 bg-white p-4 shadow-xs hover:border-[#0E3B2E]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#B8E89A] text-xs font-extrabold text-[#0E3B2E]">
                  {step.num}
                </span>
                <Icon className="size-5 text-[#2F7A18]" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#0E3B2E]">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#5F6B6F]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Badge */}
      <div className="bg-[#0E3B2E] px-6 py-3.5 text-center text-xs font-semibold text-white flex items-center justify-center gap-2">
        <ShieldCheck className="size-4 text-[#B8E89A]" />
        <span>Fully Compliant with Oklahoma SQ 788 & OMMA Telehealth Standards</span>
      </div>
    </div>
  );
}

export function LandlordChecklistInfographic() {
  const steps = [
    {
      num: "01",
      title: "Physical OMMA Card Check",
      desc: "Inspect holographic seal, 24-character patient license number, issue date, and expiration.",
      icon: IdCard,
    },
    {
      num: "02",
      title: "Verify on OMMA Portal",
      desc: "Enter license number in omma.ok.gov database to confirm real-time active status.",
      icon: Search,
    },
    {
      num: "03",
      title: "Match Government Photo ID",
      desc: "Ensure name and birthdate match valid Oklahoma Driver's License or state ID card.",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Confirm Physician Licensure",
      desc: "Recommendations must be signed by an active, unencumbered Oklahoma MD or DO.",
      icon: CheckCircle2,
    },
    {
      num: "05",
      title: "Understand Legal Limits",
      desc: "Cardholders are protected from discrimination in housing and lawful residential possession.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "Protect Medical Privacy",
      desc: "Landlords cannot demand full medical records, diagnosis history, or clinician notes.",
      icon: ShieldAlert,
    },
  ];

  return (
    <div className="w-full relative rounded-[20px] overflow-hidden shadow-lg my-8 bg-gradient-to-b from-[#FAF7F2] to-white border border-[#DECDBB]">
      {/* Header Banner */}
      <div
        className="px-6 py-8 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #144939 0%, #0E3B2E 100%)" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[#B8E89A] px-3.5 py-1 text-xs font-extrabold text-[#0E3B2E] uppercase tracking-wider mb-2">
          Dispensary & Landlord Verification
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
          LANDLORD & DISPENSARY CHECKLIST
        </h3>
        <p className="text-sm text-white/80 max-w-md mx-auto mt-1">
          Standardized protocol for verifying Oklahoma patient licenses and maintaining compliance.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="p-6 sm:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="flex flex-col justify-between rounded-xl border border-[#DECDBB]/60 bg-white p-4 shadow-xs hover:border-[#0E3B2E]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#B8E89A] text-xs font-extrabold text-[#0E3B2E]">
                  {step.num}
                </span>
                <Icon className="size-5 text-[#2F7A18]" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-[#0E3B2E]">
                  {step.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-[#5F6B6F]">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Badge */}
      <div className="bg-[#0E3B2E] px-6 py-3.5 text-center text-xs font-semibold text-white flex items-center justify-center gap-2">
        <ShieldCheck className="size-4 text-[#B8E89A]" />
        <span>Official State Verification Standard   Oklahoma Medical Marijuana Authority</span>
      </div>
    </div>
  );
}
