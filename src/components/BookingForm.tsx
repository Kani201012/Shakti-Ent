import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  User, 
  MapPin, 
  Ruler, 
  CheckCircle2, 
  MessageSquare, 
  Calendar,
  AlertCircle
} from 'lucide-react';
import { QuoteFormData } from '../types';
import { WallEstimateResult } from '../utils/calculator';

interface BookingFormProps {
  initialEstimate?: WallEstimateResult | null;
  preferredProduct?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ 
  initialEstimate, 
  preferredProduct 
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    townOrVillage: 'সাঁইথিয়া',
    wallLengthFeet: initialEstimate?.lengthFeet || 200,
    wallHeightFeet: (initialEstimate?.heightFeet as 6 | 7 | 8) || 6,
    locationCategory: 'within_birbhum',
    securityExtension: 'barbed_wire',
    notes: preferredProduct ? `পছন্দের মডেল: ${preferredProduct}` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (initialEstimate) {
      setFormData(prev => ({
        ...prev,
        wallLengthFeet: initialEstimate.lengthFeet,
        wallHeightFeet: initialEstimate.heightFeet as 6 | 7 | 8,
      }));
    }
  }, [initialEstimate]);

  useEffect(() => {
    if (preferredProduct) {
      setFormData(prev => ({
        ...prev,
        notes: prev.notes ? `${prev.notes} | মডেল: ${preferredProduct}` : `পছন্দের মডেল: ${preferredProduct}`,
      }));
    }
  }, [preferredProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('অনুগ্রহ করে গ্রাহকের সম্পূর্ণ নাম লিখুন।');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('অনুগ্রহ করে একটি বৈধ ১০ অঙ্কের মোবাইল নম্বর প্রদান করুন।');
      return;
    }

    if (!formData.wallLengthFeet || formData.wallLengthFeet <= 0) {
      setErrorMessage('অনুগ্রহ করে প্রাচীরের আনুমানিক দৈর্ঘ্য (ফুটে) উল্লেখ করুন।');
      return;
    }

    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `*নতুন সীমানা প্রাচীর সংক্রান্ত অনুসন্ধান - শক্তি এন্টারপ্রাইজ*%0A` +
      `*গ্রাহকের নাম:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*মোবাইল নম্বর:* ${encodeURIComponent(formData.phone)}%0A` +
      `*প্রকল্পের অবস্থান:* ${encodeURIComponent(formData.townOrVillage)} (বীরভূম)%0A` +
      `*প্রাচীরের দৈর্ঘ্য:* ${formData.wallLengthFeet} ফুট%0A` +
      `*আকাঙ্ক্ষিত উচ্চতা:* ${formData.wallHeightFeet} ফুট%0A` +
      `*নিরাপত্তা ব্যবস্থা:* ${formData.securityExtension === 'barbed_wire' ? 'ওয়াই-আর্ম কাঁটাতার' : formData.securityExtension === 'concertina_coil' ? 'কনসার্টিনা কয়েল' : 'সাধারণ মসৃণ ফিনিশ'}%0A` +
      (initialEstimate ? `*প্রাক্কলিত বাজেট:* ₹${initialEstimate.totalEstimatedCost.toLocaleString('en-IN')}%0A` : '') +
      `*বিশেষ নির্দেশনা:* ${encodeURIComponent(formData.notes || 'বিনামূল্যে সাইট পরিদর্শন ও পরিমাপের জন্য যোগাযোগ করতে ইচ্ছুক।')}`;

    return `https://wa.me/918640829378?text=${text}`;
  };

  return (
    <section id="book-survey" className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-[#dadce0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f0fe] border border-[#d2e3fc] text-[#1967d2] text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>বিনামূল্যে সাইট পরিদর্শন ও পরিমাপ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#202124] tracking-tight">
            বিনামূল্যে সাইট পরিদর্শন ও পরিমাপের আবেদন
          </h2>
          <p className="mt-2 text-base text-[#5f6368] font-normal">
            আমাদের অভিজ্ঞ সাইট প্রকৌশলী লেজার মিটারের মাধ্যমে আপনার প্রকল্প এলাকা পরিদর্শন করে নিখুঁত পরিমাপ গ্রহণ করবেন ও চূড়ান্ত ব্যয় নির্ধারণ করবেন।
          </p>
        </div>

        {/* Card Body: Google Material Card */}
        <div className="bg-white border border-[#dadce0] rounded-3xl p-6 sm:p-10 shadow-2xs relative overflow-hidden">
          {isSubmitted ? (
            /* Success confirmation card */
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-[#e6f4ea] text-[#137333] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#202124] mb-2">
                ধন্যবাদ, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#5f6368] max-w-md mx-auto mb-6 font-normal">
                আপনার আবেদন সফলভাবে নথিভুক্ত করা হয়েছে। আমাদের সাঁইথিয়া কার্যালয়ের প্রতিনিধি আগামী ২ কর্মঘণ্টার মধ্যে <strong className="text-[#202124]">{formData.phone}</strong> নম্বরে যোগাযোগ করে পরিদর্শনের সময়সূচি নির্ধারণ করবেন।
              </p>

              <div className="max-w-md mx-auto p-4 bg-[#f8f9fa] border border-[#dadce0] rounded-2xl mb-6 text-left text-xs text-[#3c4043] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">প্রকল্পের অবস্থান:</span>
                  <span className="font-semibold text-[#202124]">{formData.townOrVillage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">প্রাচীরের দৈর্ঘ্য:</span>
                  <span className="font-semibold text-[#202124]">{formData.wallLengthFeet} ফুট</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5f6368]">আকাঙ্ক্ষিত উচ্চতা:</span>
                  <span className="font-semibold text-[#202124]">{formData.wallHeightFeet} ফুট</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-6 rounded-full bg-[#137333] hover:bg-[#0d5926] text-white font-medium text-xs flex items-center justify-center gap-2 shadow-2xs transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে তাৎক্ষণিক বার্তা প্রেরণ</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="py-3 px-6 rounded-full bg-white hover:bg-[#f8f9fa] text-[#5f6368] border border-[#dadce0] font-medium text-xs transition"
                >
                  পুনরায় নতুন আবেদন করুন
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-[#fce8e6] border border-[#fad2cf] text-[#c5221f] text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#202124] mb-1.5">
                    গ্রাহকের পূর্ণ নাম <span className="text-[#d93025]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#5f6368] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="যেমন: শ্রী অমিয় সরকার / মহম্মদ রফিক"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#dadce0] rounded-xl text-sm text-[#202124] placeholder-[#80868b] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#202124] mb-1.5">
                    যোগাযোগের মোবাইল নম্বর (হোয়াটসঅ্যাপ সহ) <span className="text-[#d93025]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#5f6368] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="১০ অঙ্কের বৈধ মোবাইল নম্বর"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#dadce0] rounded-xl text-sm text-[#202124] placeholder-[#80868b] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Town/Location */}
                <div>
                  <label htmlFor="townOrVillage" className="block text-xs font-semibold text-[#202124] mb-1.5">
                    প্রকল্পের ভৌগোলিক অবস্থান (বীরভূম) <span className="text-[#d93025]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#5f6368] absolute left-3.5 top-3.5" />
                    <select
                      id="townOrVillage"
                      value={formData.townOrVillage}
                      onChange={(e) => setFormData({ ...formData, townOrVillage: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#dadce0] rounded-xl text-sm text-[#202124] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                    >
                      <option value="সাঁইথিয়া">সাঁইথিয়া ও সন্নিহিত অঞ্চল</option>
                      <option value="সিউড়ি">সিউড়ি সদর ও সংলগ্ন ব্লক</option>
                      <option value="বোলপুর-শান্তিনিকেতন">বোলপুর - শান্তিনিকেতন</option>
                      <option value="রামপুরহাট">রামপুরহাট ও নলহাটি</option>
                      <option value="দুবরাজপুর">দুবরাজপুর ও বক্রেশ্বর</option>
                      <option value="ইলামবাজার">ইলামবাজার ও লাভপুর</option>
                      <option value="অন্যান্য বীরভূম">বীরভূম জেলার অন্যান্য ব্লক</option>
                      <option value="বীরভূমের বাইরে">পার্শ্ববর্তী জেলা (বর্ধমান/মুর্শিদাবাদ)</option>
                    </select>
                  </div>
                </div>

                {/* Wall Length */}
                <div>
                  <label htmlFor="wallLengthFeet" className="block text-xs font-semibold text-[#202124] mb-1.5">
                    প্রাচীরের আনুমানিক দৈর্ঘ্য (ফুট) <span className="text-[#d93025]">*</span>
                  </label>
                  <div className="relative">
                    <Ruler className="w-4 h-4 text-[#5f6368] absolute left-3.5 top-3.5" />
                    <input
                      type="number"
                      id="wallLengthFeet"
                      value={formData.wallLengthFeet}
                      onChange={(e) => setFormData({ ...formData, wallLengthFeet: Number(e.target.value) })}
                      min={20}
                      max={5000}
                      step={7}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#dadce0] rounded-xl text-sm text-[#202124] placeholder-[#80868b] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                      required
                    />
                  </div>
                </div>

                {/* Wall Height */}
                <div>
                  <label className="block text-xs font-semibold text-[#202124] mb-1.5">
                    আকাঙ্ক্ষিত প্রাচীরের উচ্চতা
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {([6, 7, 8] as const).map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setFormData({ ...formData, wallHeightFeet: h })}
                        className={`py-2 px-3 rounded-xl border text-xs font-medium transition ${
                          formData.wallHeightFeet === h
                            ? 'bg-[#1a73e8] text-white border-[#1a73e8] shadow-2xs font-semibold'
                            : 'bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f8f9fa]'
                        }`}
                      >
                        {h} ফুট উচ্চতা
                      </button>
                    ))}
                  </div>
                </div>

                {/* Security Extension */}
                <div>
                  <label className="block text-xs font-semibold text-[#202124] mb-1.5">
                    শীর্ষভাগের নিরাপত্তা ব্যবস্থা
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, securityExtension: 'barbed_wire' })}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition ${
                        formData.securityExtension === 'barbed_wire'
                          ? 'bg-[#1a73e8] text-white border-[#1a73e8] shadow-2xs font-semibold'
                          : 'bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f8f9fa]'
                      }`}
                    >
                      ওয়াই-আর্ম কাঁটাতার
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, securityExtension: 'none' })}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium transition ${
                        formData.securityExtension === 'none'
                          ? 'bg-[#1a73e8] text-white border-[#1a73e8] shadow-2xs font-semibold'
                          : 'bg-white text-[#3c4043] border-[#dadce0] hover:bg-[#f8f9fa]'
                      }`}
                    >
                      সাধারণ মসৃণ ফিনিশ
                    </button>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-semibold text-[#202124] mb-1.5">
                  বিশেষ কোনো কারিগরি চাহিদা বা নির্দেশনা (ঐচ্ছিক)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="যেমন: গেট পিলার আবশ্যক, জমির মাটি নরম বা বিশেষ ডিজাইন সম্পর্কিত নির্দেশনা..."
                  className="w-full px-4 py-2.5 bg-white border border-[#dadce0] rounded-xl text-sm text-[#202124] placeholder-[#80868b] focus:outline-none focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 transition"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>সাইট পরিদর্শনের আবেদন জমা দিন</span>
                </button>
                <p className="text-center text-[11px] text-[#5f6368] mt-2 font-normal">
                  আপনার প্রদত্ত যোগাযোগের তথ্য সম্পূর্ণ গোপন রাখা হবে। শুধুমাত্র সাইট সার্ভে ও কোটেশনের উদ্দেশ্যে এটি ব্যবহৃত হবে।
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
