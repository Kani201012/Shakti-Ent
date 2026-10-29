import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Ruler, 
  Layers, 
  MapPin, 
  Shield, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  TrendingDown, 
  Hammer,
  Truck,
  Building2,
  Copy,
  Check
} from 'lucide-react';
import { calculateWallEstimate, WallEstimateResult } from '../utils/calculator';

interface CostEstimatorProps {
  onBookSurvey: (estimate: WallEstimateResult) => void;
  selectedHeightFromHero?: 6 | 7 | 8;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ 
  onBookSurvey,
  selectedHeightFromHero = 6,
}) => {
  const [lengthFeet, setLengthFeet] = useState<number>(200);
  const [heightFeet, setHeightFeet] = useState<6 | 7 | 8>(selectedHeightFromHero);
  const [location, setLocation] = useState<'within_birbhum' | 'outside_birbhum'>('within_birbhum');
  const [securityExtension, setSecurityExtension] = useState<'none' | 'barbed_wire' | 'concertina_coil'>('barbed_wire');
  const [panelGrade, setPanelGrade] = useState<'standard_m30' | 'heavy_duty_m35'>('standard_m30');
  const [copiedEstimate, setCopiedEstimate] = useState(false);

  const estimate: WallEstimateResult = useMemo(() => {
    return calculateWallEstimate({
      lengthFeet,
      heightFeet,
      location,
      securityExtension,
      panelGrade,
    });
  }, [lengthFeet, heightFeet, location, securityExtension, panelGrade]);

  const quickPresets = [
    { label: 'ক্ষুদ্র প্লট (১০০ ফুট)', length: 100 },
    { label: 'আবাসিক প্লট (২০০ ফুট)', length: 200 },
    { label: '১ বিঘা জমি (৪৫০ ফুট)', length: 450 },
    { label: 'শিল্প প্রতিষ্ঠান / চালকল (৮০০ ফুট)', length: 800 },
    { label: 'বৃহৎ সীমানা (১৫০০ ফুট)', length: 1500 },
  ];

  const handleCopyEstimate = () => {
    const summary = `শক্তি এন্টারপ্রাইজ - প্রিকাস্ট চায়না প্রাচীর ব্যয় প্রাক্কলন:\n` +
      `প্রাচীরের দৈর্ঘ্য: ${estimate.lengthFeet} রানিং ফুট\n` +
      `উচ্চতা: ${estimate.heightFeet} ফুট (${estimate.panelsCount}টি স্ল্যাব)\n` +
      `প্রয়োজনীয় এইচ-পিলার: ${estimate.pillarsCount}টি\n` +
      `আনুমানিক সম্পাদন সময়: ${estimate.estimatedDaysToInstall} কার্যদিবস\n` +
      `সর্বমোট প্রাক্কলিত ব্যয়: ₹${estimate.totalEstimatedCost.toLocaleString('en-IN')} (গড়ে ₹${estimate.costPerRunningFoot}/রানিং ফুট)\n` +
      `যোগাযোগ: +91 86408 29378 | মাঠপলসা, সাঁইথিয়া, বীরভূম`;

    navigator.clipboard?.writeText(summary);
    setCopiedEstimate(true);
    setTimeout(() => setCopiedEstimate(false), 2500);
  };

  return (
    <section id="cost-estimator" className="py-16 sm:py-24 bg-[#ffffff] relative border-t border-[#dadce0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>ব্যয় প্রাক্কলন ও উপকরণ ক্যালকুলেটর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            আপনার জমির জন্য চায়না প্রাচীরের প্রাক্কলিত ব্যয় নির্ধারণ করুন
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5f6368] font-normal">
            সাঁইথিয়া কারখানার সরাসরি মূল্যের ভিত্তিতে প্রয়োজনীয় স্ল্যাব, পিলারের সংখ্যা ও আনুমানিক সামগ্রিক বাজেট গণনা করুন।
          </p>
        </div>

        {/* Main Grid: Inputs on Left, Real-Time Bill of Quantities & Price on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Inputs & Controls Card */}
          <div className="lg:col-span-7 bg-[#f8f9fa] border border-[#dadce0] rounded-3xl p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-bold text-[#202124] mb-6 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Ruler className="w-5 h-5 text-[#1a73e8]" />
                ১. সীমানা প্রাচীরের পরিমাপ ও স্পেসিফিকেশন
              </span>
              <span className="text-xs text-[#1967d2] bg-[#e8f0fe] px-3 py-0.5 rounded-full font-semibold">
                লাইভ গণনা
              </span>
            </h3>

            {/* Wall Length Slider & Manual Input */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="wall-length-input" className="text-xs sm:text-sm font-semibold text-[#202124]">
                  প্রাচীরের দৈর্ঘ্য (রানিং ফুট):
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    id="wall-length-input"
                    type="number"
                    min="20"
                    max="5000"
                    step="5"
                    value={lengthFeet}
                    onChange={(e) => setLengthFeet(Math.max(10, Number(e.target.value)))}
                    className="w-24 text-right bg-white border border-[#dadce0] rounded-xl px-2.5 py-1 text-sm font-bold text-[#1a73e8] focus:outline-none focus:border-[#1a73e8] shadow-2xs"
                  />
                  <span className="text-xs text-[#5f6368] font-semibold">ফুট</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="50"
                max="2000"
                step="10"
                value={lengthFeet}
                onChange={(e) => setLengthFeet(Number(e.target.value))}
                className="w-full h-2.5 bg-[#e8eaed] rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
                aria-label="দেয়ালের দৈর্ঘ্য ফিটে"
              />

              {/* Visual Plot Scaler & Perimeter Representation in Google Style */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#dadce0] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center font-bold text-base">
                    {estimate.baysCount}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#202124]">মোট বে সংখ্যা (৭ ফুট স্প্যান)</div>
                    <div className="text-[11px] text-[#5f6368]">প্রতিটি বে-তে {estimate.heightFeet}টি করে স্ল্যাব সংস্থাপিত হবে</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-[#3c4043]">
                  <div className="text-center">
                    <span className="block font-bold text-[#202124]">{estimate.panelsCount} টি</span>
                    <span className="text-[10px] text-[#5f6368]">মোট স্ল্যাব</span>
                  </div>
                  <div className="h-6 w-px bg-[#dadce0]" />
                  <div className="text-center">
                    <span className="block font-bold text-[#202124]">{estimate.pillarsCount} টি</span>
                    <span className="text-[10px] text-[#5f6368]">এইচ-পিলার</span>
                  </div>
                  <div className="h-6 w-px bg-[#dadce0]" />
                  <div className="text-center">
                    <span className="block font-bold text-[#137333]">{estimate.estimatedDaysToInstall} কার্যদিবস</span>
                    <span className="text-[10px] text-[#5f6368]">সময়কাল</span>
                  </div>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs text-[#5f6368] self-center mr-1 font-medium">সাধারণ মাপ:</span>
                {quickPresets.map((preset) => (
                  <button
                    key={preset.length}
                    type="button"
                    onClick={() => setLengthFeet(preset.length)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                      lengthFeet === preset.length
                        ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                        : 'bg-white text-[#3c4043] hover:bg-[#f1f3f4] border border-[#dadce0]'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wall Height Selection (6ft, 7ft, 8ft) */}
            <div className="mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[#202124] mb-2">
                প্রাচীরের উচ্চতা (ভূ-পৃষ্ঠের ওপরে):
              </label>
              <div className="grid grid-cols-3 gap-3">
                {([6, 7, 8] as const).map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setHeightFeet(h)}
                    className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center gap-1 ${
                      heightFeet === h
                        ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#1a73e8] shadow-2xs'
                        : 'bg-white border-[#dadce0] text-[#5f6368] hover:border-[#bdc1c6]'
                    }`}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#202124]">{h} ফুট</span>
                    <span className="text-xs text-[#1a73e8] font-semibold">{h}টি স্ল্যাব</span>
                    <span className="text-[11px] text-[#5f6368]">
                      {h === 6 ? 'সর্বাধিক প্রচলিত' : h === 7 ? 'স্ট্যান্ডার্ড ফ্যাক্টরি' : 'সর্বোচ্চ নিরাপত্তা'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Location Selector */}
            <div className="mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[#202124] mb-2">
                প্রকল্পের অবস্থান ও পরিবহন ব্যবস্থা:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocation('within_birbhum')}
                  className={`p-3.5 rounded-2xl border text-left transition ${
                    location === 'within_birbhum'
                      ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#202124] shadow-2xs'
                      : 'bg-white border-[#dadce0] text-[#5f6368] hover:border-[#bdc1c6]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${location === 'within_birbhum' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
                    <span className="text-sm font-bold text-[#202124]">বীরভূম জেলার অভ্যন্তরীণ</span>
                  </div>
                  <p className="text-xs text-[#5f6368] mt-1 pl-6">
                    সাঁইথিয়া, সিউড়ি, বোলপুর, রামপুরহাট, দুবরাজপুর, ইলামবাজার (সর্বনিম্ন কারখানা পরিবহন)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setLocation('outside_birbhum')}
                  className={`p-3.5 rounded-2xl border text-left transition ${
                    location === 'outside_birbhum'
                      ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#202124] shadow-2xs'
                      : 'bg-white border-[#dadce0] text-[#5f6368] hover:border-[#bdc1c6]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Truck className={`w-4 h-4 ${location === 'outside_birbhum' ? 'text-[#1a73e8]' : 'text-[#5f6368]'}`} />
                    <span className="text-sm font-bold text-[#202124]">পার্শ্ববর্তী জেলা</span>
                  </div>
                  <p className="text-xs text-[#5f6368] mt-1 pl-6">
                    বর্ধমান, মুর্শিদাবাদ, আসানসোল বা সংলগ্ন অঞ্চল
                  </p>
                </button>
              </div>
            </div>

            {/* Security Topper Add-on */}
            <div className="mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-[#202124] mb-2">
                শীর্ষভাগের নিরাপত্তা ব্যবস্থা (ঐচ্ছিক):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'none', label: 'সাধারণ ফিনিশ', sub: 'কাঁটাতার বিহীন মসৃণ প্রাচীর' },
                  { id: 'barbed_wire', label: 'ওয়াই-আর্ম কাঁটাতার', sub: '৩ স্তরবিশিষ্ট জিআই তার' },
                  { id: 'concertina_coil', label: 'কনসার্টিনা রেজোর কয়েল', sub: 'সর্বোচ্চ পেরিমিটার নিরাপত্তা' },
                ].map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setSecurityExtension(sec.id as any)}
                    className={`p-3 rounded-2xl border text-left transition ${
                      securityExtension === sec.id
                        ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#1a73e8] font-bold shadow-2xs'
                        : 'bg-white border-[#dadce0] text-[#5f6368] hover:border-[#bdc1c6]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#202124]">{sec.label}</div>
                    <div className="text-[11px] text-[#5f6368] mt-0.5">{sec.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Concrete Grade Selection */}
            <div className="pt-3 border-t border-[#dadce0] flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-[#3c4043]">
                <span className="font-semibold text-[#202124]">কংক্রিটের কাঠামোগত গ্রেড: </span>
                <span className="text-[#1a73e8] font-bold">{panelGrade === 'heavy_duty_m35' ? 'এম-৩৫ হেভি ইন্ডাস্ট্রিয়াল' : 'এম-৩০ স্ট্যান্ডার্ড ভাইব্রেটেড'}</span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPanelGrade('standard_m30')}
                  className={`px-3.5 py-1.5 text-xs rounded-full font-medium transition ${
                    panelGrade === 'standard_m30'
                      ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                      : 'bg-white text-[#3c4043] border border-[#dadce0]'
                  }`}
                >
                  এম-৩০ (মানসম্মত)
                </button>
                <button
                  type="button"
                  onClick={() => setPanelGrade('heavy_duty_m35')}
                  className={`px-3.5 py-1.5 text-xs rounded-full font-medium transition ${
                    panelGrade === 'heavy_duty_m35'
                      ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                      : 'bg-white text-[#3c4043] border border-[#dadce0]'
                  }`}
                >
                  এম-৩৫ (ভারী শিল্পগ্রেড)
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Bill of Quantities & Ballpark Estimate Card */}
          <div className="lg:col-span-5 bg-white border border-[#dadce0] rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1a73e8]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#5f6368]">
                  প্রাক্কলিত বিবরণ ও উপকরণের তালিকা (BOQ)
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEstimate}
                className="px-3 py-1 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] text-[#3c4043] text-xs font-medium flex items-center gap-1.5 transition"
                title="প্রাক্কলন কপি করুন"
              >
                {copiedEstimate ? <Check className="w-3.5 h-3.5 text-[#137333]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEstimate ? 'কপি সম্পন্ন' : 'কপি করুন'}</span>
              </button>
            </div>

            {/* Total Estimated Cost Display */}
            <div className="mb-6 p-4 rounded-2xl bg-[#e8f0fe] border border-[#d2e3fc] text-center">
              <div className="text-xs text-[#1967d2] font-semibold uppercase tracking-wider">
                আনুমানিক সর্বমোট প্রকল্প ব্যয়
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#1a73e8] mt-1">
                ₹{estimate.totalEstimatedCost.toLocaleString('en-IN')}*
              </div>
              <div className="text-xs text-[#3c4043] mt-1.5 font-normal">
                গড়ে প্রায় <strong className="text-[#202124] font-bold">₹{estimate.costPerRunningFoot} / রানিং ফুট</strong> (উপকরণ, সংস্থাপন ও মজুরি সহ)
              </div>
            </div>

            {/* Bill of Quantities Details */}
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between items-center py-2.5 border-b border-[#f1f3f4]">
                <span className="text-[#5f6368] flex items-center gap-2 font-normal">
                  <Layers className="w-4 h-4 text-[#1a73e8]" />
                  প্রিকাস্ট কংক্রিট স্ল্যাব:
                </span>
                <span className="font-bold text-[#202124]">
                  {estimate.panelsCount} টি <span className="text-xs text-[#5f6368] font-normal">({estimate.baysCount}টি গ্যাপ × {estimate.heightFeet})</span>
                </span>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-[#f1f3f4]">
                <span className="text-[#5f6368] flex items-center gap-2 font-normal">
                  <Building2 className="w-4 h-4 text-[#1a73e8]" />
                  প্রি-স্ট্রেসড এইচ-পিলার:
                </span>
                <span className="font-bold text-[#202124]">
                  {estimate.pillarsCount} টি <span className="text-xs text-[#5f6368] font-normal">({estimate.pillarHeightTotalFeet} ফুট মোট দৈর্ঘ্য)</span>
                </span>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-[#f1f3f4]">
                <span className="text-[#5f6368] flex items-center gap-2 font-normal">
                  <Clock className="w-4 h-4 text-[#137333]" />
                  আনুমানিক সম্পাদন সময়:
                </span>
                <span className="font-bold text-[#137333]">
                  {estimate.estimatedDaysToInstall} কার্যদিবস
                </span>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-[#f1f3f4]">
                <span className="text-[#5f6368] flex items-center gap-2 font-normal">
                  <Hammer className="w-4 h-4 text-[#5f6368]" />
                  খনন, সংস্থাপন ও কারিগরি মজুরি:
                </span>
                <span className="font-semibold text-[#202124]">
                  অন্তর্ভুক্ত (Included)
                </span>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-[#f1f3f4]">
                <span className="text-[#5f6368] flex items-center gap-2 font-normal">
                  <Truck className="w-4 h-4 text-[#5f6368]" />
                  কারখানা পরিবহন:
                </span>
                <span className="font-semibold text-[#202124]">
                  {location === 'within_birbhum' ? 'বীরভূম ভর্তুকিযুক্ত সরবরাহ' : 'দূরবর্তী পরিবহন'}
                </span>
              </div>
            </div>

            {/* Brick Wall Comparison Badge in Google Style */}
            <div className="mb-6 p-4 rounded-2xl bg-[#e6f4ea] border border-[#ceead6]">
              <div className="flex items-center gap-2 text-[#137333] font-bold text-xs uppercase tracking-wider mb-1">
                <TrendingDown className="w-4 h-4 text-[#137333]" /> সনাতন ইঁটের প্রাচীরের সাথে তুলনামূলক বিশ্লেষণ
              </div>
              <p className="text-xs text-[#3c4043] leading-relaxed font-normal">
                একই পরিমাপের ১০ ইঞ্চি ইঁটের দেয়াল নির্মাণে আনুমানিক ব্যয় হতো প্রায় <span className="line-through text-[#5f6368]">₹{estimate.traditionalBrickWallCost.toLocaleString('en-IN')}</span> এবং সময় প্রয়োজন হতো ৩ সপ্তাহ।
              </p>
              <div className="text-xs font-bold text-[#137333] mt-1.5">
                শক্তি প্রিকাস্টে আপনার সাশ্রয় আনুমানিক <span className="text-[#137333] font-bold text-sm">₹{estimate.savingsVsBrick.toLocaleString('en-IN')} ({estimate.savingsPercentage}%)</span>!
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onBookSurvey(estimate)}
                className="w-full py-3.5 px-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-2xs hover:shadow-sm active:scale-98"
              >
                <span>এই প্রাক্কলনে সাইট পরিদর্শনের আবেদন করুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-center text-[#5f6368] pt-1 font-normal">
                *মাটির অবস্থা (পাথর/মোরাম) এবং গেটের চাহিদার ওপর ভিত্তি করে চূড়ান্ত ব্যয়ে সামান্য সমন্বয় হতে পারে।
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
