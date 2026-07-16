type ProblemCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProblemCard({ number, title, description }: ProblemCardProps) {
  return (
    <div className="problem-card">
      <span className="number">{number}</span>
      <p className="card-title">{title}</p>
      <p className="card-desc">{description}</p>
    </div>
  );
}
