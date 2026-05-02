import Header from "@component/layout/Header";
import Footer from "@component/layout/Footer";
import HeroSection from "@component/sections/HeroSection";
import TrialBanner from "@component/sections/TrialBanner";
import AboutSection from "@component/sections/AboutSection";
import DataSection from "@component/sections/DataSection";
import BenefitSection from "@component/sections/BenefitSection";
import ConsideringSection from "@component/sections/ConsideringSection";
import CaseSection from "@component/sections/CaseSection";
import PriceSection from "@component/sections/PriceSection";
import CtaSection from "@component/sections/CtaSection";
import ContactSection from "@component/sections/ContactSection";

function App() {
  return (
    <>
      <Header />
      <main id="page-index" className="wrapper">
        <HeroSection />
        <TrialBanner />
        <AboutSection />
        <DataSection />
        <BenefitSection />
        <ConsideringSection />
        <CaseSection />
        <PriceSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
