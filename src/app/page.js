import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/HeroSection"));
const FeatureSection = dynamic(() => import("@/components/FeatureSection"));
const HeadTeacherSection = dynamic(() => import("@/components/HeadTeacherSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));
const AdmissionCircular = dynamic(() => import("@/components/AddmissionSurcular"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const WhyChooseSection = dynamic(() => import("@/components/WhyChooseSection"));

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        <HeroSection />
        <HeadTeacherSection />
        <FeatureSection />
        <AboutSection />
        <AdmissionCircular />
        <WhyChooseSection />
        <ContactSection />
        <FAQSection />
      </main>
    </div>
  );
}