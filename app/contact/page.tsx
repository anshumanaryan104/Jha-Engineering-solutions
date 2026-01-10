import Navigation from "../components/Navigation";
import { submitContactForm } from "./actions";

export default async function Contact({
  searchParams,
}: {
  searchParams?: Promise<{ success?: string; error?: string }>;
}) {
  const params = await searchParams;
  const showSuccess = params?.success === 'true';
  const showError = params?.error;

  return (
    <main className="relative min-h-screen bg-[#f5f0e8]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content Area */}
      <section className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16" data-section-animate>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h1 className="mb-8 text-center text-3xl font-bold leading-tight text-[rgb(101,67,33)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" data-scroll-animate="fade-in-up">
            Contact Us
          </h1>

          {/* Contact Form Container */}
          <div 
            className="relative rounded-xl px-4 py-8 shadow-2xl sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16"
            style={{
              backgroundColor: "rgba(245, 240, 232, 0.95)",
              ...(showSuccess || showError ? { opacity: 1 } : {})
            }}
            data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"}
          >
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 sm:mb-8 rounded-lg bg-green-100 border-2 border-green-400 px-4 py-3 sm:px-6 sm:py-4 text-green-900 shadow-lg" style={{ opacity: 1 }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base sm:text-lg font-bold">Message Sent Successfully!</p>
                </div>
                <p className="text-sm sm:text-base ml-7 sm:ml-9">Thank you for contacting us. We will get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 sm:mb-8 rounded-lg bg-red-100 border-2 border-red-400 px-4 py-3 sm:px-6 sm:py-4 text-red-900 shadow-lg" style={{ opacity: 1 }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-base sm:text-lg font-bold">Error Submitting Form</p>
                </div>
                <p className="text-sm sm:text-base ml-7 sm:ml-9">
                  {showError === 'configuration'
                    ? 'Form is not configured. Please contact the administrator.'
                    : 'An error occurred. Please try again later.'}
                </p>
              </div>
            )}

            <form action={submitContactForm} className="space-y-6" style={showSuccess || showError ? { opacity: 1 } : {}}>
              {/* Name Field */}
              <div data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <label 
                  htmlFor="name" 
                  className="mb-2 block text-base font-semibold text-[rgb(101,67,33)] md:text-lg"
                >
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border-2 border-[rgb(101,67,33)]/30 bg-white px-4 py-3 text-[rgb(101,67,33)] placeholder:text-[rgb(101,67,33)]/50 focus:border-[rgb(101,67,33)] focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)]/20"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <label 
                  htmlFor="email" 
                  className="mb-2 block text-base font-semibold text-[rgb(101,67,33)] md:text-lg"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border-2 border-[rgb(101,67,33)]/30 bg-white px-4 py-3 text-[rgb(101,67,33)] placeholder:text-[rgb(101,67,33)]/50 focus:border-[rgb(101,67,33)] focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)]/20"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <label 
                  htmlFor="phone" 
                  className="mb-2 block text-base font-semibold text-[rgb(101,67,33)] md:text-lg"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border-2 border-[rgb(101,67,33)]/30 bg-white px-4 py-3 text-[rgb(101,67,33)] placeholder:text-[rgb(101,67,33)]/50 focus:border-[rgb(101,67,33)] focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)]/20"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Subject Field */}
              <div data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <label 
                  htmlFor="subject" 
                  className="mb-2 block text-base font-semibold text-[rgb(101,67,33)] md:text-lg"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border-2 border-[rgb(101,67,33)]/30 bg-white px-4 py-3 text-[rgb(101,67,33)] placeholder:text-[rgb(101,67,33)]/50 focus:border-[rgb(101,67,33)] focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)]/20"
                  placeholder="What is this regarding?"
                />
              </div>

              {/* Message Field */}
              <div data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <label 
                  htmlFor="message" 
                  className="mb-2 block text-base font-semibold text-[rgb(101,67,33)] md:text-lg"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-lg border-2 border-[rgb(101,67,33)]/30 bg-white px-4 py-3 text-[rgb(101,67,33)] placeholder:text-[rgb(101,67,33)]/50 focus:border-[rgb(101,67,33)] focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)]/20 resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4" data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[rgb(101,67,33)] px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white transition-all hover:bg-[rgb(101,67,33)]/90 focus:outline-none focus:ring-2 focus:ring-[rgb(101,67,33)] focus:ring-offset-2 active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Contact Information */}
            <div className="mt-8 sm:mt-12 border-t border-[rgb(101,67,33)]/20 pt-6 sm:pt-8" data-scroll-animate={showSuccess || showError ? undefined : "fade-in-up"} style={showSuccess || showError ? { opacity: 1 } : {}}>
              <h2 className="mb-4 sm:mb-6 text-center text-xl font-bold text-[rgb(101,67,33)] sm:text-2xl md:text-3xl">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="text-center">
                  <h3 className="mb-2 text-base sm:text-lg font-semibold text-[rgb(101,67,33)]">Email</h3>
                  <p className="text-sm sm:text-base text-[rgb(101,67,33)]/80 break-words">
                    info@jhaengineering.com
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 text-base sm:text-lg font-semibold text-[rgb(101,67,33)]">Phone</h3>
                  <p className="text-sm sm:text-base text-[rgb(101,67,33)]/80">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 text-center">
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-[rgb(101,67,33)]">Registered Address</h3>
                <p className="text-sm sm:text-base text-[rgb(101,67,33)]/80 px-2">
                  D-203, Ashray Platina, New Ranip, Ahmedabad – 382470, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
