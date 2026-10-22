import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, X, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SEARCH_URL } from '../data/googleReviews';
import { Review } from '../types';

export const ReviewsCarousel: React.FC = () => {
  const reviews: Review[] = GOOGLE_REVIEWS;
  const totalReviews = reviews.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const touchStartTimeRef = useRef<number>(0);
  const isVerticalScrollRef = useRef<boolean>(false);
  const [expandedModalReview, setExpandedModalReview] = useState<Review | null>(null);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const carouselRef = useRef<HTMLDivElement>(null);

  // Responsive items-per-page detection: 3 for desktop, 2 for tablet, 1 for mobile
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Maximum starting index so we don't slide into empty trailing space
  const maxIndex = Math.max(0, totalReviews - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Check prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Auto-move interval: advances every 4 seconds, pauses on hover/focus/touch/modal
  useEffect(() => {
    if (isPaused || isDragging || prefersReducedMotion || totalReviews <= itemsPerPage || expandedModalReview !== null) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, prefersReducedMotion, totalReviews, itemsPerPage, maxIndex, expandedModalReview]);

  // Refined Mobile Touch Swipe Handlers: 1:1 live drag response, velocity detection, and scroll protection
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    isVerticalScrollRef.current = false;
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
    setTouchStartY(touch.clientY);
    setDragOffset(0);
    setIsDragging(true);
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null || isVerticalScrollRef.current) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartX;
    const diffY = touch.clientY - touchStartY;

    // Check if user is scrolling vertically up/down the page
    if (!isDragging || (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 8 && Math.abs(diffX) < 12)) {
      isVerticalScrollRef.current = true;
      setDragOffset(0);
      setIsDragging(false);
      return;
    }

    // Apply subtle elastic damping if at the ends
    const atStart = currentIndex === 0 && diffX > 0;
    const atEnd = currentIndex >= maxIndex && diffX < 0;
    const dampedDiff = atStart || atEnd ? diffX * 0.35 : diffX;

    setDragOffset(dampedDiff);
  };

  const handleTouchEnd = () => {
    if (isDragging && touchStartX !== null) {
      const duration = Date.now() - touchStartTimeRef.current;
      const velocity = Math.abs(dragOffset) / Math.max(1, duration); // px per ms

      // Sensitive natural threshold: 30px distance OR a quick flick (velocity > 0.22 px/ms with > 12px drag)
      const isQuickFlick = velocity > 0.22 && Math.abs(dragOffset) > 12;
      const isDistanceSwipe = Math.abs(dragOffset) > 30;

      if (isQuickFlick || isDistanceSwipe) {
        if (dragOffset < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }

    // Reset touch state smoothly
    setDragOffset(0);
    setIsDragging(false);
    setTouchStartX(null);
    setTouchStartY(null);
    isVerticalScrollRef.current = false;

    // Grace period before resuming auto-advance so user can read current slide
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Toggle inline card expansion
  const toggleCardExpansion = (reviewId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Render 5 gold stars
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0"
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="w-full bg-[#FFF7FA] pt-16 pb-16 lg:pt-20 lg:pb-20 border-b border-[#F0DCE5] overflow-hidden"
      id="reviews"
      aria-label="Customer Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>FEEDBACK FROM OUR CUSTOMERS</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
              What Our Customers Say
            </h2>
          </div>

          {/* Navigation Controls (Arrows) */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-neutral-500 hidden sm:inline tabular-nums">
              Showing {currentIndex + 1}–{Math.min(currentIndex + itemsPerPage, totalReviews)} of {totalReviews} Reviews
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#E91E63] hover:text-white text-[#171717] border border-[#F0DCE5] shadow-xs flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#E91E63] active:scale-95"
                aria-label="Previous review slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white hover:bg-[#E91E63] hover:text-white text-[#171717] border border-[#F0DCE5] shadow-xs flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#E91E63] active:scale-95"
                aria-label="Next review slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={carouselRef}
        >
          {/* Sliding Track */}
          <div
            className={`flex ${isDragging ? 'cursor-grabbing select-none' : 'transition-transform duration-500 ease-out'}`}
            style={{
              transform: `translateX(calc(-${(currentIndex * 100) / itemsPerPage}% + ${dragOffset}px))`,
              touchAction: 'pan-y',
            }}
          >
            {reviews.map((review) => {
              const isLong = review.reviewText.length > 170;
              const isExpanded = !!expandedCards[review.id];

              return (
                <div
                  key={review.id}
                  className="px-2.5 sm:px-3 shrink-0"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-[#F0DCE5] flex flex-col justify-between h-full min-h-[290px] transition-all hover:shadow-md hover:border-[#E91E63]/40 group">
                    <div className="flex flex-col gap-3.5">
                      {/* Top Row: Google Badge & Five Gold Stars */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 bg-[#FBF9F8] px-2.5 py-1 rounded-md border border-[#F0DCE5]/60">
                          {/* Official Google G Logo */}
                          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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
                          <span className="text-[11px] font-semibold text-neutral-600">
                            Google Review
                          </span>
                        </div>
                        {renderStars(review.rating)}
                      </div>

                      {/* Review Text */}
                      <div className="relative text-xs sm:text-sm text-[#171717] leading-relaxed">
                        <Quote className="w-5 h-5 text-[#F0DCE5] absolute -top-2 -left-1 -z-10 opacity-70" />
                        <div
                          className={`whitespace-pre-line ${
                            isLong && !isExpanded ? 'line-clamp-4' : ''
                          }`}
                        >
                          "{review.reviewText}"
                        </div>

                        {/* Read More / Modal trigger for long reviews */}
                        {isLong && (
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => toggleCardExpansion(review.id)}
                              className="text-xs font-bold text-[#E91E63] hover:underline focus:outline-none"
                            >
                              {isExpanded ? 'Show Less' : 'Read More'}
                            </button>
                            <span className="text-neutral-300">·</span>
                            <button
                              type="button"
                              onClick={() => setExpandedModalReview(review)}
                              className="text-xs text-neutral-500 hover:text-[#171717] hover:underline"
                            >
                              Expand in Pop-up
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Metadata: Avatar Initials & Reviewer Name */}
                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#FFF7FA] border border-[#F0DCE5] text-[#E91E63] font-display font-bold text-xs flex items-center justify-center shrink-0">
                        {review.initials || review.reviewerName.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-display font-bold text-xs sm:text-sm text-[#171717] truncate">
                          {review.reviewerName}
                        </span>
                        <span className="text-[11px] text-[#666666]">
                          Verified Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          {maxIndex > 0 && (
            <div className="flex justify-center items-center gap-1.5 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full ${
                    currentIndex === idx
                      ? 'w-7 h-2 bg-[#E91E63]'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Read All Reviews on Google CTA */}
          <div className="flex justify-center mt-6">
            <a
              href={GOOGLE_REVIEWS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-neutral-50 text-[#171717] hover:text-[#E91E63] text-xs font-semibold px-5 py-2.5 rounded-full border border-[#F0DCE5] shadow-2xs hover:shadow transition-all group"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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
              <span>Read All Reviews on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E91E63] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Accessible Full Review Modal for Long Testimonials */}
      {expandedModalReview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-reviewer-title"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#F0DCE5] relative overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#FFF7FA] border border-[#F0DCE5] text-[#E91E63] font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {expandedModalReview.initials || expandedModalReview.reviewerName.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <h3
                    id="modal-reviewer-title"
                    className="font-display font-bold text-base text-[#171717]"
                  >
                    {expandedModalReview.reviewerName}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    {renderStars(expandedModalReview.rating)}
                    <span className="text-[11px] font-semibold text-neutral-500">
                      Google Review
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setExpandedModalReview(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-800 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Close review pop-up"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-5 overflow-y-auto pr-2 text-xs sm:text-sm text-[#171717] leading-relaxed whitespace-pre-line">
              "{expandedModalReview.reviewText}"
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">
                Verified customer review on Google
              </span>
              <button
                type="button"
                onClick={() => setExpandedModalReview(null)}
                className="bg-[#171717] hover:bg-[#262626] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
