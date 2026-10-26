import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Testimonials from "../components/Testimonials.jsx";
import HomeValues from "../components/HomeValues.jsx";
import ComplianceCalendar from "../components/ComplianceCalendar.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services limit={4} />
      <HomeValues />
      <ComplianceCalendar />
      <Testimonials />
      <CtaBand />
    </>
  );
}
