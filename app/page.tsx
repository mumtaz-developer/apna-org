import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="min-h-[800px] h-[100svh] max-md:min-h-[740px] max-[580px]:min-h-0 max-[580px]:h-auto relative text-white overflow-hidden bg-[#102238] max-[580px]:overflow-x-hidden">

        {/* HERO IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center
          max-[580px]:relative
          max-[580px]:inset-auto
          max-[580px]:w-full
          max-[580px]:aspect-[16/9]
          max-[580px]:bg-contain
          max-[580px]:bg-no-repeat
          max-[580px]:bg-top"
          style={{
            backgroundImage: "url('/heroimg2.jpeg')",
          }}
        />

        {/* HERO SHADE */}
        <div
          className="absolute inset-0
          bg-gradient-to-r
          from-[#071524]/98
          via-[#071524]/75
          to-[#071524]/10
          bg-gradient-to-t
          from-[#071524]/65
          via-transparent
          to-transparent
          z-[1]

          max-[580px]:h-[56.25vw]
          max-[580px]:inset-x-0
          max-[580px]:bottom-auto
          max-[580px]:bg-gradient-to-t
          max-[580px]:from-[#071524]/75
          max-[580px]:via-[#071524]/20
          max-[580px]:to-transparent"
        />

        {/* PATTERN */}
        <div
          className="absolute inset-0
          opacity-[0.08]
          text-white
          z-[1]

          max-[580px]:h-[56.25vw]
          max-[580px]:bottom-auto"
          style={{
            backgroundImage:
              'linear-gradient(45deg,transparent 45%,currentColor 45%,currentColor 55%,transparent 55%), linear-gradient(-45deg,transparent 45%,currentColor 45%,currentColor 55%,transparent 55%)',
            backgroundSize: '28px 28px',
            WebkitMaskImage:
              'linear-gradient(90deg,transparent 20%,black)',
            maskImage:
              'linear-gradient(90deg,transparent 20%,black)',
          }}
        />

        {/* HERO CONTENT */}
        <div
          className="
            relative
            z-[2]
            max-w-[1300px]
            h-full
            mx-auto
            pt-[170px]
            pb-[120px]
            px-[clamp(24px,7vw,110px)]
            flex
            flex-col
            justify-center
            items-start

            max-[580px]:h-auto
            max-[580px]:pt-[28px]
            max-[580px]:pb-[55px]
          "
        >

          {/* EYEBROW - URDU */}
          <p
            className="
              urdu-text
              m-0
              mb-[30px]
              flex
              items-center
              gap-[11px]
              text-[#a7352d]
              font-bold

              max-[580px]:mb-[18px]
              max-[580px]:text-[16px]
            "
            dir="rtl"
          >
            <span className="w-[28px] h-[1px] bg-[#cf9062] inline-block align-middle" />

            ایک خون · ایک برادری
          </p>

          {/* MAIN HEADING - URDU */}
          <h1
  className="
    urdu-text
    m-0
    font-normal
    text-right
    w-full
    max-w-full
    break-words
    whitespace-normal
    overflow-wrap-anywhere

    text-[clamp(38px,5vw,70px)]
    leading-[1.6]
    mb-4

    max-[580px]:text-[28px]
    max-[580px]:leading-[1.9]
    max-[580px]:mb-0
    max-[580px]:px-[4px]

    max-[380px]:text-[25px]
  "
  dir="rtl"
>
  رشتوں میں ایک،{' '}
  <span className="italic text-[#cf9062]">
    خدمت میں متحد۔
  </span>
</h1>

          {/* DESCRIPTION - URDU */}
          <p
  className="
    urdu-text
    w-full
    max-w-full
    text-right
    break-words
    whitespace-normal
    overflow-wrap-anywhere

    mt-[20px]
    mb-0
    text-white/80

    max-[580px]:mt-[14px]
    max-[580px]:text-[14px]
    max-[580px]:leading-[2.15]
    max-[580px]:px-[4px]
  "
  dir="rtl"
>
  جب ایک ہی خون کے دھارے آپس میں ملتے ہیں، تو وہ سمندر کی سی طاقت اختیار
  کر لیتے ہیں۔ ہمارا اتحاد محض ایک نام نہیں، بلکہ ہماری بقا، ہمارے وقار
  اور ہماری آنے والی نسلوں کے درخشاں مستقبل کی ضمانت ہے۔ آئیے مل کر اپنے
  اس سانجھے ورثے کو ایک لازوال قوت بنائیں۔
</p>

          {/* ACTIONS */}
          <div
            className="
              mt-[40px]
              flex
              items-center
              gap-[30px]

              max-[580px]:mt-[28px]
              max-[580px]:flex-col
              max-[580px]:items-start

              w-full
            "
          >

            {/* JOIN BUTTON */}
            <Link
              className="
                min-h-[52px]
                px-[23px]
                inline-flex
                justify-center
                items-center
                gap-[18px]
                text-[12px]
                font-bold
                transition-transform
                duration-200
                hover:-translate-y-[2px]
                bg-[#a7352d]
              "
              href="/membership"
            >
              Become a member <span>→</span>
            </Link>

            {/* ABOUT LINK */}
            <Link
              className="
                inline-flex
                items-center
                gap-[9px]
                pb-[5px]
                border-b
                border-current
                text-[12px]
                font-bold
                transition-colors
              "
              href="/about"
            >
              Discover APNA <span className="rotate-45">↑</span>
            </Link>
          </div>
        </div>

        {/* HERO FOOTER */}
        <div
          className="
            absolute
            z-[2]
            left-[clamp(24px,7vw,110px)]
            bottom-[36px]
            flex
            items-center
            gap-[14px]

            max-[580px]:relative
            max-[580px]:left-auto
            max-[580px]:bottom-auto
            max-[580px]:px-[24px]
            max-[580px]:pb-[24px]
            max-[580px]:pt-0
          "
        >
          <span className="urdu-text text-[24px] leading-none text-[#cf9062]">
            نوناری
          </span>

          <p className="m-0 text-[8px] tracking-[0.19em] uppercase text-white/50">
            All Pakistan Noonari Association
          </p>
        </div>
      </section>


      {/* =========================================================
          SECTION 01: PURPOSE
      ========================================================= */}

      <section
        className="
          bg-[#fbfaf6]
          text-[#102035]
          py-[100px]
          px-[clamp(24px,7vw,110px)]

          max-[580px]:py-[75px]
        "
      >
        <div className="max-w-[1250px] mx-auto">

          {/* SECTION INDEX */}
          <div
            className="
              flex
              gap-[13px]
              pb-[20px]
              mb-[72px]
              border-b
              border-[#102035]/15
              text-[9px]
              tracking-[0.17em]
              uppercase

              max-[580px]:mb-[50px]
            "
          >
            <span className="text-[#a7352d]">01</span>

            <p className="m-0">
              Our purpose
            </p>
          </div>

          {/* SECTION HEADING */}
          <div
            className="
              max-w-[1250px]
              mx-auto
              mb-[70px]
              grid
              grid-cols-[1.35fr_0.65fr]
              items-end
              gap-[80px]

              max-md:grid-cols-1
              max-md:gap-[30px]
            "
          >
            <h2
              className="
                m-0
                font-serif
                font-normal
                text-[clamp(48px,5.8vw,82px)]
                leading-[0.92]
                tracking-[-0.035em]
              "
            >
              A national association built around{' '}
              <em className="italic font-serif text-[#cf9062]">
                people.
              </em>
            </h2>

            <p className="text-[#6d757c] text-[13px] [line-height:1.8] m-0">
              A shared institution for representation, practical welfare,
              responsible heritage preservation and opportunity.
            </p>
          </div>

          {/* PURPOSE GRID */}
          <div
            className="
              grid
              grid-cols-3
              border-y
              border-[#102035]/15

              max-md:grid-cols-2
              max-[580px]:grid-cols-1
            "
          >

            {/* CARD 01 */}
            <article
              className="
                p-[34px_28px_40px]
                border-r
                border-l
                border-[#102035]/15

                max-md:border-l-[0px]
                max-md:[&:nth-child(2n+1)]:border-l

                max-[580px]:border-l-[1px_!important]
              "
            >
              <span className="text-[#a7352d] text-[9px]">
                01
              </span>

              <h3 className="font-serif font-normal text-[28px] mt-[55px] mb-[12px]">
                Community Welfare
              </h3>

              <p className="text-[#707980] text-[12px] [line-height:1.75]">
                Providing foundational support, medical relief, and educational
                assistance to families in need.
              </p>
            </article>

            {/* CARD 02 */}
            <article className="p-[34px_28px_40px] border-r border-[#102035]/15">

              <span className="text-[#a7352d] text-[9px]">
                02
              </span>

              <h3 className="font-serif font-normal text-[28px] mt-[55px] mb-[12px]">
                Heritage Preservation
              </h3>

              <p className="text-[#707980] text-[12px] [line-height:1.75]">
                Documenting historical timelines, cultural roots, and keeping
                records intact safely for generations.
              </p>
            </article>

            {/* CARD 03 */}
            <article
              className="
                p-[34px_28px_40px]
                border-r
                border-[#102035]/15

                max-md:border-r-0

                max-[580px]:border-r
                max-[580px]:border-l-[1px_!important]
              "
            >
              <span className="text-[#a7352d] text-[9px]">
                03
              </span>

              <h3 className="font-serif font-normal text-[28px] mt-[55px] mb-[12px]">
                Network & Opportunity
              </h3>

              <p className="text-[#707980] text-[12px] [line-height:1.75]">
                Connecting professionals and creating economic bridges between
                chapters across Pakistan.
              </p>
            </article>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 02: LEADERSHIP
      ========================================================= */}

      <section
        className="
          bg-[#102238]
          text-white
          py-[100px]
          px-[clamp(24px,7vw,110px)]

          max-[580px]:py-[75px]
        "
      >
        <div className="max-w-[1250px] mx-auto">

          {/* SECTION INDEX */}
          <div
            className="
              flex
              gap-[13px]
              pb-[20px]
              mb-[72px]
              border-b
              border-white/15
              text-[9px]
              tracking-[0.17em]
              uppercase
              text-white/50

              max-[580px]:mb-[50px]
            "
          >
            <span className="text-[#cf9062]">
              02
            </span>

            <p className="m-0">
              From the leadership
            </p>
          </div>

          {/* SECTION HEADING */}
          <div
            className="
              max-w-[1250px]
              mx-auto
              mb-[70px]
              grid
              grid-cols-[1.35fr_0.65fr]
              items-end
              gap-[80px]

              max-md:grid-cols-1
              max-md:gap-[30px]
            "
          >
            <h2
              className="
                m-0
                font-serif
                font-normal
                text-[clamp(48px,5.8vw,82px)]
                leading-[0.92]
                tracking-[-0.035em]
              "
            >
              Messages of service and{' '}
              <em className="italic font-serif text-[#cf9062]">
                responsibility.
              </em>
            </h2>

            <p className="text-white/55 text-[13px] [line-height:1.8] m-0">
              The office-bearers’ messages establish the values expected from
              every national, provincial and district chapter.
            </p>
          </div>

          {/* MESSAGE GRID */}
          <div className="grid grid-cols-1 gap-0 max-w-[1250px] mx-auto">

            <article
              className="
                min-h-[380px]
                p-[35px]
                flex
                flex-col
                justify-between
                bg-[#a7352d]
                border
                border-white/12
              "
            >

              {/* QUOTE */}
              <span className="text-[#cf9062] font-serif text-[70px] [line-height:1]">
                “
              </span>

              {/* BLOCKQUOTE */}
              <blockquote
                className="
                  m-0
                  mt-[20px]
                  mb-auto
                  font-serif
                  font-normal
                  text-[25px]
                  [line-height:1.35]
                "
              >
                Our unity is our ultimate strength. By establishing organized
                networks in every province, we guarantee that no family member
                is left behind in times of need.
              </blockquote>

              {/* AUTHOR */}
              <div className="grid gap-[5px] pt-[30px]">

                <strong className="text-white text-[10px] uppercase tracking-[0.15em]">
                  Central President
                </strong>

                <small className="text-white/45 text-[9px]">
                  Name Pending Verification
                </small>
              </div>
            </article>
          </div>

          {/* VERIFY NOTE */}
          <div
            className="
              max-w-[1250px]
              mx-auto
              my-[24px]
              text-white/40
              text-[9px]
            "
          >
            Leadership names and portraits will be published after official
            association verification.
          </div>

          {/* LEADERSHIP LINK */}
          <Link
            className="
              inline-flex
              items-center
              gap-[9px]
              pb-[5px]
              border-b
              border-current
              text-[12px]
              font-bold
              text-[#cf9062]

              md:ml-[max(0px,calc((100%-1250px)/2))]
            "
            href="/leadership"
          >
            View leadership structure <span>→</span>
          </Link>
        </div>
      </section>


      {/* =========================================================
          SECTION 03: PROVINCES
      ========================================================= */}

      <section
        className="
          bg-[#f1ebdf]
          text-[#102035]
          py-[100px]
          px-[clamp(24px,7vw,110px)]

          max-[580px]:py-[75px]
        "
      >
        <div className="max-w-[1250px] mx-auto">

          {/* SECTION INDEX */}
          <div
            className="
              flex
              gap-[13px]
              pb-[20px]
              mb-[72px]
              border-b
              border-[#102035]/15
              text-[9px]
              tracking-[0.17em]
              uppercase

              max-[580px]:mb-[50px]
            "
          >
            <span className="text-[#a7352d]">
              03
            </span>

            <p className="m-0">
              Across Pakistan
            </p>
          </div>

          {/* SECTION HEADING */}
          <div
            className="
              max-w-[1250px]
              mx-auto
              mb-[70px]
              grid
              grid-cols-[1.35fr_0.65fr]
              items-end
              gap-[80px]

              max-md:grid-cols-1
              max-md:gap-[30px]
            "
          >
            <h2
              className="
                m-0
                font-serif
                font-normal
                text-[clamp(48px,5.8vw,82px)]
                leading-[0.92]
                tracking-[-0.035em]
              "
            >
              Provincial roots.
              <br />

              <em className="italic font-serif text-[#cf9062]">
                One national network.
              </em>
            </h2>

            <p className="text-[#6d757c] text-[13px] [line-height:1.8] m-0">
              Dedicated chapter pages make local office-bearers, priorities
              and contact routes easier to find.
            </p>
          </div>

          {/* PROVINCE GRID */}
          <div
            className="
              grid
              grid-cols-4
              border-t
              border-[#102035]/15

              max-md:grid-cols-2
              max-[580px]:grid-cols-1
            "
          >

            {/* PUNJAB */}
            <Link
              href="/provinces/punjab"
              className="
                relative
                min-h-[270px]
                p-[32px]
                border-r
                border-b
                border-[#102035]/15
                bg-transparent
                hover:text-white
                hover:bg-[#a7352d]
                transition-all
                duration-250

                max-md:border-l-[0px]
                max-md:[&:nth-child(2n+1)]:border-l

                max-[580px]:border-l-[1px_!important]
              "
            >
              <span className="urdu-text text-[22px]">
                پنجاب
              </span>

              <small
                className="
                  block
                  mt-[40px]
                  text-[#777f85]
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-250
                "
              >
                Central & Southern
              </small>

              <h3 className="font-serif font-normal text-[30px] m-0 mt-[11px] mr-[40px]">
                Punjab
              </h3>

              <span className="absolute right-[28px] bottom-[30px] rotate-45 transition-transform">
                ↑
              </span>
            </Link>

            {/* SINDH */}
            <Link
              href="/provinces/sindh"
              className="
                relative
                min-h-[270px]
                p-[32px]
                border-r
                border-b
                border-[#102035]/15
                bg-transparent
                hover:text-white
                hover:bg-[#a7352d]
                transition-all
                duration-250

                max-md:border-l-[0px]
                max-md:[&:nth-child(2n+1)]:border-l

                max-[580px]:border-l-[1px_!important]
              "
            >
              <span className="urdu-text text-[22px]">
                سنڌ
              </span>

              <small
                className="
                  block
                  mt-[40px]
                  text-[#777f85]
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-250
                "
              >
                Lower & Upper
              </small>

              <h3 className="font-serif font-normal text-[30px] m-0 mt-[11px] mr-[40px]">
                Sindh
              </h3>

              <span className="absolute right-[28px] bottom-[30px] rotate-45 transition-transform">
                ↑
              </span>
            </Link>

            {/* BALOCHISTAN */}
            <Link
              href="/provinces/balochistan"
              className="
                relative
                min-h-[270px]
                p-[32px]
                border-r
                border-b
                border-[#102035]/15
                bg-transparent
                hover:text-white
                hover:bg-[#a7352d]
                transition-all
                duration-250
                border-l

                max-md:border-l-[0px]
                max-md:[&:nth-child(2n+1)]:border-l

                max-[580px]:border-l-[1px_!important]
              "
            >
              <span className="urdu-text text-[22px]">
                بلوچستان
              </span>

              <small
                className="
                  block
                  mt-[40px]
                  text-[#777f85]
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-250
                "
              >
                Provincial Network
              </small>

              <h3 className="font-serif font-normal text-[30px] m-0 mt-[11px] mr-[40px]">
                Balochistan
              </h3>

              <span className="absolute right-[28px] bottom-[30px] rotate-45 transition-transform">
                ↑
              </span>
            </Link>

            {/* KHYBER PAKHTUNKHWA */}
            <Link
              href="/provinces/khyber-pakhtunkhwa"
              className="
                relative
                min-h-[270px]
                p-[32px]
                border-r
                border-b
                border-[#102035]/15
                bg-transparent
                hover:text-white
                hover:bg-[#a7352d]
                transition-all
                duration-250

                max-md:border-l-[0px]
                max-md:[&:nth-child(2n+1)]:border-l

                max-[580px]:border-l-[1px_!important]

                max-[580px]:p-[24px]
              "
            >
              <span className="urdu-text text-[22px]">
                خیبر پختونخوا
              </span>

              <small
                className="
                  block
                  mt-[40px]
                  text-[#777f85]
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  transition-colors
                  duration-250
                "
              >
                Northern Chapters
              </small>

              <h3
                className="
                  font-serif
                  font-normal
                  text-[30px]
                  m-0
                  mt-[11px]
                  mr-[20px]

                  max-[580px]:text-[24px]
                "
              >
                KP.K
              </h3>

              <span className="absolute right-[28px] bottom-[30px] rotate-45 transition-transform">
                ↑
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================
          SECTION 04: HISTORY PREVIEW
      ========================================================= */}

      <section
        className="
          min-h-[650px]
          relative
          text-white
          flex
          justify-end
          items-center
          overflow-hidden
          bg-[#102238]

          after:content-['']
          after:absolute
          after:inset-0
          after:bg-gradient-to-r
          after:from-[#0a192a]/35
          after:to-[#0a192a]/95
          after:z-[1]

          max-[580px]:after:bg-[#071124]/85
        "
      >

        {/* HISTORY IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/noonari-heritage-hero.png')",
          }}
        />

        {/* HISTORY COPY */}
        <div
          className="
            relative
            z-[2]
            w-[51%]
            p-[80px_clamp(24px,7vw,110px)_80px_70px]

            max-md:w-[75%]

            max-[580px]:w-full
            max-[580px]:p-[70px_24px]
          "
        >

          <p
            className="
              m-0
              mb-[25px]
              flex
              items-center
              gap-[11px]
              text-[#a7352d]
              text-[10px]
              font-bold
              tracking-[0.18em]
              uppercase
            "
          >
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />

            Our living record
          </p>

          <h2
            className="
              m-0
              font-serif
              font-normal
              text-[clamp(49px,5.3vw,78px)]
              leading-[0.92]
              tracking-[-0.035em]
            "
          >
            History deserves care,
            <br />

            <em className="italic font-serif text-[#cf9062]">
              evidence and memory.
            </em>
          </h2>

          <p className="mt-[34px] text-white/62 [line-height:1.8] text-[13px]">
            APNA’s heritage project will bring together attributed oral
            histories, family archives, public records and photographs without
            presenting unverified origin stories as settled fact.
          </p>

          {/* HISTORY BUTTON */}
          <Link
            className="
              min-h-[52px]
              px-[23px]
              inline-flex
              justify-center
              items-center
              gap-[18px]
              text-[12px]
              font-bold
              transition-transform
              duration-200
              hover:-translate-y-[2px]
              mt-[20px]
              border
              border-white/65
            "
            href="/history"
          >
            Explore our history <span>→</span>
          </Link>
        </div>
      </section>


      {/* =========================================================
          SECTION 05: JOIN BAND
      ========================================================= */}

      <section
        className="
          p-[110px_24px]
          text-center
          text-white
          bg-[#a7352d]

          max-[580px]:py-[80px]
          max-[580px]:px-[24px]
        "
      >
        <div className="max-w-3xl mx-auto">

          {/* SMALL TITLE */}
          <p
            className="
              m-0
              mb-[25px]
              flex
              items-center
              justify-center
              gap-[11px]
              text-[#f0c9a9]
              text-[10px]
              font-bold
              tracking-[0.18em]
              uppercase
            "
          >
            <span className="w-[28px] h-[1px] bg-[#cf9062]" />

            Take part
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
              m-0
              font-serif
              font-normal
              text-[clamp(55px,6.5vw,90px)]
              leading-[0.92]
              tracking-[-0.035em]

              max-[580px]:text-[48px]
              max-[380px]:text-[42px]
            "
          >
            APNA becomes stronger
            <br />

            when{' '}
            <em className="italic font-serif text-[#f1c8a8]">
              you participate.
            </em>
          </h2>

          {/* BUTTONS */}
          <div
            className="
              mt-[40px]
              flex
              items-center
              justify-center
              gap-[30px]

              max-[580px]:flex-col
              max-[580px]:items-stretch
            "
          >

            {/* JOIN ASSOCIATION */}
            <Link
              className="
                min-h-[52px]
                px-[23px]
                inline-flex
                justify-center
                items-center
                gap-[18px]
                text-[12px]
                font-bold
                transition-transform
                duration-200
                hover:-translate-y-[2px]
                text-[#102035]
                bg-[#f1ebdf]
              "
              href="/membership"
            >
              Join the association <span>→</span>
            </Link>

            {/* FACEBOOK */}
            <a
              className="
                inline-flex
                items-center
                justify-center
                gap-[9px]
                pb-[5px]
                border-b
                border-current
                text-[12px]
                font-bold
              "
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              Visit us on Facebook
              <span className="rotate-45">
                ↑
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}