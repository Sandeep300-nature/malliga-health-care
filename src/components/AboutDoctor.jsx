import React from 'react';
import { Award, CheckCircle, Stethoscope, Heart, Clock, FileCheck, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AboutDoctor({ onOpenAppointmentModal }) {
  const clinicalPrinciples = [
    {
      title: "Attentive & Approachable Care",
      desc: "Doctors and staff take the time to listen patiently to every individual concern in a friendly, polite environment."
    },
    {
      title: "Clear Medical Guidance",
      desc: "Transparent health advice, easy-to-understand explanations, and rational, mild medical treatments suited for the family."
    },
    {
      title: "In-House Lab & Observation",
      desc: "Equipped with essential on-site diagnostic lab services, ECG, IV support, and observation beds."
    },
    {
      title: "Continuity of Family Care",
      desc: "Dedicated medical follow-ups for recovery from seasonal fevers, blood pressure monitoring, and general family wellness."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-clinicTeal-600" />
            Complete Family Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Malliga Health Care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated family healthcare delivering attentive, approachable, and patient-first consultations in RT Nagar, Bengaluru.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Visual & Setting */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-slate-200/90 bg-slate-50 p-2 sm:p-3">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img
                  src="/images/malliga_facility.jpg"
                  alt="Malliga Health Care Clinic Consultation Facility in RT Nagar Bengaluru"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* In-Clinic Quote Card */}
              <div className="p-4 sm:p-5 bg-white rounded-2xl mt-2.5 border border-slate-100 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-800 shrink-0 font-serif font-bold text-lg">
                    “
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium italic">
                      "Good healthcare begins with listening. We believe every patient deserves an unhurried, comfortable checkup and clear, dependable medical guidance."
                    </p>
                    <div className="mt-2 text-xs font-bold text-slate-900">
                      — Malliga Health Care, Complete Family Care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Approach */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Overview Card */}
            <div className="bg-gradient-to-br from-slate-50 via-brand-50/30 to-slate-50/80 p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-soft">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200/60 pb-4 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Malliga Health Care
                  </h3>
                  <div className="text-brand-800 font-bold text-base sm:text-lg mt-0.5">
                    Complete Family Care
                  </div>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-lg bg-clinicTeal-50 border border-clinicTeal-200 text-clinicTeal-800 text-xs font-bold">
                  RT Nagar, Bengaluru
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Located on 7th Cross Road in RT Nagar, <strong className="text-slate-900 font-semibold">Malliga Health Care</strong> provides patient-centered consultations for acute illnesses, routine family check-ups, and long-term health management. The clinic is equipped with in-house lab facilities, ECG, and supportive observation beds, ensuring comprehensive and convenient care under one roof.
              </p>
            </div>

            {/* Core Clinical Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicalPrinciples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-300 hover:shadow-soft transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-clinicTeal-600 shrink-0" />
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-sm font-bold shadow-soft transition-colors"
              >
                <span>Book a Consultation</span>
              </button>

              <a
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
