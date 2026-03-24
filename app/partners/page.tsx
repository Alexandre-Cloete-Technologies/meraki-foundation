import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import partnersBg from "@/public/partners-background.jpeg";
import cta from "@/public/cta.jpeg";

export default function Partners() {
  const achievements = [
    {
      title: "Measurable Social Impact",
      description: "Each cohort produces certified, work-ready women with practical wellness and business skills. You'll see real numbers, not vague progress updates."
    },
    {
      title: "Transparent Governance",
      description: "The Foundation is overseen by a four-member Board of Directors with quarterly meetings, board-approved budgets, a dedicated bank account, and conflict-of-interest policies in place."
    },
    {
      title: "Proven Training Capacity",
      description: "Built on the operational backbone of the Meraki Wellness Center, which has trained and mentored staff across two active branches in Windhoek for five years."
    },
    {
      title: "Aligned with National Priorities",
      description: "Your investment directly addresses youth unemployment, women's empowerment, and skills development — key pillars of Namibia's development agenda."
    }
  ];

  const partners = [
    {
      name: "Meraki Wellness Center",
      role: "Strategic Training Partner",
      description: "The operational heart of our training programme. Founded and managed by Executive Director Hendrina Nghifitikeko, Meraki Wellness Center operates two active branches in Windhoek and provides the professional facilities, equipment, and experienced trainers that make hands-on learning possible. Five years of business operations and an in-house training track record form the foundation our Foundation stands on.",
      image: "/Meraki-logo-nobg.png",
      reverse: false
    },
    {
      name: "Dandelion Mental Health Care Practice",
      role: "Wellness & Psychological Support Partner",
      description: "We believe that lasting empowerment begins with mental health. Through our partnership with Dandelion Mental Health Care Practice, our trainees receive dedicated psychological support sessions facilitated by Parista Heita — a qualified psychologist and Meraki Foundation board member. These sessions equip women with the resilience, emotional tools, and mental wellbeing needed to succeed professionally and personally.",
      image: "/dandelion-partner.png",
      reverse: true
    },
    {
      name: "Doppler Audio CC",
      role: "Community & Events Partner",
      description: "Doppler Audio CC is a professional sound and audio services company co-owned by Hendrina Nghifitikeko and her husband. Doppler Audio CC actively supports the Foundation's community presence by sponsoring and providing sound services for fundraising events and outreach activities, ensuring every Foundation event is delivered with professionalism and reach.",
      image: "/doppler-audio-partner.png",
      reverse: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-end justify-center bg-secondary pb-0">
           <Image src={partnersBg} alt="Partners background" fill sizes="100vw" className="object-cover absolute inset-0 z-0" priority quality={100} />
           <div className="absolute inset-0 bg-secondary/60 z-10" />
           <div className="container mx-auto px-6 relative z-20 max-w-7xl flex items-end justify-center h-full pb-0">
             <div className="w-full max-w-4xl bg-[#572912]/70 backdrop-blur-sm border-t-1 border-r-1 border-accent rounded-tr-xl py-16 px-8 flex justify-center items-center h-2/3">
                 <h1 className="font-accent text-6xl md:text-7xl text-white text-center">Partners</h1>
             </div>
           </div>
        </section>

        {/* Intro Section */}
        <section className="bg-background relative isolate pb-24">
          <div 
    className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-7xl flex justify-center">
              <div className="max-w-4xl bg-white p-8 md:p-12 border-r-1 border-accent text-center shadow-sm flex flex-col items-center gap-8">
                 <p className="font-sans text-lg text-foreground font-medium leading-relaxed tracking-wide">
                    Join us in equipping the next generation of Namibian wellness professionals and entrepreneurs. Your partnership directly funds skills, dignity, and livelihoods.
                 </p>
                 <p className="font-sans text-lg text-foreground font-medium leading-relaxed tracking-wide">
                    Every woman we train is a direct result of someone choosing to invest in possibility. Meraki Wellness Empowering Foundation is built on the belief that sustainable change happens when communities, businesses, and organisations work together. If you share our commitment to women&apos;s economic independence, we&apos;d be honoured to build something meaningful with you.
                 </p>
                 <Button asChild size="lg" className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-base font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <Link href="/contact">Contact Our Partnership Team</Link>
                 </Button>
              </div>
           </div>
        </section>

        {/* What Your Partnership Achieves */}
        <section className="bg-background py-24 relative isolate">
          <div 
    className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col gap-8 mb-16">
                 <div className="p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl w-fit">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">What Your Partnership Achieves</h2>
                 </div>
                 <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
                    Partnering with Meraki goes beyond a line item in a CSI report. It puts skills into the hands of women who need them most and creates measurable, traceable outcomes you can report with confidence.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                 {achievements.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 p-8 rounded-tr-3xl rounded-bl-3xl border-t border-r border-accent/20  hover:border-accent/50 transition-all relative overflow-hidden group">
                       <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                       <h3 className="font-sans text-2xl font-bold text-foreground z-10">{item.title}</h3>
                       <p className="font-sans text-lg text-foreground/70 leading-relaxed z-10">{item.description}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Trusted Partnerships */}
        <section className="bg-background py-24">
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col items-center text-center gap-8 mb-20">
                 <div className="p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl inline-block">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">Built on a Foundation of Trusted Partnerships</h2>
                 </div>
                 <p className="font-sans text-xl text-foreground/80 leading-relaxed max-w-4xl">
                    We don&apos;t operate in isolation. Meraki Foundation is embedded in an active ecosystem of businesses and professionals who provide real infrastructure, expertise, and community support.
                 </p>
              </div>

              <div className="flex flex-col gap-24">
                 {partners.map((partner, index) => (
                    <div key={index} className={`flex flex-col ${partner.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                       <div className="w-full lg:w-1/2 flex flex-col gap-6">
                          <h3 className="font-sans text-3xl font-light text-foreground">
                             <span className="font-bold">{partner.name}</span> <br/>
                             <span className="block text-primary text-xl font-medium mt-2">({partner.role})</span>
                          </h3>
                          <div className="w-16 h-1 bg-accent/50 rounded-full"></div>
                          <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                             {partner.description}
                          </p>
                       </div>
                       
                       <div className="w-full lg:w-1/2 flex justify-center">
                          <div className={`relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden ${partner.reverse ? 'rounded-tl-[60px]' : 'rounded-tr-[60px]'}  transition-transform duration-500 hover:scale-[1.02]`}>
                             <Image src={partner.image} alt={partner.name} fill className="object-contain" />
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/*  CTA Section */}
                <section className="relative py-32 flex items-center justify-center min-h-[500px] bg-muted">
                   <Image src={cta} alt="Quote Background" fill className="object-cover brightness-50 contrast-75 absolute inset-0" />
                   <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col items-center justify-center">
                      <div className="border-t border-r border-accent p-12 max-w-7xl text-center rounded-tr-xl mb-12">
                         <h2 className="font-heading text-4xl md:text-5xl text-white leading-relaxed">
                            Let&apos;s build something that lasts.
                         </h2>
                      </div>
                      <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-8 text-lg font-bold shadow-lg">
                         <Link href="/contact">Contact Our Partnership Team</Link>
                      </Button>
                   </div>
                </section>

      </main>
      
    </div>
  );
}
