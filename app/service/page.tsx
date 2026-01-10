import Navigation from "../components/Navigation";

export default function Service() {
  const services = [
    {
      number: 1,
      title: "Manpower Supply Services",
    },
    {
      number: 2,
      title: "Engineering & Project Support",
    },
    {
      number: 3,
      title: "Job Work / Sub-Contracting Services",
    },
    {
      number: 4,
      title: "Site Safety & Quality Monitoring",
    },
  ];

  return (
    <main className="relative min-h-screen">
      {/* Background with desaturated construction site image and dark overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/constructionsite.png')",
            filter: "grayscale(100%) brightness(0.7)",
            opacity: 0.6,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <Navigation />

      {/* Main Content Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center pt-28 pb-16" data-section-animate>
        <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
          {/* Light Beige Container with rounded corners and shadow - slightly transparent */}
          <div 
            className="relative rounded-xl px-6 py-8 shadow-2xl md:px-10 md:py-12"
            style={{
              backgroundColor: "rgba(245, 240, 232, 0.75)",
            }}
            data-scroll-animate="fade-in-up"
          >
            {/* Core Services Title */}
            <h1 className="mb-8 text-center text-4xl font-bold text-[rgb(101,67,33)] md:text-5xl lg:text-6xl" data-scroll-animate="fade-in-down">
              Core Services
            </h1>

            {/* Services Grid - 2x2 layout */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="flex items-center gap-3"
                  data-scroll-animate="fade-in-up"
                >
                  {/* Number Box - Small dark brown rounded square */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[rgb(101,67,33)]">
                    <span className="text-xl font-bold text-white">
                      {service.number}
                    </span>
                  </div>

                  {/* Title Box - Larger dark brown with white border */}
                  <div className="flex-1 rounded-lg border border-white bg-[rgb(101,67,33)] px-4 py-3">
                    <p className="text-base font-semibold uppercase leading-tight text-white md:text-lg">
                      {service.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Building Image - After Services */}
            <div className="mb-8 w-full" data-scroll-animate="fade-in-up">
              <img
                src="/servicebuilding.png"
                alt="Modern skyscrapers"
                className="w-full rounded-lg object-cover"
                style={{
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Footer - Website Address */}
            <div className="text-center" data-scroll-animate="fade-in">
              <p className="text-base font-medium text-[rgb(101,67,33)] md:text-lg">
                www.reallygreatsite.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
