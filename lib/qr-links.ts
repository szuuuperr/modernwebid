// Data halaman redirect QR (app/q/[code]). Satu sumber untuk halaman, metadata,
// dan daftar kode yang dirender statis.
//
// Cara pakai: cetak QR code berisi URL `{SITE_URL}/q/<code>` (mis.
// modernweb.id/q/undangan). Saat dipindai, pengunjung dibawa ke halaman link
// khusus kode itu. Ubah target link cukup dengan mengedit data di bawah.

import { INSTAGRAM_URL, SITE_URL, WA_LINK_DEFAULT } from "./site";

export type QrLinkType =
  | "googleReview"
  | "whatsapp"
  | "instagram"
  | "website"
  | "tiktok"
  | "youtube"
  | "linkedin"
  | "facebook";

export type QrLink = {
  type: QrLinkType;
  label: string;
  url: string;
};

export type QrRedirect = {
  /** Kode pendek yang muncul di URL: /q/<code> */
  code: string;
  /** Nama bisnis yang tampil di bagian atas halaman */
  businessName: string;
  /** Deskripsi singkat di bawah nama bisnis */
  description: string;
  /** Logo bisnis untuk avatar bulat (opsional; tanpa ini tampil placeholder) */
  logoUrl?: string;
  /** Daftar link yang ditampilkan; urutan array = urutan tampil */
  links: QrLink[];
};

// Google Review memakai URL khusus per bisnis; ganti dengan link review Anda.
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=ModernWeb+jasa+pembuatan+website+review";

const MODERNWEB_DESCRIPTION =
  "Jasa pembuatan website profesional untuk bisnis Anda.";

export const QR_REDIRECTS: QrRedirect[] = [
  {
    code: "06c4ba96-01f3-440c-bb48-f6edaceca6f7",
    businessName: "ModernWeb",
    description: MODERNWEB_DESCRIPTION,
    logoUrl: "/assets/iRjKsumlllAOUFQjF7j1DcasTU.svg",
    links: [
      { type: "googleReview", label: "Google Review", url: GOOGLE_REVIEW_URL },
      { type: "whatsapp", label: "WhatsApp", url: WA_LINK_DEFAULT },
      { type: "instagram", label: "Instagram", url: INSTAGRAM_URL },
      { type: "website", label: "Website", url: SITE_URL },
    ],
  },
  {
    code: "b94f636d-22af-49f4-8505-4d76412b9e29",
    businessName: "ModernWeb",
    description: MODERNWEB_DESCRIPTION,
    logoUrl: "/assets/iRjKsumlllAOUFQjF7j1DcasTU.svg",
    links: [
      { type: "googleReview", label: "Google Review", url: GOOGLE_REVIEW_URL },
      { type: "whatsapp", label: "WhatsApp", url: WA_LINK_DEFAULT },
      { type: "instagram", label: "Instagram", url: INSTAGRAM_URL },
      { type: "website", label: "Website", url: SITE_URL },
    ],
  },
  {
    code: "3d7323fb-c0b2-491a-8e60-5ce9fe4e512a",
    businessName: "ModernWeb",
    description: MODERNWEB_DESCRIPTION,
    logoUrl: "/assets/iRjKsumlllAOUFQjF7j1DcasTU.svg",
    links: [
      { type: "googleReview", label: "Google Review", url: GOOGLE_REVIEW_URL },
      { type: "whatsapp", label: "WhatsApp", url: WA_LINK_DEFAULT },
      { type: "instagram", label: "Instagram", url: INSTAGRAM_URL },
      { type: "website", label: "Website", url: SITE_URL },
    ],
  },
  {
    code: "bad918c0-c9ca-4f89-b40e-b265e7f92f30",
    businessName: "ModernWeb",
    description: "Jasa pembuatan website company profile untuk berbagai kebutuhan bisnis",
    logoUrl: "/assets/logo-blue.svg",
    links: [
      {
        type: "googleReview",
        label: "Google Review",
        url: "https://search.google.com/local/writereview?placeid=ChIJ1TtVTRpZei4Ri1bdOgBk-cA",
      },
      {
        type: "whatsapp",
        label: "WhatsApp",
        url: "https://wa.me/6285875874712?text=Mau%20mulai%20bikin%20website!%20",
      },
      {
        type: "instagram",
        label: "Instagram",
        url: "https://www.instagram.com/modernweb.id/",
      },
      {
        type: "tiktok",
        label: "Tiktok",
        url: "https://www.tiktok.com/",
      },
      {
        type: "facebook",
        label: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61591823442076",
      },
      {
        type: "youtube",
        label: "Youtube",
        url: "https://www.youtube.com/",
      },
      {
        type: "website",
        label: "Website",
        url: "https://www.modernwebid.com/",
      },
      
    ],
  },
  {
    code: "8f2d0b91-0e02-4d92-b15f-cb6f12d98e4b",
    businessName: "ModernWeb",
    description: MODERNWEB_DESCRIPTION,
    logoUrl: "/assets/iRjKsumlllAOUFQjF7j1DcasTU.svg",
    links: [
      { type: "googleReview", label: "Google Review", url: GOOGLE_REVIEW_URL },
      { type: "whatsapp", label: "WhatsApp", url: WA_LINK_DEFAULT },
      { type: "instagram", label: "Instagram", url: INSTAGRAM_URL },
      { type: "website", label: "Website", url: SITE_URL },
    ],
  },
];

export function getQrRedirect(code: string) {
  return QR_REDIRECTS.find((redirect) => redirect.code === code);
}
