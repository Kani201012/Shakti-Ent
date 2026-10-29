import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

interface StickyDockProps {
  onOpenCalculator: () => void;
  onOpenBooking: () => void;
}

export const StickyDock: React.FC<StickyDockProps> = ({ onOpenCalculator }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#dadce0] p-2.5 sm:hidden px-3 shadow-lg">
      <div className="flex items-center gap-2">
        {/* Call Now Button in Bengali */}
        <a
          href="tel:+918640829378"
          className="flex-1 py-3 px-3 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-xs tracking-wide flex items-center justify-center gap-2 shadow-2xs active:scale-95 transition"
        >
          <Phone className="w-4 h-4" />
          <span>যোগাযোগ: +৯১ ৮৬৪০৮ ২৯৩৭৮</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918640829378?text=%E0%A6%A8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BE%E0%A6%B0%20%E0%A6%B6%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF%20%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%9C%2C%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%A8%E0%A6%BE%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%9A%E0%A7%80%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%96%E0%A6%B0%E0%A6%9A%20%E0%A6%9C%E0%A6%BE%E0%A6%A8%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-11 rounded-full bg-[#137333] hover:bg-[#0d5926] text-white flex items-center justify-center shadow-xs active:scale-95 transition shrink-0"
          aria-label="হোয়াটসঅ্যাপে চ্যাট করুন"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        {/* Quick Calculator / Quote Button */}
        <button
          type="button"
          onClick={onOpenCalculator}
          className="w-12 h-11 rounded-full bg-[#f1f3f4] hover:bg-[#e8eaed] text-[#1a73e8] border border-[#dadce0] flex items-center justify-center shadow-xs active:scale-95 transition shrink-0"
          aria-label="খরচ ক্যালকুলেটর খুলুন"
        >
          <Calculator className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
