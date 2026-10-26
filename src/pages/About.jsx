import PageHero from "../components/PageHero.jsx";
import bannerImg from "../../assets/about.png";
import About from "../components/About.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Team from "../components/FirmStats.jsx";
import FirmStats from "../components/FirmStats.jsx";
import Accreditations from "../components/Accreditations.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={bannerImg}
        eyebrow="About M Kaushik & Co"
        title="A local CA firm that explains things plainly and files on time."
        text="We serve individuals, startups, MSMEs and companies across Najafgarh and Delhi NCR."
        cardTitle="Why clients choose us"
        points={["Qualified Chartered Accountants", "On-time filing", "Confidential handling", "Clear, plain advice"]}
        cardLink={{ to: "/values", label: "Read our core values" }}
      />
      <About />
      <FirmStats />
      <Accreditations />
      <CtaBand />
    </>
  );
}