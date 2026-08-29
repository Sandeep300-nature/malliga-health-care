import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, ExternalLink, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, REVIEWS_DATA } from '../data/clinicData';

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  // Autoplay with pause on hover/touch
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right
      prevSlide();
    }
    setIsPaused(false);
  };

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-warmWhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Rating Overview */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              Verified Google Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Patient Experiences & Reviews
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Read authentic feedback from patients and families visiting Malliga Health Care in RT Nagar, Bengaluru.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="flex items-center gap-4 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-soft shrink-0">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900">5.0</span>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-semibold">out of 5.0</span>
                </div>
              </div>
              <div className="text-xs font-bold text-slate-700 mt-1">
                Google Reviews
              </div>
            </div>

            <div className="h-10 w-px bg-slate-200" />

            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold text-clinicTeal-800 bg-clinicTeal-50 px-2.5 py-1 rounded-lg border border-clinicTeal-200">
                100% Authentic
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Review Card */}
          <div className="overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-soft-lg p-6 sm:p-10 transition-all duration-300">
            <div className="flex flex-col justify-between min-h-[220px] sm:min-h-[190px]">
              
              {/* Card Header: Stars & Google Badge */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(REVIEWS_DATA[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-extrabold text-slate-800">5.0 / 5.0</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Google Review</span>
                </div>
              </div>

              {/* Review Text */}
              <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic my-2">
                "{REVIEWS_DATA[currentIndex].text}"
              </blockquote>

              {/* Review Footer: Author & Care Category (Text only, no photos) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 mt-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-900 font-bold text-xs flex items-center justify-center">
                    {REVIEWS_DATA[currentIndex].author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <span>{REVIEWS_DATA[currentIndex].author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-clinicTeal-600" title="Verified Review" />
                    </div>
                    <div className="text-xs text-slate-500">{REVIEWS_DATA[currentIndex].condition}</div>
                  </div>
                </div>

                <span className="text-xs text-slate-500 font-medium">
                  Malliga Health Care, RT Nagar
                </span>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            
            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-8 bg-brand-900'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-colors focus:outline-none"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs transition-colors focus:outline-none"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* External Google Reviews Button CTA */}
          <div className="mt-8 text-center">
            <a
              href={CLINIC_INFO.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-soft hover:shadow-md transition-all duration-200 group"
              id="view-all-google-reviews-btn"
            >
              <span>View all Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-brand-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
