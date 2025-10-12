import { robo1 } from '@/assets'
import SectionContainer from '@/components/common/section-container'
import { FAQSection } from '@/components/sections/faq-section'
import CommonHero from '@/components/common/common-hero'

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
        <CommonHero
            badge="IoT & OT Security"
            title="Secure Your Connected Devices with Advanced IoT & OT Solutions"
            description="Protect IoT and OT devices, networks, and systems from cyber threats with comprehensive security solutions designed for connected environments."
            accentColor="purple-400"
        />

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
            <div className='py-12 px-4 md:px-6'>
                <h3 className="text-3xl md:text-4xl max-w-6xl mx-auto px-4 md:px-6 font-bold text-neutral-900 dark:text-white mb-12 leading-tight">Our Approach</h3>
                <SectionContainer data={sectionData} />
            </div>

            {/* FAQ Section */}
            <FAQSection />
    </>
  )
}
