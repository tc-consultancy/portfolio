import { robo1 } from '@/assets'
import { Button } from '@/components/ui/button'
import { ShieldAlert, FileText, Briefcase, BookCheck, ClipboardList, BarChart3 } from "lucide-react";
import { FAQSection } from '@/components/sections/faq-section';

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
     {/* Hero Section */}
     <section className="relative h-full md:h-screen w-full pt-28 md:mt-0 bg-neutral-50 dark:bg-neutral-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 dark:text-pink-400 font-semibold text-sm uppercase tracking-wide">
                            Data Privacy
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mt-4 leading-tight">
                        Data Privacy and <br />  Protection <br />
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-300 mt-6 text-lg leading-relaxed">
                        Protect your enterprise data across multiple environments, ensure compliance with privacy requirements, and reduce operational complexity.
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

            <section className="w-full py-12 px-6 max-w-6xl mx-auto">
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
            <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 dark:from-purple-800 dark:via-purple-900 dark:to-pink-800">
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
           

            <FAQSection/>
    </>
  )
}
