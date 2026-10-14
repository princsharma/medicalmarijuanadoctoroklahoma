"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SITE_URL, pages } from "@/lib/seo";

function getHeallyUtmSource() {
  const hostname = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return `utm-${hostname}`;
}

function validateName(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2 || parts.some((part) => !/^[a-zA-Z'-]+$/.test(part))) {
    return "Please enter your first and last name.";
  }
  return null;
}

function validateEmail(value: string) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

function validatePhone(value: string) {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
    return "Please enter a valid phone number (e.g., 999-999-9999).";
  }
  return null;
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

type LeadErrors = {
  name?: string;
  email?: string;
  phone?: string;
  termsAccepted?: string;
};

const fieldClassName =
  "h-12 w-full min-w-0 rounded-xl border-[#0E3B2E]/10 bg-[#F3F6F0] px-3.5 text-base text-[#0E3B2E] shadow-none placeholder:text-[#0E3B2E]/40 transition-[border-color,box-shadow,background-color] focus-visible:border-[#4C9A2A] focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#8FD66B]/45 md:text-base";

export function LeadCaptureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) ?? undefined }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) ?? undefined }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) ?? undefined }));
  }

  function handleTermsAcceptedChange(checked: boolean) {
    setTermsAccepted(checked);
    setErrors((prev) => ({
      ...prev,
      termsAccepted: checked ? undefined : prev.termsAccepted,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const termsAcceptedError = termsAccepted
      ? null
      : "Please accept the Terms and Conditions to continue.";

    setErrors({
      name: nameError ?? undefined,
      email: emailError ?? undefined,
      phone: phoneError ?? undefined,
      termsAccepted: termsAcceptedError ?? undefined,
    });

    if (nameError || emailError || phoneError || termsAcceptedError) {
      return;
    }

    setSubmitting(true);

    const heallyUtmSource = getHeallyUtmSource();
    const nameParts = name.trim().split(/\s+/);
    const payload = {
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" "),
      email: email.trim().toLowerCase(),
      phone,
      state: "OK",
      state_of_evaluation: "OK",
      timezone: "CST",
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: heallyUtmSource,
      },
    };

    const preset = btoa(JSON.stringify(payload))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    window.location.href = `https://mymmj.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}&utm_source=${encodeURIComponent(heallyUtmSource)}`;
  }

  return (
    <form className="flex flex-col gap-3.5 sm:gap-4" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-1.5">
        <Label htmlFor="leadName" className="text-sm font-semibold text-[#0E3B2E]">
          Name (First &amp; Last)*
        </Label>
        <Input
          id="leadName"
          name="leadName"
          placeholder="Jane Doe"
          autoComplete="name"
          enterKeyHint="next"
          value={name}
          onChange={handleNameChange}
          aria-invalid={!!errors.name}
          className={fieldClassName}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="leadEmail" className="text-sm font-semibold text-[#0E3B2E]">
          Email*
        </Label>
        <Input
          id="leadEmail"
          name="leadEmail"
          type="email"
          placeholder="jane@example.com"
          autoComplete="email"
          enterKeyHint="next"
          value={email}
          onChange={handleEmailChange}
          aria-invalid={!!errors.email}
          className={fieldClassName}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="leadPhone" className="text-sm font-semibold text-[#0E3B2E]">
          Phone Number*
        </Label>
        <Input
          id="leadPhone"
          name="leadPhone"
          type="tel"
          inputMode="numeric"
          placeholder="555-555-5555"
          autoComplete="tel"
          enterKeyHint="done"
          value={phone}
          onChange={handlePhoneChange}
          aria-invalid={!!errors.phone}
          className={fieldClassName}
        />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
      </div>

      <div className="mt-0.5 grid gap-1.5">
        <div className="flex items-start gap-2.5">
          <Checkbox
            id="leadTermsAccepted"
            name="leadTermsAccepted"
            className="mt-0.5 size-4 shrink-0 rounded-[4px] border-[#0E3B2E]/40 bg-white data-checked:border-[#0E3B2E] data-checked:bg-[#0E3B2E]"
            checked={termsAccepted}
            onCheckedChange={(checked) => handleTermsAcceptedChange(checked === true)}
            aria-invalid={!!errors.termsAccepted}
          />
          <Label
            htmlFor="leadTermsAccepted"
            className="min-w-0 flex-1 text-sm leading-snug font-normal text-[#0E3B2E]/85"
          >
            I accept the{" "}
            <Link
              href="/terms-of-use/"
              className="font-medium underline underline-offset-2 decoration-[#0E3B2E]/35 transition hover:decoration-[#0E3B2E]"
              onClick={(e) => e.stopPropagation()}
            >
              Terms and Conditions
            </Link>
          </Label>
        </div>
        {errors.termsAccepted && (
          <p className="text-sm text-destructive">{errors.termsAccepted}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="group mt-1 h-12 w-full touch-manipulation gap-2 rounded-full bg-[#0E3B2E] px-6 text-base font-semibold text-white shadow-[0_14px_28px_-12px_rgba(14,59,46,0.65)] transition-all hover:-translate-y-0.5 hover:bg-[#124A3A] hover:shadow-[0_18px_32px_-12px_rgba(14,59,46,0.7)] active:translate-y-0 disabled:translate-y-0 disabled:opacity-70 sm:h-auto sm:px-7 sm:py-4 sm:text-[15px]"
      >
        {submitting ? (
          "Processing..."
        ) : (
          <>
            Get Your Card
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </Button>
    </form>
  );
}
