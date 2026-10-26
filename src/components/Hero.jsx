import PageHero from "./PageHero.jsx";
import heroBg from "../../assets/hero-bg.png";

export default function Hero() {
  return (
    <PageHero
      image={heroBg}
      eyebrow="Chartered Accountants in Najafgarh, New Delhi"
      title="Tax, compliance and accounts, handled by people you can call."
      text="From GST returns to company registration, M Kaushik & Co looks after the paperwork so you can run your business."
    />
  );
}
