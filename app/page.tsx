import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        {/* Construction site background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/constructionsite.png')",
          }}
        ></div>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Bar - Fixed with scroll-based fade */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center justify-center pt-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-6xl font-black leading-tight tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block" data-scroll-animate="fade-in-down delay-200">JHA</span>
            <span className="block text-transparent [-webkit-text-stroke:2px_white]" data-scroll-animate="fade-in-up delay-400">
              ENGINEERING
            </span>
            <span className="block text-transparent [-webkit-text-stroke:2px_white]" data-scroll-animate="fade-in-up delay-600">
              SOLUTIONS
            </span>
          </h1>
        </div>
      </section>

      {/* Project Expertise Section */}
      <section className="relative z-10 bg-white" data-section-animate>
        <div className="relative mx-auto flex max-w-full flex-col lg:flex-row">
          {/* Left Column - Text Content (60-65% width) */}
          <div className="relative z-10 w-full bg-[#f5f0e8] px-8 py-16 lg:w-[65%] lg:pl-32 lg:pr-16 lg:py-24">
            <h1 className="mb-10 text-5xl font-bold leading-tight text-[rgb(101,67,33)] md:text-6xl lg:text-7xl" data-scroll-animate="fade-in-up">
              Project Expertise
            </h1>

            <div className="space-y-6 text-[rgb(101,67,33)]" data-scroll-animate="fade-in-up">
              <p className="text-sm leading-relaxed md:text-base lg:text-lg pt-10 max-w-2xl lg:pr-[120px]">
              Our project expertise is driven by the founder’s extensive hands-on
              experience, with over 15+ years of international exposure across largescale construction, engineering, and oil & gas projects. Having worked
              on projects abroad, the leadership brings strong understanding of
              global work standards, safety practices, and execution methodologies.
              This international experience reflects in our approach to planning, site
              coordination, quality control, and timely delivery. We apply proven
              practices and practical knowledge to support projects efficiently,
              ensuring dependable execution aligned with client and industry
              expectations
              </p>

              
            </div>
          </div>

          {/* Image 1 - Overlapping both columns (70% right, 30% left) */}
          <div 
            className="absolute right-[30%] top-30 z-20 hidden h-48 w-[300px] overflow-hidden rounded-lg lg:block"
            style={{
              transform: "translateX(30%)",
            }}
            data-scroll-animate="fade-in-up"
          >
            <img
              src="/projectexpertisepic1.png"
              alt="Construction workers laying asphalt"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 2 - Overlapping both columns (70% right, 30% left), below image 1 */}
          <div 
            className="absolute right-[30%] top-[405px] z-20 hidden h-48 w-[300px] overflow-hidden rounded-lg lg:block"
            style={{
              transform: "translateX(30%)",
            }}
            data-scroll-animate="fade-in-up"
          >
            <img
              src="/projectexpertisepic2.png"
              alt="Construction site with crane"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Column - Image Collage (30-35% width) */}
          <div className="relative w-full bg-[rgb(101,67,33)] px-4 py-8 lg:w-[35%] lg:px-6 lg:py-12">
            <div className="flex flex-col items-center gap-4">
              {/* Image 3 - Positioned in right column with proper gaps */}
              <div className="relative top-16 h-130 ml-15 w-full max-w-[70%] overflow-hidden rounded-lg" data-scroll-animate="fade-in-up">
                <img
                  src="/projectexpertisepic3.png"
                  alt="Workers on scaffolding"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards Section */}
      <section className="relative z-10 bg-[#E8E2D9]" data-section-animate>
        {/* Top Section - Text Content */}
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-4 lg:px-6 lg:py-24">
          {/* Title */}
          <h1 className="mb-12 text-center text-5xl font-bold text-[#6B473D] md:text-6xl lg:text-7xl" data-scroll-animate="fade-in-up">
            Safety Standards
          </h1>

          {/* Body Text */}
          <div className="mx-auto max-w-7xl space-y-6 text-[#6B473D]" data-scroll-animate="fade-in-up">
            <p className="text-base leading-relaxed md:text-lg lg:text-xl">
              At JHA Engineering Solutions, safety is a core part of our work culture. We strictly follow project safety guidelines, statutory regulations, and client-specific HSE requirements across all sites. Our workforce is trained in safe work practices, use of PPE, and hazard identification to minimize risks during execution.
            </p>

            <p className="text-base max-w-7xl leading-relaxed md:text-lg lg:text-xl">
              We ensure regular safety briefings, toolbox talks, and on-site supervision to maintain a safe working environment and prevent accidents. Our focus on safety compliance helps protect our workforce while ensuring smooth and uninterrupted project execution.
            </p>
          </div>
        </div>

        {/* Bottom Section - Building Image */}
        <div className="relative flex w-full justify-center" data-scroll-animate="fade-in-up">
          <img
            src="/servicebuilding.png"
            alt="Modern high-rise buildings"
            className="h-[250px] w-full max-w-370 object-cover md:h-[300px] lg:h-[350px]"
            style={{
              filter: "grayscale(100%)",
            }}
          />
        </div>
      </section>

      {/* Client Relations Section */}
      <section className="relative z-10 bg-[#f5f0e8]" data-section-animate>
        <div className="relative mx-auto flex max-w-full flex-col lg:flex-row">
          {/* Left Section - Large Image and Small Images */}
          <div className="relative w-full lg:w-[20%]" data-scroll-animate="fade-in-up">
            <img
              src="/clientrelation1.png"
              alt="Construction workers pouring concrete"
              className="h-[400px] w-full object-cover lg:ml-16 lg:mt-46 rounded-lg lg:h-[500px]"
            />
            
            {/* Small Images - Positioned to the right of larger image */}
            <div className="absolute left-full top-54 z-10 hidden flex-col gap-12 lg:flex lg:ml-25">
              <div className="w-48" data-scroll-animate="fade-in-up">
                <img
                  src="/clientrelation2.png"
                  alt="Building interior under construction"
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
              <div className="w-48" data-scroll-animate="fade-in-up">
                <img
                  src="/clientrelation3.png"
                  alt="Men discussing blueprints"
                  className="h-auto w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="flex w-full flex-col bg-[#f5f0e8] px-8 pt-8 pb-16 lg:w-[80%] lg:px-12 lg:pt-12 lg:pb-24">
            {/* Title */}
            <h1 className="mb-10 text-5xl font-bold leading-tight text-[rgb(101,67,33)] md:text-6xl lg:text-7xl" data-scroll-animate="fade-in-up">
              Client Relations
            </h1>

            {/* Paragraphs - Shifted to the right where images were */}
            <div className="flex flex-col gap-6 lg:ml-66" data-scroll-animate="fade-in-up">
              {/* First Paragraph */}
              <div className="max-w-2xl">
                <p className="text-base leading-relaxed text-[rgb(101,67,33)] md:text-lg pt-15">
                  We believe strong client relationships are built on trust, transparency, and consistent performance. At JHA Engineering Solutions, we work closely with our clients to understand project requirements and provide reliable support throughout execution.
                </p>
              </div>

              {/* Second Paragraph */}
              <div className="max-w-2xl">
                <p className="text-base leading-relaxed text-[rgb(101,67,33)] md:text-lg pt-27">
                  By maintaining clear communication, timely reporting, and responsiveness on-site, we ensure smooth coordination and long-term partnerships. Our commitment to quality, safety, and timely delivery allows clients to rely on us as a dependable project support partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skilled Workforce Section */}
      <section className="relative z-10 min-h-screen py-16" data-section-animate>
        {/* Title - "Skilled Workforce" */}
        <div className="relative z-10 flex min-h-[20vh] items-center justify-center">
          <h1 className="text-center text-6xl font-black leading-tight tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl pt-5" data-scroll-animate="fade-in-up">
            Skilled Workforce
          </h1>
        </div>

        {/* Information Box with Text and Images */}
        <div className="relative z-10 flex min-h-[70vh] items-center justify-center pb-16 pt-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Light Beige Container - Semi-transparent */}
            <div
              className="relative rounded-xl px-10 py-16 shadow-2xl md:px-16 md:py-20"
              style={{
                backgroundColor: "rgba(245, 240, 232, 0.85)",
              }}
              data-scroll-animate="fade-in-up"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
                {/* Left Side - First Image */}
                <div className="w-full shrink-0 lg:w-[300px]" data-scroll-animate="fade-in-up">
                  <img
                    src="/skilledworkforce1.png"
                    alt="Construction workers in safety vests"
                    className="h-auto w-full rounded-lg object-cover mt-7"
                  />
                </div>

                {/* Center - Text Content */}
                <div className="flex-1 text-[rgb(101,67,33)]" data-scroll-animate="fade-in-up">
                  <p className="text-base leading-relaxed md:text-lg lg:text-xl">
                    Our strength lies in our skilled and experienced workforce, capable of meeting on-site project demands across construction, infrastructure, and oil & gas sectors. Our personnel are selected based on technical competence, site experience, and adherence to safety practices. Through continuous supervision and skill development, we ensure our workforce delivers quality workmanship while maintaining safety and productivity on every project.
                  </p>
                </div>

                {/* Right Side - Second Image */}
                <div className="w-full shrink-0 lg:w-[300px]" data-scroll-animate="fade-in-up">
                  <img
                    src="/skilledworkforce2.png"
                    alt="Construction worker with concrete mixer"
                    className="h-auto w-full rounded-lg object-cover mt-7"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center" data-section-animate>
        {/* Main Content - Thank You Text */}
        <div className="relative z-10 text-center">
          {/* Filled "THANK YOU." text */}
          <h1 className="-mb-14 text-7xl font-black leading-none text-white sm:text-8xl md:text-9xl lg:text-10xl mr-3" data-scroll-animate="fade-in-up delay-200">
            THANK YOU.
          </h1>
          {/* Outlined "THANK YOU." text */}
          <h2 className="text-7xl font-black leading-none text-transparent [-webkit-text-stroke:3px_white] sm:text-8xl md:text-9xl lg:text-10xl" data-scroll-animate="fade-in-up delay-400">
            THANK YOU.
          </h2>
        </div>

        

        
      </section>
    </main>
  );
}
