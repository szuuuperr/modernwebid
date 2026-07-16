import { ArrowUpRight } from "lucide-react";

type SolvingRowProps = {
  title: string;
  description: string;
};

export default function SolvingRow({ title, description }: SolvingRowProps) {
  return (
    <div className="solving-row">
      <div className="solving-icon">
        <ArrowUpRight aria-hidden />
      </div>
      <div className="solving-row-title">
        <h3>{title}</h3>
      </div>
      <div className="solving-row-desc">
        <p>{description}</p>
      </div>
    </div>
  );
}
