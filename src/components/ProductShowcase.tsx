import React, { useState } from 'react';
import { Layers, Check, ChevronRight, Eye, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductShowcaseProps {
  onSelectProductForQuote: (productName: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onSelectProductForQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'plain' | 'brick' | 'industrial' | 'decorative'>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'prod-plain',
      name: 'ক্লাসিক প্লেন কংক্রিট স্ল্যাব',
      bengaliName: 'সর্বাধিক প্রচলিত ও সাশ্রয়ী মডেল',
      tagline: 'সুলভ ব্যয়ে দ্রুত পতিত জমি, বাগান ও বাণিজ্যিক প্লটের সীমানা সংরক্ষণে আদর্শ।',
      category: 'plain',
      thickness: '৫০ মিমি (২.০ ইঞ্চি) / ৫৭ মিমি (২.২৫ ইঞ্চি)',
      standardDimensions: '৭ ফুট দৈর্ঘ্য × ১ ফুট উচ্চতা প্রতি স্ল্যাব',
      concreteGrade: 'এম-৩০ উচ্চ ঘনত্বের ভাইব্রেটেড কংক্রিট',
      reinforcement: '৩টি ৩ মিমি হাই-টেনসাইল স্প্রিং স্টিল তার',
      recommendedUse: 'পতিত জমি দখলমুক্ত রাখতে, বাগান, পোল্ট্রি ও ডেইরি ফার্ম, স্কুল ও সীমানা প্রাচীর।',
      finish: 'মসৃণ স্টিল-শাটার ফিনিশ, কোনো প্লাস্টার বা রঙের প্রয়োজন নেই',
      features: [
        'হাইড্রোলিক ভাইব্রেটিং টেবিলে সংকুচিত, কোনো ফাঁপা বা এয়ার পকেট নেই',
        'সর্বাধিক সাশ্রয়ী মূল্যে প্রতি রানিং ফুটে সর্বোচ্চ কাঠামোগত স্থায়িত্ব',
        'ইন্টারলকিং খাঁজ যা নিখুঁতভাবে একের পর এক স্লটে ঢুকে আটকে যায়',
        'ভারী বর্ষা ও গ্রীষ্মের তীব্র তাপেও সম্পূর্ণ ক্ষয়রোধী ও অবিনশ্বর',
      ],
      popularFor: 'পতিত জমি ও কৃষি খামার ঘেরার জন্য',
    },
    {
      id: 'prod-brick',
      name: 'টেক্সচার্ড ব্রিক ডিজাইন স্ল্যাব',
      bengaliName: 'সনাতন ইঁটের গাঁথুনির নান্দনিক রূপ',
      tagline: 'লাল পোড়ামাটি বা স্লট ব্রিক ডিজাইনের আভিজাত্য কিন্তু ১০০% প্রিকাস্ট কংক্রিটের শক্তি।',
      category: 'brick',
      thickness: '৫৭ মিমি (২.২৫ ইঞ্চি) রিইনফোর্সড',
      standardDimensions: '৭ ফুট দৈর্ঘ্য × ১ ফুট উচ্চতা (ইঁটের খাঁজ ছাপ সহ)',
      concreteGrade: 'এম-৩০ পলিমার এনহ্যান্সড কংক্রিট',
      reinforcement: '৪টি ৩ মিমি হাই-টেনসাইল পিসি স্ট্র্যান্ড',
      recommendedUse: 'আবাসিক ভবন, বাগানবাড়ি, শান্তিনিকেতনের রিসোর্ট ও বাণিজ্যিক প্রতিষ্ঠান।',
      finish: '৩ডি খোদাই করা ইঁটের নকশা (ইচ্ছা হলে এক্সটিরিয়র রঙ প্রয়োগযোগ্য)',
      features: [
        'স্বল্প দূর থেকে দৃশ্যত নিখুঁত সনাতন ইঁটের গাঁথুনির সমতুল্য',
        'ইঁট ভেঙে যাওয়া বা সিমেন্ট খসে পড়ার কোনো আশঙ্কা নেই',
        'স্থাপনার আভিজাত্য বৃদ্ধি করে অথচ খরচ ইঁটের দেয়ালের অর্ধেকের কম',
        'প্রাকৃতিক কংক্রিট ধূসর বা পোড়ামাটি টেরাকোটা রঙে সরবরাহযোগ্য',
      ],
      popularFor: 'আবাসিক ভবন ও বোলপুর-শান্তিনিকেতন রিসোর্ট',
    },
    {
      id: 'prod-industrial',
      name: 'ইন্ডাস্ট্রিয়াল হেভি ডিউটি প্রাচীর (৮-১০ ফুট)',
      bengaliName: 'ভারী শিল্পকারখানা ও চালকলের জন্য সুউচ্চ প্রাচীর',
      tagline: 'রাইস মিল, কোল্ড স্টোরেজ ও সোলার পাওয়ার প্ল্যান্টের জন্য অতিরিক্ত মজবুত প্রাচীর।',
      category: 'industrial',
      thickness: '৬৫ মিমি (২.৫ ইঞ্চি) অতিরিক্ত পুরু কোর',
      standardDimensions: '৭ বা ৮ ফুট স্প্যান এবং ১০ ফুট পর্যন্ত উচ্চতা',
      concreteGrade: 'এম-৩৫ উচ্চ প্রাথমিক শক্তির আর্কিটেকচারাল কংক্রিট',
      reinforcement: '৪টি ৪ মিমি হাই-টেনসাইল টেন্ডন ও বিশেষ হুক',
      recommendedUse: 'সাঁইথিয়ার চালকল, লজিস্টিক গুদাম, বিদ্যুৎ সাবস্টেশন ও শিল্প কারখানা।',
      finish: 'ইন্ডাস্ট্রিয়াল হেভি ফিনিশ এবং ওয়াই-আর্ম কাঁটাতার সংযোজনযোগ্য',
      features: [
        'কালবৈশাখী ঝড়ের তীব্র বাতাস ও আকস্মিক বাহ্যিক ধাক্কা প্রতিরোধক্ষম',
        'মাটির নিচে সাড়ে ৩ থেকে ৪ ফুট গভীর বোরহোলে পিসিসি ঢালাই জাম্পিং',
        'শীর্ষভাগে কনসার্টিনা কয়েল বা কাঁটাতার সংস্থাপনের স্থায়ী খাঁজ',
        'পশ্চিমবঙ্গ শিল্প কাঠামোগত নিরাপত্তা মানদণ্ড অনুযায়ী পরীক্ষিত',
      ],
      popularFor: 'সাঁইথিয়া চালকল, গুদাম ও বিদ্যুৎ সাবস্টেশন',
    },
    {
      id: 'prod-decorative',
      name: 'আর্কিটেকচারাল কাঠ ও পাথরের টেক্সচার',
      bengaliName: 'প্রাকৃতিক কাঠের টেক্সচারযুক্ত ফিনিশ',
      tagline: 'পরিবেশবান্ধব রিসোর্ট ও বাগানবাড়ির জন্য কাঠ ও পাথরের প্রাকৃতিক টেক্সচার যুক্ত স্ল্যাব।',
      category: 'decorative',
      thickness: '৫৫ মিমি (২.১৫ ইঞ্চি)',
      standardDimensions: '৭ ফুট দৈর্ঘ্য × ১ ফুট উচ্চতা',
      concreteGrade: 'এম-৩০ আর্কিটেকচারাল গ্রেড',
      reinforcement: '৩টি ৩.৫ মিমি প্রি-স্ট্রেসড কার্বন স্টিল তার',
      recommendedUse: 'ইকো-রিসোর্ট, ফার্মহাউস, মন্দির প্রাঙ্গণ, শিক্ষাপ্রতিষ্ঠান ও বুটিক গেস্টহাউস।',
      finish: 'গাছের গুঁড়ির কাঠের আঁশের ন্যায় গভীর খোদাই করা ফিনিশ',
      features: [
        'কীটপতঙ্গ বা উইপোকার আক্রমণের ঝুঁকিহীন এবং পচনরোধী',
        'সবুজ বাগান ও প্রাকৃতিক পরিবেশের সাথে নান্দনিকভাবে সংগতিপূর্ণ',
        'নন-পোরাস সারফেস যা শ্যাওলা বা নোনা প্রতিরোধ করে',
        'ইউভি-প্রতিরোধী টেকসই বহিঃপৃষ্ঠ',
      ],
      popularFor: 'ফার্মহাউস ও হাইওয়ে রিসোর্ট বাউন্ডারি',
    },
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#f8f9fa] relative border-t border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Google Material Design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#1a73e8]" />
              <span>পণ্য সম্ভার ও ডিজাইন ভ্যারিয়েন্ট</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
              প্রিকাস্ট চায়না প্রাচীরের মডেল ও ফিনিশ
            </h2>
            <p className="mt-2 text-base text-[#5f6368] max-w-2xl font-normal">
              সাঁইথিয়া কারখানা থেকে মেকানাইজড পদ্ধতিতে নিয়ন্ত্রিত কিউরিংয়ে প্রস্তুতকৃত স্ল্যাব। বীরভূমের রুক্ষ আবহাওয়ায় শতভাগ ক্ষয়রোধী ও ৫০+ বছর টেকসই।
            </p>
          </div>

          {/* Filter Tabs in Google Segmented Button style */}
          <div className="flex flex-wrap gap-1 bg-[#ffffff] p-1.5 rounded-full border border-[#dadce0] shadow-2xs self-start md:self-auto">
            {[
              { id: 'all', label: 'সকল মডেল' },
              { id: 'plain', label: 'ক্লাসিক প্লেন' },
              { id: 'brick', label: 'ব্রিক টেক্সচার' },
              { id: 'industrial', label: 'শিল্পগ্রেড (হেভি)' },
              { id: 'decorative', label: 'আর্কিটেকচারাল' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                  activeTab === tab.id
                    ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: Google Store style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white border border-[#dadce0] rounded-3xl p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300 group"
            >
              <div>
                {/* Visual Blueprint Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#e8f0fe] text-[#1967d2]">
                    {prod.category === 'plain'
                      ? 'সর্বাধিক বিক্রিত'
                      : prod.category === 'brick'
                      ? 'প্রিমিয়াম নকশা'
                      : prod.category === 'industrial'
                      ? 'ভারী শিল্পগ্রেড'
                      : 'ইকো-রিসোর্ট'}
                  </span>
                  <span className="text-[11px] font-medium text-[#5f6368]">
                    {prod.concreteGrade.split(' ')[0]}
                  </span>
                </div>

                {/* SVG Visual Illustration */}
                <div className="w-full h-32 rounded-2xl bg-[#f8f9fa] border border-[#dadce0] flex items-center justify-center p-3 mb-4 group-hover:border-[#1a73e8]/30 transition overflow-hidden">
                  {prod.category === 'brick' ? (
                    <svg viewBox="0 0 160 80" className="w-full h-full opacity-90">
                      <rect width="160" height="80" rx="4" fill="#e8eaed" />
                      <line x1="0" y1="20" x2="160" y2="20" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="0" y1="40" x2="160" y2="40" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="0" y1="60" x2="160" y2="60" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="40" y1="0" x2="40" y2="20" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="120" y1="0" x2="120" y2="20" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="80" y1="20" x2="80" y2="40" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="40" y1="40" x2="40" y2="60" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="120" y1="40" x2="120" y2="60" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="80" y1="60" x2="80" y2="80" stroke="#bdc1c6" strokeWidth="1.5" />
                    </svg>
                  ) : prod.category === 'industrial' ? (
                    <svg viewBox="0 0 160 80" className="w-full h-full opacity-90">
                      <rect width="160" height="80" rx="4" fill="#dadce0" />
                      <rect x="10" y="8" width="140" height="64" fill="#bdc1c6" stroke="#5f6368" strokeWidth="1" strokeDasharray="4 2" />
                      <line x1="20" y1="28" x2="140" y2="28" stroke="#1a73e8" strokeWidth="2" strokeDasharray="5 3" />
                      <line x1="20" y1="52" x2="140" y2="52" stroke="#1a73e8" strokeWidth="2" strokeDasharray="5 3" />
                      <text x="80" y="44" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#202124">হেভি কোর (৬৫ মিমি)</text>
                    </svg>
                  ) : prod.category === 'decorative' ? (
                    <svg viewBox="0 0 160 80" className="w-full h-full opacity-90">
                      <rect width="160" height="80" rx="4" fill="#e8eaed" />
                      <path d="M 0 15 Q 40 25 80 15 T 160 20" stroke="#bdc1c6" strokeWidth="2" fill="none" />
                      <path d="M 0 40 Q 60 50 110 38 T 160 45" stroke="#bdc1c6" strokeWidth="2" fill="none" />
                      <path d="M 0 65 Q 30 55 90 68 T 160 62" stroke="#bdc1c6" strokeWidth="2" fill="none" />
                      <circle cx="80" cy="40" r="12" stroke="#bdc1c6" strokeWidth="1" fill="none" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 160 80" className="w-full h-full opacity-90">
                      <rect width="160" height="80" rx="4" fill="#f1f3f4" stroke="#dadce0" strokeWidth="1" />
                      <line x1="5" y1="40" x2="155" y2="40" stroke="#bdc1c6" strokeWidth="1.5" />
                      <line x1="10" y1="22" x2="150" y2="22" stroke="#1a73e8" strokeWidth="2" strokeDasharray="5 3" />
                      <line x1="10" y1="58" x2="150" y2="58" stroke="#1a73e8" strokeWidth="2" strokeDasharray="5 3" />
                      <text x="80" y="72" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#5f6368">মসৃণ প্লেন ফিনিশ</text>
                    </svg>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#202124] mb-1">
                  {prod.name}
                </h3>
                <div className="text-xs text-[#1a73e8] font-medium mb-2">
                  {prod.bengaliName}
                </div>
                <p className="text-xs text-[#5f6368] leading-relaxed mb-4 line-clamp-2 font-normal">
                  {prod.tagline}
                </p>

                {/* Key specs */}
                <div className="space-y-1.5 py-3 border-t border-[#dadce0] text-xs text-[#3c4043]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5f6368]">স্ল্যাব মাপ:</span>
                    <span className="font-semibold text-[#202124]">৭' × ১'</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5f6368]">পুরুত্ব:</span>
                    <span className="font-semibold text-[#202124]">{prod.thickness.split('/')[0]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5f6368]">কংক্রিট গ্রেড:</span>
                    <span className="font-semibold text-[#137333]">{prod.concreteGrade.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-[#dadce0] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProductForModal(prod)}
                  className="flex-1 py-2 px-3 rounded-full bg-[#f8f9fa] hover:bg-[#f1f3f4] text-[#3c4043] border border-[#dadce0] text-xs font-medium flex items-center justify-center gap-1 transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>স্পেসিফিকেশন</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectProductForQuote(prod.name)}
                  className="py-2 px-4 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium flex items-center justify-center gap-1 shadow-2xs hover:shadow-xs transition"
                >
                  <span>কোটেশন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Spec Modal: Google Design Dialog */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 bg-[#202124]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#dadce0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProductForModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f1f3f4] text-[#5f6368] transition"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1967d2]">
                প্রকৌশলগত স্পেসিফিকেশন
              </span>
              <span className="text-xs text-[#5f6368]">• আইএস ৪৫৬ মানদণ্ড</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mb-1">
              {selectedProductForModal.name}
            </h3>
            <p className="text-sm text-[#1a73e8] font-medium mb-4">
              {selectedProductForModal.bengaliName}
            </p>

            <p className="text-sm text-[#5f6368] leading-relaxed mb-6 bg-[#f8f9fa] p-4 rounded-2xl border border-[#dadce0] font-normal">
              {selectedProductForModal.tagline}
            </p>

            {/* Specifications table */}
            <div className="bg-white border border-[#dadce0] rounded-2xl overflow-hidden mb-6 text-xs sm:text-sm">
              <div className="p-3 bg-[#f8f9fa] border-b border-[#dadce0] font-bold text-[#202124]">
                প্রকৌশলগত বৈশিষ্ট্য
              </div>
              <div className="divide-y divide-[#dadce0]">
                <div className="p-3 flex justify-between">
                  <span className="text-[#5f6368]">প্রমিত পরিমাপ:</span>
                  <span className="font-semibold text-[#202124]">{selectedProductForModal.standardDimensions}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-[#5f6368]">পুরুত্ব:</span>
                  <span className="font-semibold text-[#202124]">{selectedProductForModal.thickness}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-[#5f6368]">কংক্রিট গ্রেড:</span>
                  <span className="font-semibold text-[#137333]">{selectedProductForModal.concreteGrade}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-[#5f6368]">অভ্যন্তরীণ রিইনফোর্সমেন্ট:</span>
                  <span className="font-semibold text-[#1a73e8]">{selectedProductForModal.reinforcement}</span>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-[#5f6368]">ফিনিশ টাইপ:</span>
                  <span className="font-semibold text-[#202124]">{selectedProductForModal.finish}</span>
                </div>
              </div>
            </div>

            {/* Key advantages */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#202124] mb-3">প্রধান কাঠামোগত সুবিধাসমূহ:</h4>
              <div className="space-y-2">
                {selectedProductForModal.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#3c4043]">
                    <Check className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#dadce0]">
              <button
                type="button"
                onClick={() => {
                  const prod = selectedProductForModal;
                  setSelectedProductForModal(null);
                  onSelectProductForQuote(prod.name);
                }}
                className="flex-1 py-3 px-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-2xs transition"
              >
                <span>এই মডেলের ব্যয় প্রাক্কলন করুন</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setSelectedProductForModal(null)}
                className="py-3 px-6 rounded-full bg-white hover:bg-[#f8f9fa] text-[#5f6368] border border-[#dadce0] font-medium text-xs transition"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
