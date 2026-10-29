import React, { useState } from 'react';
import { Clock, Layers, Shield, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';

export const InstallationProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '০১',
      title: 'অগারে গর্ত খনন',
      time: 'সকাল ০৮:০০ - ১০:৩০',
      summary: 'নির্দিষ্ট ৭ ফুট অন্তর মেকানাইজড বা হাইড্রোলিক অগার দিয়ে সুনির্দিষ্ট গর্ত খনন।',
      details: 'প্রতিটি পিলারের জন্য মাটির স্বাভাবিক স্তর থেকে ৩ ফুট গভীর গর্ত খনন করা হয় শক্ত মাটি বা মোরাম স্তর পর্যন্ত। নিচে ৩ ইঞ্চি পিসিসি লিন কংক্রিট বেড দেওয়া হয় যাতে ভবিষ্যতে কোনোভাবেই পিলার দেবে না যায়।',
      equipment: 'ট্র্যাক্টর মাউন্টেড হাইড্রোলিক অগার, স্পিরিট লেভেল, ওয়াটার লেভেল পাইপ',
      proTip: 'নরম পলিমাটি বা বালি মাটিতে আমরা গর্তের ব্যাস ১৮ ইঞ্চি করে অতিরিক্ত কংক্রিট কলার ঢালাই দিই।',
    },
    {
      num: '০২',
      title: 'এইচ-পিলার স্থাপন ও জাম্পিং',
      time: 'সকাল ১০:৩০ - দুপুর ০১:০০',
      summary: 'লেজার ও প্লাম্ব লাইন দিয়ে ৯০ ডিগ্রি খাড়া রেখে পিলার বসিয়ে কংক্রিট ঢালাই।',
      details: 'ভারী ৬"×৬" প্রি-স্ট্রেসড এইচ-পিলারগুলোকে গর্তে নামানো হয়। লেজার গাইডেড প্লাম্ব লাইনের সাহায্যে সম্পূর্ণ খাড়া অ্যালাইনমেন্ট নিশ্চিত করা হয়। এরপর এম-১৫ গ্রেডের সিমেন্ট-কংক্রিট দিয়ে গর্ত ভরাট করে নিবিড়ভাবে ভাইব্রেট করা হয়।',
      equipment: 'ট্রাইপড হোইস্ট, মেকানিকাল ভাইব্রেটর, লেজার প্লাম্ব লাইন',
      proTip: 'পিলারের দুই পাশের ৩৫ মিমি খাঁজ গেজ বার দিয়ে পরীক্ষা করা হয় যাতে স্ল্যাব কোনো ঘষা বা বাধা ছাড়াই নামে।',
    },
    {
      num: '০৩',
      title: 'স্ল্যাব খাঁজ দিয়ে প্রবেশ ও লকিং',
      time: 'দুপুর ০১:৩০ - বিকেল ০৪:৩০',
      summary: 'ভাইব্রেটেড কংক্রিট স্ল্যাব একের পর এক পিলারের খাঁজে নামিয়ে ইন্টারলকিং।',
      details: 'প্রতিটি ৭ ফুট × ১ ফুট স্ল্যাব দক্ষ কর্মীদের দ্বারা পিলারের দুই পাশের খাঁজের মধ্য দিয়ে মসৃণভাবে নামানো হয়। ওপরের স্ল্যাবের খাঁজ নিচের স্ল্যাবের ওপর নিখুঁতভাবে লক হয়ে এক অবিচ্ছেদ্য নিরেট কংক্রিট দেয়াল তৈরি করে।',
      equipment: 'স্ল্যাব ক্যারিং ক্ল্যাম্পস, রাবার ম্যালেট হাতুড়ি',
      proTip: 'স্ল্যাবের জয়েন্ট টলারেন্স ±১.৫ মিমি-র মধ্যে রাখা হয়, ফলে আলো-বাতাস বা ধুলো প্রবেশের কোনো সুযোগ থাকে না।',
    },
    {
      num: '০৪',
      title: 'টপ গ্রাউটিং ও সিকিউরিটি কাঁটাতার',
      time: 'বিকেল ০৪:৩০ - সন্ধ্যা ০৬:০০',
      summary: 'উপরের জয়েন্ট সিলিং, ওয়াই-অ্যাঙ্গেল ফিটিং এবং জিআই কাঁটাতার টানটান করা।',
      details: 'সর্বোচ্চ সুরক্ষার জন্য পিলারের মাথায় ওয়াই-অ্যাঙ্গেল আয়রন ফ্রেম নাট-বোল্ট দিয়ে শক্ত করে আটকানো হয়। এরপর ৩ লাইন গ্যালভানাইজড কাঁটাতার অথবা রেজোর ব্লেড কনসার্টিনা কয়েল উইঞ্চ দিয়ে টেনে টাইট করে কাজ সম্পূর্ণ করা হয়।',
      equipment: 'ওয়্যার টেনশনার উইঞ্চ, স্টেইনলেস স্টিল বোল্ট, পলিমার গ্রাউট',
      proTip: 'একই দিন সন্ধ্যা থেকেই আপনার সীমানা ১০০% সুরক্ষিত। কোনো জল কিউরিং বা অপেক্ষা করার দরকার নেই!',
    },
  ];

  return (
    <section id="installation" className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-[#dadce0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>১ দিনের কার্যপ্রণালী</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            মাত্র ১ দিনে কীভাবে চায়না প্রাচীর তৈরি হয়?
          </h2>
          <p className="mt-3 text-base text-[#5f6368] font-normal">
            সকালে সীমানা চিহ্নিত করা থেকে শুরু করে সূর্যাস্তের আগেই সম্পূর্ণ সুরক্ষিত বাউন্ডারি তৈরি।
          </p>
        </div>

        {/* Stepper Buttons: Google Material 3 Segmented Pill bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((step, idx) => (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 ${
                activeStep === idx
                  ? 'bg-white border-[#1a73e8] shadow-sm ring-1 ring-[#1a73e8]'
                  : 'bg-white border-[#dadce0] hover:bg-[#f1f3f4] text-[#5f6368]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeStep === idx ? 'bg-[#e8f0fe] text-[#1967d2]' : 'bg-[#f1f3f4] text-[#5f6368]'
                }`}>
                  ধাপ {step.num}
                </span>
                <span className="text-[11px] text-[#5f6368] hidden sm:inline">{step.time.split('-')[0]}</span>
              </div>
              <div className={`text-sm font-bold truncate ${activeStep === idx ? 'text-[#1a73e8]' : 'text-[#202124]'}`}>
                {step.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Step Deep Dive Card: Google Material Card */}
        <div className="bg-white border border-[#dadce0] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Graphic Representation */}
            <div className="lg:col-span-5 bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-6 flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-between items-center text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#e8f0fe] text-[#1967d2] font-semibold">
                  কার্যপর্যায় ধাপ {steps[activeStep].num}
                </span>
                <span className="text-[#5f6368] flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#1a73e8]" />
                  {steps[activeStep].time}
                </span>
              </div>

              {/* Step diagram */}
              <div className="py-6 flex items-center justify-center">
                {activeStep === 0 && (
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#e8f0fe] border border-[#d2e3fc] flex items-center justify-center text-[#1a73e8]">
                      <Wrench className="w-10 h-10" />
                    </div>
                    <div className="text-xs font-bold text-[#202124]">৩ ফুট গভীর বোরহোল ড্রিলিং</div>
                    <div className="text-[11px] text-[#5f6368]">মেকানাইজড অগার দিয়ে প্রতি ৭ ফুটে খনন</div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#e6f4ea] border border-[#ceead6] flex items-center justify-center text-[#137333]">
                      <Layers className="w-10 h-10" />
                    </div>
                    <div className="text-xs font-bold text-[#202124]">এইচ-পিলার উলন ও ঢালাই</div>
                    <div className="text-[11px] text-[#5f6368]">৯০° খাড়া লেজার অ্যালাইনমেন্ট ও পিসিসি জাম</div>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#fef7e0] border border-[#feefc3] flex items-center justify-center text-[#b06000]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="text-xs font-bold text-[#202124]">স্ল্যাব স্লাইডিং ইন্টারলক</div>
                    <div className="text-[11px] text-[#5f6368]">১ ফুট করে স্ল্যাব খাঁজের মধ্যে লক হওয়া</div>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="text-center space-y-2">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#fce8e6] border border-[#fad2cf] flex items-center justify-center text-[#c5221f]">
                      <Shield className="w-10 h-10" />
                    </div>
                    <div className="text-xs font-bold text-[#202124]">ওয়াই-আর্ম সিকিউরিটি কাঁটাতার</div>
                    <div className="text-[11px] text-[#5f6368]">সন্ধ্যায় সম্পূর্ণ সুরক্ষিত সীমানা হস্তান্তর</div>
                  </div>
                )}
              </div>

              <div className="p-3 bg-white rounded-xl border border-[#dadce0] text-xs text-[#5f6368] flex items-center justify-between">
                <span>প্রকৌশলগত নির্ভুলতা:</span>
                <span className="font-bold text-[#137333]">১০০% মানদণ্ড অনুসৃত</span>
              </div>
            </div>

            {/* Description & Engineering specifics */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs text-[#1a73e8] font-bold uppercase tracking-wider block mb-1">
                  ধাপ {steps[activeStep].num}: সময়সূচী {steps[activeStep].time}
                </span>
                <h3 className="text-2xl font-bold text-[#202124]">
                  {steps[activeStep].title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#1a73e8]">
                  {steps[activeStep].summary}
                </p>
              </div>

              <p className="text-sm text-[#5f6368] leading-relaxed font-normal">
                {steps[activeStep].details}
              </p>

              <div className="p-4 bg-[#f8f9fa] rounded-2xl border border-[#dadce0] space-y-2 text-xs">
                <div className="flex items-start gap-2 text-[#3c4043]">
                  <Wrench className="w-4 h-4 text-[#1a73e8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#202124]">ব্যবহৃত যন্ত্রপাতি:</strong> {steps[activeStep].equipment}
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[#3c4043]">
                  <Shield className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#202124]">বিশেষ সুবিধা:</strong> {steps[activeStep].proTip}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="py-2.5 px-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition"
                >
                  <span>পরবর্তী পর্যায় দেখুন</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#5f6368]">
                  ধাপ {activeStep + 1} / ৪
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
