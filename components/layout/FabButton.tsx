import { ArrowUpRight } from "lucide-react";
import { WA_LINK_DEFAULT } from "@/lib/site";

// Tombol WhatsApp melayang di pojok halaman.
export default function FabButton() {
  return (
    <a className="fab-button" href={WA_LINK_DEFAULT}>
      <ArrowUpRight aria-hidden />
    </a>
  );
}
