import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'অশোক দাসগুপ্ত',
      role: 'রাইস মিল মালিক',
      location: 'সাঁইথিয়া বাইপাস, বীরভূম',
      project: '১২০০ ফুট হেভি ডিউটি প্রাচীর (৮ ফুট উচ্চতা + ওয়াই-আর্ম)',
      comment: 'আমাদের ৫ একর রাইস মিল চত্বর দ্রুত ঘেরা প্রয়োজন ছিল। সাধারণ ইঁটের প্রাচীর বানাতে প্রায় ১৪ লক্ষ টাকা এবং ১ মাসের বেশি সময় লাগতো। শক্তি এন্টারপ্রাইজ মাত্র ৬ দিনে পুরো ১২০০ ফুট সম্পূর্ণ করে দেয়, খরচও অর্ধেকের কম হয়েছে। অত্যন্ত মজবুত ও নিরেট কাজ।',
      rating: 5,
    },
    {
      name: 'ডঃ দেবব্রত রায়',
      role: 'রিসোর্ট ও বাগানবাড়ি ডেভেলপার',
      location: 'প্রান্তিক, বোলপুর - শান্তিনিকেতন',
      project: '৫৫০ ফুট ব্রিক ডিজাইন বাউন্ডারি প্রাচীর (৭ ফুট)',
      comment: 'কোপাই নদীর কাছে আমাদের ইকো-রিসোর্টের জন্য আমরা ব্রিক ডিজাইন মডেলটি বেছে নিয়েছিলাম। বাইরে থেকে দেখলে কেউ বুঝতেই পারে না যে এটি প্রিকাস্ট কংক্রিট, মনে হয় নিখুঁত ইঁটের গাঁথুনি। বর্ষায় কোনো স্যাঁতসেঁতে হয় না বা রঙ ওঠে না। শান্তিনিকেতনে সেরা পছন্দ।',
      rating: 5,
    },
    {
      name: 'মির্জা রফিকুল ইসলাম',
      role: 'জমি মালিক ও কৃষক',
      location: 'সার্কিট হাউসের নিকট, সিউড়ি',
      project: '৩৮০ ফুট ক্লাসিক চায়না প্রাচীর (৬ ফুট)',
      comment: 'খালি জমিতে প্রতিবেশী ও বাইরে থেকে সীমানা নিয়ে ঝামেলা হচ্ছিল। বুধবার শক্তি এন্টারপ্রাইজে ফোন করি, বৃহস্পতিবার সাইট মেপে নেয় এবং শনিবার বিকেলের মধ্যেই পুরো ৩৮০ ফুট সীমানা কাঁটাতার সহ ঘেরা শেষ। তাদের পেশাদারিত্ব সত্যিই প্রশংসনীয়।',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-[#dadce0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Google Material Design */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04]" />
            <span>গ্রাহকদের বাস্তব প্রতিক্রিয়া ও পর্যালোচনা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            বীরভূমের জমির মালিক ও ব্যবসায়ীদের বিশ্বাস
          </h2>
          <p className="mt-3 text-base text-[#5f6368] font-normal">
            দেখুন কীভাবে সাঁইথিয়া, সিউড়ি ও বোলপুরের গ্রাহকেরা কোনো ঝামেলা ছাড়াই নিজেদের জমি সুরক্ষিত করেছেন।
          </p>
        </div>

        {/* Reviews Grid: Google Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dadce0] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-md transition"
            >
              <div>
                {/* Rating Stars & Location */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex text-[#fbbc04]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-[#5f6368] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ea4335]" />
                    {rev.location.split(',')[0]}
                  </span>
                </div>

                {/* Project Badge */}
                <div className="text-xs font-semibold text-[#1967d2] bg-[#e8f0fe] px-3 py-1 rounded-full mb-4 inline-block">
                  {rev.project}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#3c4043] leading-relaxed mb-6 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#dadce0] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#202124] text-sm flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" />
                  </div>
                  <div className="text-xs text-[#5f6368]">{rev.role}</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center font-bold text-xs">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
