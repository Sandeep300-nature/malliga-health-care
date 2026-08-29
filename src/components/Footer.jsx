import React from 'react';
import { HeartPulse, Phone, MapPin, Star, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

export default function Footer({ onOpenAppointmentModal }) {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Care Services', href: '#services' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-900 border border-brand-700 flex items-center justify-center text-white">
                <HeartPulse className="w-6 h-6 text-clinicTeal-400" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Malliga Health Care
                </span>
                <div className="text-xs text-clinicTeal-400 font-semibold">
                  Complete Family Care • RT Nagar
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-white font-bold text-base">
                Malliga Health Care, Complete Family Care
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Family Healthcare Clinic & Diagnostic Support
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Providing patient-focused, polite, and unhurried family consultations, routine health check-ups, and in-house diagnostic facilities in RT Nagar, Bengaluru.
            </p>

            {/* Google Rating Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-white">5.0 ★ Google Verified Reviews</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-clinicTeal-400 transition-colors text-slate-400 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Areas of Care (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Care Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id} className="truncate">
                  {srv.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Contact & Address
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-clinicTeal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {CLINIC_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-clinicTeal-400 shrink-0" />
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="text-white font-bold hover:text-clinicTeal-400 transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAppointmentModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-800 hover:bg-brand-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Malliga Health Care, Complete Family Care. All rights reserved.
          </div>

          <div className="text-center sm:text-right">
            54, 7th Cross Road, RT Nagar, Bengaluru, Karnataka 560032
          </div>
        </div>

      </div>
    </footer>
  );
}
