import React, { useState } from 'react';
import { Layers, Shield, Eye, Info, Sparkles, CheckCircle2, ChevronRight, Compass, Wrench, ArrowDown, Sliders } from 'lucide-react';

interface InteractiveWallStackProps {
  initialHeight?: 6 | 7 | 8;
  onSelectHeight?: (h: 6 | 7 | 8) => void;
  onExploreCalculator?: () => void;
}

export const InteractiveWallStack: React.FC<InteractiveWallStackProps> = ({
  initialHeight = 6,
  onSelectHeight,
  onExploreCalculator,
}) => {
  const [wallHeight, setWallHeight] = useState<6 | 7 | 8>(initialHeight);
  const [viewMode, setViewMode] = useState<'locked' | 'exploded' | 'xray' | 'cross_section'>('locked');
  const [showSecurityYArm, setShowSecurityYArm] = useState<boolean>(true);
  const [selectedPart, setSelectedPart] = useState<'panel' | 'pillar' | 'joint' | 'foundation' | 'yarm'>('panel');
  const [hoveredPlank, setHoveredPlank] = useState<number | null>(null);

  const handleHeightChange = (h: 6 | 7 | 8) => {
    setWallHeight(h);
    if (onSelectHeight) onSelectHeight(h);
  };

  const getPartDetails = () => {
    switch (selectedPart) {
      case 'pillar':
        return {
          title: 'প্রি-স্ট্রেসড এইচ-পিলার (Prestressed Concrete H-Pillar)',
          badge: 'এম-৩০/৩৫ গ্রেড কংক্রিট',
          spec: 'প্রস্থচ্ছেদ: ৬" × ৬" (১৫০ মিমি) | স্লাইডিং খাঁজ: ৩৫ মিমি গভীর',
          wire: 'অভ্যন্তরে ৪টি ৪ মিমি হাই-কার্বন প্রি-স্ট্রেসড স্প্রিং স্টিল তার (১৬০০ N/mm²)',
          benefit: 'মাটির নিচে ৩ ফুট গভীর বোরহোলে পিসিসি কংক্রিট জাম্পিং। কালবৈশাখী ঝড় ও বাহ্যিক প্রচণ্ড চাপে সম্পূর্ণ অবিচল থাকে।',
        };
      case 'joint':
        return {
          title: 'ইন্টারলকিং খাঁজ ও জোড়া (Tongue & Groove Lock)',
          badge: '১০০% নিখুঁত সংযোগ',
          spec: 'সিএনসি মেটালিক ডাইস-এ তৈরি সংহত খাঁজ সংযোগ',
          wire: 'হাই-ফ্রিকোয়েন্সি টেবিল ভাইব্রেশন ও কিউরিং',
          benefit: 'প্রতিটি স্ল্যাব নিচের স্ল্যাবের সাথে নিবিড়ভাবে লক হয়ে যায়। বৃষ্টির জল বা ধুলোবালি প্রবেশের কোনো অবকাশ থাকে না।',
        };
      case 'foundation':
        return {
          title: 'ভূগর্ভস্থ ভিত্তি ও পিসিসি জাম্পিং (PCC Concrete Footing)',
          badge: '৩ ফুট ভূগর্ভস্থ ডেপথ',
          spec: '১:২:৪ আনুপাতিক সিমেন্ট-বালি-পাথর জাম্পিং ঢালাই',
          wire: '১২ ইঞ্চি ব্যাসের গভীর বোরহোল অ্যাঙ্করিং',
          benefit: 'সম্পূর্ণ প্রাচীর বরাবর টানা নর্দমা বা ট্রেঞ্চ খোঁড়ার কোনো প্রয়োজন নেই; ফলে মাটি ও বাগানের ক্ষতি সর্বনিম্ন থাকে।',
        };
      case 'yarm':
        return {
          title: 'জিআই ওয়াই-আর্ম সিকিউরিটি কাঁটাতার (Anti-Climb Y-Arm)',
          badge: 'উচ্চ সুরক্ষা প্যাকেজ',
          spec: '৫০×৫০×৫ মিমি গ্যালভানাইজড এমএস কোণ | ৩-স্তর কাঁটাতার',
          wire: 'জিআই হট-ডিপ গ্যালভানাইজড হাই-টেনসাইল বার্বড ওয়্যার',
          benefit: 'অনুপ্রবেশ রোধে কার্যকর বাধা। কারখানার গুদাম, বাগানবাড়ি বা খামার সুরক্ষায় আদর্শ ব্যবস্থা।',
        };
      case 'panel':
      default:
        return {
          title: 'ভাইব্রেটেড কংক্রিট স্ল্যাব (Precast Concrete Plank)',
          badge: 'এম-৩০ ভাইব্রেটেড কংক্রিট',
          spec: 'পরিমাপ: ৭ ফুট দৈর্ঘ্য × ১ ফুট উচ্চতা × ২.২৫ ইঞ্চি (৫৭ মিমি) পুরুত্ব',
          wire: 'অভ্যন্তরে ৩টি অনুদৈর্ঘ্য হাই-টেনসাইল প্রি-স্ট্রেসড স্টিল ওয়্যার',
          benefit: 'মসৃণ মেটালিক ফিনিশ। কোনো প্লাস্টার বা রঙ ছাড়াই ৫০ বছরের বেশি অক্ষত ও দৃষ্টিনন্দন থাকে।',
        };
    }
  };

  const details = getPartDetails();

  return (
    <div className="bg-white border border-[#dadce0] rounded-3xl p-5 sm:p-6 shadow-2xs hover:shadow-sm transition relative overflow-hidden flex flex-col justify-between">
      {/* Header bar: Title and View Switcher */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-[#dadce0]">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1967d2]">
              <Layers className="w-3.5 h-3.5 text-[#1a73e8]" />
              <span>প্রকৌশলগত সিএডি ব্লুপ্রিন্ট ও গঠন</span>
            </span>
            <span className="text-[11px] font-mono text-[#5f6368] hidden sm:inline">CAD Profile v4.2</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#202124] mt-1">
            শক্তি "চায়না প্রাচীর"-এর অভ্যন্তরীণ স্থাপত্য
          </h3>
        </div>

        {/* View mode segmented buttons (Google Material 3 style) */}
        <div className="flex items-center bg-[#f1f3f4] p-1 rounded-full border border-[#dadce0] flex-wrap gap-1">
          <button
            type="button"
            onClick={() => setViewMode('locked')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              viewMode === 'locked'
                ? 'bg-white text-[#1a73e8] shadow-2xs font-semibold'
                : 'text-[#5f6368] hover:text-[#202124]'
            }`}
          >
            সংস্থাপিত দৃশ্য
          </button>
          <button
            type="button"
            onClick={() => setViewMode('exploded')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              viewMode === 'exploded'
                ? 'bg-white text-[#1a73e8] shadow-2xs font-semibold'
                : 'text-[#5f6368] hover:text-[#202124]'
            }`}
          >
            স্লাইডিং ইন্টারলক
          </button>
          <button
            type="button"
            onClick={() => setViewMode('xray')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              viewMode === 'xray'
                ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                : 'text-[#5f6368] hover:text-[#202124]'
            }`}
          >
            অভ্যন্তরীণ স্টিল তার (X-Ray)
          </button>
          <button
            type="button"
            onClick={() => setViewMode('cross_section')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              viewMode === 'cross_section'
                ? 'bg-[#137333] text-white shadow-2xs font-semibold'
                : 'text-[#5f6368] hover:text-[#202124]'
            }`}
          >
            প্রস্থচ্ছেদ (Top View)
          </button>
        </div>
      </div>

      {/* Main Diagram Area with Material styling */}
      <div className="relative z-10 flex flex-col items-center bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-4 mb-4">
        {/* Controls row */}
        <div className="w-full flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#e8eaed]">
          {/* Height Selection */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#5f6368] font-medium mr-1">উচ্চতা নির্বাচন:</span>
            {([6, 7, 8] as const).map((h) => (
              <button
                key={h}
                type="button"
                onClick={() => handleHeightChange(h)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  wallHeight === h
                    ? 'bg-[#1a73e8] text-white shadow-2xs font-semibold'
                    : 'bg-white text-[#3c4043] hover:bg-[#f1f3f4] border border-[#dadce0]'
                }`}
              >
                {h === 6 ? '৬ ফুট (৬ স্ল্যাব)' : h === 7 ? '৭ ফুট (৭ স্ল্যাব)' : '৮ ফুট (৮ স্ল্যাব)'}
              </button>
            ))}
          </div>

          {/* Part Selection Pills & Y-Arm Toggle */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-full border border-[#dadce0]">
              {[
                { id: 'panel', label: 'কংক্রিট স্ল্যাব' },
                { id: 'pillar', label: 'এইচ-পিলার' },
                { id: 'joint', label: 'খাঁজ লক' },
                { id: 'foundation', label: 'ভিত্তি' },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPart(p.id as any)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${
                    selectedPart === p.id
                      ? 'bg-[#e8f0fe] text-[#1967d2] font-semibold'
                      : 'text-[#5f6368] hover:text-[#202124]'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Y-Arm security toggle */}
            <button
              type="button"
              onClick={() => {
                setShowSecurityYArm(!showSecurityYArm);
                if (!showSecurityYArm) setSelectedPart('yarm');
              }}
              className={`text-xs px-3 py-1 rounded-full flex items-center gap-1.5 transition shrink-0 ${
                showSecurityYArm
                  ? 'bg-[#fef7e0] text-[#b06000] border border-[#fce8b2] font-medium'
                  : 'bg-white text-[#5f6368] border border-[#dadce0]'
              }`}
            >
              <Shield className="w-3.5 h-3.5 text-[#ea8600]" />
              <span>ওয়াই-আর্ম কাঁটাতার: {showSecurityYArm ? 'চালু' : 'বাদ'}</span>
            </button>
          </div>
        </div>

        {/* Visual representation Container */}
        <div className="w-full max-w-[540px] py-1 relative flex flex-col items-center select-none">
          {viewMode === 'cross_section' ? (
            /* Architectural Top-Down CAD View */
            <div className="w-full bg-white rounded-2xl p-4 sm:p-5 border border-[#dadce0] shadow-2xs text-center my-1">
              <div className="flex items-center justify-between mb-3 border-b border-[#e8eaed] pb-2">
                <div className="text-xs font-bold text-[#137333] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#137333]" />
                  <span>এইচ-পিলার ও ইন্টারলকিং স্ল্যাবের অনুভূমিক প্রস্থচ্ছেদ (Top-Down CAD Plan)</span>
                </div>
                <span className="text-[11px] font-mono text-[#5f6368]">স্কেল: ১:৫</span>
              </div>

              <svg viewBox="0 0 500 170" className="w-full h-auto max-h-[170px]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="concreteHatch" width="8" height="8" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="8" y2="8" stroke="#cbd5e1" strokeWidth="0.8" />
                  </pattern>
                </defs>

                {/* Left H Column (Top View) */}
                <g onClick={() => setSelectedPart('pillar')} className="cursor-pointer">
                  {/* Outer column 150x150 mm (represented 60x60) */}
                  <path
                    d="M 50 35 L 110 35 L 110 65 L 85 65 L 85 105 L 110 105 L 110 135 L 50 135 L 50 105 L 75 105 L 75 65 L 50 65 Z"
                    fill="#334155"
                    stroke="#0f172a"
                    strokeWidth="2"
                  />
                  {/* 4 Prestressed Carbon Steel Rebars */}
                  <circle cx="62" cy="47" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="98" cy="47" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="62" cy="123" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="98" cy="123" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <text x="80" y="153" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#334155">
                    বাম এইচ-পিলার (৬" × ৬")
                  </text>
                </g>

                {/* Precast Slab inserted into channels */}
                <g onClick={() => setSelectedPart('panel')} className="cursor-pointer">
                  {/* Slab spanning between pillars, inserted into the 25mm deep groove */}
                  <rect x="85" y="70" width="330" height="30" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" rx="2" />
                  <rect x="85" y="70" width="330" height="30" fill="url(#concreteHatch)" />

                  {/* 3 High-tensile wires shown in slab center */}
                  <line x1="90" y1="85" x2="410" y2="85" stroke="#1a73e8" strokeWidth="2.5" strokeDasharray="5 2" />
                  <circle cx="150" cy="85" r="2.5" fill="#1a73e8" />
                  <circle cx="250" cy="85" r="2.5" fill="#1a73e8" />
                  <circle cx="350" cy="85" r="2.5" fill="#1a73e8" />

                  {/* Center slab label */}
                  <rect x="180" y="76" width="140" height="18" fill="#ffffff" rx="9" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="250" y="89" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#1e293b">
                    ৭ ফুট স্ল্যাব (২.২৫" পুরু এম-৩০)
                  </text>
                </g>

                {/* Right H Column (Top View) */}
                <g onClick={() => setSelectedPart('pillar')} className="cursor-pointer">
                  <path
                    d="M 450 35 L 390 35 L 390 65 L 415 65 L 415 105 L 390 105 L 390 135 L 450 135 L 450 105 L 425 105 L 425 65 L 450 65 Z"
                    fill="#334155"
                    stroke="#0f172a"
                    strokeWidth="2"
                  />
                  <circle cx="438" cy="47" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="402" cy="47" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="438" cy="123" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <circle cx="402" cy="123" r="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
                  <text x="420" y="153" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#334155">
                    ডান এইচ-পিলার (৬" × ৬")
                  </text>
                </g>

                {/* Dimension & Groove Callout Line */}
                <g>
                  {/* 35mm groove callout */}
                  <path d="M 85 62 L 85 52 M 110 52 L 110 62 M 85 55 L 110 55" stroke="#ea8600" strokeWidth="1.2" />
                  <text x="98" y="49" fontSize="8" textAnchor="middle" fontWeight="bold" fill="#b06000">৩৫ মিমি খাঁজ</text>

                  {/* Slab thickness dimension */}
                  <path d="M 380 70 L 387 70 M 380 100 L 387 100 M 385 70 L 385 100" stroke="#1a73e8" strokeWidth="1.2" />
                  <text x="390" y="88" fontSize="8" textAnchor="start" fontWeight="bold" fill="#1a73e8">২.২৫" পুরু</text>

                  {/* Bottom guideline description */}
                  <text x="250" y="20" fontSize="9" textAnchor="middle" fontWeight="bold" fill="#137333">
                    পিলারের ৩৫ মিমি খাঁজের ভিতরে স্ল্যাবটি মসৃণভাবে লক হয়ে যায় — কোনো ঢালাই বা মর্টার ছাড়া
                  </text>
                </g>
              </svg>
            </div>
          ) : (
            /* High-Fidelity Architectural Elevation CAD SVG */
            <svg
              viewBox="0 0 520 380"
              className="w-full h-auto max-h-[380px] drop-shadow-xs"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Concrete plank gradient */}
                <linearGradient id="cadConcreteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f8fafc" />
                  <stop offset="15%" stopColor="#e2e8f0" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>

                {/* Selected/Hovered concrete plank gradient */}
                <linearGradient id="cadConcreteActive" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e8f0fe" />
                  <stop offset="30%" stopColor="#d2e3fc" />
                  <stop offset="100%" stopColor="#8ab4f8" />
                </linearGradient>

                {/* H-Pillar Charcoal Granite Concrete Gradient */}
                <linearGradient id="cadPillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="25%" stopColor="#334155" />
                  <stop offset="70%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Foundation PCC Concrete Hatch/Fill */}
                <linearGradient id="pccGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f1f5f9" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>

                {/* Soil Cross-section Gradient */}
                <linearGradient id="soilStratum" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fde68a" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Sub-grade Soil Cross Section (Below Ground Level y=270) */}
              <g>
                <rect x="35" y="270" width="450" height="95" fill="url(#soilStratum)" rx="4" />
                
                {/* Earth strata hatching / speckles */}
                <line x1="35" y1="295" x2="485" y2="295" stroke="#d97706" strokeWidth="0.8" strokeDasharray="6 4" opacity="0.3" />
                <line x1="35" y1="325" x2="485" y2="325" stroke="#d97706" strokeWidth="0.8" strokeDasharray="10 6" opacity="0.25" />

                {/* Ground Level Surface Line (Datum Line) */}
                <line x1="25" y1="270" x2="495" y2="270" stroke="#15803d" strokeWidth="2.5" />
                <polygon points="25,270 30,266 30,274" fill="#15803d" />
                <polygon points="495,270 490,266 490,274" fill="#15803d" />

                {/* Ground Level Tag */}
                <rect x="35" y="254" width="130" height="15" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" rx="7.5" />
                <text x="100" y="265" fill="#15803d" fontSize="8" fontWeight="bold" textAnchor="middle">
                  ±০.০০ ভূ-পৃষ্ঠ (Ground Level)
                </text>
              </g>

              {/* PCC Foundation Footing Block (Left Pillar Footing) */}
              <g onClick={() => setSelectedPart('foundation')} className="cursor-pointer">
                <rect
                  x="72"
                  y="270"
                  width="48"
                  height="90"
                  fill="url(#pccGrad)"
                  stroke={selectedPart === 'foundation' ? '#1a73e8' : '#94a3b8'}
                  strokeWidth={selectedPart === 'foundation' ? 2 : 1}
                  rx="3"
                />
                {/* PCC concrete aggregate stones */}
                <circle cx="85" cy="290" r="3" fill="#cbd5e1" />
                <circle cx="105" cy="305" r="3.5" fill="#94a3b8" />
                <circle cx="88" cy="325" r="2.5" fill="#cbd5e1" />
                <circle cx="108" cy="345" r="3" fill="#94a3b8" />
                
                {/* Underground pillar shaft inside PCC */}
                <rect x="83" y="270" width="26" height="80" fill="#334155" opacity="0.85" rx="1" />
                <line x1="96" y1="270" x2="96" y2="350" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
                
                {/* PCC Pill Badge */}
                <rect x="76" y="325" width="40" height="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" rx="7" />
                <text x="96" y="335" fill="#334155" fontSize="7.5" fontWeight="bold" textAnchor="middle">পিসিসি</text>
              </g>

              {/* PCC Foundation Footing Block (Right Pillar Footing) */}
              <g onClick={() => setSelectedPart('foundation')} className="cursor-pointer">
                <rect
                  x="400"
                  y="270"
                  width="48"
                  height="90"
                  fill="url(#pccGrad)"
                  stroke={selectedPart === 'foundation' ? '#1a73e8' : '#94a3b8'}
                  strokeWidth={selectedPart === 'foundation' ? 2 : 1}
                  rx="3"
                />
                <circle cx="415" cy="290" r="3" fill="#cbd5e1" />
                <circle cx="435" cy="305" r="3.5" fill="#94a3b8" />
                <circle cx="418" cy="325" r="2.5" fill="#cbd5e1" />
                <circle cx="438" cy="345" r="3" fill="#94a3b8" />
                
                <rect x="411" y="270" width="26" height="80" fill="#334155" opacity="0.85" rx="1" />
                <line x1="424" y1="270" x2="424" y2="350" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

                <rect x="404" y="325" width="40" height="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" rx="7" />
                <text x="424" y="335" fill="#334155" fontSize="7.5" fontWeight="bold" textAnchor="middle">পিসিসি</text>
              </g>

              {/* Foundation Clear Annotation in the Center Open Space (NO OVERLAP!) */}
              <g onClick={() => setSelectedPart('foundation')} className="cursor-pointer">
                {/* Leader lines from both PCC footings to the center callout */}
                <path d="M 120 315 L 145 315 L 155 305" stroke="#0284c7" strokeWidth="1.2" fill="none" />
                <circle cx="120" cy="315" r="2" fill="#0284c7" />

                <path d="M 400 315 L 375 315 L 365 305" stroke="#0284c7" strokeWidth="1.2" fill="none" />
                <circle cx="400" cy="315" r="2" fill="#0284c7" />

                {/* Central Info Card Box */}
                <rect x="150" y="285" width="220" height="42" fill="#ffffff" stroke="#bae6fd" strokeWidth="1.2" rx="8" />
                <circle cx="166" cy="300" r="8" fill="#e0f2fe" />
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0284c7]" x="160" y="294" />
                <text x="180" y="299" fill="#0369a1" fontSize="8.5" fontWeight="bold">
                  ৩ ফুট ভূগর্ভস্থ পিসিসি ঢালাই জাম্পিং (১:২:৪)
                </text>
                <text x="180" y="315" fill="#5f6368" fontSize="7.5">
                  ১২" ব্যাসের স্বতন্ত্র বোরহোল • কোনো টানা নর্দমা খোঁড়া লাগে না
                </text>

                {/* Underground depth dimension callout */}
                <line x1="60" y1="270" x2="60" y2="360" stroke="#64748b" strokeWidth="1" />
                <line x1="56" y1="270" x2="64" y2="270" stroke="#64748b" strokeWidth="1" />
                <line x1="56" y1="360" x2="64" y2="360" stroke="#64748b" strokeWidth="1" />
                <text x="52" y="318" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="end">
                  ৩' গভীরতা
                </text>
              </g>

              {/* Y-Arm Security Extensions (Top of Pillars) */}
              {showSecurityYArm && (
                <g onClick={() => setSelectedPart('yarm')} className="cursor-pointer transition-opacity duration-300">
                  {/* Left Galvanized Y-Arm Bracket */}
                  <g>
                    {/* Mounting base on pillar top */}
                    <rect x="80" y="72" width="32" height="6" fill="#64748b" rx="1" />
                    <circle cx="86" cy="75" r="1.5" fill="#0f172a" />
                    <circle cx="106" cy="75" r="1.5" fill="#0f172a" />
                    {/* 45 degree outward branch */}
                    <path d="M 96 72 L 72 38 L 58 44" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    {/* 45 degree inward branch */}
                    <path d="M 96 72 L 118 38 L 130 44" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>

                  {/* Right Galvanized Y-Arm Bracket */}
                  <g>
                    <rect x="408" y="72" width="32" height="6" fill="#64748b" rx="1" />
                    <circle cx="414" cy="75" r="1.5" fill="#0f172a" />
                    <circle cx="434" cy="75" r="1.5" fill="#0f172a" />
                    <path d="M 424 72 L 402 38 L 390 44" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M 424 72 L 448 38 L 462 44" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </g>

                  {/* 3 Horizontal Tensioned Galvanized Barbed Wires */}
                  {/* Top wire strand */}
                  <line x1="60" y1="40" x2="460" y2="40" stroke="#b45309" strokeWidth="1.8" />
                  {/* Middle wire strand */}
                  <line x1="80" y1="52" x2="440" y2="52" stroke="#b45309" strokeWidth="1.8" />
                  {/* Bottom wire strand */}
                  <line x1="94" y1="64" x2="426" y2="64" stroke="#b45309" strokeWidth="1.8" />

                  {/* Barb Cross-Ticks (Realistic Barbed Wire) */}
                  {[130, 190, 260, 330, 390].map((bx) => (
                    <g key={bx}>
                      {/* Top wire barbs */}
                      <line x1={bx - 4} y1="37" x2={bx + 4} y2="43" stroke="#d97706" strokeWidth="1.8" />
                      <line x1={bx + 4} y1="37" x2={bx - 4} y2="43" stroke="#d97706" strokeWidth="1.8" />

                      {/* Middle wire barbs */}
                      <line x1={bx - 4} y1="49" x2={bx + 4} y2="55" stroke="#d97706" strokeWidth="1.8" />
                      <line x1={bx + 4} y1="49" x2={bx - 4} y2="55" stroke="#d97706" strokeWidth="1.8" />

                      {/* Bottom wire barbs */}
                      <line x1={bx - 4} y1="61" x2={bx + 4} y2="67" stroke="#d97706" strokeWidth="1.8" />
                      <line x1={bx + 4} y1="61" x2={bx - 4} y2="67" stroke="#d97706" strokeWidth="1.8" />
                    </g>
                  ))}

                  {/* Center Badge: Security Callout */}
                  <g>
                    <rect x="180" y="24" width="160" height="18" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1" rx="9" />
                    <text x="260" y="36" fill="#92400e" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                      জিআই ওয়াই-আর্ম ৩-স্তর কাঁটাতার (Anti-Climb)
                    </text>
                  </g>
                </g>
              )}

              {/* Left H-Pillar Column (Elevation View) */}
              <g onClick={() => setSelectedPart('pillar')} className="cursor-pointer">
                {/* Main Pillar Body */}
                <rect
                  x="83"
                  y="76"
                  width="26"
                  height="194"
                  fill="url(#cadPillarGrad)"
                  stroke={selectedPart === 'pillar' ? '#1a73e8' : '#0f172a'}
                  strokeWidth={selectedPart === 'pillar' ? 2.5 : 1.2}
                  rx="1.5"
                />
                {/* Front face channel indicator */}
                <rect x="86" y="78" width="6" height="190" fill="#475569" opacity="0.6" />
                {/* Inner Groove Slot where planks slide */}
                <rect x="103" y="78" width="6" height="190" fill="#0f172a" />

                {/* Pre-stressed High Carbon Steel Rebars (Visible in X-Ray mode) */}
                {viewMode === 'xray' && (
                  <g>
                    <line x1="87" y1="78" x2="87" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="92" y1="78" x2="92" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="98" y1="78" x2="98" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="104" y1="78" x2="104" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                  </g>
                )}

                {/* Vertical Text Label with crisp backdrop */}
                <rect x="68" y="145" width="12" height="60" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" rx="6" />
                <text
                  x="74"
                  y="175"
                  fill="#1e293b"
                  fontSize="7.5"
                  fontWeight="bold"
                  transform="rotate(-90 74 175)"
                  textAnchor="middle"
                >
                  এইচ-পিলার ৬"×৬"
                </text>
              </g>

              {/* Right H-Pillar Column (Elevation View) */}
              <g onClick={() => setSelectedPart('pillar')} className="cursor-pointer">
                {/* Main Pillar Body */}
                <rect
                  x="411"
                  y="76"
                  width="26"
                  height="194"
                  fill="url(#cadPillarGrad)"
                  stroke={selectedPart === 'pillar' ? '#1a73e8' : '#0f172a'}
                  strokeWidth={selectedPart === 'pillar' ? 2.5 : 1.2}
                  rx="1.5"
                />
                {/* Front face channel indicator */}
                <rect x="428" y="78" width="6" height="190" fill="#475569" opacity="0.6" />
                {/* Inner Groove Slot where planks slide */}
                <rect x="411" y="78" width="6" height="190" fill="#0f172a" />

                {/* Pre-stressed Rebars in X-Ray Mode */}
                {viewMode === 'xray' && (
                  <g>
                    <line x1="416" y1="78" x2="416" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="421" y1="78" x2="421" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="427" y1="78" x2="427" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                    <line x1="432" y1="78" x2="432" y2="350" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="4 2" />
                  </g>
                )}

                {/* Vertical Text Label with crisp backdrop */}
                <rect x="440" y="145" width="12" height="60" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" rx="6" />
                <text
                  x="446"
                  y="175"
                  fill="#1e293b"
                  fontSize="7.5"
                  fontWeight="bold"
                  transform="rotate(90 446 175)"
                  textAnchor="middle"
                >
                  এইচ-পিলার ৬"×৬"
                </text>
              </g>

              {/* Concrete Planks Stack (Dynamic Height 6, 7, or 8) */}
              {Array.from({ length: wallHeight }).map((_, idx) => {
                const plankIndex = wallHeight - 1 - idx; // 0 is bottom plank, wallHeight - 1 is top
                const plankHeight = wallHeight === 8 ? 20 : wallHeight === 7 ? 22 : 24;
                const baseBottom = 270;
                
                // Exploded view animation gap
                const explodedGap = viewMode === 'exploded' ? (wallHeight - 1 - plankIndex) * 8 : 0;
                const yPos = baseBottom - (plankIndex + 1) * plankHeight - (plankIndex * 1.5) - explodedGap;
                const isHovered = hoveredPlank === plankIndex;

                return (
                  <g
                    key={idx}
                    onMouseEnter={() => setHoveredPlank(plankIndex)}
                    onMouseLeave={() => setHoveredPlank(null)}
                    onClick={() => setSelectedPart('panel')}
                    className="cursor-pointer transition-all duration-300"
                  >
                    {/* The Concrete Plank (extends 6px into each pillar groove) */}
                    <rect
                      x="103"
                      y={yPos}
                      width="314"
                      height={plankHeight}
                      fill={isHovered ? 'url(#cadConcreteActive)' : 'url(#cadConcreteGrad)'}
                      stroke={selectedPart === 'panel' ? '#1a73e8' : '#64748b'}
                      strokeWidth={selectedPart === 'panel' ? 1.8 : 1}
                      rx="2"
                    />

                    {/* Top Chamfer / Bevel Highlight */}
                    <line x1="104" y1={yPos + 1.5} x2="416" y2={yPos + 1.5} stroke="#ffffff" strokeWidth="1" opacity="0.9" />
                    {/* Bottom Chamfer Groove Shadow */}
                    <line x1="104" y1={yPos + plankHeight - 1} x2="416" y2={yPos + plankHeight - 1} stroke="#475569" strokeWidth="1" opacity="0.7" />

                    {/* Left & Right Tongue Seams entering H-groove */}
                    <rect x="103" y={yPos + 2} width="6" height={plankHeight - 4} fill="#0f172a" opacity="0.4" />
                    <rect x="411" y={yPos + 2} width="6" height={plankHeight - 4} fill="#0f172a" opacity="0.4" />

                    {/* Exploded sliding indicator arrows */}
                    {viewMode === 'exploded' && (
                      <g>
                        <path
                          d={`M 260 ${yPos - 5} L 260 ${yPos - 1} M 257 ${yPos - 3} L 260 ${yPos - 0.5} L 263 ${yPos - 3}`}
                          stroke="#1a73e8"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </g>
                    )}

                    {/* X-Ray Mode: 3 High-tensile Spring Steel Wires inside Slab */}
                    {viewMode === 'xray' && (
                      <g>
                        <line x1="105" y1={yPos + 5} x2="415" y2={yPos + 5} stroke="#0284c7" strokeWidth="1.8" strokeDasharray="5 2" />
                        <line x1="105" y1={yPos + plankHeight / 2} x2="415" y2={yPos + plankHeight / 2} stroke="#0284c7" strokeWidth="1.8" strokeDasharray="5 2" />
                        <line x1="105" y1={yPos + plankHeight - 5} x2="415" y2={yPos + plankHeight - 5} stroke="#0284c7" strokeWidth="1.8" strokeDasharray="5 2" />
                      </g>
                    )}

                    {/* Slab Number Pill Chip */}
                    <rect
                      x="114"
                      y={yPos + (plankHeight - 13) / 2}
                      width="16"
                      height="13"
                      fill="#ffffff"
                      stroke="#94a3b8"
                      strokeWidth="0.8"
                      rx="3"
                    />
                    <text
                      x="122"
                      y={yPos + (plankHeight - 13) / 2 + 9}
                      fill="#1e293b"
                      fontSize="7.5"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {plankIndex + 1}
                    </text>

                    {/* Slab Specification Title */}
                    <text
                      x="260"
                      y={yPos + (plankHeight / 2) + 3}
                      fill="#1e293b"
                      fontSize={wallHeight === 8 ? 8 : 8.5}
                      fontWeight="bold"
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                    >
                      {viewMode === 'xray'
                        ? '৩টি ৪ মিমি হাই-টেনসাইল স্প্রিং স্টিল তার (১৬০০ N/mm²)'
                        : `স্ল্যাব নং ${plankIndex + 1} • ৭ ফুট × ১ ফুট × ২.২৫" (এম-৩০ ভাইব্রেটেড)`}
                    </text>
                  </g>
                );
              })}

              {/* Exploded Mode Banner Instruction */}
              {viewMode === 'exploded' && (
                <g>
                  <rect x="150" y="58" width="220" height="20" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1" rx="10" />
                  <text x="260" y="71" fill="#1a73e8" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                    উপর থেকে খাঁজ বরাবর সহজে স্লাইডিং করে লক হয়
                  </text>
                </g>
              )}

              {/* Bottom Architectural Span Dimension Line */}
              <g>
                {/* Horizontal dimension line with CAD arrows */}
                <line x1="96" y1="365" x2="424" y2="365" stroke="#475569" strokeWidth="1.2" />
                <path d="M 96 361 L 96 369 M 96 365 L 102 363 M 96 365 L 102 367" stroke="#475569" strokeWidth="1.2" fill="none" />
                <path d="M 424 361 L 424 369 M 424 365 L 418 363 M 424 365 L 418 367" stroke="#475569" strokeWidth="1.2" fill="none" />
                
                {/* Span Dimension Badge */}
                <rect x="165" y="357" width="190" height="16" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" rx="8" />
                <text x="260" y="368" fill="#1e293b" fontSize="8" fontWeight="bold" textAnchor="middle">
                  দুই পিলারের কেন্দ্র-ব্যবধান (স্প্যান): ৭' - ০" (২.১৩ মিটার)
                </text>
              </g>

              {/* Left Height Dimension Callout */}
              <g>
                {/* Vertical dimension line from ground level up to top plank */}
                {(() => {
                  const plankHeight = wallHeight === 8 ? 20 : wallHeight === 7 ? 22 : 24;
                  const topY = 270 - wallHeight * plankHeight - (wallHeight * 1.5);
                  return (
                    <>
                      <line x1="42" y1="270" x2="42" y2={topY} stroke="#1a73e8" strokeWidth="1.2" />
                      <path d={`M 38 270 L 46 270 M 42 270 L 40 264 M 42 270 L 44 264`} stroke="#1a73e8" strokeWidth="1.2" fill="none" />
                      <path d={`M 38 ${topY} L 46 ${topY} M 42 ${topY} L 40 ${topY + 6} M 42 ${topY} L 44 ${topY + 6}`} stroke="#1a73e8" strokeWidth="1.2" fill="none" />
                      <rect x="18" y={(270 + topY) / 2 - 16} width="46" height="32" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1" rx="6" />
                      <text x="41" y={(270 + topY) / 2 - 3} fill="#1a73e8" fontSize="8" fontWeight="bold" textAnchor="middle">
                        উচ্চতা
                      </text>
                      <text x="41" y={(270 + topY) / 2 + 9} fill="#1e293b" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                        {wallHeight}' - ০"
                      </text>
                    </>
                  );
                })()}
              </g>

              {/* Right Slab Thickness Indicator with Pointer */}
              <g>
                <path d="M 424 220 L 455 220 L 465 205" stroke="#0284c7" strokeWidth="1" fill="none" />
                <circle cx="424" cy="220" r="2" fill="#0284c7" />
                <rect x="445" y="195" width="70" height="20" fill="#ffffff" stroke="#bae6fd" strokeWidth="1" rx="5" />
                <text x="480" y="208" fill="#0369a1" fontSize="7.5" fontWeight="bold" textAnchor="middle">
                  ২.২৫" পুরু স্ল্যাব
                </text>
              </g>
            </svg>
          )}
        </div>

        {/* Legend / Tip line */}
        <div className="w-full flex items-center justify-between text-[11px] text-[#5f6368] pt-2 border-t border-[#e8eaed] px-1">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>স্ল্যাব, পিলার বা ভিত্তিতে ক্লিক করে বিস্তারিত প্রযুক্তিগত তথ্য দেখুন</span>
          </span>
          <span className="font-semibold text-[#1a73e8]">মোট উচ্চতা: {wallHeight} ফুট</span>
        </div>
      </div>

      {/* Horizontal Bottom Inspector Panel: Google Material Card */}
      <div className="relative z-10 bg-[#f8f9fa] border border-[#dadce0] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-left">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="text-sm sm:text-base font-bold text-[#202124]">
              {details.title}
            </h4>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e8f0fe] text-[#1967d2]">
              {details.badge}
            </span>
          </div>

          <div className="text-xs text-[#3c4043] font-normal mb-1">
            <span className="font-semibold text-[#202124]">{details.spec}</span> • <span className="text-[#1a73e8] font-medium">{details.wire}</span>
          </div>
          <p className="text-xs text-[#5f6368] line-clamp-2 font-normal">
            {details.benefit}
          </p>
        </div>

        <button
          type="button"
          onClick={onExploreCalculator}
          className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition shadow-2xs hover:shadow-sm active:scale-98 shrink-0"
        >
          <span>বাজেট প্রাক্কলন করুন</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
