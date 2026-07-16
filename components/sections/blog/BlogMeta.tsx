import { Clock } from "lucide-react";
import { formatPostDate } from "@/lib/blog";

// Baris tanggal artikel (icon jam + tanggal terformat id-ID).
export default function BlogMeta({ date }: { date: string }) {
  return (
    <span className="blog-meta">
      <Clock aria-hidden />
      <time dateTime={date}>{formatPostDate(date)}</time>
    </span>
  );
}
