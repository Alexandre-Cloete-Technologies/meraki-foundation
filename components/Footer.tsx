import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-white text-foreground relative isolate">
      <div 
    className="absolute inset-0 z-[-1] opacity-80 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
      <div className="container mx-auto px-6 py-16 max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="justify-start align-start col-span-1 md:col-span-2">
             <Image src="/Meraki-logo-nobg.png" alt="Meraki Foundation" width={500} height={500} className="h-64 w-auto object-cover scale-150" />
             <p className="font-sans text-foreground/80 leading-relaxed max-w-md">
               Meraki Wellness Empowering Foundation is a Namibian women empowerment organisation dedicated to equipping women with practical wellness skills, entrepreneurship knowledge, and employment opportunities.
             </p>
             <Button asChild className="rounded-full bg-accent mt-4 text-accent-foreground hover:bg-accent/90 transition-all font-sans font-bold px-8 py-6 shadow-sm hover:shadow-md">
             <Link href="/contact?intent=partner">GET INVOLVED</Link>
          </Button>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans font-bold text-xl">Quick Links</h3>
            <div className="flex flex-col space-y-3 font-sans text-foreground/80">
              <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
              <Link href="/about" className="hover:text-accent transition-colors">ABOUT</Link>
              <Link href="/programme" className="hover:text-accent transition-colors">PROGRAMME</Link>
              <Link href="/partners" className="hover:text-accent transition-colors">PARTNERS</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans font-bold text-xl">Contact Us</h3>
            <div className="flex flex-col space-y-4 font-sans text-foreground/80">
               <div className="flex items-start gap-3">
                 <Mail className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                 <Link href="mailto:merakiwellnessc@gmail.com" className="hover:text-accent transition-colors">merakiwellnessc@gmail.com</Link>
               </div>
               <div className="flex items-start gap-3">
                 <Mail className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                 <Link href="mailto:merakiwellnessc@gmail.com" className="hover:text-accent transition-colors">P O BOX 997151 <br/> Maerua Mall <br/> Windhoek, Namibia</Link>
               </div>
                 <div className="flex items-start gap-2">
                   <Phone className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                   <Link href="tel:+264812478077" className="hover:text-accent transition-colors">+264 81 247 8077</Link><span>/</span><Link href="tel:+264813126358" className="hover:text-accent transition-colors">+264 81 312 6358</Link>
                 </div>

               {/* Location 1 */}
               <div className="pt-2">
                 <p className="font-sans font-semibold text-foreground/90 text-sm uppercase tracking-wide mb-2">The Village Complex</p>
                 <div className="flex items-start gap-3 mb-2">
                   <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                   <Link href="https://maps.app.goo.gl/FvHb9obM8JucbFZQ9" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Liliencron Street<br/>The Village Complex<br/>Eros, Windhoek</Link>
                 </div>
               </div>

               {/* Location 2 */}
               <div className="pt-2">
                 <p className="font-sans font-semibold text-foreground/90 text-sm uppercase tracking-wide mb-2">Olof Palme Street</p>
                 <div className="flex items-start gap-3 mb-2">
                   <MapPin className="w-5 h-5 mt-0.5 text-accent shrink-0" />
                   <Link href="https://maps.app.goo.gl/SDp4sgGxc4RCFP6T7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Erf 150<br/>Olof Palme Street<br/>Eros, Windhoek</Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className=" py-6">
         <div className="container mx-auto px-6 max-w-7xl text-center text-sm font-sans text-foreground/60">
            © 2026 MERAKI WELLNESS EMPOWERING FOUNDATION | Designed & developed by <Link href="https://alexandrecloete.com" target="_blank" className="text-accent underline font-bold underline-offset-2">Alexandre Cloete Technologies</Link>
         </div>
      </div>
    </footer>
  );
}
