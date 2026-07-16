"use client";

import { useInView } from "@/lib/use-in-view";

type InspirationFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function InspirationFilter({ categories, active, onChange }: InspirationFilterProps) {
  // Reveal dikelola sendiri (bukan lewat ScrollReveal) karena className
  // chip di dalamnya dinamis — lihat lib/use-in-view.ts.
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      className={inView ? "inspiration-filters in-view" : "inspiration-filters"}
      ref={ref}
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === active
              ? "inspiration-filter active"
              : "inspiration-filter"
          }
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
