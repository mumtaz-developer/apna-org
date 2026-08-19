import Link from "next/link";

// FIXED: TypeScript interfaces remove kar di hain taake .jsx compiler crash na ho
export const metadata = { title: "History & Heritage" };

export default function HistoryPage() {
  return (
    <>
      {/* PAGE HERO SECTION */}
      <section className="min-h-[520px] relative overflow-hidden text-white bg-[var(--navy)] after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_80%_30%,rgba(201,139,93,0.22),transparent_35%)]">
        <div className="relative z-10 max-w-[1250px] mx-auto pt-[180px] px-6 pb-[90px]">
          <span className="text-[var(--red)] text-[10px] font-bold tracking-[0.18em] uppercase block mb-4 m-0">
            History & heritage
          </span>
          <h1 className="max-w-[1000px] m-0 font-serif font-normal text-[clamp(62px,8vw,112px)] leading-[0.92] tracking-[-0.035em]">
            Preserving memory with <em className="text-[var(--copper)] font-normal not-italic">care.</em>
          </h1>
          <p className="max-w-[670px] mt-6 text-[rgba(255,255,255,0.63)] font-sans text-[14px] leading-[1.8] m-0">
            A growing record of Noonari family histories, places, public contributions and cultural life—built with attribution and evidence.
          </p>
        </div>
      </section>

      {/* SECTION 1: An honest starting point */}
      <section className="py-[100px] px-[clamp(24px,7vw,110px)] bg-[var(--cream)] max-sm:py-[75px]">
        <div className="max-w-[1250px] mx-auto grid grid-cols-[0.75fr_1.25fr] gap-[100px] max-md:grid-cols-1 max-md:gap-[30px]">
          
          <p className="text-[var(--red)] text-[10px] tracking-[0.16em] uppercase font-semibold m-0">
            An honest starting point
          </p>
          
          <div className="font-sans">
            <p className="text-[var(--ink)] font-serif font-normal text-[27px] leading-[1.45] mb-6 m-0">
              No single public source currently provides a complete, verified history of the Noonari community.
            </p>
            <p className="text-[#68727a] text-[14px] leading-[1.85] mb-8 m-0">
              Much of the historical record remains with families, elders and local communities. Oral history is valuable, but accounts may differ by region and lineage. APNA’s archive should record those differences instead of forcing them into one unsupported origin story.
            </p>
            
            <h3 className="font-serif font-normal text-[28px] text-[var(--ink)] mt-[44px] mb-3 m-0">
              What the archive will include
            </h3>
            <ul className="list-disc pl-5 mt-3 mb-6 space-y-2 text-[#68727a] text-[14px] leading-[1.85]">
              <li>Recorded oral histories with the narrator’s name, place and date.</li>
              <li>Family documents, letters and photographs shared with permission.</li>
              <li>References in public records, books, newspapers and institutional archives.</li>
              <li>Biographies of community members supported by verifiable sources.</li>
              <li>Regional traditions described by the families who practise them.</li>
            </ul>

            <h3 className="font-serif font-normal text-[28px] text-[var(--ink)] mt-[44px] mb-3 m-0">
              Editorial standard
            </h3>
            <p className="text-[#68727a] text-[14px] leading-[1.85] m-0">
              Every published historical claim should identify its source. Oral tradition will be labelled as oral tradition; documented facts will link to records where possible; disputed claims will be presented as such.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: Living culture */}
      <section className="py-[100px] px-[clamp(24px,7vw,110px)] bg-[var(--paper)] max-sm:py-[75px]">
        <div className="max-w-[1250px] mx-auto grid grid-cols-[0.75fr_1.25fr] gap-[100px] max-md:grid-cols-1 max-md:gap-[30px]">
          
          <p className="text-[var(--red)] text-[10px] tracking-[0.16em] uppercase font-semibold m-0">
            Living culture
          </p>
          
          <div className="font-sans">
            <h2 className="m-0 font-serif font-normal text-[clamp(44px,5vw,70px)] leading-[0.92] tracking-[-0.035em] text-[var(--ink)] mb-6">
              Part of the wider cultural landscape of <em className="text-[var(--copper)] font-normal not-italic">Sindh.</em>
            </h2>
            <p className="text-[#68727a] text-[14px] leading-[1.85] mb-8 m-0">
              Noonari families share in Sindh’s multilingual and artistic life: Sindhi and Urdu language, hospitality, poetry, regional music, ajrak, Sindhi topi and family gatherings. Practices vary by district and household, and should not be treated as uniform.
            </p>
            
            <h3 className="font-serif font-normal text-[28px] text-[var(--ink)] mt-[44px] mb-3 m-0">
              Contribute responsibly
            </h3>
            <p className="text-[#68727a] text-[14px] leading-[1.85] mb-8 m-0">
              If you hold a document, photograph, family tree or recorded account, APNA can catalogue it with ownership, context and contributor details.
            </p>
            
            <Link 
              className="min-h-[52px] px-[23px] inline-flex justify-center items-center gap-[18px] text-[12px] font-bold text-white bg-[var(--red)] transition duration-200 ease-in-out hover:-translate-y-0.5" 
              href="/contact"
            >
              Contact the archive team 
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}