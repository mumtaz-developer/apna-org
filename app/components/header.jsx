"use client";

import Link from "next/link";
import Image from "next/image"; // Image component import kiya
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow } from "./icons"; // Mark ko yahan se hata diya kyunki ab image use ho rahi hai

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Pure JavaScript syntax (No TypeScript errors)
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  const linkStyles = "relative after:absolute after:left-0 after:bottom-[-8px] after:h-[1px] after:bg-[#cf9062] after:transition-all after:duration-200";

  return (
    <header className="absolute inset-x-0 top-0 auto z-20 flex h-[82px] items-center justify-between border-b border-white/18 px-[clamp(22px,5vw,76px)] text-white max-md:h-[72px]">
      
      {/* Brand / Logo */}
      <Link className="flex items-center gap-3" href="/" onClick={() => setOpen(false)}>
        {/* Naya Rounded Logo Custom CSS Styling Ke Sath */}
        <div className="relative w-[54px] h-[54px] flex-shrink-0 rounded-full overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.24),0_5px_18px_rgba(0,0,0,0.2)] max-[580px]:w-[46px] max-[580px]:h-[46px]">
          <Image 
            src="/logo1.png" 
            alt="APNA Logo" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <span className="grid gap-1 leading-none">
          <strong className="font-serif text-[24px] font-normal tracking-[0.08em]">
            APNA
          </strong>
          <small className="text-[7px] tracking-[0.18em] uppercase opacity-70 max-[580px]:hidden">
            All Pakistan Noonari Association
          </small>
        </span>
      </Link>

      {/* Navigation Menu */}
      <nav
        className={`${
          open ? "max-md:flex" : "max-md:hidden"
        } flex items-center gap-[clamp(19px,2.7vw,40px)] text-[12px] font-semibold max-md:fixed max-md:inset-0 max-md:z-[3] max-md:flex-col max-md:justify-center max-md:bg-[#102238] max-md:text-[20px]`}
        aria-label="Main navigation"
      >
        
        <Link 
          href="/about" 
          onClick={() => setOpen(false)}
          className={`${linkStyles} ${isActive("/about") ? "after:right-0" : "after:right-full hover:after:right-0"}`}
        >
          About
        </Link>

        <Link 
          href="/history" 
          onClick={() => setOpen(false)}
          className={`${linkStyles} ${isActive("/history") ? "after:right-0" : "after:right-full hover:after:right-0"}`}
        >
          History
        </Link>

        <Link 
          href="/provinces" 
          onClick={() => setOpen(false)}
          className={`${linkStyles} ${isActive("/provinces") ? "after:right-0" : "after:right-full hover:after:right-0"}`}
        >
          Provinces
        </Link>

        <Link 
          href="/gallery" 
          onClick={() => setOpen(false)}
          className={`${linkStyles} ${isActive("/gallery") ? "after:right-0" : "after:right-full hover:after:right-0"}`}
        >
          Gallery
        </Link>

        <Link 
          href="/membership" 
          onClick={() => setOpen(false)}
          className={`${linkStyles} ${isActive("/membership") ? "after:right-0" : "after:right-full hover:after:right-0"}`}
        >
          Membership
        </Link>
        
        {/* Call to Action Button */}
        <Link
          className="flex items-center gap-[9px] border border-white/65 px-4 py-3"
          href="/membership"
          onClick={() => setOpen(false)}
        >
          Join APNA <Arrow diagonal />
        </Link>
        
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="hidden p-[7px] max-md:block max-md:z-[3] bg-transparent border-0 cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span className="block w-6 h-[1px] my-[5px] bg-white" />
        <span className="block w-6 h-[1px] my-[5px] bg-white" />
        <span className="block w-6 h-[1px] my-[5px] bg-white" />
      </button>
      
    </header>
  );
}