import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b1624] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#102238]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(201,139,93,.22),transparent_35%)]" />

        <div className="relative z-[2] max-w-[1250px] mx-auto px-5 sm:px-6 py-[65px] sm:py-[85px] lg:py-[95px]">

          {/* IMAGE + CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ================= IMAGE ================= */}
            
              <div className="order-1 lg:order-2 w-full pt-6 lg:pt-0">

              <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                <img
                  src="/section1img.png"
                  alt="Noonari Heritage"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="order-2 lg:order-1">

              {/* Main Heading */}
              <h1 className="max-w-[650px] font-serif text-[clamp(42px,5vw,72px)] leading-[.98] tracking-[-.035em]">
                A shared heritage for a connected community
              </h1>

              {/* About Intro */}
              <p className="max-w-[650px] text-[rgba(255,255,255,.63)] text-[14px] sm:text-[15px] leading-[1.8] mt-7 sm:mt-8">
                All Pakistan Noonari Association is being developed as a
                national platform for welfare, representation, heritage and
                opportunity.
              </p>

              {/* History Intro */}
              <p className="max-w-[650px] text-[rgba(255,255,255,.63)] text-[14px] sm:text-[15px] leading-[1.8] mt-4">
                The Noonari community traces its historical roots to Rajputana,
                later spreading across Makran and Sindh. Its heritage is linked
                with traditional salt-making, agriculture, settlement, and a
                rich history of social and economic contribution.
              </p>

              {/* History Button */}
              <Link
                href="/history"
                className="inline-block mt-7 px-7 py-3 rounded-full border border-[#cf9062] text-[#cf9062] text-sm font-semibold hover:bg-[#cf9062] hover:text-white transition-all duration-300"
              >
                History
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION & VISION ================= */}
      <section className="bg-white text-[#102238] py-[75px] sm:py-[90px] lg:py-[110px] px-5 sm:px-6">

        <div className="max-w-[1250px] mx-auto">

          <div className="max-w-[800px] mb-[45px] sm:mb-[55px]">

            <div className="flex items-center gap-[11px] text-[#a7352d] text-[10px] font-bold tracking-[.18em] uppercase mb-[18px]">
              <span className="w-[28px] h-[1px] bg-[#cf9062]" />
              Our Purpose
            </div>

            <h2 className="font-serif text-[clamp(40px,5vw,68px)] leading-[1] tracking-[-.03em]">
              Mission & Vision
            </h2>

            <p className="text-[#102238]/60 text-[14px] sm:text-[15px] leading-[1.8] mt-5 max-w-[650px]">
              Building a stronger community through service, opportunity,
              unity and a shared commitment to a better future.
            </p>

          </div>


          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-8">

            {/* Mission */}
            <div className="border border-[#e5e5e5] p-7 sm:p-9 lg:p-10 hover:border-[#cf9062] transition-all duration-300">

              <div className="text-[#cf9062] text-[11px] font-bold tracking-[.18em] uppercase mb-4">
                Our Mission
              </div>

              <h3 className="font-serif text-[32px] sm:text-[36px] text-[#102238] mb-5">
                Mission
              </h3>

              <p className="text-[#102238]/65 text-[14px] sm:text-[15px] leading-[1.9]">
                To serve and empower our community through access to
                healthcare, education, employment opportunities, and support
                for those in need; while strengthening unity, mutual
                cooperation, and a culture of service for a better future.
              </p>

            </div>


            {/* Vision */}
            <div className="border border-[#e5e5e5] p-7 sm:p-9 lg:p-10 hover:border-[#cf9062] transition-all duration-300">

              <div className="text-[#cf9062] text-[11px] font-bold tracking-[.18em] uppercase mb-4">
                Our Vision
              </div>

              <h3 className="font-serif text-[32px] sm:text-[36px] text-[#102238] mb-5">
                Vision
              </h3>

              <p className="text-[#102238]/65 text-[14px] sm:text-[15px] leading-[1.9]">
                To build a united, educated, compassionate, and prosperous
                community where everyone has the opportunity to grow, support
                others, and contribute positively to the development,
                stability, and prosperity of Pakistan.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= OUR VALUES ================= */}
      <section className="bg-[#102238] text-white py-[75px] sm:py-[90px] lg:py-[110px] px-5 sm:px-6">

        <div className="max-w-[1000px] mx-auto text-center">

          <div className="flex justify-center items-center gap-[11px] text-[#cf9062] text-[10px] font-bold tracking-[.18em] uppercase mb-[20px]">
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />
            Our Values
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />
          </div>

          <h2 className="font-serif text-[clamp(38px,5vw,64px)] leading-[1] tracking-[-.03em]">
            Unity Over Division
          </h2>

          <p className="max-w-[780px] mx-auto text-white/65 text-[14px] sm:text-[15px] leading-[1.9] mt-7">
            We believe that a strong community is built on unity, respect,
            and goodwill. We strive to eliminate hatred, jealousy, backbiting,
            and unnecessary rivalry, replacing them with brotherhood,
            encouragement, cooperation, and respect.
          </p>

          <p className="max-w-[780px] mx-auto text-white/65 text-[14px] sm:text-[15px] leading-[1.9] mt-4">
            Let us leave our differences behind, come together as one,
            and build a stronger, united community for the betterment of
            our people and Pakistan.
          </p>

          <div className="mt-8 sm:mt-10">

            <Link
              href="/membership"
              className="inline-block px-8 py-3.5 rounded-full bg-[#cf9062] text-white text-sm font-semibold hover:bg-[#a7352d] transition-all duration-300"
            >
              Become a Member
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}