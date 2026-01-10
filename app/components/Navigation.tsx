'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 sm:top-8 z-50 w-full">
      {/* Background with horizontal gradient - dark on left, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, 
            rgba(101, 67, 33, 0.8) 0%, 
            rgba(101, 67, 33, 0.77) 20%, 
            rgba(101, 67, 33, 0.73) 35%, 
            rgba(101, 67, 33, 0.65) 45%, 
            rgba(101, 67, 33, 0.55) 55%, 
            rgba(101, 67, 33, 0.45) 65%, 
            rgba(101, 67, 33, 0.35) 70%, 
            rgba(101, 67, 33, 0.25) 75%, 
            rgba(101, 67, 33, 0.18) 78%, 
            rgba(0, 0, 0, 0.15) 82%, 
            rgba(0, 0, 0, 0.12) 85%, 
            rgba(0, 0, 0, 0.1) 87%, 
            rgba(0, 0, 0, 0.08) 100%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="relative flex h-16 sm:h-20 items-center justify-between">
          {/* Logo Section - Responsive sizing */}
          <div className="flex items-center gap-2 sm:gap-3 -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-6 flex-shrink-0 md:mr-8 lg:mr-12">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center">
              {/* Crossed wrenches/tools icon */}
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {/* First wrench */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 8l-2-2m0 0l2-2m-2 2h4m-4 4l2 2m0 0l-2 2m2-2h-4"
                />
                {/* Second wrench (crossed) */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8l2-2m0 0l-2-2m2 2h-4m4 4l-2 2m0 0l2 2m-2-2h4"
                />
                {/* Center connection */}
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide text-white leading-tight">
              <span className="hidden xs:inline">JHA ENGINEERING SOLUTIONS</span>
              <span className="xs:hidden">JHA ENGINEERING SOLUTIONS</span>
            </span>
          </div>

          {/* Navigation Links - Desktop - Right aligned */}
          <div className="ml-auto hidden items-center gap-6 md:gap-8 lg:gap-12 md:flex">
            <a 
              href='/'
              className="text-sm lg:text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80">
              HOME
            </a>
            <a
              href="/about"
              className="text-sm lg:text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              ABOUT
            </a>
            <a
              href="/service"
              className="text-sm lg:text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              SERVICE
            </a>
            <a
              href="/contact"
              className="text-sm lg:text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-[rgba(101,67,33,0.95)]">
            <div className="flex flex-col py-4 space-y-3 px-4">
              <a 
                href='/'
                className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </a>
              <a
                href="/about"
                className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a
                href="/service"
                className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICE
              </a>
              <a
                href="/contact"
                className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
