export default function Navigation() {
  return (
    <nav className="fixed top-8 z-50 w-full">
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center">
          {/* Logo Section - Shifted more to left */}
          <div className="flex items-center gap-3 -ml-12 sm:-ml-10 md:-ml-8 lg:-ml-6">
            <div className="flex h-12 w-12 items-center justify-center">
              {/* Crossed wrenches/tools icon */}
              <svg
                className="h-7 w-7 text-white"
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
            <span className="text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
              JHA ENGINEERING SOLUTIONS
            </span>
          </div>

          {/* Navigation Links - Centered with more gap */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-12 md:flex">
            <a 
              href='/'
              className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80">
              HOME
            </a>
            <a
              href="/about"
              className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              ABOUT
            </a>
            <a
              href="/service"
              className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              SERVICE
            </a>
            <a
              href="/contact"
              className="text-base font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              CONTACT
            </a>
          </div>

          {/* Right side - Arrow button and mobile menu */}
          <div className="ml-auto flex items-center gap-4">
            <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:flex">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden">
              <svg
                className="h-6 w-6 text-white"
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
