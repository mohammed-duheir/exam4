import React from 'react';
import Hero from '../components/home/Hero';
import ServiceFeatures from '../components/home/ServiceFeatures';
import TradeCategories from '../components/home/TradeCategories';
import Testimonials from '../components/home/Testimonials';
import StatsSection from '../components/home/StatsSection';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Al-Muhammadin Import & Export - UAE\'s Leading Trade Company';
  }, []);

  return (
    <div>
      <Hero />
      <ServiceFeatures />
      <StatsSection />
      <TradeCategories />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Home;