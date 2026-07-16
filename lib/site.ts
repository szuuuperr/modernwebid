// Data kontak & helper link CTA — satu sumber untuk seluruh komponen.

// Domain situs untuk URL absolut (og:image, sitemap, JSON-LD).
// WAJIB set NEXT_PUBLIC_SITE_URL ke domain produksi saat deploy.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const WHATSAPP_NUMBER = "6285875874712";
export const INSTAGRAM_URL = "https://www.instagram.com/modernweb.std/";
export const EMAIL = "modernwebstudio.idn@gmail.com";

export function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_LINK_DEFAULT = waLink("Mau mulai bikin website! ");
