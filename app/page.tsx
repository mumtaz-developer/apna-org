import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="min-h-[700px] h-[100svh] relative text-white overflow-hidden bg-[#102238] flex flex-col justify-end">
        {/* .hero-image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/heroimg2.jpeg')" }} />

        {/* .hero-shade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071524]/98 via-[#071524]/75 to-[#071524]/10 bg-gradient-to-t from-[#071524]/85 via-transparent to-transparent z-[1]" />
        
        {/* .pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08] text-white z-[1]"
          style={{
            backgroundImage: 'linear-gradient(45deg,transparent 45%,currentColor 45%,currentColor 55%,transparent 55%), linear-gradient(-45deg,transparent 45%,currentColor 45%,currentColor 55%,transparent 55%)',
            backgroundSize: '28px 28px',
            WebkitMaskImage: 'linear-gradient(90deg,transparent 20%,black)',
            maskImage: 'linear-gradient(90deg,transparent 20%,black)'
          }}
        />
        
        {/* .home-hero-inner */}
        <div className="relative z-[2] max-w-[1300px] w-full mx-auto pt-[120px] sm:pt-[140px] pb-[70px] sm:pb-[90px] px-4 sm:px-10 lg:px-[110px] flex flex-col justify-center items-start">
          
          {/* --- EYEBROW (URDU) --- */}
          <p className="urdu-text m-0 mb-3 sm:mb-[30px] flex items-center gap-[11px] text-[#a7352d] font-bold text-sm sm:text-base" dir="rtl">
            <span className="w-[28px] h-[1px] bg-[#cf9062] inline-block align-middle" />
            ایک خون · ایک برادری
          </p>

          {/* --- MAIN HEADING (URDU) --- */}
          <h1 className="urdu-text m-0 font-normal text-[28px] sm:text-[48px] lg:text-[70px] leading-[1.3] sm:leading-[1.6] mb-4" dir="rtl">
            رشتوں میں ایک، <span className="italic text-[#cf9062]">خدمت میں متحد۔</span>
          </h1>

          {/* --- DESCRIPTION (URDU) --- */}
          <p className="urdu-text max-w-[700px] mt-2 sm:mt-[20px] mb-0 text-white/80 text-xs sm:text-base leading-relaxed" dir="rtl">
            جب ایک ہی خون کے دھارے آپس میں ملتے ہیں، تو وہ سمندر کی سی طاقت اختیار کر لیتے ہیں۔ ہمارا اتحاد محض ایک نام نہیں، بلکہ ہماری بقا، ہمارے وقار اور ہماری آنے والی نسلوں کے درخشاں مستقبل کی ضمانت ہے۔ آئیے مل کر اپنے اس سانجھے ورثے کو ایک لازوال قوت بنائیں۔
          </p>

          {/* .actions */}
          <div className="mt-6 sm:mt-[40px] flex items-stretch sm:items-center gap-4 sm:gap-[30px] flex-col sm:flex-row w-full sm:w-auto">
            <Link className="min-h-[48px] sm:min-h-[52px] px-6 inline-flex justify-center items-center gap-[18px] text-[12px] font-bold transition-transform duration-200 hover:-translate-y-[2px] bg-[#a7352d]" href="/membership">
              Become a member <span>→</span>
            </Link>
            <Link className="inline-flex items-center justify-center sm:justify-start gap-[9px] pb-[5px] border-b border-current text-[12px] font-bold transition-colors" href="/about">
              Discover APNA <span className="rotate-45">↑</span>
            </Link>
          </div>
        </div>
        
        {/* .hero-foot */}
        <div className="absolute z-[2] left-4 sm:left-[110px] bottom-4 sm:bottom-[36px] hidden sm:flex items-center gap-[14px]">
          <span className="urdu-text text-[24px] leading-none text-[#cf9062]">نوناری</span>
          <p className="m-0 text-[8px] tracking-[0.19em] uppercase text-white/50">All Pakistan Noonari Association</p>
        </div>
      </section>

      {/* --- SECTION 01: PURPOSE --- */}
      <section className="bg-[#fbfaf6] text-[#102035] py-12 sm:py-[100px] px-4 sm:px-10 lg:px-[110px]">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex gap-[13px] pb-4 sm:pb-[20px] mb-8 sm:mb-[72px] border-b border-[#102035]/15 text-[9px] tracking-[0.17em] uppercase">
            <span className="text-[#a7352d]">01</span>
            <p className="m-0">Our purpose</p>
          </div>

          <div className="mb-10 sm:mb-[70px] grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] items-end gap-6 lg:gap-[80px]">
            <h2 className="m-0 font-serif font-normal text-[32px] sm:text-[56px] lg:text-[82px] leading-[1.1] lg:leading-[0.92] tracking-[-0.035em]">
              A national association built around <em className="italic font-serif text-[#cf9062]">people.</em>
            </h2>
            <p className="text-[#6d757c] text-xs sm:text-[13px] leading-relaxed m-0">
              A shared institution for representation, practical welfare, responsible heritage preservation and opportunity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#102035]/15">
            <article className="p-6 sm:p-[34px_28px_40px] border-b md:border-b-0 md:border-r border-[#102035]/15">
              <span className="text-[#a7352d] text-[9px]">01</span>
              <h3 className="font-serif font-normal text-xl sm:text-[28px] mt-6 sm:mt-[55px] mb-2 sm:mb-3">Community Welfare</h3>
              <p className="text-[#707980] text-xs sm:text-[12px] leading-relaxed">Providing foundational support, medical relief, and educational assistance to families in need.</p>
            </article>
            
            <article className="p-6 sm:p-[34px_28px_40px] border-b md:border-b-0 md:border-r border-[#102035]/15">
              <span className="text-[#a7352d] text-[9px]">02</span>
              <h3 className="font-serif font-normal text-xl sm:text-[28px] mt-6 sm:mt-[55px] mb-2 sm:mb-3">Hrtage Preser</h3>
              <p className="text-[#707980] text-xs sm:text-[12px] leading-relaxed">Documenting historical timelines, cultural roots, and keeping records intact safely for generations.</p>
            </article>
            
            <article className="p-6 sm:p-[34px_28px_40px] border-r border-[#102035]/15">
              <span className="text-[#a7352d] text-[9px]">03</span>
              <h3 className="font-serif font-normal text-xl sm:text-[28px] mt-6 sm:mt-[55px] mb-2 sm:mb-3">Network & Opportunity</h3>
              <p className="text-[#707980] text-xs sm:text-[12px] leading-relaxed">Connecting professionals and creating economic bridges between chapters across Pakistan.</p>
            </article>
          </div>
        </div>
      </section>

      {/* --- SECTION 02: LEADERSHIP --- */}
      <section className="bg-[#102238] text-white py-12 sm:py-[100px] px-4 sm:px-10 lg:px-[110px]">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex gap-[13px] pb-4 sm:pb-[20px] mb-8 sm:mb-[72px] border-b border-white/15 text-[9px] tracking-[0.17em] uppercase text-white/50">
            <span className="text-[#cf9062]">02</span>
            <p className="m-0">From the leadership</p>
          </div>

          <div className="mb-10 sm:mb-[70px] grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] items-end gap-6 lg:gap-[80px]">
            <h2 className="m-0 font-serif font-normal text-[32px] sm:text-[56px] lg:text-[82px] leading-[1.1] lg:leading-[0.92] tracking-[-0.035em]">
              Messages of service and <em className="italic font-serif text-[#cf9062]">responsibility.</em>
            </h2>
            <p className="text-white/55 text-xs sm:text-[13px] leading-relaxed m-0">
              The office-bearers’ messages establish the values expected from every national, provincial and district chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-[1250px] mx-auto">
            <article className="min-h-[280px] sm:min-h-[380px] p-6 sm:p-[35px] flex flex-col justify-between bg-[#a7352d] border border-white/12">
              <span className="text-[#cf9062] font-serif text-4xl sm:text-[70px] leading-none">“</span>
              <blockquote className="m-0 mt-3 sm:mt-[20px] mb-auto font-serif font-normal text-lg sm:text-[25px] leading-relaxed">
                Our unity is our ultimate strength. By establishing organized networks in every province, we guarantee that no family member is left behind in times of need.
              </blockquote>
              <div className="grid gap-1 pt-4 sm:pt-[30px]">
                <strong className="text-white text-[10px] uppercase tracking-[0.15em]">Central President</strong>
                <small className="text-white/45 text-[9px]">Name Pending Verification</small>
              </div>
            </article>
          </div>
          
          <div className="max-w-[1250px] mx-auto my-6 text-white/40 text-[9px]">
            Leadership names and portraits will be published after official association verification.
          </div>
          
          <Link className="inline-flex items-center gap-[9px] pb-[5px] border-b border-current text-[12px] font-bold text-[#cf9062]" href="/leadership">
            View leadership structure <span>→</span>
          </Link>
        </div>
      </section>

      {/* --- SECTION 03: PROVINCES --- */}
      <section className="bg-[#f1ebdf] text-[#102035] py-12 sm:py-[100px] px-4 sm:px-10 lg:px-[110px]">
        <div className="max-w-[1250px] mx-auto">
          <div className="flex gap-[13px] pb-4 sm:pb-[20px] mb-8 sm:mb-[72px] border-b border-[#102035]/15 text-[9px] tracking-[0.17em] uppercase">
            <span className="text-[#a7352d]">03</span>
            <p className="m-0">Across Pakistan</p>
          </div>

          <div className="mb-10 sm:mb-[70px] grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] items-end gap-6 lg:gap-[80px]">
            <h2 className="m-0 font-serif font-normal text-[32px] sm:text-[56px] lg:text-[82px] leading-[1.1] lg:leading-[0.92] tracking-[-0.035em]">
              Provincial roots.<br /><em className="italic font-serif text-[#cf9062]">One national network.</em>
            </h2>
            <p className="text-[#6d757c] text-xs sm:text-[13px] leading-relaxed m-0">
              Dedicated chapter pages make local office-bearers, priorities and contact routes easier to find.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#102035]/15">
            <Link href="/provinces/punjab" className="relative min-h-[220px] sm:min-h-[270px] p-5 sm:p-[32px] border-r border-b border-[#102035]/15 bg-transparent hover:text-white hover:bg-[#a7352d] transition-all duration-250">
              <span className="urdu-text text-[20px] sm:text-[22px]">پنجاب</span>
              <small className="block mt-4 sm:mt-[40px] text-[#777f85] text-[9px] uppercase tracking-[0.14em]">Central & Southern</small>
              <h3 className="font-serif font-normal text-xl sm:text-[30px] m-0 mt-2 sm:mt-[11px]">Punjab</h3>
              <span className="absolute right-5 sm:right-[28px] bottom-5 sm:bottom-[30px] rotate-45">↑</span>
            </Link>

            <Link href="/provinces/sindh" className="relative min-h-[220px] sm:min-h-[270px] p-5 sm:p-[32px] border-r border-b border-[#102035]/15 bg-transparent hover:text-white hover:bg-[#a7352d] transition-all duration-250">
              <span className="urdu-text text-[20px] sm:text-[22px]">سنڌ</span>
              <small className="block mt-4 sm:mt-[40px] text-[#777f85] text-[9px] uppercase tracking-[0.14em]">Lower & Upper</small>
              <h3 className="font-serif font-normal text-xl sm:text-[30px] m-0 mt-2 sm:mt-[11px]">Sindh</h3>
              <span className="absolute right-5 sm:right-[28px] bottom-5 sm:bottom-[30px] rotate-45">↑</span>
            </Link>

            <Link href="/provinces/balochistan" className="relative min-h-[220px] sm:min-h-[270px] p-5 sm:p-[32px] border-r border-b border-[#102035]/15 bg-transparent hover:text-white hover:bg-[#a7352d] transition-all duration-250">
              <span className="urdu-text text-[20px] sm:text-[22px]">بلوچستان</span>
              <small className="block mt-4 sm:mt-[40px] text-[#777f85] text-[9px] uppercase tracking-[0.14em]">Provincial Network</small>
              <h3 className="font-serif font-normal text-xl sm:text-[30px] m-0 mt-2 sm:mt-[11px]">Ba</h3>
              <span className="absolute right-5 sm:right-[28px] bottom-5 sm:bottom-[30px] rotate-45">↑Blch</span>
            </Link>

            <Link href="/provinces/khyber-pakhtunkhwa" className="relative min-h-[220px] sm:min-h-[270px] p-5 sm:p-[32px] border-r border-b border-[#102035]/15 bg-transparent hover:text-white hover:bg-[#a7352d] transition-all duration-250">
              <span className="urdu-text text-[20px] sm:text-[22px]">خیبر پختونخوا</span>
              <small className="block mt-4 sm:mt-[40px] text-[#777f85] text-[9px] uppercase tracking-[0.14em]">Northern Chapters</small>
              <h3 className="font-serif font-normal text-xl sm:text-[30px] m-0 mt-2 sm:mt-[11px]">Kpk</h3>
              <span className="absolute right-5 sm:right-[28px] bottom-5 sm:bottom-[30px] rotate-45">↑</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION 04: HISTORY PREVIEW --- */}
      <section className="min-h-[500px] sm:min-h-[650px] relative text-white flex lg:justify-end items-center overflow-hidden bg-[#102238] after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-[#0a192a]/90 lg:after:from-[#0a192a]/35 after:to-[#0a192a]/95 after:z-[1]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/noonari-heritage-hero.png')" }} />
        
        <div className="relative z-[2] w-full lg:w-[55%] p-6 sm:p-[80px_70px] lg:p-[80px_110px_80px_70px]">
          <p className="m-0 mb-3 sm:mb-[25px] flex items-center gap-[11px] text-[#a7352d] text-[10px] font-bold tracking-[0.18em] uppercase">
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />
            Our living record
          </p>
          <h2 className="m-0 font-serif font-normal text-[32px] sm:text-[52px] lg:text-[78px] leading-[1.1] lg:leading-[0.92] tracking-[-0.035em]">
            History deserves care,<br /><em className="italic font-serif text-[#cf9062]">evidence and memory.</em>
          </h2>
          <p className="mt-4 sm:mt-[34px] text-white/62 leading-relaxed text-xs sm:text-[13px]">
            APNA’s heritage project will bring together attributed oral histories, family archives, public records and photographs without presenting unverified origin stories as settled fact.
          </p>
          <Link className="min-h-[48px] sm:min-h-[52px] px-6 inline-flex justify-center items-center gap-[18px] text-[12px] font-bold transition-transform duration-200 hover:-translate-y-[2px] mt-6 sm:mt-[20px] border border-white/65" href="/history">
            Explore our history <span>→</span>
          </Link>
        </div>
      </section>

      {/* --- SECTION 05: JOIN THE BAND --- */}
      <section className="py-16 sm:py-[110px] px-4 sm:px-6 text-center text-white bg-[#a7352d]">
        <div className="max-w-3xl mx-auto">
          <p className="m-0 mb-3 sm:mb-[25px] flex items-center justify-center gap-[11px] text-[#f0c9a9] text-[10px] font-bold tracking-[0.18em] uppercase">
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />
            Take part
          </p>
          <h2 className="m-0 font-serif font-normal text-[32px] sm:text-[56px] lg:text-[90px] leading-[1.1] lg:leading-[0.92] tracking-[-0.035em]">
            APNA becomes stronger<br />when <em className="italic font-serif text-[#f1c8a8]">you participate.</em>
          </h2>
          <div className="mt-6 sm:mt-[40px] flex items-stretch sm:items-center justify-center gap-4 sm:gap-[30px] flex-col sm:flex-row">
            <Link className="min-h-[48px] sm:min-h-[52px] px-6 inline-flex justify-center items-center gap-[18px] text-[12px] font-bold transition-transform duration-200 hover:-translate-y-[2px] text-[#102035] bg-[#f1ebdf]" href="/membership">
              Join the association <span>→</span>
            </Link>
            <a className="inline-flex items-center justify-center gap-[9px] pb-[5px] border-b border-current text-[12px] font-bold" href="https://facebook.com" target="_blank" rel="noreferrer">
              Visit us on Facebook <span className="rotate-45">↑</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}