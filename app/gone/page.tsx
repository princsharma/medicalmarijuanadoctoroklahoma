import type { Metadata } from "next";
import { RemovedPage } from "@/components/removed-page";

export const metadata: Metadata = {
  title: "410 Gone | Medical Marijuana Doctor Oklahoma",
  description: "This page has been permanently removed from Medical Marijuana Doctor Oklahoma.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/gone/",
  },
};

export default function GonePage() {
  return <RemovedPage />;
}
