"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { ThemeSelector } from "../ui/ThemeSelector"

const services = [
  {
    title: "IT & Cloud Services",
    href: "/services/it-cloud",
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
    href: "/services/system-software",
    subServices: [
      { title: "DevOps", href: "/services/devops" },
      { title: "Quality Engineering", href: "/services/quality-engineering" },
      { title: "Embedded Services", href: "/services/embedded-services" },
      { title: "Data Engineering", href: "/services/data-engineering" }
    ]
  },
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
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
    title: "Document Management Systems",
    href: "/services/document-management",
    subServices: [
      { title: "Document Management Software", href: "/services/document-software" },
      { title: "Document Scanning Services", href: "/services/document-scanning" },
      { title: "Automated Electronic Forms", href: "/services/electronic-forms" },
      { title: "High-Speed Scanners", href: "/services/high-speed-scanners" },
      { title: "Custom Document Management Software", href: "/services/custom-document-management" }
    ]
  },
  {
    title: "AI & ML Services",
    href: "/services/ai-ml",
    subServices: [
      { title: "Data Analysis", href: "/services/data-analysis" },
      { title: "Natural Language Processing", href: "/services/nlp" },
      { title: "Computer Vision", href: "/services/computer-vision" },
      { title: "Machine Learning Models", href: "/services/ml-models" },
      { title: "Deployment & Integration", href: "/services/ai-deployment" }
    ]
  },
  {
    title: "Data Services",
    href: "/services/data-services",
    subServices: [
      { title: "Data Engineering", href: "/services/data-engineering-services" },
      { title: "Data Analytics", href: "/services/data-analytics" },
      { title: "Data Visualization", href: "/services/data-visualization" }
    ]
  },
  {
    title: "BPO Services",
    href: "/services/bpo-services",
    subServices: [
      { title: "Customer Support", href: "/services/customer-support" },
      { title: "Back Office Operations", href: "/services/back-office" },
      { title: "Data Entry Services", href: "/services/data-entry" },
      { title: "Virtual Assistant Services", href: "/services/virtual-assistant" }
    ]
  },
  {
    title: "IT Staffing Solutions",
    href: "/services/it-staffing",
    subServices: [
      { title: "Contract Staffing", href: "/services/contract-staffing" },
      { title: "Permanent Placement", href: "/services/permanent-placement" },
      { title: "Project-Based Staffing", href: "/services/project-staffing" },
      { title: "Remote Team Augmentation", href: "/services/remote-augmentation" }
    ]
  },
  {
    title: "Accounting and Payrolls",
    href: "/services/accounting-payroll",
    subServices: [
      { title: "Bookkeeping Services", href: "/services/bookkeeping" },
      { title: "Payroll Processing", href: "/services/payroll-processing" },
      { title: "Tax Preparation", href: "/services/tax-preparation" },
      { title: "Financial Reporting", href: "/services/financial-reporting" }
    ]
  },
  {
    title: "Digital Marketing Services",
    href: "/services/digital-marketing",
    subServices: [
      { title: "SEO Services", href: "/services/seo" },
      { title: "Social Media Marketing", href: "/services/social-media" },
      { title: "Content Marketing", href: "/services/content-marketing" },
      { title: "PPC Advertising", href: "/services/ppc-advertising" }
    ]
  }
]

const industries = [
  { title: "Banking & Financial", href: "/industries#banking-financial" },
  { title: "Education", href: "/industries#education" },
  { title: "Information Services", href: "/industries#information-services" },
  { title: "Manufacturing", href: "/industries#manufacturing" },
  { title: "Technology", href: "/industries#technology" },
  { title: "Communications", href: "/industries#communications" },
  { title: "Energy & Utilities", href: "/industries#energy-utilities" },
  { title: "Insurance", href: "/industries#insurance" },
  { title: "Media & Entertainment", href: "/industries#media-entertainment" },
  { title: "Transportation & Logistics", href: "/industries#transportation-logistics" },
  { title: "Consumer Goods", href: "/industries#consumer-goods" },
  { title: "Healthcare", href: "/industries#healthcare" },
  { title: "Life Sciences", href: "/industries#life-sciences" },
  { title: "Retail", href: "/industries#retail" },
  { title: "Travel & Hospitality", href: "/industries#travel-hospitality" }
]

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedServices, setExpandedServices] = useState(false)
  const [expandedIndustries, setExpandedIndustries] = useState(false)
  const [expandedServiceCategories, setExpandedServiceCategories] = useState<{ [key: number]: boolean }>({})

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setExpandedServices(false)
    setExpandedIndustries(false)
    setExpandedServiceCategories({})
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleServiceCategory = (index: number) => {
    setExpandedServiceCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 right-0 left-0 flex items-center justify-between px-4 py-2 bg-white/80 dark:bg-black/60 backdrop-blur-md z-[9999]">
        <h3 className="text-purple-400 font-semibold text-2xl">LGO</h3>
        <div className="flex items-center gap-2">
          <ThemeSelector />
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-[9999] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-purple-400 font-semibold text-xl">Menu</h3>
          <button
            onClick={closeMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto" data-lenis-prevent>
            <nav className="p-4 space-y-2">
              {/* AI Agents */}
              <Link
                to="/services/agent"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                AI Agents
              </Link>

              {/* Hire Recruiter */}
              <Link
                to="/services/hire-recruiter"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Hire Recruiter
              </Link>

              {/* Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setExpandedServices(!expandedServices)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>Services</span>
                  {expandedServices ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedServices ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="space-y-1">
                    {services.map((service, index) => (
                      <div key={index} className="space-y-1">
                        <button
                          onClick={() => toggleServiceCategory(index)}
                          className="flex items-center justify-between w-full px-4 py-3 text-purple-600 font-semibold hover:bg-purple-50 rounded-lg transition-colors text-base"
                        >
                          <span>{service.title}</span>
                          {expandedServiceCategories[index] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedServiceCategories[index] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                          <div className="space-y-1">
                            {service.subServices.map((subService, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subService.href}
                                onClick={closeMenu}
                                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                              >
                                {subService.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setExpandedIndustries(!expandedIndustries)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span>Industries</span>
                  {expandedIndustries ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndustries ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="space-y-1">
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        to={industry.href}
                        onClick={closeMenu}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm"
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Careers */}
              <Link
                to="/careers"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Careers
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                About Us
              </Link>

              {/* Get Started Button */}
              <div className="pt-4 pb-6">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-gradient-to-b from-purple-400 to-purple-500 text-white text-center py-3 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}