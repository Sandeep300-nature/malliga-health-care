import React from 'react';
import { 
  Thermometer, 
  Activity, 
  HeartPulse, 
  ShieldAlert, 
  Wind, 
  Stethoscope, 
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data/clinicData';

const iconMap = {
  Thermometer,
  Activity,
  HeartPulse,
  ShieldAlert,
  Wind,
  Stethoscope,
  ShieldCheck,
};

export default function Services({ onOpenAppointmentModal }) {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-softSlate relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinicTeal-50 border border-clinicTeal-200 text-clinicTeal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-clinicTeal-600" />
            Family Healthcare Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consultation & Care Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Comprehensive outpatient diagnosis, family wellness care, and routine health check-ups at Malliga Health Care.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Stethoscope;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-900 text-brand-700 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 group-hover:bg-clinicTeal-50 group-hover:text-clinicTeal-800 transition-colors duration-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-brand-800 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenAppointmentModal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 group-hover:text-brand-900 hover:underline focus:outline-none"
                  >
                    <span>Consult on this</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-500">In-person Visit</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Note Callout */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-soft max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Experiencing health symptoms or need a family wellness check?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Schedule an in-person consultation at Malliga Health Care, RT Nagar.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAppointmentModal}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
          >
            Book Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
