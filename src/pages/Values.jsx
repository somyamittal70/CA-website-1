import PageHero from "../components/PageHero.jsx";
import bannerImg from "../../assets/values.png";
import CoreValues from "../components/CoreValues.jsx";
import CtaBand from "../components/CtaBand.jsx";
import WhyChooseUs from "../components/WhyChosseUs.jsx";
import Process from "../components/Process.jsx";
import Faq from "../components/Faq.jsx";

export default function ValuesPage() {
  return (
    <>
      <PageHero
        image={bannerImg}
        eyebrow="Our core values"
        title="The values behind every file we handle."
        text="Seven principles guide how we work with every client, large or small."
        cardTitle="What we stand for"
        points={["Integrity", "Commitment", "Teamwork", "Responsibility"]}
        cardLink={{ to: "/services", label: "See our services" }}
      />
      <CoreValues />
      <WhyChooseUs />
      <Process />
      <Faq />
      <CtaBand />
    </>
  );
}
