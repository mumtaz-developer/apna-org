import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // Safe fallback if you add site-data config later, otherwise defaults to APNA info email
  const fallbackEmail = "info@apna.org.pk";
  
  // Footer logo path setup
  const logoUrl = "/logo1.png";

  return (
    <footer className="bg-[#091624] text-white pt-[70px] pb-[25px] px-[clamp(24px,7vw,110px)] font-['-apple-system','BlinkMacSystemFont','Avenir_Next','Segoe_UI',Arial,sans-serif]">
      {/* Footer Grid */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] gap-[60px]">
        
        {/* Brand Column */}
        <div>
          <Link className="flex items-center gap-[12px] no-underline text-inherit" href="/">
            
            {/* Logo Image in Footer */}
            <div className="relative w-[68px] h-[68px] flex-shrink-0">
              <Image 
                src={logoUrl} 
                alt="APNA Logo"
                fill
                className="rounded-full object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.24),0_5px_18px_rgba(0,0,0,0.2)]"
              />
            </div>

            <span className="grid gap-[4px] leading-none">
              <strong className="font-normal text-[24px] font-['Iowan_Old_Style','Baskerville','Times_New_Roman',serif] tracking-[0.08em]">
                APNA
              </strong>
              <small className="text-[7px] tracking-[0.18em] uppercase opacity-70">
                All Pakistan Noonari Association
              </small>
            </span>
          </Link>
          <p className="max-w-[260px] text-[11px] leading-[1.7] text-white/40 mt-4">
            A national platform for welfare, heritage, representation and collective progress.
          </p>
        </div>

        {/* Explore Links */}
        <div className="grid content-start gap-[12px] text-[11px]">
          <small className="mb-[8px] text-white/35 text-[8px] uppercase tracking-[0.14em]">
            Explore
          </small>
          <Link href="/about" className="hover:underline text-white">About us</Link>
          <Link href="/history" className="hover:underline text-white">History</Link>
          <Link href="/provinces" className="hover:underline text-white">Provincial chapters</Link>
          <Link href="/gallery" className="hover:underline text-white">Gallery</Link>
        </div>

        {/* Participate Links */}
        <div className="grid content-start gap-[12px] text-[11px]">
          <small className="mb-[8px] text-white/35 text-[8px] uppercase tracking-[0.14em]">
            Participate
          </small>
          <Link href="/membership" className="hover:underline text-white">Membership</Link>
          <Link href="/leadership" className="hover:underline text-white">Leadership</Link>
          <Link href="/contact" className="hover:underline text-white">Contact</Link>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            Facebook
          </a>
        </div>

        {/* Contact Column */}
        <div className="grid content-start gap-[12px] text-[11px]">
          <small className="mb-[8px] text-white/35 text-[8px] uppercase tracking-[0.14em]">
            General enquiries
          </small>
          <a 
            href={`mailto:${fallbackEmail}`} 
            className="text-[#cf9062] font-normal text-[19px] font-['Iowan_Old_Style','Baskerville','Times_New_Roman',serif] hover:underline"
          >
            {fallbackEmail}
          </a>
          <p className="max-w-[260px] text-[11px] leading-[1.7] text-white/40">
            Pakistan · National network
          </p>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-[1250px] mx-auto mt-[55px] pt-[20px] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-[8px] sm:gap-[4px] text-white/27 text-[8px] tracking-[0.14em] uppercase">
        <span>© {new Date().getFullYear()} APNA</span>
        <span>Welfare · Heritage · Progress</span>
      </div>
    </footer>
  );
}