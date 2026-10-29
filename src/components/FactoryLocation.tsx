import React from 'react';
import { MapPin, Navigation, Truck, Phone, CheckCircle2, Building2 } from 'lucide-react';

export const FactoryLocation: React.FC = () => {
  const coverageHubs = [
    { town: 'সাঁইথিয়া (কারখানা ইয়ার্ড)', dist: '০ কিমি', time: '১৫ মিনিট', status: 'তাৎক্ষণিক লোডিং' },
    { town: 'সিউড়ি (জেলা সদর)', dist: '২৪ কিমি', time: '৪০ মিনিট', status: 'একই দিনে সরাসরি ডেলিভারি' },
    { town: 'বোলপুর - শান্তিনিকেতন', dist: '৪৮ কিমি', time: '১ ঘণ্টা ১৫ মি', status: 'একই দিনে সরাসরি ডেলিভারি' },
    { town: 'রামপুরহাট ও নলহাটি', dist: '৩৮ কিমি', time: '৫৫ মিনিট', status: 'একই দিনে সরাসরি ডেলিভারি' },
    { town: 'দুবরাজপুর ও ইলামবাজার', dist: '৪২ কিমি', time: '১ ঘণ্টা', status: 'একই দিনে সরাসরি ডেলিভারি' },
    { town: 'বর্ধমান ও মুর্শিদাবাদ', dist: '৭৫-৯০ কিমি', time: '২ ঘণ্টা', status: 'পরের দিন ডেডিকেটেড ট্রাক' },
  ];

  return (
    <section id="factory-location" className="py-16 sm:py-24 bg-white relative border-t border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>সাঁইথিয়া কারখানা ও ডেলিভারি হাব</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            কারখানা ইয়ার্ড ও বীরভূম জেলা কভারেজ
          </h2>
          <p className="mt-3 text-base text-[#5f6368] font-normal">
            মাঝখানের দালাল বা মধ্যস্বত্বভোগী ছাড়াই সরাসরি সাঁইথিয়ার মাঠপলসা ফ্যাক্টরি রেটে পণ্য ও ফিটিং পান।
          </p>
        </div>

        {/* Grid: Interactive Plant Schematic & Map on Left, Delivery Radius on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Google Maps style Card */}
          <div className="lg:col-span-7 bg-[#f8f9fa] border border-[#dadce0] rounded-3xl overflow-hidden shadow-xs">
            {/* Interactive Visual Map Representation in Google Maps style */}
            <div className="relative h-72 sm:h-80 bg-[#e8eaed] border-b border-[#dadce0] overflow-hidden flex items-center justify-center p-4">
              <svg viewBox="0 0 500 320" className="w-full h-full opacity-90">
                <defs>
                  <pattern id="mapGridGoogle" width="40" height="40" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="40" y2="0" stroke="#dadce0" strokeWidth="0.8" />
                    <line x1="0" y1="0" x2="0" y2="40" stroke="#dadce0" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="500" height="320" fill="#f1f3f4" />
                <rect width="500" height="320" fill="url(#mapGridGoogle)" />

                {/* State Highway SH-11 (Sainthia - Suri Road) */}
                <path d="M 40 280 Q 180 200 240 160 T 450 70" stroke="#fbbc04" strokeWidth="10" fill="none" opacity="0.8" />
                <path d="M 40 280 Q 180 200 240 160 T 450 70" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />

                {/* Connecting roads */}
                <path d="M 240 160 L 320 290" stroke="#dadce0" strokeWidth="6" fill="none" />
                <path d="M 240 160 L 160 40" stroke="#dadce0" strokeWidth="6" fill="none" />
                <path d="M 380 110 L 460 220" stroke="#dadce0" strokeWidth="5" fill="none" />

                {/* Mayurakshi River in Google Maps blue */}
                <path d="M 10 90 Q 140 120 220 70 T 480 30" stroke="#a8dab5" strokeWidth="6" fill="none" opacity="0.7" />
                <text x="70" y="80" fill="#137333" fontSize="10" fontWeight="bold">ময়ূরাক্ষী নদী</text>

                {/* Town Nodes */}
                <g>
                  <circle cx="90" cy="250" r="6" fill="#80868b" />
                  <text x="90" y="270" fill="#3c4043" fontSize="11" textAnchor="middle" fontWeight="bold">সিউড়ি</text>
                  
                  <circle cx="320" cy="280" r="6" fill="#80868b" />
                  <text x="320" y="300" fill="#3c4043" fontSize="11" textAnchor="middle" fontWeight="bold">বোলপুর</text>

                  <circle cx="430" cy="80" r="6" fill="#80868b" />
                  <text x="430" y="65" fill="#3c4043" fontSize="11" textAnchor="middle" fontWeight="bold">রামপুরহাট</text>

                  {/* FACTORY PIN with Google Red/Blue Marker */}
                  <circle cx="240" cy="160" r="24" fill="#1a73e8" opacity="0.2" className="animate-ping" />
                  <circle cx="240" cy="160" r="14" fill="#ea4335" />
                  <circle cx="240" cy="156" r="5" fill="#ffffff" />
                  <path d="M 240 174 L 240 165" stroke="#ea4335" strokeWidth="3" />
                  <text x="240" y="138" fill="#1a73e8" fontSize="12" textAnchor="middle" fontWeight="bold">
                    শক্তি এন্টারপ্রাইজ কারখানা
                  </text>
                  <text x="240" y="196" fill="#202124" fontSize="10" textAnchor="middle" fontWeight="bold">
                    মাঠপলসা, সাঁইথিয়া
                  </text>
                </g>
              </svg>

              {/* Map Floating Badge: Google Maps info window style */}
              <div className="absolute top-4 left-4 bg-white/95 border border-[#dadce0] rounded-2xl p-3 shadow-md backdrop-blur-sm max-w-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1a73e8] mb-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ea4335]" />
                  <span>প্রধান উৎপাদন কারখানা</span>
                </div>
                <div className="text-xs text-[#202124] font-bold">
                  মাঠপলসা (হাটপোড়ার নিকট), সাঁইথিয়া
                </div>
                <div className="text-[11px] text-[#5f6368]">
                  বীরভূম, পশ্চিমবঙ্গ ৭৩১২৩৪
                </div>
              </div>

              {/* Driving route button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com/?q=Sainthia,Birbhum,West+Bengal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white text-[#1a73e8] border border-[#dadce0] shadow-sm hover:shadow text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#1a73e8]" />
                  <span>গুগল ম্যাপে দিকনির্দেশ</span>
                </a>
              </div>
            </div>

            {/* Plant Capacity Details */}
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0]">
                <div className="text-[#5f6368] mb-1">দৈনিক উৎপাদন ক্ষমতা:</div>
                <div className="text-sm font-bold text-[#202124]">৮০০+ ফুট স্ল্যাব</div>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0]">
                <div className="text-[#5f6368] mb-1">প্রস্তুত স্টক ইয়ার্ড:</div>
                <div className="text-sm font-bold text-[#137333]">১২,০০০+ ফুট প্রস্তুত</div>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#dadce0] col-span-2 sm:col-span-1">
                <div className="text-[#5f6368] mb-1">নিজস্ব পরিবহন বহর:</div>
                <div className="text-sm font-bold text-[#1a73e8]">৬টি ট্র্যাক্টর ও ৩টি ট্রাক</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Delivery Hubs List in Google Material Style */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#202124]">
                    ডেলিভারি নেটওয়ার্ক ও পৌঁছানোর সময়
                  </h3>
                  <p className="text-xs text-[#5f6368]">সাঁইথিয়া কারখানা থেকে সরাসরি সরবরাহ</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {coverageHubs.map((hub, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-2xl border border-[#dadce0] flex items-center justify-between text-xs hover:border-[#1a73e8]/40 transition"
                  >
                    <div>
                      <div className="font-bold text-[#202124]">{hub.town}</div>
                      <div className="text-[11px] text-[#5f6368]">{hub.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#1a73e8]">{hub.dist}</div>
                      <div className="text-[11px] text-[#5f6368]">{hub.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 bg-[#e8f0fe] rounded-2xl border border-[#d2e3fc] flex items-center justify-between">
                <div className="text-xs text-[#1967d2]">
                  <span className="font-bold block">সরাসরি কথা বলতে চান?</span>
                  <span>ইয়ার্ড ইনচার্জ: সকাল ৭টা - রাত ৮টা</span>
                </div>
                <a
                  href="tel:+918640829378"
                  className="px-4 py-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>কল করুন</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
