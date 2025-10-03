import { robo1 } from '@/assets'
import SectionContainer from '@/components/common/section-container'
import { FAQSection } from '@/components/sections/faq-section'
import { Button } from '@/components/ui/button'

export default function IotOtSolutions() {
    const sectionData =  [
          {
            "title": "Secure Design",
            "description": [
              "IoT/OT Threat Modeling and Risk",
              "Secure IoT/OT Application design & Source code review",
              "Vulnerability Assessment and Penetration Testing",
              "Assessment for IoT/OT apps in the cloud, on-premises, and hybrid",
              "IoT/OT assets management"
            ],
            "imgDirection": "right"
          },
          {
            "title": "Secure Implementation",
            "description": [
              "IoT/OT Application Security Assessment",
              "Security Baselining for system components",
              "IoT infrastructure identity and access management",
              "Communication Channel Security",
              "Incident Management Procedure Definition"
            ],
            "imgDirection": "left"
          },
          {
            "title": "Secure Operations",
            "description": [
              "IOT current state security review",
              "Integration of ICS alerts with SIEM",
              "IOT Data lifecycle protection",
              "Integration with the organizational incident management process",
              "Stakeholder security awareness program"
            ],
            "imgDirection": "right"
          }
        ]
  return (
    <>
        {/* Hero Section */}
        <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            AI CX AGENT
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            IOT & OT Solutions  <br />
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg md:text-xl leading-relaxed">
                            Our IOT & OT solutions help organizations secure their IoT and OT devices, networks, and systems from cyber threats and attacks.</p>
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

            {/* Partner Section */}
            <section className="py-20 max-w-6xl mx-auto">
                <div className="">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Left Image */}
                        <div className="flex min-w-sm max-w-sm justify-center">
                            <img
                                src={robo1}
                                alt="IoT/OT Security Illustration"
                                className="max-w-sm w-full object-contain"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Your partner for IoT/OT security
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                With Terralogic's expertise in a wide range of cutting-edge products and solutions, you gain an outstanding partner to guide you through the increasingly complex security solutions landscape. Terralogic's IoT/OT security services encompass NIST SP 800-30, ISO/SAE 21434, and WP.29 frameworks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <div className='py-12 px-6'>
                <h3 className="text-3xl md:text-4xl max-w-6xl mx-auto px-6 font-bold text-neutral-900 dark:text-white mb-12 leading-tight">Our Approach</h3>
                <SectionContainer data={sectionData} />
            </div>

            {/* FAQ Section */}
            <FAQSection />
    </>
  )
}
