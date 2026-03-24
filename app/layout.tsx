import { Bodoni_Moda, Manrope, Dancing_Script } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700"] });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["200", "300", "400", "500", "600", "700", "800"] });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-accent", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Meraki Wellness Empowering Foundation | Women Empowerment",
  description: "Meraki Wellness Empowering Foundation, located in Windhoek, Namibia. We are a women empowerment organisation dedicated to equipping women with practical wellness skills, entrepreneurship knowledge, and employment opportunities.",
openGraph:{
  title: "Meraki Wellness Empowering Foundation | Women Empowerment",
  description: "Meraki Wellness Empowering Foundation, located in Windhoek, Namibia. We are a women empowerment organisation dedicated to equipping women with practical wellness skills, entrepreneurship knowledge, and employment opportunities.",
  type: "website",
  // url: "https://merakiwellnessfoundation.com",
  siteName: "Meraki Wellness Empowering Foundation",
  locale: "en_NA",
  images: [
    {
      url: "/Meraki-logo-nobg.png",
      width: 1200,
      height: 630,
      alt: "Meraki Wellness Empowering Foundation",
    },
  ],
}, 
twitter:{
  card: "summary_large_image",
  title: "Meraki Wellness Empowering Foundation | Women Empowerment",
  description: "Meraki Wellness Empowering Foundation, located in Windhoek, Namibia. We are a women empowerment organisation dedicated to equipping women with practical wellness skills, entrepreneurship knowledge, and employment opportunities.",
  images: [
    {
      url: "/Meraki-logo-nobg.png",
      width: 1200,
      height: 630,
      alt: "Meraki Wellness Empowering Foundation",
    },
  ],
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", bodoni.variable, manrope.variable, dancing.variable, "font-sans")}
    >
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
