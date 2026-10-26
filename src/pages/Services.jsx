import PageHero from "../components/PageHero.jsx";
import bannerImg from "../../assets/services.png";
import Services from "../components/Services.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={bannerImg}
        eyebrow="Our services"
        title="Tax, registration and audit services under one roof."
        text="Pick a service below or call us and we will tell you what your business needs."
        cardTitle="Most requested"
        points={["GST & Income Tax", "Company Registration", "ROC & TDS Filing", "Audit & Assurance"]}
        cardLink={{ to: "/contact", label: "Enquire about a service" }}
      />
      <Services />
      <CtaBand />
    </>
  );
}