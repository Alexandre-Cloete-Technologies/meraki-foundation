"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import hero from "@/public/hero.jpg";
import empowerment from "@/public/bridging-the-empowerment-divide.jpeg";
import cta from "@/public/cta.jpeg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[95vh] mt-16 min-h-[600px] flex items-end justify-start bg-secondary  isolate">
           <Image src={hero} alt="Hero background" width={1920} height={962} className=" object-cover object-[50%_40%] brightness-75 md:brightness-100 absolute inset-0 z-0 w-full h-full mx-auto my-auto" priority quality={100}/>
           <div 
    className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[url('/light-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent z-10" />
           <div className="container mx-auto px-6 py-16 relative z-20 max-w-7xl">
              <div className="max-w-7xl space-y-8">
                 <div className="relative pl-5 pb-5">
                    {/* Left Border Line */}
                    <motion.div 
                        className="absolute left-0 top-0 h-full w-px bg-accent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                    {/* Bottom Border Line */}
                    <motion.div 
                        className="absolute left-0 bottom-0 h-px w-full bg-accent origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.7 }}
                    />
                    <motion.h1 
                        className="font-heading text-4xl md:text-6xl text-white leading-tight"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                    >
                        Empowering<br />Women Through<br />Wellness, Skills & Employment
                    </motion.h1>
                 </div>
                 <motion.p 
                    className="font-heading text-xl md:text-2xl text-white/80 max-w-6xl text-pretty leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                 >
                    Empowering women through practical wellness skills, entrepreneurship knowledge, and employment opportunities.
                 </motion.p>
                 <motion.div 
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                 >
                    <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg font-bold">
                       <Link href="/programme">Apply for Training</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-6 text-lg font-bold">
                       <Link href="/contact">Contact Us</Link>
                    </Button>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Stats Ribbon */}
        <section className="bg-secondary py-16 relative isolate">
        <div 
    className="absolute inset-0 z-[-1] opacity-20 bg-repeat bg-[url('/light-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto  max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-white/10">
                 <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="border-b-2 border-accent pb-4 mb-4">
                       <span className="font-heading text-5xl md:text-6xl font-bold text-white">5 Years+</span>
                    </div>
                    <span className="font-sans text-sm font-bold tracking-wider text-white/70 uppercase">Operational Experience</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="border-b-2 border-accent pb-4 mb-4">
                       <span className="font-heading text-5xl md:text-6xl font-bold text-white">2</span>
                    </div>
                    <span className="font-sans text-sm font-bold tracking-wider text-white/70 uppercase">Training Branches</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="border-b-2 border-accent pb-4 mb-4">
                       <span className="font-heading text-5xl md:text-6xl font-bold text-white">20</span>
                    </div>
                    <span className="font-sans text-sm font-bold tracking-wider text-white/70 uppercase">Annual Trainees Target</span>
                 </div>
                 <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="border-b-2 border-accent pb-4 mb-4">
                       <span className="font-heading text-5xl md:text-6xl font-bold text-white">100%</span>
                    </div>
                    <span className="font-sans text-sm font-bold tracking-wider text-white/70 uppercase">Dignity Driven</span>
                 </div>
              </div>
           </div>
        </section>

        {/* Bridging the Empowerment Divide */}
        <section className="relative py-32 bg-secondary flex items-center justify-center min-h-[600px]">
           <Image src={empowerment} alt="Empowerment" fill quality={100} className="object-cover brightness-50 object-[50%_33%] absolute" />
           <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-muted/30" />
           <div className="container mx-auto px-6 relative z-10 max-w-7xl flex justify-center">
              <div className="border-t border-r border-accent p-12 md:p-16 max-w-5xl text-center rounded-tr-xl">
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#ECE2DF] mb-8">Bridging the Empowerment Divide</h2>
                 <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed font-light">
                    Our comprehensive approach combines vocational excellence with mindset transformation. We believe that true sustainability starts with a foundation of dignity and self-worth, extending far beyond technical skill acquisition.
                 </p>
              </div>
           </div>
        </section>

        {/* Programme Overview */}
        <section className="bg-muted py-24 relative isolate">
         {/* The Background Layer */}
  <div 
    className="absolute inset-0 z-[-1] opacity-40 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Women in Wellness Skills Development Programme</h2>
                 <p className="font-sans text-lg md:text-xl text-foreground/70 leading-relaxed">
                    This programme provides structured, hands-on training in:
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { title: "Spa & Wellness Treatments", img: "/spa-and-wellness-treatments.jpeg" },
                   { title: "Nail Technology", img: "/nail-technology.jpeg" },
                   { title: "Mental Health", img: "/mental-health.jpg" },
                   { title: "Business & Entrepreneurship", img: "/basic-business-and-entrepreneurship.jpeg" },
                   { title: "Solution Sales", img: "/solution-sales.jpg" },
                   { title: "Skincare & Facial Treatments", img: "/skincare-and-facial-treatments.jpg" },
                   { title: "Customer Service Excellence", img: "/customer-service-excellence.jpg" }
                 ].map((prog, i) => (
                  <div className="relative" key={i} >
                    <Link href="/programme" className="group relative h-[300px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 block">
                       <Image src={prog.img} alt={prog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0" />
                    </Link>
                       <div className=" py-4  flex flex-col items-center justify-center">
                          <h3 className="font-sans text-2xl font-light text-foreground leading-tight">{prog.title}</h3>
                       </div>
                       </div>
                 ))}
                 
                 <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2">
                    <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-8 text-lg font-bold shadow-lg">
                       <Link href="/programme">View Curriculum and Benefits</Link>
                    </Button>
                 </div>
              </div>
           </div>
        </section>

        {/* Partners Preview */}
        <section className="bg-muted py-24 relative isolate">
         {/* The Background Layer */}
  <div 
    className="absolute inset-0 z-[-1] opacity-40 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Wellness Empowering Partners</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center opacity-80 mb-16 px-8">
                 <div className="p-8 flex items-center justify-center min-h-48 w-full transition-shadow relative overflow-hidden">
                    <Image src="/dandelion-partner.png" alt="Dandelion Partner" fill className="object-contain p-8" />
                 </div>
                 <div className="p-8 flex items-center justify-center min-h-48 w-full transition-shadow relative overflow-hidden">
                    <Image src="/doppler-audio-partner.png" alt="Doppler Audio Partner" fill className="object-contain scale-150" />
                 </div>
                 <div className="p-8 flex items-center justify-center min-h-48 w-full transition-shadow relative overflow-hidden">
                    <Image src="/Meraki-logo-nobg.png" alt="Doppler Audio Partner" fill className="object-contain scale-150" />
                 </div>
              </div>

              <div className="flex justify-center">
                 <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-8 text-lg font-bold shadow-lg">
                    <Link href="/partners">View Partnership Opportunities</Link>
                 </Button>
              </div>
           </div>
        </section>

        {/* Quote CTA Section */}
        <section className="relative py-32 flex items-center justify-center min-h-[500px] bg-muted">
           <Image src={cta} alt="Quote Background" fill className="object-cover brightness-50 contrast-75 absolute inset-0" />
           <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col items-center justify-center">
              <div className="border-t border-r border-accent p-12 max-w-7xl text-center rounded-tr-xl mb-12">
                 <h2 className="font-heading text-4xl md:text-5xl text-white leading-relaxed">
                    &quot;When a woman is economically empowered, families and communities thrive&quot;
                 </h2>
              </div>
              <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-8 text-lg font-bold shadow-lg">
                 <Link href="/programme">Apply for Training</Link>
              </Button>
           </div>
        </section>

      </main>
      
      
    </div>
  );
}
