import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { IconMapPin, IconPhone, IconMail, IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram, IconMail as IconMailCircle } from '@tabler/icons-react'
import { ContactDialog } from '@/components/ContactDialog'

export default function ContactFooterSection() {
  return (
    <section className="bg-white">
      {/* Top Navigation */}
      <div className="text-center py-4 border-b border-gray-200">
        <nav className=" font-semibold flex justify-center gap-8 text-sm text-gray-700">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/services/agents" className="hover:text-purple-600">Agents</Link>
          <Link to="/services/outsourcing" className="hover:text-purple-600">Outsourcing</Link>
          <Link to="/services/hire-recruiter" className="hover:text-purple-600">Hire Recruiter</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">

        {/* Left - Company Info (Purple Background) */}
        <div className="bg-purple-800 text-white px-4 py-6 md:py-8 md:px-8 space-y-6 max-w-sm">
          <p className=" leading-relaxed text-white/90">
            At Tc IT Services, we are driven entrepreneurs dedicated to simplifying your business through innovative solutions. Our overarching goal remains consistent: to innovate products and services that positively impact society and foster a better standard of living for all.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <IconMapPin className="w-8 h-8 mt-1 flex-shrink-0 text-white/80" />
              <div className="text-sm text-white/80">
                <p>House no: 12-264/303, Madhava Residency</p>
                <p>Road No: 1, P&T Colony, Near Greenfield School</p>
                <p>Medipally, Uppal Depot</p>
                <p>Hyderabad, Telangana, 500070, India</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <IconPhone className="w-8 h-8 flex-shrink-0 text-white/80" />
              <span className="text-sm text-white/80">+91 9908884033 (IN)</span>
            </div>

            <div className="flex items-center gap-2">
              <IconMail className="w-8 h-8 flex-shrink-0 text-white/80" />
              <span className="text-sm text-white/80">info@tcitservices.com</span>
            </div>
          </div>
        </div>

        {/* Center - CTA (White Background) */}
        <div className="bg-white flex-1 flex items-center justify-center flex-col text-black p-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-black">
            Ready For Your
            <br />
            Next Project?
          </h1>
          <ContactDialog>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded text-sm">
              Get Started With Tc IT Services
            </Button>
          </ContactDialog>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <a href="https://www.linkedin.com/company/tc_consulting_services/" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <IconBrandLinkedin className="w-8 h-8" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61579232776007" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <IconBrandFacebook className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/tc_it_consulting/" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <IconBrandInstagram className="w-8 h-8" />
            </a>
            <a href="mailto:info@tcitservices.com" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
              <IconMailCircle className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right - Services (White Background) */}
        <div className="bg-white md:max-w-xs w-full text-center md:text-start  text-black p-8 space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-black">Our Services</h3>
            <ul className="space-y-1 text-base text-gray-700">
              <li><Link to="/services/software-development/mobile-and-web-app" className="hover:text-purple-600">Software Development</Link></li>
              <li><Link to="/services/data-and-analytics/data-analytics" className="hover:text-purple-600">Data Analytics</Link></li>
              <li><Link to="/services/ai-ml-services/ai-ml" className="hover:text-purple-600">AI Development</Link></li>
              <li><Link to="/services/software-development/custom-application" className="hover:text-purple-600">Custom Applications</Link></li>
              <li><Link to="/services/it-cloud-services/managed-services" className="hover:text-purple-600">Cloud Computing</Link></li>
              <li><Link to="/services/software-development/e-com" className="hover:text-purple-600">E-Commerce Solutions</Link></li>
              <li><Link to="/services/outsourcing" className="hover:text-purple-600">Outsourcing Services</Link></li>
              <li><Link to="/services/it-staffing" className="hover:text-purple-600">IT Staffing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-black">More About Us</h3>
            <ul className="space-y-1 text-base text-gray-700">
              <li><Link to="/careers" className="hover:text-purple-600">Careers</Link></li>
              <li><Link to="/services/hire-recruiter" className="hover:text-purple-600">Hire Recruiters</Link></li>
              <li><Link to="/ai-agents" className="hover:text-purple-600">AI Agents</Link></li>
              <li><Link to="/industries" className="hover:text-purple-600">Industries</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Links
      <div className="bg-white px-3 md:0 py-6 border-t border-gray-200 text-end">
        <div className="flex flex-wrap justify-center gap-6 text-xs mb-4 text-gray-600">
          <Link to="/privacy">Privacy And Policy</Link>
          <Link to="/terms">Terms And Conditions</Link>
          <Link to="/cancellation">Cancellation And Refund</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <p className="text-xs text-center text-gray-500">
          Copyright © 2025 Tc IT Services. <br className='md:hidden' /> All Rights Reserved By tcitservices.com
        </p>
      </div> */}
    </section>
  )
}