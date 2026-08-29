import React from 'react';
import { UserCheck, FileHeart, MapPin, HeartHandshake, ShieldCheck, Check } from 'lucide-react';
import { BENEFITS_DATA } from '../data/clinicData';

const benefitIconMap = {
  UserCheck,
  FileHeart,
  MapPin,
  HeartHandshake,
  ShieldCheck,
};

export default function WhyChooseUs({ onOpenAppointmentModal }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background soft element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
            Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Malliga Health Care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A trusted neighborhood clinic in RT Nagar, Bengaluru focused on attentive medical consultations, patient comfort, and complete family well-being.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BENEFITS_DATA.map((benefit, index) => {
            const Icon = benefitIconMap[benefit.iconName] || ShieldCheck;
            return (
              <div
                key={benefit.id}
                className="relative bg-slate-50/80 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-2xl bg-white group-hover:bg-clinicTeal-600 text-clinicTeal-700 group-hover:text-white flex items-center justify-center mb-6 shadow-xs border border-slate-200/80 group-hover:border-clinicTeal-600 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Benefit Number */}
                  <div className="text-[11px] font-extrabold text-brand-700 tracking-wider uppercase mb-1">
                    0{index + 1} • Benefit
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-900 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Check className="w-3.5 h-3.5 text-clinicTeal-600" />
                  <span>Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
