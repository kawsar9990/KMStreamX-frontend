import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

import { FaWandMagicSparkles } from "react-icons/fa6";

import ks from "../../assets/ks.svg";

const PORTFOLIO_URL = "https://kawsar9990.netlify.app";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61595245975203", icon: FaFacebookF },
  { name: "WhatsApp", href: "https://wa.me/8801602084187", icon: FaWhatsapp },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kawsar-ahmed-2a466441b", icon: FaLinkedinIn },
  { name: "Telegram", href: "https://t.me/Atitwed_Boys", icon: FaTelegramPlane },
  { name: "GitHub", href: "https://github.com/kawsar9990", icon: FaGithub },
];



export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050D1E] text-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-3/4 max-w-4xl bg-[#050D1E] pointer-events-none" />


      <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-8">
        <a
          href={PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.07] to-white/[0.02] p-5 backdrop-blur-xl transition-all duration-300 hover:border-[#FF2E63]/50 hover:shadow-[0_0_30px_rgba(255,46,99,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A18]/10 via-[#FF2E63]/10 to-[#7C4DFF]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <div className="relative flex items-center gap-3">
            <div className="flex w-8 h-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-gradient-to-br from-[#FF7A18] to-[#FF2E63] text-white shadow-lg">
              <FaWandMagicSparkles />
            </div>
            <div>
              <p className="text-[8px] font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A18] to-[#FF2E63] uppercase">
                Expert Showcase
              </p>
              <h4 className="text-[8px] font-bold text-white sm:text-lg">
                Built & Designed by Kawsar
              </h4>
            </div>
          </div>

          <div className="relative flex items-center gap-1 sm:gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-medium text-white transition group-hover:bg-gradient-to-r group-hover:from-[#FF7A18] group-hover:to-[#FF2E63]">
            <span className="text-[8px] sm:text-[13px]">Explore Portfolio</span>
            <FaArrowRight className="transition-transform duration-300 text-[8px] sm:text-[13px] group-hover:translate-x-1.5" />
          </div>
        </a>
      </div>

   
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        
       
        <div className="flex flex-col items-center md:items-start gap-5">
          <img src={ks} alt="StreamPulse" className="h-9 w-auto object-contain" />
          <p className="text-sm text-zinc-400 max-w-xs">
            Crafting high-performance web experiences and scalable digital solutions with modern tech.
          </p>
          
         
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-all duration-300 hover:border-[#FF2E63] hover:bg-[#FF2E63] hover:text-white hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

       

      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} KMStreamX. All rights reserved.</p>
      </div>
    </footer>
  );
}