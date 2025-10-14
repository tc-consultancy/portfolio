import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button'

import CommonHero from '@/components/common/common-hero';
import { ContactDialog } from '@/components/ContactDialog';
import { robo1 } from '@/assets';
import ServicePageInductries from '@/components/common/service-page-inductries';

const features = [
    {
        icon: "�",
        title: "Tracks how AI systems interact with sensitive data",
        description: "Monitor and analyze all AI interactions with confidential information in real-time"
    },
    {
        icon: "🚨",
        title: "Flags unauthorized prompts, inputs, or outputs in real time",
        description: "Instantly detect and alert on suspicious or policy-violating AI activities"
    },
    {
        icon: "✅",
        title: "Enforces compliance with internal and external security policies",
        description: "Automatically apply and maintain security standards across all AI operations"
    },
    {
        icon: "📊",
        title: "Maintains a full audit trail of AI decisions and user interactions",
        description: "Complete logging and tracking for accountability and compliance reporting"
    }
];

const definingFeatures = [
    {
        title: "AI Usage Visibility",
        description: "Gain real-time visibility into all activity, sanctioned and unsanctioned. Know who is using what, where, and how, while complying with the organization's data security protocols."
    },
    {
        title: "Secure AI Adoption",
        description: "Enable teams to use GenAI and AI agents with policy enforcement. Monitor every interaction, ensuring compliance without blocking innovation."
    },
    {
        title: "Threat Prevention",
        description: "Designed to scale with evolving threats, the agent safeguards applications and ensures data is protected within private, isolated environments before they occur."
    }
];

const secOpsFaqs = [
    {
        question: "How does the SecOps AI Agent monitor AI usage?",
        answer: "Our SecOps AI Agent provides real-time monitoring of all AI interactions within your organization. It tracks user activities, analyzes prompts and outputs, and maintains comprehensive logs of all AI system interactions. The agent uses advanced pattern recognition to identify both sanctioned and unsanctioned AI usage across your infrastructure."
    },
    {
        question: "Can the agent detect unauthorized AI tools being used?",
        answer: "Yes! The SecOps AI Agent continuously scans for unauthorized AI applications and services. It flags any unsanctioned tools, shadow AI usage, or third-party integrations that haven't been approved by your security team. This helps prevent data leakage and ensures all AI usage complies with your organization's policies."
    },
    {
        question: "How does it enforce security policies in real-time?",
        answer: "The agent enforces policies through automated rule-based actions. When it detects policy violations—such as sensitive data being shared with AI systems, unauthorized prompts, or risky outputs—it can automatically block the action, alert security teams, or require additional approval. All enforcement actions are logged for audit purposes."
    },
    {
        question: "What kind of audit trail does the SecOps Agent maintain?",
        answer: "The agent maintains a complete audit trail of all AI decisions, user interactions, policy enforcement actions, and security events. This includes timestamps, user identities, input/output content, risk assessments, and response actions. The audit logs are tamper-proof and can be exported for compliance reporting and forensic analysis."
    }
];

export default function OpsAgent() {
    return (
        <>
            <CommonHero
                subtleHeading="AI OPS AGENT"
                heading="Secure and Govern Your AI Workforce \n with Security Operation Agent"
                subheading="Security Operation AI agents detect threats and enforce solutions, giving you 24/7 protection for your AI team."
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
                            Securing AI Usage
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl  leading-relaxed">
                            Our Sec Ops AI agent understands your usage. It's all about securing AI usage and safeguarding your data from potential security breaches within the organization. An agent for a security team to monitor interactions and enforce policies.
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

            {/* case Section */}
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
                            <h1 className='text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight'>
                                Case Study
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                AI Security Sentinel – Proactive Endpoint Defense:
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                An intelligent agent that logs every endpoint event, analyzes behavior in real time, and automatically blocks untrusted or third‑party apps before they launch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Protect your AI systems with round-the-clock threat detection and instant response to keep your operations safe and secur</h2>
                        <ContactDialog>
                            <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-purple-700 dark:hover:bg-white px-8 py-3 rounded-lg font-semibold shadow-lg">
                                See it in Action →
                            </Button>
                        </ContactDialog>
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

            {/* Defining Features Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Defining Features of SecOps AI Agent
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {definingFeatures.map((feature, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                        <ServicePageInductries/>
                        <FAQSection faqs={secOpsFaqs} />
            
        </>

    )
}
