import ProblemCard from "./ProblemCard";

const PROBLEMS = [
  {
    number: "01",
    title: "Gak Tahu Mulai Dari Mana",
    description:
      "Bingung menentukan desain yang cocok, menentukan yang sesuai dengan tujuan bisnis anda, dan menentukan fitur apa yang harus ada di website bisnis anda",
  },
  {
    number: "02",
    title: "Pusing Mikirin Domain, Hosting, dll",
    description:
      "Pusing atau bahkan gak tahu urusan domain, hosting, deployment, hingga setting email bisnis yang terasa rumit dan memakan waktu",
  },
  {
    number: "03",
    title: "Takut Hasil Gak Sesuai Ekspetasi",
    description:
      "Masih khawatir sudah keluar biaya, tapi hasilnya gak sesuai dengan ekspetasi, gak profesional, atau malah gak cocok dengan bisnis anda",
  },
];

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <h2 className="problem-title">Mau Bikin Website, Tapi..</h2>
      <div className="problem-cards">
        {PROBLEMS.map((problem) => (
          <ProblemCard key={problem.number} {...problem} />
        ))}
      </div>
    </section>
  );
}
