import { robo1 } from '@/assets'
import { Button } from '@/components/ui/button'
import { FAQSection } from '@/components/sections/faq-section'
import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, CloudAlertIcon, CogIcon, FileSearch2Icon, Search } from "lucide-react";

const implementationSteps = [
  {
    number: "1",
    title: "Explore",
    description: "We explore to find security solutions that cover all your needs."
  },
  {
    number: "2", 
    title: "Define",
    description: "Building the right security architecture to your requirements."
  },
  {
    number: "3",
    title: "Plan", 
    description: "Prepare an execution plan to implement within timelines."
  },
  {
    number: "4",
    title: "Deploy",
    description: "To deploy as per defined architecture within anticipated timelines."
  },
  {
    number: "5",
    title: "Configure",
    description: "Keeping all aspects in your specific environment variables."
  },
  {
    number: "6",
    title: "Optimize", 
    description: "To reduce error and maximize efficiency to an acceptable level."
  },
  {
    number: "7",
    title: "Test",
    description: "User Acceptance Testing is our last step before handover to the client."
  }

 
]
const andata = [
    { title: "Secure Architecture", icon: ShieldAlert },
    { title: "Firewall Vulnerability", icon: FileText },
    { title: "Management PIM/PAM", icon: Briefcase },
    { title: "ITSM", icon: BookCheck },
    { title: "AV/FIM/HIDS", icon: ClipboardList },
    { title: "OT/IoT Security", icon: CloudAlertIcon },  { title: "EDR", icon: CogIcon },  { title: "SIEM & SOAR", icon: FileSearch2Icon },  { title: "IDS/IPS", icon: Search }

];
export default function ImplimentationService() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            AI Implementation
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                        Security  <br />Implementation Services 
                        </h1>
                            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                                Our security implementation services help organizations secure their systems and networks from cyber threats and attacks.
                                </p>
                            <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white shadow-lg">
                            Lets Talk →
                        </Button>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center">
                        <img
                            src={robo1}
                            alt="AI Bot Illustration"
                            width={400}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Implementation Process Section */}
            <section className="py-20 px-6 bg-white dark:bg-neutral-900 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 dark:opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 transform rotate-12 scale-150"></div>
                </div>
                
                <div className="max-w-6xl mx-auto relative">
                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            We help you Implement Cybersecurity
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
                            Terralogic sets up a security implementation process that works towards building a comprehensive repository of accelerators, reusable assets, and frameworks for accelerating your security and compliance as per industry standards.
                        </p>
                    </div>

                    {/* 7-Step Process Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {/* First row - 4 steps */}
                        {implementationSteps.slice(0, 4).map((step, index) => (
                            <div key={index} className="text-center flex flex-col items-center justify-center w-full">
                                {/* Step Number */}
                                <div className="text-6xl md:text-7xl font-bold text-pink-600 dark:text-pink-400 mb-4 text-center">
                                    {step.number}
                                </div>
                                
                                {/* Step Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {step.title}
                                </h3>
                                
                                {/* Step Description */}
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Second row - 3 steps centered */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mt-8">
                        {implementationSteps.slice(4, 7).map((step, index) => (
                            <div key={index + 4} className="text-center flex flex-col items-center justify-center w-full">
                                {/* Step Number */}
                                <div className="text-6xl md:text-7xl font-bold text-pink-600 dark:text-pink-400 mb-4 text-center">
                                    {step.number}
                                </div>
                                
                                {/* Step Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                                    {step.title}
                                </h3>
                                
                                {/* Step Description */}
                                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div>
                <section className="pt-16 pb-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
                    <div className="max-w-6xl mx-auto space-y-6 items-center">
                        <div className='max-w-3xl'>
                            <h3 className="text-3xl md:text-4xl font-bold text-white  leading-tight">We have Partnership with Industry Giants to give you the Top-notch Cyber-security Solutions</h3>
                            <p className="text-base md:text-xl  text-white/70 mb-6 leading-tight">Tc services sets up a security implementation process that works towards building a comprehensive repository of accelerators, reusable assets, and frameworks for accelerating your security and compliance as per industry standards</p>
                        </div>
                    </div>
                </section>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto bg-white dark:bg-neutral-900 p-12 -mt-24 rounded-xl'>
                    {andata.map((item, idx) => {
                        return (
                            <div key={idx} className='flex f gap-4 bg-white max-w-80 dark:bg-neutral-800 p-5 rounded-xl shadow-sm hover:shadow-md transition'>
                                <item.icon size={28} />
                                <p className='text-lg font-medium text-neutral-800 dark:text-neutral-200'>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* FAQ Section */}
            <FAQSection />
    </>
  )
}
