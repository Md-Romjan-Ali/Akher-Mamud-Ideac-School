import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HeadTeacherSection from "@/components/HeadTeacherSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AdmissionCircular from "@/components/AddmissionSurcular";
import FAQSection from "@/components/FAQSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
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
      <Footer />
    </div>
  );
}
