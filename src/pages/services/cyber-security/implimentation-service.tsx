import { FAQSection } from '@/components/sections/faq-section'
import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, CloudAlertIcon, CogIcon, FileSearch2Icon, Search } from "lucide-react";
import CommonHero from '@/components/common/common-hero';

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
  const implementationFaqs = [
    {
        question: "What is your cybersecurity implementation process?",
        answer: "Our 7-step implementation process includes: Explore (finding security solutions), Define (building security architecture), Plan (preparing execution plans), Deploy (implementing within timelines), Configure (customizing for your environment), Optimize (maximizing efficiency), and Test (conducting User Acceptance Testing). This comprehensive approach ensures successful security implementation."
    },
    {
        question: "What security solutions do you implement?",
        answer: "We implement a wide range of security solutions including Secure Architecture, Firewall Vulnerability management, PIM/PAM (Privileged Identity/Access Management), ITSM, AV/FIM/HIDS (Antivirus/File Integrity Monitoring/Host Intrusion Detection), OT/IoT Security, EDR (Endpoint Detection and Response), SIEM & SOAR, and IDS/IPS systems."
    },
    {
        question: "How do you ensure implementation meets industry standards?",
        answer: "We build a comprehensive repository of accelerators, reusable assets, and frameworks that align with industry standards. Our implementation process is designed to accelerate your security and compliance initiatives while ensuring adherence to recognized best practices and regulatory requirements."
    },
    {
        question: "What partnerships do you have for security implementation?",
        answer: "We partner with industry giants to deliver top-notch cybersecurity solutions. These partnerships enable us to provide cutting-edge security technologies and implementation expertise, ensuring you receive best-in-class protection for your organization."
    },
    {
        question: "How long does a typical security implementation take?",
        answer: "Implementation timelines vary based on the complexity and scope of your security requirements. We prepare detailed execution plans during the planning phase to deploy solutions within anticipated timelines. Our structured 7-step process ensures efficient implementation while maintaining quality and thoroughness throughout the project."
    }
  ];

  return (
    <>
    <CommonHero
        subtleHeading="Security Implementation"
        heading="Secure Your Systems with\nExpert Implementation Services"
        subheading="Protect your organization from cyber threats with comprehensive security implementation services designed to safeguard systems and networks."
        buttontitle="Let's Talk"
    />

            {/* Implementation Process Section */}
            <section className="py-20 px-4 md:px-6 bg-white dark:bg-neutral-900 relative overflow-hidden">
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
                                <div className="text-6xl md:text-7xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">
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
                                <div className="text-6xl md:text-7xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">
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
                <section className="pt-16 pb-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
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
            <FAQSection faqs={implementationFaqs} />
    </>
  )
}
