import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QrRedirectSection from "@/components/sections/qr-redirect/QrRedirectSection";
import { getQrRedirect, QR_REDIRECTS } from "@/lib/qr-links";

// Semua kode dirender statis saat build; kode di luar daftar → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return QR_REDIRECTS.map((redirect) => ({ code: redirect.code }));
}

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const redirect = getQrRedirect(code);
  if (!redirect) return {};

  return {
    title: `${redirect.businessName} | ModernWeb`,
    description: `Pilih link ${redirect.businessName}: Google Review, WhatsApp, Instagram, dan website resmi.`,
    // Halaman ini hanya pintu menuju link lain, bukan konten yang layak
    // diindeks Google. Bisa berubah sewaktu-waktu (target link diganti).
    robots: { index: false, follow: true },
  };
}

export default async function QrRedirectPage({ params }: Props) {
  const { code } = await params;
  const redirect = getQrRedirect(code);
  if (!redirect) notFound();

  return <QrRedirectSection redirect={redirect} />;
}
