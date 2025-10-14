import { robo1 } from "@/assets";
import SectionContainer from "@/components/common/section-container";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, BarChart3 } from "lucide-react";
import CommonHero from '@/components/common/common-hero';

const sectionData = [
    {
        title: "Governance",
        description:
            "We align processes and actions with the organization’s business goals to control security governance and specify accountability.",
        imgUrl: robo1,
        imgDirection: "right", // left or right
    },
    {
        title: "Risk",
        description:
            "We identify and address all of the organization’s risks by performing risk assessment, risk analysis and prioritization, root cause analysis of issues and mitigation, and trend analysis.",
        imgUrl: robo1,
        imgDirection: "left",
    },
];
const data = [
    { title: "Enterprise Risk Management", icon: ShieldAlert },
    { title: "Third-party Risk Assessment", icon: FileText },
    { title: "Corporate Governance", icon: Briefcase },
    { title: "Regulatory Compliance", icon: BookCheck },
    { title: "Audit Management", icon: ClipboardList },
    { title: "Document Management", icon: FileText },
    { title: "Reporting & Analytics", icon: BarChart3 },
];

export default function GovernanceRisk() {
    const grcFaqs = [
        {
            question: "What is GRC and why is it important for organizations?",
            answer: "GRC (Governance, Risk, and Compliance) is a framework that aligns processes and actions with business goals while controlling security governance and specifying accountability. It's crucial for organizations to identify and address risks, ensure regulatory compliance, and maintain corporate governance standards that protect the business and stakeholders."
        },
        {
            question: "What GRC solution capabilities do you provide?",
            answer: "Our comprehensive GRC solutions include Enterprise Risk Management, Third-party Risk Assessment, Corporate Governance, Regulatory Compliance, Audit Management, Document Management, and Reporting & Analytics. These capabilities work together to strengthen your organization's governance framework and risk management processes."
        },
        {
            question: "How do you approach risk management?",
            answer: "We identify and address all organizational risks through comprehensive risk assessment, risk analysis and prioritization, root cause analysis of issues and mitigation strategies, and trend analysis. Our approach ensures that risks are proactively managed and aligned with your business objectives."
        },
        {
            question: "What certifications does your team hold?",
            answer: "Our expert team includes professionals with various prestigious certifications such as CIA (Certified Internal Auditor), CISA (Certified Information Systems Auditor), CISSP (Certified Information Systems Security Professional), CISM (Certified Information Security Manager), and ISO LA/LI (Lead Auditor/Lead Implementer). This expertise ensures best-in-class GRC implementation."
        },
        {
            question: "How do you align governance with business goals?",
            answer: "We align processes and actions with your organization's business goals by establishing clear security governance frameworks and specifying accountability at all levels. Our governance approach ensures that security and compliance initiatives directly support and enable your strategic business objectives."
        }
    ];

    return (
        <>
            <CommonHero
                subtleHeading="GRC Solutions"
                heading="Strengthen Your Organization\nwith Best-in-Class GRC"
                subheading="Embed excellent business practices with comprehensive governance, risk management, and compliance solutions tailored to your needs."
                buttontitle="Let's Talk"
            />

            <SectionContainer data={sectionData} />
            <section className="w-full py-12 px-4 md:px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold  text-gray-900 dark:text-gray-100 mb-10">
                    Our GRC Solution Capabilities include
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {data.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-purple-100 dark:bg-purple-900/40 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-300 to-purple-400 dark:from-purple-400 dark:to-purple-500 text-white">
                                    <item.icon size={28} />
                                </div>
                                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
  {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white  leading-tight">We are a Game changer in GRC</h1>
                        <h2 className="text-base md:text-xl  text-white/70 mb-6 leading-tight">
                           We have a vast experience of working with clients across various sectors & countries with an in-house expert team of technology professionals and engineers. Terralogic strengthens the team of professionals with various certifications such as CIAs, CISAs, CISSPs, CISM, and ISO LA/LI.
                        </h2>
                        <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-purple-700 dark:hover:bg-white px-8 py-3 rounded-lg font-semibold shadow-lg">
                            See it in Action →
                        </Button>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Robot placeholder */}
                            <div className="w-80 h-60 bg-white/10 dark:bg-white/5 rounded-3xl flex items-center justify-center">
                                <div className="text-6xl">🤖</div>
                            </div>

                            {/* Floating icons */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 dark:bg-white/10 rounded-2xl flex items-center justify-center">
                                <span className="text-2xl">💬</span>
                            </div>
                            <div className="absolute top-8 -left-4 w-12 h-12 bg-white/20 dark:bg-white/10 rounded-xl flex items-center justify-center">
                                <span className="text-xl">📞</span>
                            </div>
                            <div className="absolute -bottom-2 right-8 w-14 h-14 bg-white/20 dark:bg-white/10 rounded-2xl flex items-center justify-center">
                                <span className="text-xl">✅</span>
                            </div>
                            <div className="absolute bottom-4 -left-6 w-10 h-10 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center">
                                <span className="text-lg">⚡</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQSection faqs={grcFaqs} />
        </>
    )
}
