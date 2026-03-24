import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import cta from "@/public/cta.jpeg";

export default function Programme() {
  const modules = [
    {
      title: "Spa & Wellness Treatments",
      description: "The operational heart of our training programme. Founded and managed by Executive Director Hendrina Nghifitikeko, Meraki Wellness Center operates two active branches in Windhoek and provides the professional facilities, equipment, and experienced trainers that make hands-on learning possible. Five years of business operations and an in-house training track record form the foundation our Foundation stands on.",
      image: "/spa-and-wellness-treatments.jpeg",
      reverse: false
    },
    {
      title: "Nail Technology",
      description: "From manicures and pedicures to nail art and gel applications, this module covers the full nail care service offering. You'll practise on real clients in a professional setting, building both your speed and your precision to the standard the market expects.",
      image: "/nail-technology.jpeg",
      reverse: true
    },
    {
      title: "Basic Business & Entrepreneurship",
      description: "From writing a simple business plan to understanding pricing, costs, and basic financial management, this module equips you to think like an owner. Whether you want to launch a mobile salon, a home-based practice, or a full studio, this is the foundation to start.",
      image: "/basic-business-and-entrepreneurship.jpeg",
      reverse: false
    },
    {
      title: "Solution Sales",
      description: "Sales isn't about pressure; it's about matching what you offer to what your client needs. This module teaches you how to communicate value, upsell treatments professionally, and build the kind of trust that turns a first-time visitor into a regular.",
      image: "/solution-sales.jpg",
      reverse: true
    },
    {
      title: "Skin Care & Facial Treatments",
      description: "This module covers professional facial treatments, skin analysis, product knowledge, and treatment protocols for a range of skin types. You'll understand not just the techniques, but why they work so you can advise clients with confidence.",
      image: "/skincare-and-facial-treatments.jpg",
      reverse: false
    },
    {
      title: "Customer Service Excellence",
      description: "Learn how to handle client consultations, manage bookings, resolve complaints professionally, and create an experience that builds loyalty. In the wellness industry, reputation is everything, this module teaches you how to build one.",
      image: "/customer-service-excellence.jpg",
      reverse: true
    },
    {
      title: "Mental Health & Resilience",
      description: "Facilitated by Parista Heita - a qualified psychologist and Meraki Foundation board member affiliated with Dandelion Mental Health Care Practice, these sessions equip you with the tools to manage stress, build emotional resilience, and maintain your mental wellbeing as you step into professional life.",
      image: "/mental-health.jpg",
      reverse: false
    }
  ];

  const impactSteps = [
    {
      number: 1,
      title: "Input",
      description: "Practical, hands-on training and one-on-one mentorship across all seven modules."
    },
    {
      number: 2,
      title: "Output",
      description: "Certified, confident professionals equipped with technical and business skills."
    },
    {
      number: 3,
      title: "Outcome",
      description: "Formal employment in the wellness industry or the launch of an independent enterprise."
    },
    {
      number: 4,
      title: "Impact",
      description: "Long-term economic security for graduates, their families, and their communities."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
     
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-end justify-center bg-secondary pb-0">
           <Image src="/programme-background.jpeg" alt="Programme background" fill className="object-cover absolute inset-0 z-0" priority />
           <div className="absolute inset-0 bg-secondary/60 z-10" />
           <div className="container mx-auto px-6 relative z-20 max-w-7xl flex items-end justify-center h-full pb-0">
             <div className="w-full max-w-4xl bg-[#572912]/50 backdrop-blur-sm border-t-1 border-r-1 border-accent rounded-tr-xl py-16 px-8 flex justify-center items-center h-2/3">
                 <h1 className="font-accent text-6xl md:text-7xl text-white text-center">Programme</h1>
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
                    Our Women in Wellness Skills Development Programme is built around one goal: giving you the practical skills, professional confidence, and business knowledge to build a real income. Every module is hands-on, every lesson is purposeful, and every graduate leaves with a certification and a clear path forward.
                 </p>
                 <Button asChild size="lg" className="rounded-full px-8 py-6 bg-accent hover:bg-accent/90 text-base font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                    <Link href="/contact">Apply for Training</Link>
                 </Button>
              </div>
           </div>
        </section>

        {/* What You Will Learn Section */}
        <section className="bg-background relative isolate">
          <div 
    className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col gap-8 mb-16">
                 <div className=" p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl w-fit xl:-ml-8">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">What You Will Learn</h2>
                 </div>
                 <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
                    Seven focused modules covering everything from professional treatments to entrepreneurship - a complete professional needs more than just one skill.
                 </p>
              </div>

              {/* Modules List */}
              <div className="flex flex-col gap-24 py-16">
                 {modules.map((module, index) => (
                    <div key={index} className={`flex flex-col ${module.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12  rounded-tl-2xl rounded-br-2xl p-8 lg:p-12 transition-shadow relative overflow-hidden group`}>
                       {/* Decorative accent element based on direction */}
                       <div className={`absolute top-0 ${module.reverse ? 'left-0 border-l border-t rounded-tl-2xl' : 'right-0 border-r border-t rounded-tr-2xl'} border-accent w-full h-full pointer-events-none opacity-50`}></div>
                       
                       <div className="w-full lg:w-1/2 flex justify-center">
                          <div className={`relative w-full max-w-[450px] aspect-[4/5] rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-500 transform ${module.reverse ? 'group-hover:-rotate-1' : 'group-hover:rotate-1'}`}>
                             {/* Gradient Overlay for style */}
                             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/10 z-10 mix-blend-multiply"></div>
                             
                             {/* Placeholder for images. In real usage, Next Image needs width and height or fill. */}
                             <Image src={module.image} alt="Programme background" fill className="object-cover absolute inset-0 z-0" priority />

                          </div>
                       </div>
                       
                       <div className="w-full lg:w-1/2 flex flex-col gap-6">
                          <h3 className="font-sans text-3xl md:text-4xl font-light text-foreground leading-tight">
                             {module.title}
                          </h3>
                          <div className="w-1/5 h-[2px] bg-accent/50 rounded-full"></div>
                          <p className="font-sans text-lg text-foreground/70 leading-relaxed">
                             {module.description}
                          </p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* The Impact Model */}
        <section className="bg-white relative isolate py-24 border-y border-border/30">
        <div 
    className="absolute inset-0 z-[-1] opacity-80 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col items-center text-center gap-6 mb-20">
                 <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">The Impact Model</h2>
                 <p className="font-heading text-xl text-foreground/70 max-w-2xl italic">
                    A structured journey from introduction to sustained independence.
                 </p>
              </div>

              <div className="relative">
                 {/* Connecting Line (hidden on small screens) */}
                 <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-accent/30 -z-10"></div>

                 <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                    {impactSteps.map((step, idx) => (
                       <div key={idx} className="flex flex-col items-center text-center gap-6">
                          <div className="w-20 h-20 rounded-full bg-white shadow-md border-2 border-accent flex items-center justify-center text-accent">
                             <span className="font-heading text-3xl font-bold">{step.number}</span>
                          </div>
                          <h3 className="font-heading text-2xl font-bold text-foreground">
                             {step.title}
                          </h3>
                          <p className="font-heading text-base leading-relaxed text-foreground/70 max-w-[240px]">
                             {step.description}
                          </p>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/*  CTA Section */}
                <section className="relative py-32 flex items-center justify-center min-h-[500px] bg-muted">
                   <Image src={cta} alt="Quote Background" fill className="object-cover brightness-50 contrast-75 absolute inset-0" />
                   <div className="container mx-auto px-6 relative z-10 max-w-7xl flex flex-col items-center justify-center">
                      <div className="border-t border-r border-accent p-12 max-w-7xl text-center rounded-tr-xl mb-12">
                         <h2 className="font-heading text-4xl md:text-5xl text-white leading-relaxed">
                            Ready to start your journey?
                         </h2>
                      </div>
                      <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-8 text-lg font-bold shadow-lg">
                         <Link href="/contact">Apply for Training</Link>
                      </Button>
                   </div>
                </section>

      </main>
      
      
    </div>
  );
}
