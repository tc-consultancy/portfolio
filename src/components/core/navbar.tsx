"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { ThemeSelector } from "../ui/ThemeSelector"
import { MobileNavbar } from "./mobile-navbar"


const services = [
  {
    title: "IT & Cloud Services",
    subServices: [
      { title: "Managed Services", href: "/services/managed-services" },
      { title: "Professional Consulting", href: "/services/professional-consulting" },
      { title: "Infrastructure Outsourcing", href: "/services/infrastructure-outsourcing" },
      { title: "24/7 Technical Support", href: "/services/technical-support" },
      { title: "Microsoft Managed Services", href: "/services/microsoft-managed" },
      { title: "Microsoft Cloud Services", href: "/services/microsoft-cloud" }
    ]
  },
  {
    title: "System & Software",
    subServices: [
      { title: "DevOps", href: "/services/devops" },
      { title: "Quality Engineering", href: "/services/quality-engineering" },
      { title: "Embedded Services", href: "/services/embedded-services" },
      { title: "Data Engineering", href: "/services/data-engineering" }
    ]
  },
    {
    title: "Staffing Solutions",
    subServices: [
      { title: 'It Staffing Solutions', href: "/services/it-staffing" },
      { title: "Contract Staffing", href: "/services/contract-staffing" },
      { title: "Permanent Placement", href: "/services/permanent-placement" },
      { title: "Project-Based Staffing", href: "/services/project-staffing" },
      { title: "Remote Team Augmentation", href: "/services/remote-augmentation" }
    ]
  },
  {
    title: "Cybersecurity",
    subServices: [
      { title: "Managed Detection & Response", href: "/services/managed-detection" },
      { title: "Threat and Vulnerability Management", href: "/services/threat-management" },
      { title: "Governance Risk & Compliance", href: "/services/governance-risk" },
      { title: "Data Privacy and Protection", href: "/services/data-privacy" },
      { title: "IOT/OT Security", href: "/services/iot-security" },
      { title: "Security Implementation Services", href: "/services/security-implementation" }
    ]
  },
   {
    title: "Software Development",
    subServices: [
      {
        title: "Application Development",
        href: "/services/application-development",
      },
      { title: "Mobile & Web Application", href: "/services/mobile-web-application" },
      { title: "E-Commerce", href: "/services/e-commerce" },
      { title: "Enterprise Application", href: "/services/enterprise-application" },
      { title: "Custom Application", href: "/services/custom-application" },
      { title: "SAAS Implementation", href: "/services/saas-implementation" },
      { title: "Cloud Applications", href: "/services/cloud-applications" },
    ]
  },

  {
    title: "AI & ML Services",
    subServices: [
      { title: "Natural Language Processing", href: "/services/nlp" },
      { title: "Computer Vision", href: "/services/computer-vision" },
      { title: "Machine Learning Models", href: "/services/ml-models" },
      { title: "Deployment & Integration", href: "/services/ai-deployment" }
    ]
  },
  {
    title: "AI Agents",
    subServices: [
      { title: "Agents", href: "/services/agents" },
      { title: "CX Agents", href: "/services/cx-agent" },
      { title: "IT Ops Agents ", href: "/services/it-ops-agent" },
      { title: "Sec Ops Agents", href: "/services/sec-ops-agent" },
      { title: "OCR Agents", href: "/services/ocr-agent" },
      { title: "Marketing Agents", href: "/services/marketing-agent" }
    ]
  },
   {
    title: "Document Management Systems",
    subServices: [
      { title: "Document Management Software", href: "/services/document-software" },
      { title: "Document Scanning Services", href: "/services/document-scanning" },
      { title: "Automated Electronic Forms", href: "/services/electronic-forms" },
      { title: "High-Speed Scanners", href: "/services/high-speed-scanners" },
      { title: "Custom Document Management Software", href: "/services/custom-document-management" }
    ]
  },
  {
    title: "Data And Analytics Services",
    subServices: [
      {
        title: "Data Services",
        href: "/services/data-services"
      },
      { title: "Data Analysis", href: "/services/data-analysis" },
      { title: "Data Engineering", href: "/services/data-engineering-services" },
      { title: "Data Analytics", href: "/services/data-analytics" },
      { title: "Data Visualization", href: "/services/data-visualization" }
    ]
  },
  {
    title: "BPO",
    subServices: [
      {
        title: "BPO Services",
        href: "/services/bpo-services",
      },
      { title: "Customer Support", href: "/services/customer-support" },
      { title: "Back Office Operations", href: "/services/back-office" },
      { title: "Data Entry Services", href: "/services/data-entry" },
      { title: "Virtual Assistant Services", href: "/services/virtual-assistant" }
    ]
  },

  {
    title: "Accounts",
    subServices: [
      {
        title: "Accounting and Payrolls",
        href: "/services/accounting-payroll"
      },
      { title: "Bookkeeping Services", href: "/services/bookkeeping" },
      { title: "Payroll Processing", href: "/services/payroll-processing" },
      { title: "Tax Preparation", href: "/services/tax-preparation" },
      { title: "Financial Reporting", href: "/services/financial-reporting" }
    ]
  },
  {
    title: "Digital Marketing",
    subServices: [
      {
        title: "Digital Marketing Services",
        href: "/services/digital-marketing",
      },
      { title: "SEO Services", href: "/services/seo" },
      { title: "Social Media Marketing", href: "/services/social-media" },
      { title: "Content Marketing", href: "/services/content-marketing" },
      { title: "PPC Advertising", href: "/services/ppc-advertising" }
    ]
  }
]
const industries = [
  {
    title: "Banking & Financial",
    href: "/industries#banking-financial"
  },
  {
    title: "Education",
    href: "/industries#education"
  },
  {
    title: "Information Services",
    href: "/industries#information-services"
  },
  {
    title: "Manufacturing",
    href: "/industries#manufacturing"
  },
  {
    title: "Technology",
    href: "/industries#technology"
  },
  {
    title: "Communications",
    href: "/industries#communications"
  },
  {
    title: "Energy & Utilities",
    href: "/industries#energy-utilities"
  },
  {
    title: "Insurance",
    href: "/industries#insurance"
  },
  {
    title: "Media & Entertainment",
    href: "/industries#media-entertainment"
  },
  {
    title: "Transportation & Logistics",
    href: "/industries#transportation-logistics"
  },
  {
    title: "Consumer Goods",
    href: "/industries#consumer-goods"
  },
  {
    title: "Healthcare",
    href: "/industries#healthcare"
  },
  {
    title: "Life Sciences",
    href: "/industries#life-sciences"
  },
  {
    title: "Retail",
    href: "/industries#retail"
  },
  {
    title: "Travel & Hospitality",
    href: "/industries#travel-hospitality"
  }
]

