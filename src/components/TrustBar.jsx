import React from 'react';
import { Star, MessageSquareQuote, Stethoscope, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TrustBar() {
  const trustMetrics = [
    {
      icon: Star,
      iconColor: 'text-amber-500 bg-amber-50',
      value: '5.0 ★',
      label: 'Google Rating',
      detail: 'Patient-first healthcare',
    },
    {
      icon: MessageSquareQuote,
      iconColor: 'text-brand-600 bg-brand-50',
      value: 'Google Verified',
      label: 'Patient Reviews',
      detail: 'Authentic local feedback',
    },
    {
      icon: Stethoscope,
      iconColor: 'text-clinicTeal-600 bg-clinicTeal-50',
      value: 'Family Care',
      label: 'Complete Wellness',
      detail: 'Consultations for all ages',
    },
    {
      icon: HeartHandshake,
      iconColor: 'text-rose-600 bg-rose-50',
      value: 'Patient-First',
      label: 'Clinical Approach',
      detail: 'Attentive & approachable care',
    },
  ];

  return (
    <section className="relative z-10 py-6 sm:py-8 bg-white border-y border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-50/70 border border-slate-100/90 transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-soft"
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${metric.iconColor}`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight truncate">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 truncate">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block truncate">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
