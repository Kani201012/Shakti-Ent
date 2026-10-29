import React from 'react';
import { Phone, MessageSquare, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#dadce0] text-[#5f6368] text-xs pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About Shakti Enterprise */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a73e8] text-white font-bold flex items-center justify-center text-lg shadow-xs">
                শ
              </div>
              <span className="font-bold text-lg text-[#202124] tracking-tight">
                শক্তি এন্টারপ্রাইজ
              </span>
            </div>
            <p className="leading-relaxed text-[#5f6368] font-normal">
              বীরভূম ও পশ্চিমবঙ্গের অন্যতম প্রধান প্রিকাস্ট কংক্রিট বাউন্ডারি ওয়াল (চায়না প্রাচীর) নির্মাতা ও শীর্ষস্থানীয় ঠিকাদার। উচ্চ শক্তির প্রি-স্ট্রেসড কংক্রিট প্রযুক্তিতে নির্মিত আজীবন সুরক্ষা।
            </p>
            <div className="text-xs text-[#1967d2] font-semibold bg-[#e8f0fe] p-3 rounded-2xl border border-[#d2e3fc] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1a73e8] shrink-0" />
              <span>বীরভূম জেলার নির্ভরযোগ্য চায়না প্রাচীর প্রস্তুতকারক</span>
            </div>
          </div>

          {/* Col 2: Products & Applications in Bengali */}
          <div>
            <h4 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-4">
              পণ্য ও সমাধান
            </h4>
            <ul className="space-y-2.5 text-[#5f6368] font-normal">
              <li><a href="#products" className="hover:text-[#1a73e8] transition">ক্লাসিক প্লেন কংক্রিট স্ল্যাব</a></li>
              <li><a href="#products" className="hover:text-[#1a73e8] transition">টেক্সচার্ড ব্রিক ডিজাইন প্রাচীর</a></li>
              <li><a href="#products" className="hover:text-[#1a73e8] transition">হেভি ডিউটি ইন্ডাস্ট্রিয়াল দেয়াল (৮-১০ ফুট)</a></li>
              <li><a href="#products" className="hover:text-[#1a73e8] transition">আর্কিটেকচারাল কাঠ ও পাথরের স্ল্যাব</a></li>
              <li><a href="#cost-estimator" className="hover:text-[#1a73e8] transition">ওয়াই-আর্ম ও রেজোর কাঁটাতার এক্সটেনশন</a></li>
              <li><a href="#cost-estimator" className="hover:text-[#1a73e8] transition">ভারী প্রধান গেট বসানোর পিলার</a></li>
            </ul>
          </div>

          {/* Col 3: Coverage Hubs in Bengali */}
          <div>
            <h4 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-4">
              ডেলিভারি নেটওয়ার্ক
            </h4>
            <ul className="space-y-2.5 text-[#5f6368] font-normal">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" /> সাঁইথিয়া (কারখানা থেকে সরাসরি)</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" /> সিউড়ি ও দুবরাজপুর</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" /> বোলপুর ও শান্তিনিকেতন</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" /> রামপুরহাট, নলহাটি ও মুরারই</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#137333]" /> ইলামবাজার ও লাভপুর</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#1a73e8]" /> বর্ধমান ও মুর্শিদাবাদ (বিশেষ ট্রাক)</li>
            </ul>
          </div>

          {/* Col 4: Factory Yard & Contact in Bengali */}
          <div>
            <h4 className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-4">
              কারখানা ইয়ার্ড ও যোগাযোগ
            </h4>
            <div className="space-y-3 text-[#3c4043] font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea4335] shrink-0 mt-0.5" />
                <span>
                  মাঠপলসা (হাটপোড়ার নিকট), সাঁইথিয়া, বীরভূম, পশ্চিমবঙ্গ, পিন ৭৩১২৩৪
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1a73e8] shrink-0" />
                <a href="tel:+918640829378" className="font-bold text-[#202124] hover:text-[#1a73e8] transition">
                  +৯১ ৮৬৪০৮ ২৯৩৭৮
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#137333] shrink-0" />
                <a 
                  href="https://wa.me/918640829378" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#137333] hover:underline font-semibold"
                >
                  হোয়াটসঅ্যাপ: +৯১ ৮৬৪০৮ ২৯৩৭৮
                </a>
              </div>
              <div className="pt-2 text-xs text-[#5f6368]">
                কাজের সময়: সোম – রবি: সকাল ৭:০০ – সন্ধ্যা ৭:৩০
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: Google Product Footer style */}
        <div className="pt-8 border-t border-[#dadce0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5f6368]">
          <div>
            © {new Date().getFullYear()} শক্তি এন্টারপ্রাইজ। সর্বস্বত্ব সংরক্ষিত। প্রিকাস্ট কংক্রিট ও চায়না প্রাচীর বিশেষজ্ঞ।
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#202124] transition">IS 456 ও IS 1343 মানদণ্ড</span>
            <span>•</span>
            <span className="hover:text-[#202124] transition">এম-৩০ ভাইব্রেটেড কংক্রিট</span>
            <span>•</span>
            <span className="hover:text-[#202124] transition">বীরভূম, পশ্চিমবঙ্গ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
