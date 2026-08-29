import React from 'react';
import { Phone, Calendar, Clock, MapPin, CheckCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AppointmentCTA({ onOpenAppointmentModal }) {
  return (
    <section className="py-16 sm:py-20 bg-brand-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-700/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-clinicTeal-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-clinicTeal-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            Complete Family Healthcare
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Need a consultation for your family?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            Visit <strong className="text-white font-bold">Malliga Health Care</strong> at 7th Cross Road, RT Nagar, Bengaluru or schedule an appointment enquiry.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={CLINIC_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-clinicTeal-400 hover:bg-clinicTeal-300 active:bg-clinicTeal-500 text-brand-950 font-extrabold text-base shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5"
              id="cta-call-btn"
            >
              <Phone className="w-5 h-5 text-brand-900" />
              <span>Call Clinic ({CLINIC_INFO.phoneDisplay})</span>
            </a>

            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-bold text-base border border-white/20 backdrop-blur-md shadow-soft hover:shadow-soft-lg transition-all duration-200"
              id="cta-book-btn"
            >
              <Calendar className="w-5 h-5 text-clinicTeal-300" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Transparency note */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-clinicTeal-400" />
              <span>Direct clinic phone: <strong>{CLINIC_INFO.phoneDisplay}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-clinicTeal-400" />
              <span>RT Nagar, Bengaluru • Morning & Evening Timings</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
