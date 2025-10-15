
import { Linkedin,  Instagram, Mail, Facebook } from "lucide-react";

export default function LastButNotLeast() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl tracking-tight leading-14 font-bold text-center ">
            Last But <span className=" text-7xl">Not</span> <br /> The Least...
          </h1>
    
          {/* Subtext */}
          <p className="mt-4 text-gray-400 text-lg">
            Your Growth, is our Success
          </p>
    
          {/* Social Icons */}
          <div className="flex space-x-6 mt-6">
            <a href="https://www.linkedin.com/company/tc_consulting_services/" className="hover:text-blue-400 transition">
              <Linkedin size={28} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579232776007" className="hover:text-sky-400 transition">
              <Facebook size={28} />
            </a>
            <a href="https://www.instagram.com/tc_it_consulting/" className="hover:text-pink-500 transition">
              <Instagram size={28} />
            </a>
            <a href="mailto:info@tcitservices.com" className="hover:text-green-400 transition">
              <Mail size={28} />
            </a>
          </div>
        </div>
      );
}

