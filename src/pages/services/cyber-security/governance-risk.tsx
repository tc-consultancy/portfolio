import { robo1 } from "@/assets";
import SectionContainer from "@/components/common/section-container";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, BarChart3 } from "lucide-react";

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
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Governance Risk  <br /> & Compliance<br />
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
                            Our goal is to embed excellent business practices for organizations with best in class GRC.</p>
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

            <SectionContainer data={sectionData} />
            <section className="w-full py-12 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10">
                    Our GRC Solution Capabilities include
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
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
            <FAQSection/>
        </>
    )
}
