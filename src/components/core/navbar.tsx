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
import { industries, services } from "@/constants/navbar"
import { Button } from "../ui/button"
import { ContactDialog } from "../ContactDialog"
import { logo } from "@/assets"



export function Navbar() {
  return (
    <> 
      <MobileNavbar />
      <div className="hidden md:flex dark:bg-white/2 backdrop-blur-sm fixed top-0 right-0 left-0 items-center justify-between px-16 py-4 z-[9999]">
        <Link to="/"
         className="text-purple-400 font-semibold text-3xl">
          <img src={logo} alt="tc" className="h-12" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/services/outsourcing">Outsourcing</Link>
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

            {/* <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem> */}

          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
<ContactDialog>
          <Button className="bg-gradient-to-b py-5 from-purple-400   transition-all duration-300 to-purple-500 px-8 text-white  rounded-lg hover:outline outline-neutral-400 ">Get Started</Button>
</ContactDialog>
          
          <ThemeSelector />
        </div>
      </div>
    </>
  )
}
