"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { ThemeSelector } from "../ui/ThemeSelector"
import { industries, services } from "@/constants/navbar"


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
          <div className="flex-1 overflow-y-auto pb-16" data-lenis-prevent>
            <nav className="p-4 space-y-2">
              {/* AI Agents */}
              <Link
                to="/services/outsourcing"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Outsourcing
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

              {/* About Us
              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                About Us
              </Link> */}

              {/* Get Started Button */}
              {/* <div className="pt-4 pb-6">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block w-full bg-gradient-to-b from-purple-400 to-purple-500 text-white text-center py-3 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}