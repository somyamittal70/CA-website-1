import { Mail } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import bannerImg from "../../assets/contact.png";
import Contact from "../components/Contact.jsx";
import { firm } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={bannerImg}
        eyebrow="Contact M Kaushik & Co"
        title="Talk to a Chartered Accountant today."
        text="Visit our office, call us or send a message. We will get back to you soon."
        primary={{ label: `Call ${firm.phones[0].label}`, to: firm.phones[0].href }}
        secondary={{ label: "Email us", to: `mailto:${firm.email}`, icon: Mail }}
        cardTitle="Visit or call us"
        points={["Najafgarh, New Delhi 110043", "Open daily, closes 7 pm", firm.phones[0].label, "camkaushikandco@gmail.com"]}
        cardLink={{ to: "/services", label: "Browse our services" }}
      />
      <Contact />
    </>
  );
}