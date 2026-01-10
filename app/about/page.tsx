import Navigation from "../components/Navigation";

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#f5f0e8]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content Area */}
      <section className="relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-28" data-section-animate>
        <div className="relative mx-auto flex max-w-full flex-col lg:flex-row">
          {/* Left Section - Dark Brown Background - Full Height */}
          <div className="relative w-full bg-[rgb(101,67,33)] lg:w-[35%] min-h-[300px] sm:min-h-[400px] lg:min-h-screen">
            {/* Building Image - Mobile: centered, Desktop: overlapping */}
            <div className="absolute inset-0 lg:left-auto lg:right-0 lg:top-8 z-20 flex items-center justify-center lg:h-[calc(100vh-8rem)] px-4 py-8 lg:px-0 lg:py-0" data-scroll-animate="fade-in-up">
              <img
                src="/building.png"
                alt="Modern building architecture"
                className="h-auto w-full max-w-md lg:max-w-none lg:h-[350px] lg:w-[700px] xl:w-[700px] object-contain lg:translate-x-[30%]"
              />
            </div>
          </div>

          {/* Right Section - Text Content with Light Beige Background - 65% width */}
          <div className="relative z-10 w-full bg-[#f5f0e8] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:w-[65%] lg:pl-16 lg:pr-8 xl:pl-32 xl:pr-16 lg:py-24">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-[rgb(101,67,33)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" data-scroll-animate="fade-in-up">
              About the Company
            </h1>

            <div className="space-y-4 sm:space-y-6 text-[rgb(101,67,33)]" data-scroll-animate="fade-in-up">
              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                JHA Engineering Solutions is a professionally managed company
                providing engineering support, skilled manpower, and job work
                services to construction, infrastructure, and oil & gas projects.
                We work closely with contractors and project teams for on-site
                execution and day-to-day engineering requirements.
              </p>

              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
              Our strength lies in our experienced and well-maintained workforce, trained to
              follow safety norms and deliver work as per project schedules and
              specifications. From manpower deployment to end-to-end job work execution, we focus on doing the job right, safely, and on time.
              </p>

              <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                We are committed to maintaining quality standards, ensuring safe
                working practices, and meeting timelines, so our clients can rely on us as a dependable project support partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
