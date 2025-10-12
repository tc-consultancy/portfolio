import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { industries } from "@/constants/industries";
import CommonHero from '@/components/common/common-hero';

const features = [
    {
        icon: "🔍",
        title: "Detects tone, sentiment, and urgency to guide responses",
        description: "Advanced emotional intelligence for better customer understanding"
    },
    {
        icon: "💬",
        title: "Delivers consistent, multi-channel support via chat and voice",
        description: "Seamless experience across all communication channels"
    },
    {
        icon: "📱",
        title: "Continuously fine-tunes replies from past customer interactions",
        description: "Machine learning that improves with every conversation"
    },
    {
        icon: "⚠️",
        title: "Seamlessly escalates unresolved issues to human teams",
        description: "Smart handoff when human expertise is needed"
    },
    {
        icon: "👤",
        title: "Operates round-the-clock to reduce wait times and boost satisfaction",
        description: "24/7 availability for global customer support"
    }
];



export default function AiCustomerSupportAgent() {
    return (
        <>
            <CommonHero
                subtleHeading="AI CX AGENT"
                heading="Smart Conversations\nInstant Resolutions\n24/7"
                subheading="Deliver lightning-fast support with an AI agent that listens, speaks, and understands—and knows when to escalate. From voice to chat, TC's AI Agent handles your customer interactions with empathy, speed, and brand precision."
                buttontitle="Start 24/7 Smart Support"
            />

            {/* Features Section */}
            <section className="py-20  px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className=" mb-16">
                        <p className="text-purple-500 dark:text-purple-400 font-medium text-sm uppercase tracking-wide mb-4">
                            IT'S ALL ABOUT
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Building Agents that Understand Your Customer
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl  leading-relaxed">
                            Our AI Agents combine advanced LLMs with emotional intelligence to deliver natural conversations,
                            accurate resolutions, and smart escalations. They go beyond scripted responses—adapting to context,
                            learning from every interaction, and responding with empathy that builds lasting customer trust.
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
                            Smarter Support Starts Here: 24/7 AI Agents That Truly Understand Your Customers.
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

            {/* What Sets Us Apart Section */}
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            What Sets Our AI Customer Support Agent Apart
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CX Messaging Assistant */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">💬</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                CX messaging assistant
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Experience fast, accurate, and empathetic conversations with our virtual CX agent.
                            </p>
                        </div>

                        {/* CX Voice Assistant */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🎤</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                CX Voice Assistant
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                An AI-powered voice assistant expertly tuned to your brand's unique voice resolves complex voice inquiries and seamlessly escalates tough cases to human experts.
                            </p>
                        </div>

                        {/* CX Insights */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">📊</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                CX Insights
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Analyze every customer conversation, uncover improvement opportunities, and elevate quality audits.
                            </p>
                        </div>

                        {/* Human-in-the-loop */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">👥</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Human-in-the-loop
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Smart AI meets expert humans. We combine cutting-edge AI technology with adept human insight to drive continuous improvement and deliver exceptional results.
                            </p>
                        </div>

                        {/* AI Agents and RAG */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🤖</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                AI Agents and RAG
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                With AI Agents and Custom RAG, we provide organizations with tailored, enterprise-level chatbots and AI agents that drive efficiency and innovation.
                            </p>
                        </div>

                        {/* 24/7 Availability */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">⏰</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                24/7 Availability
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                AI Agents never sleep. Keep your support running across time zones, holidays, and peak hours—zero downtime, zero wait.
                            </p>
                        </div>

                        {/* Natural Language */}
                        <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm lg:col-start-2">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🗣️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Natural Language
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Advanced natural language processing enables human-like conversations that understand context, nuance, and customer intent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 px-4 ">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            From startups to known brands we have many stories to tell
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="bg-white shadow-lg dark:bg-black rounded-3xl p-12 max-w-5xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {industries.map((industry, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl text-purple-600 dark:text-purple-400">{industry.icon}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {industry.name}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    <FAQSection/>
                </div>
            </section>
        </>
    )
}