import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { FourPillarsSection } from '../components/home/FourPillarsSection';
import { SpeedReliabilitySection } from '../components/home/SpeedReliabilitySection';
import { MetricsSection } from '../components/home/MetricsSection';
import { IntelligenceCTASection } from '../components/home/IntelligenceCTASection';
import { ContactSection } from '../components/home/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (location.hash === '#contato' || location.hash === '#contact' || searchParams.get('scroll') === 'contato') {
      setTimeout(() => {
        const contactSection = document.getElementById('contato') || document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const firstInput = contactSection.querySelector<HTMLInputElement>('input[name="name"]') || contactSection.querySelector<HTMLInputElement>('input');
            firstInput?.focus({ preventScroll: true });
          }, 500);
        }
      }, 150);
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full">
      {/* TÓPICO 1: HERO SECTION */}
      <HeroSection />

      {/* TÓPICO 2: LET YOUR DATA DRIVE YOUR BUSINESS FORWARD */}
      <FourPillarsSection />

      {/* TÓPICO 3: UNMATCHED SPEED. IMPECCABLE RELIABILITY. */}
      <SpeedReliabilitySection />

      {/* TÓPICO 4: WE ARE PROUD OF THESE NUMBERS */}
      <MetricsSection />

      {/* TÓPICO 5: DATA INTELLIGENCE & CALL TO ACTION */}
      <IntelligenceCTASection />

      {/* TÓPICO 6: CONTATO E INFORMAÇÕES INSTITUCIONAIS */}
      <ContactSection />
    </div>
  );
};
export default HomePage;
