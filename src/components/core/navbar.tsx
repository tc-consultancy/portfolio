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
    "Hire Recruiter", 
    "IT Consulting & Services",
    "Tech Support",
    "AI Integration",
    "Cybersecurity",
    "BPO Services",
    "IT Staffing Solutions",
    "Accounting and Payrolls",
    "Digital Marketing Services",
    "Out Sourcing Services"
  ]
  const industries = [
    "Banking & Financial",
    "Education",
    "Information Services", 
    "Manufacturing",
    "Technology",
    "Communications",
    "Energy & Utilities",
    "Insurance",
    "Media & Entertainment",
    "Transportation & Logistics",
    "Consumer Goods",
    "Healthcare",
    "Life Sciences",
    "Retail",
    "Travel & Hospitality"
  ]

export function Navbar() {
    
  return (
    <div className="fixed top-0 right-0 left-0  flex items-center justify-between px-16 py-6 z-[9999]">
    <h3 className="text-purple-400 font-semibold text-3xl">LGO</h3>
        <NavigationMenu viewport={false}>
      <NavigationMenuList>
      <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Sevices</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex gap-2 md:w-[400px] lg:w-[600px]">
              <li className="row-span-3 flex-1">
                <NavigationMenuLink  asChild>
                  <a
                    className="from-muted/50  to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Software Development
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button variant={"outline"} className="rounded-full mt-2 "><ArrowUpRight/></Button>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="w-60 grid grid-cols-2 gap-2 flex-[2] ">
{
    services.map((service) => (
      <NavigationMenuLink  asChild>
        <Link to="/" className="font-semibold text-neutral-500">{service}</Link>
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
    industries.map((service) => (
      <NavigationMenuLink  asChild>
        <Link to="/" className="font-semibold text-neutral-500">{service}</Link>
      </NavigationMenuLink>
    ))
}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">Careers</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink  asChild className={navigationMenuTriggerStyle()}>
            <Link to="/">About Us</Link>
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
