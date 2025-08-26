import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import WhatsAppCategories from '@/components/WhatsAppCategories';
import CoreBenefits from '@/components/CoreBenefits';
import SocialProof from '@/components/SocialProof';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <WhatsAppCategories />
        <CoreBenefits />
        <SocialProof />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
