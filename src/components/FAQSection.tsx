import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'চায়না প্রাচীর (Precast Boundary Wall) আসলে কী?',
      a: 'চায়না প্রাচীর হলো উন্নত প্রযুক্তিতে তৈরি প্রিকাস্ট প্রি-স্ট্রেসড কংক্রিট বাউন্ডারি দেয়াল। এতে উচ্চ শক্তির এইচ-পিলার মাটির নিচে ৩ ফুট গভীর ঢালাই করে নির্দিষ্ট ৭ ফুট দূরত্বে বসানো হয়। এরপর পিলারের খাঁজের মধ্যে ১ ফুট চওড়া ইন্টারলকিং কংক্রিট স্ল্যাবগুলো একের পর এক সাজিয়ে নিরেট দেয়াল তৈরি করা হয়।',
    },
    {
      q: 'সনাতন ইঁটের প্রাচীরের তুলনায় এটি কতটা টেকসই ও মজবুত?',
      a: 'আমাদের স্ল্যাবগুলো সাঁইথিয়ার কারখানায় হাই-ফ্রিকোয়েন্সি ভাইব্রেটিং টেবিলে এম-৩০/এম-৩৫ গ্রেডের কংক্রিট ও ভেতরে স্প্রিং স্টিল তার দিয়ে তৈরি। এতে কোনো বাতাস বা ফাঁকা অংশ থাকে না। ফলে ভারী বর্ষা, তীব্র গরম বা ঝড়ে ইঁটের দেয়ালের মতো হেলে পড়ে না এবং নোনা বা শ্যাওলা ধরে প্লাস্টার খসে পড়ে না। এর স্থায়িত্ব ৫০ বছরেরও বেশি।',
    },
    {
      q: 'ভবিষ্যতে জমি বিক্রি বা সম্প্রসারণের ক্ষেত্রে কি এটি খুলে অন্যত্র বসানো যায়?',
      a: 'হ্যাঁ, এটি চায়না প্রাচীরের সবচেয়ে বড় সুবিধা। ইঁটের প্রাচীর ভাঙলে শুধু আবর্জনা হয়, কিন্তু প্রিকাস্ট দেয়ালের স্ল্যাবগুলো অক্ষত অবস্থায় সহজে খুলে নতুন জায়গায় আবার একই পিলার দিয়ে বসিয়ে নেওয়া যায়। এতে আপনার বিনিয়োগের ১০০% মূল্য বজায় থাকে।',
    },
    {
      q: 'প্রধান গেট বা লোহার স্লাইডিং গেট কি এই প্রাচীরে লাগানো সম্ভব?',
      a: 'অবশ্যই। আমরা লোহার গেটের জন্য বিশেষ শক্তিশালী ৯"×৯" গেট পিলার সরবরাহ করি যার ভেতর স্টিল প্লেট ও ক্ল্যাম্প বসানো থাকে। এতে যে কোনো ভারী লোহার গেট বা স্লাইডিং গেট খুব সহজে ওয়েল্ডিং বা নাট-বোল্ট দিয়ে ফিট করা যায়।',
    },
    {
      q: '৫০০ বা ১০০০ ফুট সীমানা প্রাচীর তৈরি করতে কতদিন সময় লাগে?',
      a: 'আমাদের একটি কাজের দল প্রতিদিন গড়ে ১৫০ থেকে ২০০ রানিং ফুট দেয়াল সম্পূর্ণ করে। ৫০০ ফুটের কাজ ২ থেকে ৩ দিনে এবং ১০০০ ফুটের কাজ ৫ থেকে ৬ কার্যদিবসের মধ্যে ভিত্তি থেকে ওপরের কাঁটাতার সহ সম্পূর্ণ রেডি হয়ে যায়।',
    },
    {
      q: 'অর্ডারের নিয়ম এবং পেমেন্ট ব্যবস্থা কীভাবে পরিচালিত হয়?',
      a: 'প্রথমে আমাদের ইঞ্জিনিয়ার বীরভূমের যে কোনো স্থানে আপনার জমি বিনামূল্যে মেপে সাইট সার্ভে করেন। মাপ ও উচ্চতা চূড়ান্ত হলে সামান্য বুকিং অগ্রিম নেওয়া হয়। এরপর সাঁইথিয়া কারখানা থেকে মালপত্র পৌঁছানোর সাথে সাথে কাজ শুরু হয় এবং কাজের অগ্রগতির সাথে সাথে ধাপে ধাপে পেমেন্ট নেওয়া হয়।',
    },
  ];

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-[#dadce0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>সচরাচর জিজ্ঞাসিত প্রশ্নোত্তর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            চায়না প্রাচীর সম্পর্কিত প্রশ্ন ও উত্তর
          </h2>
          <p className="mt-2 text-base text-[#5f6368] font-normal">
            উপাদান, ভিত্তি ও সাঁইথিয়া কারখানার ডেলিভারি সম্পর্কে আপনার যা জানা প্রয়োজন।
          </p>
        </div>

        {/* Google Help Center style accordion */}
        <div className="border border-[#dadce0] rounded-3xl overflow-hidden divide-y divide-[#dadce0] bg-white shadow-2xs">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="transition"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-[#202124] hover:bg-[#f8f9fa] transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#202124]">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition ${
                    isOpen ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'bg-[#f1f3f4] text-[#5f6368]'
                  }`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5f6368] leading-relaxed font-normal bg-[#f8f9fa]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
