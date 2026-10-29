import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Check, 
  X, 
  TrendingUp,
  Coins,
  Building2
} from 'lucide-react';

export const WhyPrecast: React.FC = () => {
  const features = [
    {
      icon: Coins,
      title: '৫০% পর্যন্ত প্রকল্প ব্যয় সাশ্রয়',
      desc: 'টানা নর্দমা খনন, বালুকা-সিমেন্ট মিশ্রণ, ইট এবং দীর্ঘমেয়াদী রাজমিস্ত্রির দৈনিক মজুরির অনাবশ্যক ব্যয় হ্রাস পায়।',
      stat: 'প্রতি রানিং ফুটে ৫০০-৬০০ টাকা পর্যন্ত সাশ্রয়',
      color: 'bg-[#e6f4ea] text-[#137333]',
    },
    {
      icon: Zap,
      title: 'দ্রুততম সংস্থাপন (মাত্র ২৪ ঘণ্টায়)',
      desc: 'আমাদের কারিগরি দল মেকানাইজড অগারের মাধ্যমে একদিনেই ২০০ রানিং ফুট প্রাচীর সুদৃঢ়ভাবে সংস্থাপন করে।',
      stat: 'ইঁটের নির্মাণ প্রক্রিয়ার চেয়ে ৫ গুণ দ্রুত সম্পন্ন',
      color: 'bg-[#e8f0fe] text-[#1a73e8]',
    },
    {
      icon: ShieldCheck,
      title: 'প্লাস্টার ও রঙের প্রয়োজনীয়তামুক্ত',
      desc: 'হাই-ফ্রিকোয়েন্সি ভাইব্রেশনে প্রস্তুত এম-৩০ গ্রেড কংক্রিট। স্যাঁতসেঁতে আর্দ্রতা, নোনা ধরা বা ফাটল সৃষ্টির ঝুঁকি নেই।',
      stat: '৫০ বছরের অধিক কাঠামোগত পরমায়ু',
      color: 'bg-[#fef7e0] text-[#b06000]',
    },
    {
      icon: Building2,
      title: 'সাঁইথিয়ায় নিজস্ব উৎপাদন ও সরবরাহ',
      desc: 'মাঠপলসার কারখানা থেকে সরাসরি নিজস্ব যানবাহনে প্রকল্প এলাকায় সরবরাহ। কোনো মধ্যস্বত্বভোগী নেই।',
      stat: 'বীরভূম জেলার যে কোনো ব্লকে দ্রুত সরবরাহ',
      color: 'bg-[#fce8e6] text-[#c5221f]',
    },
  ];

  const comparisonRows = [
    {
      parameter: '২০০ ফুট বাউন্ডারি সম্পন্ন করার সময়কাল',
      precast: 'মাত্র ১ থেকে ২ কার্যদিবস (তাৎক্ষণিক কার্যকর)',
      brick: '১৫ থেকে ২৫ দিন (খনন, কিউরিং, গাঁথুনি, প্লাস্টার)',
      precastAdvantage: true,
    },
    {
      parameter: 'প্রতি রানিং ফুটে সামগ্রিক ব্যয় (উপকরণ ও সংস্থাপন সহ)',
      precast: 'আনুমানিক ৩৮০ - ৪৮০ টাকা / রানিং ফুট',
      brick: 'আনুমানিক ৯৫০ - ১২০০ টাকা / রানিং ফুট',
      precastAdvantage: true,
    },
    {
      parameter: 'প্লাস্টার ও রঙ প্রয়োগের আবশ্যকতা',
      precast: 'সম্পূর্ণ অপ্রয়োজনীয় (মসৃণ স্টিল-শাটার ফিনিশ)',
      brick: 'বাধ্যতামূলক (অন্যথায় নোনা লেগে ইট খসে পড়ে)',
      precastAdvantage: true,
    },
    {
      parameter: 'মাটি খনন ও পরিবেশগত প্রভাব',
      precast: 'শুধুমাত্র প্রতি ৭ ফুট অন্তর নির্দিষ্ট বোরহোল গর্ত',
      brick: 'সম্পূর্ণ সীমানা জুড়ে ৩ ফুট গভীর টানা নর্দমা খনন',
      precastAdvantage: true,
    },
    {
      parameter: 'ভবিষ্যতে স্থানান্তর ও পুনঃব্যবহারযোগ্যতা',
      precast: '১০০% অক্ষত অবস্থায় খুলে অন্যত্র পুনঃসংস্থাপনযোগ্য',
      brick: 'ভাঙলে ধ্বংসাবশেষ ও রাবিশ, কোনো আর্থিক মূল্য নেই',
      precastAdvantage: true,
    },
    {
      parameter: 'নির্মাণস্থলে জল ও কিউরিং নির্ভরতা',
      precast: 'কারখানাতেই সম্পূর্ণ কিউরিং সম্পন্ন, সাইটে জলের প্রয়োজন নেই',
      brick: 'টানা ১৪ দিন ধরে হাজার হাজার লিটার জল দিতে হয়',
      precastAdvantage: true,
    },
  ];

  return (
    <section id="why-precast" className="py-16 sm:py-24 bg-white relative border-t border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Google Material Design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>প্রযুক্তিগত তুলনামূলক বিশ্লেষণ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            সনাতন ইঁটের প্রাচীরের তুলনায় প্রিকাস্ট "চায়না প্রাচীর" কেন অধিক উপযোগী?
          </h2>
          <p className="mt-3 text-base text-[#5f6368] font-normal">
            বীরভূম ও পার্শ্ববর্তী অঞ্চলের চার শতাধিক জমির মালিক, চালকল ও বাণিজ্যিক প্রতিষ্ঠানের প্রথম পছন্দ।
          </p>
        </div>

        {/* 4 Feature Cards in Google Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="bg-[#f8f9fa] border border-[#dadce0] rounded-3xl p-6 transition-all duration-300 hover:shadow-sm hover:bg-white flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${feat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#202124] mb-2 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5f6368] leading-relaxed mb-4 font-normal">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#dadce0] text-xs font-semibold text-[#1a73e8]">
                  {feat.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Head-to-Head Comparison Table: Google Workspace style */}
        <div className="bg-white border border-[#dadce0] rounded-3xl overflow-hidden shadow-2xs">
          <div className="p-6 bg-[#f8f9fa] border-b border-[#dadce0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#202124]">
                মুখোমুখি প্রযুক্তিগত ও আর্থিক তুলনামূলক বিবরণ
              </h3>
              <p className="text-xs sm:text-sm text-[#5f6368] mt-0.5 font-normal">
                শক্তি প্রিকাস্ট চায়না প্রাচীর বনাম প্রচলিত ১০ ইঞ্চি ইঁটের বাউন্ডারি দেয়াল
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-[#137333]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#137333] inline-block" /> শক্তি চায়না প্রাচীর
              </span>
              <span className="flex items-center gap-1.5 text-[#5f6368]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#80868b] inline-block" /> প্রচলিত ইঁটের প্রাচীর
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#dadce0] overflow-x-auto">
            {comparisonRows.map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-12 p-4 text-xs sm:text-sm items-center hover:bg-[#f8f9fa] transition ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                }`}
              >
                <div className="col-span-12 sm:col-span-5 font-semibold text-[#202124] mb-2 sm:mb-0">
                  {row.parameter}
                </div>
                
                {/* Precast column */}
                <div className="col-span-6 sm:col-span-4 flex items-center gap-2 text-[#137333] font-semibold pr-2">
                  <div className="w-5 h-5 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.precast}</span>
                </div>

                {/* Brick column */}
                <div className="col-span-6 sm:col-span-3 flex items-center gap-2 text-[#5f6368] font-normal">
                  <div className="w-5 h-5 rounded-full bg-[#fce8e6] text-[#c5221f] flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.brick}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#f8f9fa] border-t border-[#dadce0] text-center text-xs text-[#5f6368] font-normal">
            <span className="font-semibold text-[#202124]">সারসংক্ষেপ: </span>
            প্রিকাস্ট চায়না প্রাচীর ব্যবহারে সর্বমোট নির্মাণ বাজেটে গড়ে প্রায় ৪৫% থেকে ৫৫% নগদ অর্থ সাশ্রয় হয় এবং প্রায় ৩ সপ্তাহ সময় বাঁচে।
          </div>
        </div>
      </div>
    </section>
  );
};
