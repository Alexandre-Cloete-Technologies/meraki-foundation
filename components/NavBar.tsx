"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm bg-white border-b border-black/5 transition-colors duration-300 bg-[url('/dark-pattern.svg')] bg-repeat">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between max-w-7xl relative z-10">
        <div className="flex gap-8 items-center flex-1 justify-end">
          <Link href="/" className={`font-sans text-[14px] font-semibold tracking-wide ${pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'}`}>HOME</Link>
          <Link href="/about" className={`font-sans text-[14px] font-semibold tracking-wide ${pathname === '/about' ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'}`}>ABOUT</Link>
          <Link href="/programme" className={`font-sans text-[14px] font-semibold tracking-wide ${pathname === '/programme' ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'}`}>PROGRAMME</Link>
        </div>
        
        <Link href="/" className="flex items-center justify-center flex-shrink-0">
            <Image src="/Meraki-logo-nobg.png" alt="Meraki Foundation Logo" width={128} height={128} className="h-28 w-auto object-contain" />
        </Link>
        
        <div className="flex gap-8 items-center flex-1 justify-start">
          <Link href="/partners" className={`font-sans text-[14px] font-semibold tracking-wide ${pathname === '/partners' ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'}`}>PARTNERS</Link>
          <Link href="/contact" className={`font-sans text-[14px] font-semibold tracking-wide ${pathname === '/contact' ? 'text-primary' : 'text-foreground/80 hover:text-primary transition-colors'}`}>CONTACT</Link>
          <Button asChild className="rounded-full bg-accent text-accent-foreground ml-4 hover:bg-accent/90 transition-all font-sans font-bold px-8 py-6 shadow-sm hover:shadow-md">
             <Link href="/contact?intent=partner">GET INVOLVED</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
