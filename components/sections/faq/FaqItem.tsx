"use client";

import { ChevronUp } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

type FaqItemProps = {
  question: string;
  answer: string;
  isActive: boolean;
  onToggle: () => void;
};

export default function FaqItem({ question, answer, isActive, onToggle }: FaqItemProps) {
  // Reveal dikelola sendiri (bukan lewat ScrollReveal) karena className
  // elemen ini dinamis (toggle "active") — lihat lib/use-in-view.ts.
  const { ref, inView } = useInView<HTMLDivElement>();

  const className = [
    "faq-item",
    inView ? "in-view" : "",
    isActive ? "active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} ref={ref}>
      <div className="faq-question" onClick={onToggle}>
        <p>{question}</p>
        <ChevronUp className="faq-arrow" aria-hidden />
      </div>
      <div className="faq-answer">
        <div className="faq-answer-content">{answer}</div>
      </div>
    </div>
  );
}
