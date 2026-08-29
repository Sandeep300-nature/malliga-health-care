import React from 'react';
import { Star, Phone, Calendar, MapPin, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero({ onOpenAppointmentModal }) {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-b from-brand-50/50 via-warmWhite to-white overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-clinicTeal-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Pill: Verified Clinic & City */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100/80 border border-brand-200/80 text-brand-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-clinicTeal-500 animate-pulse"></span>
              <span>Malliga Health Care</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-800">RT Nagar, Bengaluru</span>
              <span className="text-slate-300">•</span>
              <span className="text-clinicTeal-700 font-bold">Complete Family Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Complete Family Healthcare, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-900 via-brand-700 to-clinicTeal-600">
                Close to You in RT Nagar
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Patient-friendly consultations, routine medical check-ups, and attentive care for your entire family at <strong className="font-semibold text-slate-900">Malliga Health Care</strong>.
            </p>

            {/* Prominent Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              {/* Google Reviews Badge */}
              <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-soft">
                <div className="flex items-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                </div>
                <div className="text-left leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-base">{CLINIC_INFO.rating.score}</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{CLINIC_INFO.rating.verifiedReviewCount}</span>
                </div>
              </div>

              {/* Speciality Badge */}
              <div className="flex items-center gap-2.5 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/80 shadow-soft">
                <div className="w-8 h-8 rounded-full bg-clinicTeal-50 flex items-center justify-center text-clinicTeal-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="font-bold text-slate-900 text-sm">Family Healthcare</div>
                  <span className="text-xs text-slate-500 font-medium">In-House Lab & Observation</span>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-brand-900 hover:bg-brand-800 active:bg-brand-950 text-white font-bold text-base shadow-soft hover:shadow-soft-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-3 focus:ring-brand-500/50"
                id="hero-book-cta"
              >
                <Calendar className="w-5 h-5 text-clinicTeal-300" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-base border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-slate-300"
                id="hero-call-cta"
              >
                <Phone className="w-5 h-5 text-brand-700" />
                <span>Call Clinic ({CLINIC_INFO.phoneDisplay})</span>
              </a>
            </div>

            {/* Key Assurance Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-clinicTeal-600 shrink-0" />
                <span>Attentive, polite & unhurried care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-clinicTeal-600 shrink-0" />
                <span>Equipped with in-house lab & beds</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Clinic Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-soft-xl border border-slate-200/80 bg-white p-2.5 sm:p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] sm:aspect-[4/4.5] bg-slate-100">
                  <img
                    src="/images/malliga_hero.jpg"
                    alt="Malliga Health Care - Complete Family Care Consultation Facility in RT Nagar Bengaluru"
                    className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Clinic Title Overlaid on bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <div className="inline-block px-2.5 py-0.5 rounded-md bg-clinicTeal-600 text-white text-[11px] font-bold tracking-wide uppercase mb-1">
                      Family Healthcare Clinic
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                      Malliga Health Care
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      Complete Family Care • RT Nagar, Bengaluru
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Reassurance Badge 1: 5.0 Rating */}
              <div className="absolute -top-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-slate-200/90 shadow-soft-lg flex items-center gap-3 animate-subtle-pulse">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                    <span>5.0 ★ Rating</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">Verified Google Feedback</div>
                </div>
              </div>

              {/* Floating Reassurance Badge 2: Location Card */}
              <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200/90 shadow-soft-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center text-brand-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">7th Cross Road, RT Nagar</div>
                  <div className="text-[11px] text-slate-500 font-medium">Adj. Udupi Upahaar Hotel</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
