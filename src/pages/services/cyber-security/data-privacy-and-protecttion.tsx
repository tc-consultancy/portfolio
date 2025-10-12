import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, BarChart3 } from "lucide-react";
import { FAQSection } from '@/components/sections/faq-section';
import CommonHero from '@/components/common/common-hero';

export default function DataPrivacyAndProtecttion() {
    const data = [
        { title: "Enterprise Risk Management", icon: ShieldAlert },
        { title: "Third-party Risk Assessment", icon: FileText },
        { title: "Corporate Governance", icon: Briefcase },
        { title: "Regulatory Compliance", icon: BookCheck },
        { title: "Audit Management", icon: ClipboardList },
        { title: "Document Management", icon: FileText },
        { title: "Reporting & Analytics", icon: BarChart3 },
    ];
    const andata = [
        { title: "General Data Protection Regulation (GDPR)", icon: ShieldAlert },
        { title: "Health Insurance Portability and Accountability Act (HIPAA)", icon: FileText },
        { title: "California Consumer Privacy Act (CCPA)", icon: Briefcase },
        { title: "Personal Data Protection Act (PDPA) - Singapore", icon: BookCheck },
        { title: "Personal Data Protection Act (PDPA) - India", icon: ClipboardList },

    ];
    return (
        <>
            <CommonHero
                subtleHeading="Data Privacy"
                heading="Safeguard Your Data with\nComprehensive Privacy Solutions"
                subheading="Protect enterprise data across environments, ensure regulatory compliance, and simplify operations with our privacy protection services."
                buttontitle="Let's Talk"
            />

            <section className="w-full py-12   max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold  text-neutral-900 dark:text-neutral-100 mb-6">
                    Services We Deliver
                </h2>
                <p className="text-base md:text-xl  text-white/70 mb-6 leading-tight max-w-4xl">Terralogic, in collaboration with Securiti.ai, enables organizations to safely utilize the extraordinary power of data and the cloud by regulating the complex security, compliance, and privacy risks.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {data.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-4 bg-purple-100 dark:bg-neutral-800 p-5 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-300 to-purple-400 dark:from-purple-400 dark:to-purple-500 text-white">
                                    <item.icon size={28} />
                                </div>
                                <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div>
                <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
                    <div className="max-w-6xl mx-auto space-y-6 items-center">
                        <div className='max-w-3xl'>
                            <h3 className="text-3xl md:text-4xl font-bold text-white  leading-tight">Regulations and Compliance</h3>
                            <p className="text-base md:text-xl  text-white/70 mb-6 leading-tight">Data protection laws around the world aim to give individuals control over their data, empowering them to know how and by whom their data is being used, thus giving them control over how their personal data is being processed and used. Terralogic assists in complying with the below privacy laws.</p>
                        </div>
                    </div>
                </section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto bg-white dark:bg-neutral-900 p-12 -mt-24 rounded-xl'>
                    {andata.map((item, idx) => {
                        return (
                            <div key={idx} className='flex flex-col gap-4 bg-white max-w-80 dark:bg-neutral-800 p-5 rounded-xl shadow-sm hover:shadow-md transition'>
                                <item.icon size={28} />
                                <p className='text-lg font-medium text-neutral-800 dark:text-neutral-200'>{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>


            <FAQSection />
        </>
    )
}
