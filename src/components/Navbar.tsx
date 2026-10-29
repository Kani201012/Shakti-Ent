import React, { useState } from 'react';
import { Phone, MessageSquare, Calculator, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#dadce0]">
      {/* Top Utility Strip */}
      <div className="bg-[#f8f9fa] border-b border-[#dadce0] px-4 py-1.5 text-xs text-[#5f6368]">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-normal">
          <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="inline-block w-2 h-2 rounded-full bg-[#137333] shrink-0" />
            <span className="font-medium text-[#202124]">
              সাঁইথিয়া কারখানা ইয়ার্ড
            </span>
            <span className="hidden sm:inline text-[#dadce0]">•</span>
            <span className="hidden sm:inline text-[#5f6368]">
              আইএস ৪৫৬ ও ১৩৪৩ মানদণ্ডে প্রস্তুতকৃত প্রিকাস্ট কংক্রিট প্রাচীর
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs shrink-0 font-medium">
            <a
              href="https://wa.me/918640829378?text=%E0%A6%A8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BE%E0%A6%B0%2C%20%E0%A6%B6%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF%20%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C%E0%A5%A4%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%A8%E0%A6%BE%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%9A%E0%A7%80%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%B0%E0%A6%A3%20%E0%A6%93%20%E0%A6%96%E0%A6%B0%E0%A6%9A%20%E0%A6%B8%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%20%E0%A6%85%E0%A6%AC%E0%A6%97%E0%A6%A4%20%E0%A6%B9%E0%A6%A4%E0%A7%87%20%E0%A6%87%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%81%E0%A6%95%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#137333] hover:text-[#0d5926] flex items-center gap-1.5 transition whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>হোয়াটসঅ্যাপ বার্তা</span>
            </a>
            <a
              href="tel:+918640829378"
              className="text-[#1a73e8] hover:text-[#1557b0] flex items-center gap-1.5 transition whitespace-nowrap font-semibold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+৯১ ৮৬৪০৮ ২৯৩৭৮</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar: Sleek, Pristine Google Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-[#1a73e8] text-white flex items-center justify-center font-bold text-base shadow-2xs group-hover:bg-[#1557b0] transition">
              শ
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#202124] tracking-tight whitespace-nowrap group-hover:text-[#1a73e8] transition">
                শক্তি এন্টারপ্রাইজ
              </span>
              <span className="text-[11px] text-[#5f6368] font-normal whitespace-nowrap">
                প্রিকাস্ট কংক্রিট বাউন্ডারি ওয়াল
              </span>
            </div>
          </a>

          {/* Desktop Nav Links: Crisp, Clean, Single-line, No Wrapping */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-medium text-[#5f6368]">
            <a
              href="#hero"
              className="hover:text-[#1a73e8] transition whitespace-nowrap text-[#202124]"
            >
              পরিচিতি
            </a>
            <a
              href="#why-precast"
              className="hover:text-[#1a73e8] transition whitespace-nowrap"
            >
              সুবিধাসমূহ
            </a>
            <a
              href="#cost-estimator"
              className="hover:text-[#1a73e8] transition whitespace-nowrap"
            >
              ব্যয় প্রাক্কলন
            </a>
            <a
              href="#products"
              className="hover:text-[#1a73e8] transition whitespace-nowrap"
            >
              মডেল ও ডিজাইন
            </a>
            <a
              href="#installation"
              className="hover:text-[#1a73e8] transition whitespace-nowrap"
            >
              সংস্থাপন প্রক্রিয়া
            </a>
            <a
              href="#factory-location"
              className="hover:text-[#1a73e8] transition whitespace-nowrap"
            >
              কারখানা ও যোগাযোগ
            </a>
          </nav>

          {/* Header Action Buttons (Google Material 3 Pills) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-4 py-2 rounded-full border border-[#dadce0] text-[#1a73e8] hover:bg-[#f8f9fa] text-xs font-medium transition flex items-center gap-1.5 whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>ব্যয় প্রাক্কলন</span>
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium transition shadow-2xs hover:shadow-xs active:scale-98 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>বিনামূল্যে সাইট পরিদর্শন</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full hover:bg-[#f1f3f4] text-[#5f6368] transition"
            aria-label="মেনু খুলুন"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#dadce0] px-4 pt-3 pb-6 space-y-1 shadow-lg">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#202124] hover:bg-[#f8f9fa]"
          >
            প্রাতিষ্ঠানিক পরিচিতি
          </a>
          <a
            href="#why-precast"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#202124] hover:bg-[#f8f9fa]"
          >
            প্রিকাস্ট প্রাচীরের সুবিধাসমূহ
          </a>
          <a
            href="#cost-estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#1a73e8] hover:bg-[#e8f0fe] font-semibold"
          >
            ব্যয় প্রাক্কলন ক্যালকুলেটর
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#202124] hover:bg-[#f8f9fa]"
          >
            পণ্য ও মডেলের বিবরণ
          </a>
          <a
            href="#installation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#202124] hover:bg-[#f8f9fa]"
          >
            সংস্থাপন প্রক্রিয়া
          </a>
          <a
            href="#factory-location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 rounded-xl text-sm font-medium text-[#202124] hover:bg-[#f8f9fa]"
          >
            কারখানা ইয়ার্ড ও যোগাযোগ
          </a>

          <div className="pt-4 border-t border-[#dadce0] grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="py-2.5 px-3 rounded-full border border-[#dadce0] text-[#1a73e8] text-xs font-medium text-center"
            >
              ব্যয় প্রাক্কলন
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-2.5 px-3 rounded-full bg-[#1a73e8] text-white text-xs font-medium text-center shadow-2xs"
            >
              সাইট পরিদর্শন
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
