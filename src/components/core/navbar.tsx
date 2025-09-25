"use client"

import { ArrowUpRight } from "lucide-react"

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
import { Button } from "../ui/button"
import { ThemeSelector } from "../ui/ThemeSelector"


const services = [
    {
      title: "Software Development", 
      href: "/services/software-development"
    },
    {
      title: "IT Consulting & Services",
      href: "/services/it-consulting"
    },
    {
      title: "Tech Support",
      href: "/services/tech-support"
    },
    {
      title: "AI Integration",
      href: "/services/ai-integration"
    },
    {
      title: "Cybersecurity",
      href: "/services/cybersecurity"
    },
    {
      title: "BPO Services",
      href: "/services/bpo-services"
    },
    {
      title: "IT Staffing Solutions",
      href: "/services/it-staffing"
    },
    {
      title: "Accounting and Payrolls",
      href: "/services/accounting-payroll"
    },
    {
      title: "Digital Marketing Services",
      href: "/services/digital-marketing"
    },
    {
      title: "Out Sourcing Services",
      href: "/services/outsourcing"
    }
  ]
  const industries = [
    {
      title: "Banking & Financial",
      href: "/industries/banking-financial"
    },
    {
      title: "Education",
      href: "/industries/education"
    },
    {
      title: "Information Services",
      href: "/industries/information-services"
    },
    {
      title: "Manufacturing",
      href: "/industries/manufacturing"
    },
    {
      title: "Technology",
      href: "/industries/technology"
    },
    {
      title: "Communications",
      href: "/industries/communications"
    },
    {
      title: "Energy & Utilities",
      href: "/industries/energy-utilities"
    },
    {
      title: "Insurance",
      href: "/industries/insurance"
    },
    {
      title: "Media & Entertainment",
      href: "/industries/media-entertainment"
    },
    {
      title: "Transportation & Logistics",
      href: "/industries/transportation-logistics"
    },
    {
      title: "Consumer Goods",
      href: "/industries/consumer-goods"
    },
    {
      title: "Healthcare",
      href: "/industries/healthcare"
    },
    {
      title: "Life Sciences",
      href: "/industries/life-sciences"
    },
    {
      title: "Retail",
      href: "/industries/retail"
    },
    {
      title: "Travel & Hospitality",
      href: "/industries/travel-hospitality"
    }
  ]

export function Navbar() {
  return (
    <div className="fixed top-0 right-0 left-0  flex items-center justify-between px-16 py-6 z-[9999]">
    <h3 className="text-purple-400 font-semibold text-3xl">LGO</h3>
        <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex gap-2 md:w-[400px] lg:w-[600px]">
              <li className="row-span-3 flex-1">
                <NavigationMenuLink asChild>
                  <Link
                    to="/services/hire-recruiter"
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Hire <br /> Recruiter
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="rounded-full border py-2.5 flex items-center justify-center border-purple-400! mt-2">
                      <ArrowUpRight/>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
               <div className="w-60 grid grid-cols-2 gap-2 flex-[2] ">
{
    services.map((service, index) => (
      <NavigationMenuLink key={index} asChild>
        <Link to={service.href} className="font-semibold text-neutral-500">{service.title}</Link>
      </NavigationMenuLink>
    ))
}
              </div>
            </ul>
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
          <NavigationMenuLink  asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">About Us</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex gap-2">
    <Button className="bg-gradient-to-b from-purple-400 to-purple-500 px-8 text-white py-5">Get Started</Button>
    <ThemeSelector/>
    </div>
    

    </div>
  )
}
