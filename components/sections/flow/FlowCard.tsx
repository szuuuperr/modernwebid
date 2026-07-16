import type { LucideIcon } from "lucide-react";

type FlowCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FlowCard({ icon: Icon, title, description }: FlowCardProps) {
  return (
    <div className="flow-card">
      <div className="flow-icon">
        <Icon aria-hidden />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
