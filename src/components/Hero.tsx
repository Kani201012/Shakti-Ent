import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Calculator, 
  X,
  Award,
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { InteractiveWallStack } from './InteractiveWallStack';

interface HeroProps {
  onGetQuoteClick: () => void;
  onHeightSelected: (h: 6 | 7 | 8) => void;
  onWatchInstallationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetQuoteClick,
  onHeightSelected,
  onWatchInstallationClick,
}) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="hero" className="relative pt-6 pb-16 sm:pt-10 sm:pb-20 overflow-hidden bg-[#ffffff]">
      {/* Subtle Google radial gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-[#e8f0fe]/50 via-[#f8f9fa] to-transparent pointer-events-none" />

      {/* Production & Inventory Verification Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 relative z-10">
        <div className="py-2 px-4 rounded-full bg-white border border-[#dadce0] shadow-2xs flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-[#3c4043]">
            <span className="w-2 h-2 rounded-full bg-[#137333] shrink-0" />
            <span className="font-semibold text-[#1a73e8]">সাঁইথিয়া ইয়ার্ডের বর্তমান মজুত:</span>
            <span className="text-[#202124]">১২,৫০০+ রানিং ফুট স্ল্যাব ও ১,৮০০টি এইচ-পিলার তাৎক্ষণিক সরবরাহের জন্য প্রস্তুত</span>
          </div>
          <div className="flex items-center gap-2 text-[#5f6368] font-medium hidden md:flex">
            <Award className="w-3.5 h-3.5 text-[#ea8600]" />
            <span>আইএস ৪৫৬ ও ১৩৪৩ মানদণ্ড অনুমোদিত</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Formal Value Proposition */}
          <div className="lg:col-span-6 space-y-5 text-left flex flex-col justify-between h-full">
            <div>
              {/* Category chip */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
                <ShieldCheck className="w-4 h-4 text-[#1a73e8]" />
                <span>বীরভূম জেলার নির্ভরযোগ্য প্রিকাস্ট বাউন্ডারি প্রস্তুতকারক</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[44px] font-bold text-[#202124] tracking-tight leading-[1.25]">
                উন্নত প্রযুক্তির প্রিকাস্ট{' '}
                <span className="text-[#1a73e8]">
                  বাউন্ডারি প্রাচীর
                </span>{' '}
                নির্মাণ
              </h1>

              {/* Subtext in Formal Bengali */}
              <p className="mt-3.5 text-base sm:text-lg text-[#5f6368] leading-relaxed font-normal">
                প্রি-স্ট্রেসড কংক্রিট প্রযুক্তিতে নির্মিত <strong className="text-[#202124] font-semibold">"চায়না প্রাচীর"</strong>—মাত্র <strong className="text-[#1a73e8] font-bold">২৪ ঘণ্টার মধ্যে</strong> সংস্থাপনযোগ্য। প্রচলিত ইঁটের গাঁথুনির তুলনায় <span className="text-[#137333] font-semibold">প্রায় ৫০% ব্যয় সাশ্রয়ী</span> এবং প্লাস্টার ও রঙের প্রয়োজনীয়তামুক্ত আজীবন সুরক্ষিত সীমানা প্রাচীর।
              </p>
            </div>

            {/* Formal Manufacturer Commitment Card */}
            <div className="p-4 bg-[#f8f9fa] border border-[#dadce0] rounded-2xl text-xs sm:text-sm text-[#3c4043] leading-relaxed">
              <span className="text-[#1a73e8] font-bold block mb-1">সাঁইথিয়ায় নিজস্ব উৎপাদন ও সরবরাহ কেন্দ্র:</span>
              আমাদের কারখানায় মেকানাইজড ভাইব্রেটিং টেবিলে তৈরি এম-৩০ গ্রেড উচ্চ ঘনত্বের স্ল্যাব এবং উচ্চ ক্ষমতাসম্পন্ন স্প্রিং তারের এইচ-পিলার সরাসরি আপনার প্রকল্পে পৌঁছে অভিজ্ঞ প্রকৌশলীদের তত্ত্বাবধানে সংস্থাপন করা হয়।
            </div>

            {/* Key Advantages Chips */}
            <div className="grid grid-cols-3 gap-2.5 text-xs font-medium text-[#3c4043]">
              <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-full border border-[#dadce0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0" />
                <span>প্লাস্টার অপ্রয়োজনীয়</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-full border border-[#dadce0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0" />
                <span>১০০% স্থানান্তরযোগ্য</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2.5 rounded-full border border-[#dadce0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0" />
                <span>১ দিনে সংস্থাপন</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons (Google Pill Style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onGetQuoteClick}
                className="py-3.5 px-7 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow transition active:scale-98"
              >
                <Calculator className="w-4 h-4" />
                <span>প্রকল্প ব্যয় প্রাক্কলন করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setShowVideoModal(true)}
                className="py-3.5 px-6 rounded-full bg-white hover:bg-[#f8f9fa] text-[#3c4043] border border-[#dadce0] font-medium text-sm flex items-center justify-center gap-2.5 transition active:scale-98"
              >
                <div className="w-6 h-6 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-[#1a73e8] ml-0.5" />
                </div>
                <span>সংস্থাপন প্রক্রিয়ার ভিডিও</span>
              </button>
            </div>

            {/* Google Stat Cards */}
            <div className="pt-2 border-t border-[#dadce0] grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0]">
                <div className="text-2xl sm:text-3xl font-bold text-[#202124]">৪৫০+</div>
                <div className="text-xs text-[#5f6368] font-normal mt-0.5">বীরভূমে সফল প্রকল্প</div>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0]">
                <div className="text-2xl sm:text-3xl font-bold text-[#1a73e8]">২৪ ঘণ্টায়</div>
                <div className="text-xs text-[#5f6368] font-normal mt-0.5">সম্পূর্ণ সংস্থাপন</div>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0]">
                <div className="text-2xl sm:text-3xl font-bold text-[#137333]">৫০%</div>
                <div className="text-xs text-[#5f6368] font-normal mt-0.5">খরচ সাশ্রয়</div>
              </div>
            </div>
          </div>

          {/* Right Column: Toggleable 3D-Effect Blueprint Graphic */}
          <div className="lg:col-span-6">
            <InteractiveWallStack
              initialHeight={6}
              onSelectHeight={onHeightSelected}
              onExploreCalculator={onGetQuoteClick}
            />
          </div>
        </div>
      </div>

      {/* Video Demonstration Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-[#202124]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#dadce0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f1f3f4] text-[#5f6368] transition"
              aria-label="ভিডিও বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1967d2]">
                প্রকল্প ভিডিও চিত্র
              </span>
              <span className="text-xs text-[#5f6368]">• সাঁইথিয়া কারখানা প্রজেক্ট</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mb-4">
              ১ দিনে ২০০ ফুট চায়না প্রাচীর সংস্থাপন
            </h3>

            {/* Video Player Canvas */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#202124] flex items-center justify-center mb-6">
              <svg viewBox="0 0 600 340" className="w-full h-full">
                <rect width="600" height="340" fill="#1e293b" />
                <path d="M 0 280 L 600 280" stroke="#475569" strokeWidth="2" />
                {/* Visualizing installation timelapse */}
                <rect x="80" y="80" width="28" height="200" fill="#64748b" />
                <rect x="280" y="80" width="28" height="200" fill="#64748b" />
                <rect x="480" y="80" width="28" height="200" fill="#64748b" />
                <rect x="108" y="245" width="172" height="32" fill="#94a3b8" stroke="#cbd5e1" />
                <rect x="108" y="210" width="172" height="32" fill="#94a3b8" stroke="#cbd5e1" />
                <rect x="108" y="175" width="172" height="32" fill="#94a3b8" stroke="#cbd5e1" />
                <rect x="308" y="245" width="172" height="32" fill="#94a3b8" stroke="#cbd5e1" />
                <rect x="308" y="210" width="172" height="32" fill="#94a3b8" stroke="#cbd5e1" />
                {/* Dropping slab animation effect */}
                <rect x="108" y="120" width="172" height="32" fill="#38bdf8" opacity="0.8" />
                <line x1="194" y1="90" x2="194" y2="120" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 2" />
                <text x="300" y="50" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                  মেকানাইজড খাঁজে কংক্রিট স্ল্যাব নামানোর দৃশ্য
                </text>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div className="text-white text-xs">
                  <span className="font-bold">স্থান:</span> সাঁইথিয়া বাইপাস প্রকল্প • ২০০ ফুট দৈর্ঘ্য • মোট সংস্থাপন সময়: ৬ ঘণ্টা ৩০ মিনিট
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#dadce0]">
              <span className="text-xs text-[#5f6368]">
                ভিডিও রেকর্ডিং সৌজন্যে: শক্তি এন্টারপ্রাইজ সাইট ইঞ্জিনিয়ারিং টিম
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowVideoModal(false);
                  onGetQuoteClick();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold shadow-xs transition"
              >
                ব্যয় প্রাক্কলন দেখুন
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
