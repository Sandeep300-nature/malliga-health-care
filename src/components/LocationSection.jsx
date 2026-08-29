import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function LocationSection({ onOpenAppointmentModal }) {
  return (
    <section id="location" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-clinicTeal-600" />
            Clinic Location & Hours
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Malliga Health Care
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conveniently situated in RT Nagar, Bengaluru for your family consultations and routine medical care.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards: Address, Phone, Hours */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-clinicTeal-300" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="text-xs font-extrabold text-brand-700 uppercase tracking-wider">
                    Clinic Address & Landmark
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                    {CLINIC_INFO.address.line1} <br />
                    {CLINIC_INFO.address.area} <br />
                    <span className="text-slate-900 font-bold">{CLINIC_INFO.address.cityState}</span>
                  </p>
                  
                  <div className="pt-3">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-soft transition-all duration-200 group"
                      id="get-directions-btn"
                    >
                      <Navigation className="w-4 h-4 text-clinicTeal-300 group-hover:rotate-45 transition-transform" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-soft hover:shadow-soft-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-clinicTeal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="text-xs font-extrabold text-clinicTeal-800 uppercase tracking-wider">
                    Appointments & Inquiries
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {CLINIC_INFO.phoneDisplay}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Call the clinic directly for appointment booking, routine check-up timings, or health enquiries.
                  </p>

                  <div className="pt-3 flex flex-wrap gap-2.5">
                    <a
                      href={CLINIC_INFO.phoneTel}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-900 text-xs sm:text-sm font-bold shadow-xs transition-colors"
                      id="location-call-btn"
                    >
                      <Phone className="w-4 h-4 text-brand-700" />
                      <span>Call Now ({CLINIC_INFO.phoneDisplay})</span>
                    </a>

                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                      id="location-whatsapp-btn"
                    >
                      <span>WhatsApp Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Hours */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-slate-600" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Clinic Consultation Timings
                </h4>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-1.5">
                  <div>
                    <span className="text-slate-900 font-bold">Monday – Saturday</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 border border-brand-100">8:00 AM – 2:30 PM</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 border border-brand-100">5:00 PM – 9:00 PM</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-1.5">
                  <div>
                    <span className="text-slate-900 font-bold">Sunday</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 border border-brand-100">8:00 AM – 2:30 PM</span>
                    <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-800 border border-brand-100">5:00 PM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Map / Route Container */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[360px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft-lg bg-slate-100 flex flex-col relative">
              
              {/* Map Preview Interface / Interactive Card */}
              <div className="relative flex-1 bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 p-6 sm:p-8 text-white flex flex-col justify-between">
                
                {/* Background Map Graphic Accents */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800/80 border border-brand-700 text-clinicTeal-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    RT Nagar, Bengaluru
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Malliga Health Care
                  </h3>
                  
                  <p className="text-slate-300 text-sm max-w-md leading-relaxed">
                    54, 7th Cross Road, adjacent to Udupi Upahaar Hotel, V. V. Nagar, HMT Layout, Dinnur, RT Nagar, Bengaluru, Karnataka 560032
                  </p>
                </div>

                {/* Map Direction Card Pinpoint */}
                <div className="relative z-10 my-6 bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-clinicTeal-300 uppercase">
                        Healthcare Services
                      </div>
                      <div className="font-extrabold text-white text-base">
                        Complete Family Care
                      </div>
                      <div className="text-xs text-slate-300">
                        In-House Lab, ECG & Observation Beds
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-amber-400 font-extrabold text-sm">
                        5.0 ★ Rating
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Google Reviews
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map Button */}
                <div className="relative z-10">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-clinicTeal-500 hover:bg-clinicTeal-400 active:bg-clinicTeal-600 text-brand-950 font-extrabold text-sm sm:text-base shadow-soft transition-all duration-200"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>Open in Google Maps / Navigation</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
