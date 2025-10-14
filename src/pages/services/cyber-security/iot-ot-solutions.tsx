import { robo1 } from '@/assets'
import SectionContainer from '@/components/common/section-container'
import { FAQSection } from '@/components/sections/faq-section'
import CommonHero from '@/components/common/common-hero'

export default function IotOtSolutions() {
    const iotOtFaqs = [
        {
            question: "What are IoT and OT security, and why are they important?",
            answer: "IoT (Internet of Things) and OT (Operational Technology) security protects connected devices, networks, and systems from cyber threats. As organizations increasingly rely on connected devices for operations, securing these systems is critical to prevent unauthorized access, data breaches, and operational disruptions that could impact business continuity."
        },
        {
            question: "What frameworks do your IoT/OT security services follow?",
            answer: "Our IoT/OT security services encompass industry-recognized frameworks including NIST SP 800-30 (Risk Management), ISO/SAE 21434 (Automotive Cybersecurity), and WP.29 (UN Regulation on Cybersecurity). These frameworks ensure comprehensive security coverage aligned with international standards."
        },
        {
            question: "What does your Secure Design approach include?",
            answer: "Our Secure Design approach includes IoT/OT Threat Modeling and Risk assessment, Secure Application design and source code review, Vulnerability Assessment and Penetration Testing, security assessments for cloud, on-premises, and hybrid environments, and comprehensive IoT/OT assets management to ensure security from the ground up."
        },
        {
            question: "How do you handle IoT/OT security implementation?",
            answer: "Our Secure Implementation includes IoT/OT Application Security Assessment, Security Baselining for system components, IoT infrastructure identity and access management, Communication Channel Security, and Incident Management Procedure Definition. This ensures security is embedded throughout the implementation phase."
        },
        {
            question: "What ongoing security operations do you provide for IoT/OT systems?",
            answer: "Our Secure Operations include IoT current state security reviews, integration of ICS alerts with SIEM systems, IoT data lifecycle protection, integration with organizational incident management processes, and stakeholder security awareness programs. We provide continuous monitoring and protection to maintain security posture over time."
        }
    ];

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
            subtleHeading="IoT & OT Security"
            heading="Secure Your Connected Devices\nwith Advanced IoT & OT Solutions"
            subheading="Protect IoT and OT devices, networks, and systems from cyber threats with comprehensive security solutions designed for connected environments."
            buttontitle="Let's Talk"
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
                                With TC Services's expertise in a wide range of cutting-edge products and solutions, you gain an outstanding partner to guide you through the increasingly complex security solutions landscape. TC Services's IoT/OT security services encompass NIST SP 800-30, ISO/SAE 21434, and WP.29 frameworks.
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
            <FAQSection faqs={iotOtFaqs} />
    </>
  )
}
