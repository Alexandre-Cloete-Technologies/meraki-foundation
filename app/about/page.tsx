import Image from "next/image";
import { NavBar } from "@/components/NavBar";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-end justify-center bg-secondary pb-0 isolate">
        
           <Image src="/hero.jpg" alt="About Us background" fill className="object-cover object-[50%_33%] absolute inset-0 z-0" priority />
           <div className="absolute inset-0 bg-secondary/60 z-10" />
           <div className="container mx-auto px-6 relative z-20 max-w-7xl flex items-end justify-center h-full pb-0">
             <div className="w-full max-w-4xl bg-[#572912]/50 backdrop-blur-sm border-t-1 border-r-1 border-accent rounded-tr-xl py-16 px-8 flex justify-center items-center h-2/3">
                 <h1 className="font-accent text-6xl md:text-7xl text-white text-center">About Us</h1>
             </div>
           </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white relative isolate">
          <div 
    className="absolute inset-0 z-[-1] opacity-80 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-7xl flex justify-center">
              <div className="max-w-4xl bg-white p-8 md:p-12  border-r-1 border-accent text-center shadow-sm">
                 <p className="font-sans text-lg text-foreground mb-6 font-medium leading-relaxed tracking-wide">
                    Meraki Wellness Empowering Foundation is a Namibian women empowerment organisation dedicated to equipping women with practical wellness skills, entrepreneurship knowledge, and employment opportunities.
                 </p>
                 <p className="font-sans text-lg text-foreground mb-6 font-medium leading-relaxed tracking-wide">
                    Founded by a wellness entrepreneur and spa owner, the Foundation was established to address unemployment among women by providing accredited-style training, mentorship, and access to income-generating opportunities within the wellness industry.
                 </p>
                 <p className="font-sans text-lg text-foreground font-bold leading-relaxed tracking-wide text-primary">
                    We believe that when a woman is economically empowered, families and communities thrive.
                 </p>
              </div>
           </div>
        </section>

        {/* Purpose, Future, Impact Sections */}
        <section className="bg-white py-24 relative isolate">
          <div 
    className="absolute inset-0 z-[-1] opacity-80 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-6xl space-y-32">
              
              {/* Purpose */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                 <div className="md:w-1/3 p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl flex justify-center items-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide">PURPOSE</h2>
                 </div>
                 <div className="md:w-2/3 space-y-6">
                    <h3 className="font-sans text-xl font-bold text-foreground leading-relaxed">Our mission and purpose at Meraki Wellness Empowering Foundation is to:</h3>
                    <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                       To train, mentor, and support unemployed and underprivileged women by providing practical wellness skills, business knowledge, and pathways to income and entrepreneurship.
                    </p>
                 </div>
              </div>

              {/* Future */}
              <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                 <div className="md:w-2/3 space-y-6 text-left md:text-right">
                    <h3 className="font-sans text-xl font-bold text-foreground leading-relaxed">Our vision and future for Meraki Wellness Empowering Foundation is to:</h3>
                    <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                       To become a leading women empowerment foundation in Namibia that transforms lives through wellness education, skills development, and sustainable employment creation.
                    </p>
                 </div>
                 <div className="md:w-1/3 p-8 border-t-2 border-l-2 border-accent rounded-tl-2xl flex justify-center items-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide">FUTURE</h2>
                 </div>
              </div>

              {/* Impact */}
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                 <div className="md:w-1/3 p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl flex justify-center items-center">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide">IMPACT</h2>
                 </div>
                 <div className="md:w-2/3 space-y-6">
                    <h3 className="font-sans text-xl font-bold text-foreground leading-relaxed">Our core objectives at Meraki Wellness Empowering Foundation are:</h3>
                    <ul className="list-disc pl-6 font-sans text-lg text-foreground/80 leading-relaxed space-y-3 marker:text-accent">
                       <li>Train 20 women annually in professional wellness and spa treatments</li>
                       <li>Equip women with entrepreneurship and customer service skills</li>
                       <li>Create employment and self-employment opportunities</li>
                       <li>Promote financial independence among women</li>
                       <li>Contribute to community upliftment and poverty reduction.</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* Team Section */}
        <section className="bg-white py-24 relative isolate">
          <div 
    className="absolute inset-0 z-[-1] opacity-80 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-7xl">
              <div className="flex flex-col lg:flex-row gap-12 items-start mb-24">
                 <div className="lg:w-2/5 p-8 border-t-2 border-r-2 border-accent rounded-tr-2xl">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-wide">THE MERAKI FOUNDATION TEAM</h2>
                 </div>
                 <div className="lg:w-3/5">
                    <p className="font-sans text-xl text-foreground/80 leading-relaxed mb-6">
                       The Meraki Wellness Empowering Foundation team is made up of passionate wellness professionals, mentors and community-driven leaders committed to empowering women through skills development and opportunity creation.
                    </p>
                    <p className="font-sans text-xl text-foreground/80 leading-relaxed">
                       Guided by experience within the wellness and entrepreneurship space, our team works collaboratively to provide practical training, mentorship and ongoing support that enables women to build sustainable careers and businesses. United by a shared vision of economic empowerment, the team is dedicated to creating an environment where women are inspired, supported, and equipped to transform their lives and uplift their communities.
                    </p>
                 </div>
              </div>

              <div className="space-y-20">
                 {/* Founder */}
                 <div className="max-w-sm mx-auto shadow-xl rounded-tl-[40px] border-t-2 border-l-2 border-accent overflow-hidden transition-all transform hover:-translate-y-2">
                    <div className="h-[350px] bg-muted relative">
                       {/* Placeholder for real team photo */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center text-muted-foreground/30 font-sans text-lg">Photo Missing</div>
                    </div>
                    <div className="bg-white p-8 text-center border-t border-border/50">
                       <h3 className="font-sans text-2xl font-bold text-foreground mb-2">Hendrina Nghifitikeko</h3>
                       <p className="font-sans text-lg text-primary font-medium">Founder & Executive Director</p>
                    </div>
                 </div>

                 {/* Board / Exec Team */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
                    {[
                      { name: "Reinhold Nghifitikeko", title: "Board Member" },
                      { name: "Parista Heita", title: "Board Member" },
                      { name: "Paul Gebhardt", title: "Board Member" }
                    ].map((member, i) => (
                      <div key={i} className="shadow-lg rounded-tl-[30px] border-t-2 border-l-2 border-accent overflow-hidden transition-all transform hover:-translate-y-1">
                         <div className="h-[300px] bg-muted relative">
                           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center text-muted-foreground/30 font-sans">Photo Missing</div>
                         </div>
                         <div className="bg-white p-6 text-center border-t border-border/50">
                            <h3 className="font-sans text-xl font-bold text-foreground mb-2">{member.name}</h3>
                            <p className="font-sans text-md text-foreground/70">{member.title}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 {/* Additional Team */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { name: "Idda Amakali", title: "Team Member" },
                      { name: "Sephania Amakali", title: "Team Member" },
                      { name: "Thabani Nyathi", title: "Team Member" },
                      { name: "Saima Amakali", title: "Team Member" }
                    ].map((member, i) => (
                      <div key={i} className="shadow-md rounded-tl-[20px] border-t border-l border-green-600/50 overflow-hidden transition-all hover:shadow-lg">
                         <div className="h-[240px] bg-muted relative">
                           <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent flex items-center justify-center text-muted-foreground/30 font-sans text-sm">Photo Missing</div>
                         </div>
                         <div className="bg-white p-5 text-center border-t border-border/50">
                            <h3 className="font-sans text-lg font-bold text-foreground mb-1">{member.name}</h3>
                            <p className="font-sans text-foreground/70 text-sm">{member.title}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>
      </main>
      
    </div>
  );
}
