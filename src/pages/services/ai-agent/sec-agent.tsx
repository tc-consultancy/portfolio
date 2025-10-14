import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button'
import { industries } from '@/constants/industries';
import CommonHero from '@/components/common/common-hero';
import ServicePageInductries from '@/components/common/service-page-inductries';

const features = [
    {
        icon: "📄",
        title: "Invoices, Receipts, and Bills",
        description: "Extract key financial data from invoices, receipts, and bills automatically"
    },
    {
        icon: "🆔",
        title: "Identity Documents (PAN, Aadhar, License, etc.)",
        description: "Process government IDs and official documents with high accuracy"
    },
    {
        icon: "📋",
        title: "Forms (Medical, HR, Onboarding, Compliance)",
        description: "Digitize and process various forms across different industries"
    },
    {
        icon: "✍️",
        title: "Handwritten Notes & Sketches",
        description: "Convert handwritten content into digital, searchable text"
    },
    {
        icon: "🌐",
        title: "Printed Text in Any Language",
        description: "Support for multiple languages and character sets globally"
    }
];

const ocrFaqs = [
    {
        question: "What types of documents can the OCR Agent process?",
        answer: "Our OCR Agent can process a wide variety of documents including invoices, receipts, bills, identity documents (PAN, Aadhar, driver's licenses), medical forms, HR documents, onboarding paperwork, compliance forms, handwritten notes, sketches, and printed text in any language. It's designed to handle both structured and unstructured documents with high accuracy."
    },
    {
        question: "How accurate is the OCR Agent with handwritten text?",
        answer: "Our OCR Agent uses advanced AI models specifically trained for handwriting recognition, achieving high accuracy even with varied handwriting styles. It continuously learns and improves from processed documents. For critical applications, the system includes validation mechanisms and can flag uncertain extractions for human review, ensuring reliability."
    },
    {
        question: "Can the OCR Agent handle documents in multiple languages?",
        answer: "Yes! Our OCR Agent supports multi-lingual document processing, including complex scripts and character sets from languages worldwide. It can automatically detect the language and apply the appropriate recognition models, making it ideal for global businesses that deal with documents in various languages."
    },
    {
        question: "How does the OCR Agent differ from traditional OCR tools?",
        answer: "Unlike traditional OCR tools that simply extract text, our OCR Agent understands context and meaning. It uses AI to validate extracted data in real-time, can trigger automated workflows based on document content, integrates seamlessly with your existing systems, and learns from usage to improve accuracy. It's not just text extraction—it's intelligent document automation."
    },
    {
        question: "How secure is the document processing with the OCR Agent?",
        answer: "Security is our top priority. The OCR Agent uses enterprise-grade encryption for data in transit and at rest, complies with industry standards like GDPR and HIPAA, and can be deployed on-premises or in private cloud environments. All processed documents can be automatically deleted after extraction, and we provide detailed audit logs for compliance purposes."
    }
];

export default function SecAgent() {
    return (
        <>
            <CommonHero
                subtleHeading="AI OCR AGENT"
                heading="AI OCR Automation Agent\nfor Every Business\nSupports Any Language. Any Document"
                subheading="Turn documents into decisions. Our OCR Agent doesn't just read text, it extracts meaning, detects patterns, and integrates seamlessly into your workflows. Say goodbye to manual data entry and hello to intelligent automation. Faster. Smarter. Error-free."
                buttontitle="Book a Demo"
            />

            {/* Features Section */}
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className=" mb-16">
                        <p className="text-purple-500 dark:text-purple-400 font-medium text-sm uppercase tracking-wide mb-4">
                            IT'S ALL ABOUT
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Turning documents into Digital
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl  leading-relaxed">
                            Our OCR Agent transforms scanned documents, PDFs, handwritten forms, and images
                            into structured, actionable data in real time. With enterprise-grade security, adaptive
                            learning, and seamless API integration, it empowers teams to automate document-heavy
                            workflows and unlock efficiency like never before.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">{feature.icon}</span>
                                </div>
                                <div>
                                    <h3 className=" font-semibold text-gray-900 dark:text-white mb-1">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            From handwritten notes to invoices—capture it all with Intelligent OCR built for your business document management.</h2>
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

            {/* What Makes Our OCR Agent Different Section */}
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            What Makes Our OCR Agent Different?
                        </h2>
                    </div>

                    {/* Comparison Table */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Features Column */}
                            <div className="space-y-6">
                                <div className="h-16 flex items-center">
                                    <div className="w-full"></div>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        AI-Driven Context Understanding
                                    </h3>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        Real-Time Smart Validation
                                    </h3>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        Handwriting & Multi-Lingual Support
                                    </h3>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        Built-in Agent Actions
                                    </h3>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        Seamless Integration
                                    </h3>
                                </div>

                                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                        Customizable & Self-Learning
                                    </h3>
                                </div>
                            </div>

                            {/* Our OCR Agent Column */}
                            <div className="space-y-6">
                                <div className="h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                                    <h3 className="text-white font-bold text-lg">Our OCR Agent</h3>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Understand content, not just text</span>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Cross-checks extracted data instantly</span>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Supports complex scripts & languages</span>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Triggers downstream automation</span>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Works with CRM, ERP, and internal apps</span>
                                </div>

                                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Gets smarter with usage</span>
                                </div>
                            </div>

                            {/* Traditional OCR Tools Column */}
                            <div className="space-y-6">
                                <div className="h-16 bg-gray-400 dark:bg-gray-600 rounded-xl flex items-center justify-center">
                                    <h3 className="text-white font-bold text-lg">Traditional OCR Tools</h3>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Basic text extraction only</span>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">No context-aware validation</span>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Limited recognition</span>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Manual post-processing required</span>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Static, siloed setup</span>
                                </div>

                                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center gap-3">
                                    <span className="text-red-600 dark:text-red-400 text-xl">✗</span>
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Fixed template-based approach</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <ServicePageInductries/>
             <FAQSection faqs={ocrFaqs} />

        </>

    )
}
