import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MobileActionBar({ onOpenAppointmentModal }) {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2.5 shadow-[0_-8px_24px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* 1. Call Button */}
        <a
          href={CLINIC_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 transition-colors"
          id="mobile-action-call"
        >
          <div className="w-5 h-5 flex items-center justify-center text-brand-700 mb-0.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Call</span>
        </a>

        {/* 2. Directions Button */}
        <a
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 transition-colors"
          id="mobile-action-directions"
        >
          <div className="w-5 h-5 flex items-center justify-center text-clinicTeal-600 mb-0.5">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight">Directions</span>
        </a>

        {/* 3. Appointment Button */}
        <button
          type="button"
          onClick={onOpenAppointmentModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-900 active:bg-brand-950 text-white transition-colors shadow-xs"
          id="mobile-action-appointment"
        >
          <div className="w-5 h-5 flex items-center justify-center text-clinicTeal-300 mb-0.5">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-white">Appointment</span>
        </button>

      </div>
    </aside>
  );
}
