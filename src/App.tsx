import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyPrecast } from './components/WhyPrecast';
import { CostEstimator } from './components/CostEstimator';
import { ProductShowcase } from './components/ProductShowcase';
import { InstallationProcess } from './components/InstallationProcess';
import { FactoryLocation } from './components/FactoryLocation';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { BookingForm } from './components/BookingForm';
import { StickyDock } from './components/StickyDock';
import { Footer } from './components/Footer';
import { WallEstimateResult } from './utils/calculator';

export default function App() {
  const [selectedHeight, setSelectedHeight] = useState<6 | 7 | 8>(6);
  const [currentEstimate, setCurrentEstimate] = useState<WallEstimateResult | null>(null);
  const [preferredProduct, setPreferredProduct] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = () => {
    scrollToSection('cost-estimator');
  };

  const handleOpenBooking = () => {
    scrollToSection('book-survey');
  };

  const handleBookSurveyWithEstimate = (estimate: WallEstimateResult) => {
    setCurrentEstimate(estimate);
    scrollToSection('book-survey');
  };

  const handleSelectProductForQuote = (productName: string) => {
    setPreferredProduct(productName);
    scrollToSection('book-survey');
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#202124] flex flex-col font-sans selection:bg-[#e8f0fe] selection:text-[#1a73e8]">
      {/* Navigation Bar */}
      <Navbar
        onOpenCalculator={handleOpenCalculator}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Sections in Bengali */}
      <main className="flex-1">
        {/* Dynamic Hero with 3D Blueprint Graphic Stack */}
        <Hero
          onGetQuoteClick={handleOpenCalculator}
          onHeightSelected={(h) => setSelectedHeight(h)}
          onWatchInstallationClick={() => scrollToSection('installation')}
        />

        {/* Feature Highlights & Head-to-Head Brick Comparison */}
        <WhyPrecast />

        {/* Interactive Dynamic Cost Estimator Widget */}
        <CostEstimator
          selectedHeightFromHero={selectedHeight}
          onBookSurvey={handleBookSurveyWithEstimate}
        />

        {/* Product Showcase Grid with Filterable Tabs and Specs */}
        <ProductShowcase
          onSelectProductForQuote={handleSelectProductForQuote}
        />

        {/* 24-Hour Installation Process Walkthrough */}
        <InstallationProcess />

        {/* Factory Location & Regional Birbhum Coverage */}
        <FactoryLocation />

        {/* Regional Birbhum Case Studies & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Booking & Site Survey Form */}
        <BookingForm
          initialEstimate={currentEstimate}
          preferredProduct={preferredProduct}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Sticky Dock for Instant Call & WhatsApp */}
      <StickyDock
        onOpenCalculator={handleOpenCalculator}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
