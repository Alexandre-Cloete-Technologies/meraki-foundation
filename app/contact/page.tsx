"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    intent: "general",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", organisation: "", intent: "general", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-end justify-center bg-secondary pb-0">
           <Image src="/hero.jpg" alt="Contact background" fill className="object-cover absolute inset-0 z-0" priority />
           <div className="absolute inset-0 bg-secondary/60 z-10" />
           <div className="container mx-auto px-6 relative z-20 max-w-7xl flex items-end justify-center h-full pb-0">
             <div className="w-full max-w-4xl bg-[#572912]/50 backdrop-blur-sm border-t-1 border-r-1 border-accent rounded-tr-xl py-16 px-8 flex justify-center items-center h-2/3">
                 <h1 className="font-accent text-6xl md:text-7xl text-white text-center">Let&apos;s Connect.</h1>
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
              <div className="max-w-4xl bg-white p-8 md:p-12 border-r-1 border-accent text-center shadow-sm">
                 <p className="font-sans text-xl text-foreground font-medium leading-relaxed tracking-wide">
                    Whether you&apos;re ready to acquire new skills or want to fund a woman&apos;s future, we are here to talk.
                 </p>
              </div>
           </div>
        </section>

        <section className="bg-background relative isolate py-24">
         <div 
    className="absolute inset-0 z-[-1] opacity-30 bg-repeat bg-[url('/dark-pattern.svg')]" 
    aria-hidden="true"
  />
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col lg:flex-row gap-16">
                 
                 {/* Contact Information */}
                 <div className="w-full lg:w-1/3 flex flex-col gap-12">
                    <div>
                       <h2 className="font-heading text-4xl font-bold text-foreground mb-6">Direct Contact</h2>
                       <div className="w-16 h-1 bg-accent/50 rounded-full mb-8"></div>
                    </div>
                    
                    <div className="space-y-8">
                        {/* Location 1 */}
                        <div className="p-6 rounded-tr-2xl border-r-2 border-accent transition-shadow relative overflow-hidden group">
                           <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                           <h3 className="font-sans text-lg font-bold text-foreground mb-3 z-10 relative">The Village Complex</h3>
                           <p className="font-sans text-primary underline underline-offset-4 z-10 relative">
                              <Link href="https://maps.app.goo.gl/FvHb9obM8JucbFZQ9" target="_blank" rel="noopener noreferrer">Liliencron Street<br/>The Village Complex<br/>Eros, Windhoek</Link>
                           </p>
                           <p className="font-sans text-primary underline underline-offset-4 text-lg z-10 relative mt-3">
                              <Link href="tel:+264812478077">+264 81 247 8077</Link>
                           </p>
                        </div>
                       
                       <div className="p-6 rounded-tr-2xl  border-r-2 border-accent  transition-shadow relative overflow-hidden group">
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                          <h3 className="font-sans text-lg font-bold text-foreground mb-3 z-10 relative">Email</h3>
                          <p className="font-sans text-primary underline underline-offset-4 text-lg z-10 relative break-all">
                             <Link href="mailto:merakiwellnessc@gmail.com">merakiwellnessc@gmail.com</Link>
                          </p>
                       </div>
                                              {/* Location 2 */}
                        <div className="p-6 rounded-tr-2xl  border-r-2 border-accent  transition-shadow relative overflow-hidden group">
                           <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                           <h3 className="font-sans text-lg font-bold text-foreground mb-3 z-10 relative">Olof Palme Street</h3>
                           <p className="font-sans text-primary underline underline-offset-4 z-10 relative">
                              <Link href="https://maps.app.goo.gl/SDp4sgGxc4RCFP6T7" target="_blank" rel="noopener noreferrer">Erf 150<br/>Olof Palme Street<br/>Eros, Windhoek</Link>
                           </p>
                           <p className="font-sans text-primary underline underline-offset-4 text-lg z-10 relative mt-3">
                              <Link href="tel:+264816377988">+264 81 637 7988</Link>
                           </p>
                        </div>
                    </div>
                 </div>

                 {/* Contact Form */}
                 <div className="w-full lg:w-2/3">
                    <div className="bg-white p-8 md:p-12 rounded-tl-[40px] rounded-br-[40px] shadow-lg border-t-2 border-l-2 border-accent relative">
                       {/* Decorative element */}
                       <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-accent rounded-tl-[44px] pointer-events-none opacity-50"></div>
                       
                       <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Send a Message</h2>
                       
                       <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <Label htmlFor="name" className="text-foreground font-semibold text-base">Name</Label>
                                <Input 
                                   id="name" 
                                   required 
                                   className="bg-muted border-none h-12 text-base px-5 rounded-lg focus-visible:ring-accent shadow-inner"
                                   value={formData.name}
                                   onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                             </div>
                             <div className="space-y-3">
                                <Label htmlFor="email" className="text-foreground font-semibold text-base">Email</Label>
                                <Input 
                                   id="email" 
                                   type="email" 
                                   required 
                                   className="bg-muted border-none h-12 text-base px-5 rounded-lg focus-visible:ring-accent shadow-inner"
                                   value={formData.email}
                                   onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <Label htmlFor="organisation" className="text-foreground font-semibold text-base">Organisation <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                                <Input 
                                   id="organisation" 
                                   className="bg-muted border-none h-12 text-base px-5 rounded-lg focus-visible:ring-accent shadow-inner"
                                   value={formData.organisation}
                                   onChange={e => setFormData({...formData, organisation: e.target.value})}
                                />
                             </div>
                             <div className="space-y-3">
                                <Label htmlFor="intent" className="text-foreground font-semibold text-base">I want to...</Label>
                                <select 
                                   id="intent"
                                   className="flex h-12 w-full rounded-lg border-none bg-muted px-5 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-inner appearance-none cursor-pointer"
                                   style={{ backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'m6 8 4 4 4-4\'/%3E%3C/svg%3E")', backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                                   value={formData.intent}
                                   onChange={e => setFormData({...formData, intent: e.target.value})}
                                >
                                   <option value="apply">Apply for training</option>
                                   <option value="partner">Become a partner</option>
                                   <option value="general">Make a general enquiry</option>
                                </select>
                             </div>
                          </div>

                          <div className="space-y-3">
                             <Label htmlFor="message" className="text-foreground font-semibold text-base">Message</Label>
                             <Textarea 
                                id="message" 
                                required 
                                rows={6}
                                className="bg-muted border-none text-base p-5 rounded-lg focus-visible:ring-accent resize-none shadow-inner"
                                value={formData.message}
                                onChange={e => setFormData({...formData, message: e.target.value})}
                             />
                          </div>
                          
                          <Button type="submit" size="lg" className="w-full md:w-auto mt-6 px-12 py-7 text-lg rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                             Send Message
                          </Button>
                       </form>
                    </div>
                 </div>

              </div>
           </div>
        </section>
      </main>
      
    </div>
  );
}
