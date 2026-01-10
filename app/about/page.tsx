import Navigation from "../components/Navigation";

export default function About() {
  return (
    <main className="relative min-h-screen bg-[#f5f0e8]">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content Area */}
      <section className="relative z-10 pt-28" data-section-animate>
        <div className="relative mx-auto flex max-w-full flex-col lg:flex-row">
          {/* Left Section - Dark Brown Background - Full Height */}
          <div className="relative w-full bg-[rgb(101,67,33)] lg:w-[35%]">
            <div className="min-h-screen"></div>
          </div>

          {/* Building Image - 95% in left div, 5% overlapping right div */}
          <div className="absolute right-[60%] top-8 z-20 left-60 flex h-[calc(100vh-8rem)] items-center justify-center" data-scroll-animate="fade-in-up">
            <img
              src="/building.png"
              alt="Modern building architecture"
              className="h-[350px] w-[700px] object-contain"
            />
          </div>

          {/* Right Section - Text Content with Light Beige Background - 65% width */}
          <div className="relative z-10 w-full bg-[#f5f0e8] px-8 py-16 lg:w-[65%] lg:pl-32 lg:pr-16 lg:py-24">
            <h1 className="mb-10 text-5xl font-bold leading-tight text-[rgb(101,67,33)] md:text-6xl lg:text-7xl" data-scroll-animate="fade-in-up">
              About the Company
            </h1>

            <div className="space-y-6 text-[rgb(101,67,33)]" data-scroll-animate="fade-in-up">
              <p className="text-base leading-relaxed md:text-lg">
                JHA Engineering Solutions is a professionally managed company
                providing engineering support, skilled manpower, and job work
                services to construction, infrastructure, and oil & gas projects.
                We work closely with contractors and project teams for on-site
                execution and day-to-day engineering requirements.
              </p>

              <p className="text-base leading-relaxed md:text-lg">
              Our strength lies in our experienced and well-maintained workforce, trained to
              follow safety norms and deliver work as per project schedules and
              specifications. From manpower deployment to end-to-end job work execution, we focus on doing the job right, safely, and on time.
              </p>

              <p className="text-base leading-relaxed md:text-lg">
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
