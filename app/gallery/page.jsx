import Image from "next/image";

const galleryImages = [
  { src: "/mumtaz.png", alt: "Audience Member 6" },
  { src: "/withBaba.jpg", alt: "Event Gathering 1" },
  { src: "/apnasindhWithMalik.jpg", alt: "Meeting View 2" },
  { src: "/section1img.png", alt: "Stage Gathering 3" },
  { src: "/section1img.png", alt: "Award Ceremony 4" },
  { src: "/section1img.png", alt: "Group Photo 5" },
  
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0b1624] text-white">
      <section className="relative overflow-hidden bg-[#102238]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(201,139,93,.22),transparent_35%)]" />

        {/* Yahan max-w-none aur px-4 kar diya hai taake left/right space kam ho aur images bari hon */}
        <div className="relative z-[2] max-w-none mx-auto px-4 sm:px-8 py-[65px] sm:py-[85px]">
          <h1 className="font-serif text-4xl sm:text-5xl text-center mb-12">
            Gallery
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] overflow-hidden  group cursor-pointer bg-black/40 border border-white/10"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}