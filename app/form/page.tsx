import type { Metadata } from "next";
import FormSection from "@/components/sections/form/FormSection";

export const metadata: Metadata = {
  title: "Formulir Konsultasi Pembuatan Website | ModernWeb",
  description:
    "Isi formulir singkat untuk konsultasi gratis pembuatan website. Ceritakan kebutuhan bisnis Anda, lalu lanjutkan diskusi lewat WhatsApp bersama tim ModernWeb.",
  openGraph: {
    title: "Formulir Konsultasi Pembuatan Website | ModernWeb",
    description:
      "Ceritakan kebutuhan website Anda lewat formulir singkat, lalu konsultasi gratis via WhatsApp bersama tim ModernWeb.",
    siteName: "ModernWeb",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/website-crm-furniture.webp",
        alt: "Contoh website buatan ModernWeb: dashboard CRM furniture",
      },
    ],
  },
};

export default function FormPage() {
  return (
    <>
      <FormSection />
    </>
  );
}
