import { Check, Sparkles, Plus } from "lucide-react";
import { waLink } from "@/lib/site";
import CountUp from "./CountUp";

export type PriceFeature = {
  label: string;
  included: boolean;
};

export type PricePlan = {
  name: string;
  description: string;
  currentPrice: string;
  oldPrice: string;
  discount: string;
  features: PriceFeature[];
  recommended?: boolean;
};

function PriceCardBody({ plan }: { plan: PricePlan }) {
  return (
    <>
      <div className="price-card-info">
        <h3 className="price-card-name">{plan.name}</h3>
        <p className="price-card-desc">{plan.description}</p>
        <div className="price-card-price">
          {/* Number counter: harga naik dari 0 saat kartu masuk viewport */}
          <CountUp className="current-price" value={plan.currentPrice} />
          <p className="old-price">{plan.oldPrice}</p>
          <div className="price-card-discount">
            <span className="gradient-text-blue">{plan.discount}</span>
          </div>
        </div>
      </div>
      <div className="price-card-features">
        {plan.features.map((feature) => (
          <div
            key={feature.label}
            className={feature.included ? "price-feature" : "price-feature disabled"}
          >
            {feature.included ? <Check aria-hidden /> : <Plus aria-hidden />}
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
      <a
        href={waLink(`Mau mulai bikin website dengan ${plan.name}`)}
        className="price-card-button"
      >
        Pilih Paket Layanan
      </a>
    </>
  );
}

export default function PriceCard({ plan }: { plan: PricePlan }) {
  if (plan.recommended) {
    return (
      <div className="price-card-recomendation">
        <div className="container-recomendation">
          <p className="title-recomendation">Paling Banyak Diminati</p>
          <Sparkles aria-label="Paket Rekomendasi" />
        </div>
        <div className="price-container-info">
          <PriceCardBody plan={plan} />
        </div>
      </div>
    );
  }

  return (
    <div className="price-card">
      <PriceCardBody plan={plan} />
    </div>
  );
}