export function Navbar() {
  return (
    <>
      <MobileNavbar />
      <div className="hidden md:flex dark:bg-white/2 backdrop-blur-sm fixed top-0 right-0 left-0 items-center justify-between px-16 py-4 z-[9999]">
        <h3 className="text-purple-400 font-semibold text-3xl">LGO</h3>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/outsourcing">Outsourcing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/services/hire-recruiter">Hire Recruiter</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div
                  className="w-[800px] h-[80vh] overflow-y-auto overscroll-contain"
                  data-lenis-prevent
                  style={{ scrollbarWidth: 'thin' }}
                >
                  <div className="grid grid-cols-4 gap-6 p-6">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-3">
                        <p
                          className="text-purple-400 p-2 font-semibold text-sm"
                        >
                          {service.title}
                        </p>
                        <ul className="space-y-2">
                          {service.subServices.map((subService, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subService.href}
                                  className="text-neutral-800 dark:hover:underline dark:text-neutral-100 text-xs transition-colors block"
                                >
                                  {subService.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                  {
                    industries.map((industry, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <Link to={industry.href} className="font-semibold text-neutral-500">{industry.title}</Link>
                      </NavigationMenuLink>
                    ))
                  }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/careers">Careers</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <Link to={'/contact'} className="bg-gradient-to-b from-purple-400 hover:from-transparent hover:to-transparent transition-all duration-300 to-purple-500 px-8 text-white py-2 rounded-lg hover:outline outline-neutral-400 ">Get Started</Link>
          <ThemeSelector />
        </div>
      </div>
    </>
  )
}
