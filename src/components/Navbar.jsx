import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, HeartPulse, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Navbar({ onOpenAppointmentModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
              aria-label="Malliga Health Care Homepage"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
                {/* Healthcare Cross & Heart Emblem */}
                <div className="relative flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-clinicTeal-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Malliga <span className="text-brand-700">Health Care</span>
                </span>
                <span className="text-xs font-semibold text-clinicTeal-700 tracking-wide">
                  Complete Family Care • RT Nagar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 rounded-lg transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={CLINIC_INFO.phoneTel}
                className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-900 transition-colors"
                title="Call Malliga Health Care"
              >
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-700">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 active:bg-brand-950 text-white text-sm font-semibold shadow-soft hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                id="navbar-book-btn"
              >
                <Calendar className="w-4 h-4 text-clinicTeal-300" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-brand-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-brand-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={CLINIC_INFO.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-700" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-900 text-white font-semibold text-sm shadow-soft transition-colors"
              >
                <Calendar className="w-4 h-4 text-clinicTeal-300" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
