import React, { useState } from 'react';
import { X, Phone, Calendar, Clock, User, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    concern: 'Complete Family Health Consultation',
    preferredTime: 'Morning (8:00 AM - 2:30 PM)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-850 to-brand-950 text-white p-6 sm:p-7 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-clinicTeal-500/20 text-clinicTeal-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Malliga Health Care Appointment
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
            Book an Appointment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Consult at Malliga Health Care, RT Nagar, Bengaluru.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7">
          
          {/* Quick Direct Call Box */}
          <div className="p-4 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-xs font-bold text-brand-900 uppercase">Immediate Scheduling?</div>
              <div className="text-xs text-slate-600">Call the clinic directly:</div>
            </div>
            <a
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-xs font-bold shadow-xs shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>

          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inquiry Received
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.patientName || 'Patient'}</strong>. Malliga Health Care has received your appointment enquiry. You may also call <strong>{CLINIC_INFO.phoneDisplay}</strong> for immediate confirmation.
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 97422 55887"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              {/* Care Concern */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Primary Medical Concern
                </label>
                <select
                  value={formData.concern}
                  onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                >
                  <option value="Complete Family Health Consultation">Complete Family Health Consultation</option>
                  <option value="Fever & Infection Care">Fever & Infection Care</option>
                  <option value="Diabetes & Chronic Care">Diabetes & Chronic Care</option>
                  <option value="Blood Pressure / Hypertension">Blood Pressure / Hypertension</option>
                  <option value="In-House Lab & Observation Enquiry">In-House Lab & Observation Enquiry</option>
                  <option value="Respiratory & Allergy Care">Respiratory & Allergy Care</option>
                  <option value="Routine General Checkup">Routine General Checkup</option>
                </select>
              </div>

              {/* Preferred Slot */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                >
                  <option value="Morning Slot (8:00 AM - 2:30 PM)">Morning Slot (8:00 AM - 2:30 PM)</option>
                  <option value="Evening Slot (5:00 PM - 9:00 PM)">Evening Slot (5:00 PM - 9:00 PM)</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Briefly describe symptoms or questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-sm shadow-soft transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-clinicTeal-300" />
                  <span>Submit Appointment Enquiry</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-500">
                Clinic Location: 54, 7th Cross Road, RT Nagar, Bengaluru
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
