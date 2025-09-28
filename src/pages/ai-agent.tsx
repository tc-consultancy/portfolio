import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Database, Shield } from "lucide-react";
import { robo1 } from "@/assets";
import { FAQSection } from "@/components/sections/faq-section";
import { Link } from "react-router-dom";

export default function AiAgents() {
    const agents = [
        {
            id: "cx-agent",
            title: "CX Agent",
            icon: Crown,
            description: "24/7 chat and voice support that instantly resolves everyday inquiries and insights that improve conversation. With an amalgamation of AI and Human Expertise, deliver exceptional services.",
        },
        {
            id: "it-ops-agent",
            title: "IT Ops Agent",
            icon: Database,
            description: "An AI Agent that analyzes complex IT issues at once, acts on multiple incidents in unison, and significantly reduces downtime. An agent with tenfold expertise and continuously learning and mastering new tools.",
        },
        {
            id: "sec-ops-agent",
            title: "Sec Ops Agent",
            icon: Shield,
            description: "Effectively monitor AI tools across your organization and gain insights into data usage. Secure GenAI interaction, detect risks, protect sensitive data, and ensure compliance requirements in one agent.",
        },
        {
            id: "ocr-agent",
            title: "OCR Agent",
            icon: Shield,
            description: "Turn documents into decisions. Our OCR Agent doesn’t just read text—it extracts meaning, detects patterns, and integrates seamlessly into your workflows. Say goodbye to manual data entry and hello to intelligent automation. Faster. Smarter. Error-free.",
        },
        {
            id: "marketing-agent",
            title: "Marketing Agent",
            icon: Shield,
            description: "Fuel your brand with an AI marketing agent that transforms insights into impact. From lead generation to running an optimized marketing campaign, this agent will work around the clock so you never miss a beat.",
        },


    ];
    return (
        <>
            <section className="relative h-screen w-full pt-40 md:mt-0 bg-gray-50 dark:bg-gray-900 md:py-20 px-6 flex items-center justify-center">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-pink-600 font-semibold text-sm uppercase tracking-wide">
                            AI Agents as a Service
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">
                            Smart business <br /> starts with <br /> intelligent AI agents
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
                            Reimagine business with intelligent AI Agents. Our agents integrate
                            with your systems to automate processes, drive insights, and deliver
                            smarter outcomes—faster and at scale.
                        </p>
                        <Button className="mt-8 px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white shadow-lg">
                            Build Your AI Agents →
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
            <section className="py-16 px-4 transition-colors mt-12">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className=" mb-16">
                        <p className="text-purple-400 text-sm font-medium mb-4 tracking-wide">
                            Our AI Agents
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Empower Every Business Function
                            <br />
                            with Purpose-Built AI Agents
                        </h2>
                    </div>

                    {/* Agent Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {agents.map((agent) => {
                            const IconComponent = agent.icon;
                            return (
                                <div
                                    key={agent.id}
                                    className="bg-agents-card flex flex-col h-96 dark:bg-agents-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-300 flex items-center justify-center">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col items-start justify-between flex-1 ">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-agents-text dark:text-agents-text">
                                                {agent.title}
                                            </h3>
                                            <p className="text-agents-muted dark:text-agents-muted leading-relaxed text-sm">
                                                {agent.description}
                                            </p>
                                        </div>


                                        {/* Know More Link */}
                                        <Link
                                            to={`/agent/${agent.id}`}
                                            className="h-auto flex px-3 py-6 items-center text-purple-400 group hover:text-agents-secondary font-semibold group-hover:translate-x-1 transition-all duration-200"
                                        >
                                            Know More
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-5 transition-all duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Productivity Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Double Your Team's Productivity
                        </h2>
                        <p className="text-xl text-white/90 mb-2">
                            Automate 60% of Work & See a 40% Performance Surge!
                        </p>
                        <p className="text-white/80 mb-6">
                            Why waste another minute on a manual task?<br />
                            The future of productivity is here
                        </p>
                        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold">
                            Boost your Productivity →
                        </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">🌐</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Multilingual Fluency
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Seamlessly translate between languages without missing a beat.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">🛡️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Security Built to Scale
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Enterprise-grade protection that scales with your growth.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">🔄</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Always-On Support
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Resolve inquiries around the clock: 24/7 AI-powered Support.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Tuned to Your Brand Voice
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Communicate in your brand voice—every message, every channel.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">📊</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Live Data Monitoring
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Monitor usage and insights in real time across platforms.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 dark:text-purple-400 text-xl">📈</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            Smart Marketing on Command
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            Generate campaigns, posts, and newsletters with a single prompt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              {/* Our Capabilities Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Capabilities
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We equip your enterprise with AI Agents that
                            think, act, and adapt in real time.
                        </p>
                    </div>

                    {/* Capabilities Grid */}
                    <div className="relative">
                        {/* Central AI Chip */}
                        <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center shadow-2xl relative">
                                <div className="w-20 h-20 bg-purple-900 rounded-lg flex items-center justify-center">
                                    <div className="grid grid-cols-4 gap-1">
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <div key={i} className="w-1 h-1 bg-purple-300 rounded-full"></div>
                                        ))}
                                    </div>
                                </div>
                                {/* Connecting lines */}
                                <div className="absolute -top-2 -left-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                                <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-purple-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Capabilities arranged around the center */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Conversational AI
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Natural language processing for human-like interactions
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Contextual Understanding
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Deep comprehension of business context and user intent
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    LLM Firewall
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Advanced security layer protecting AI interactions
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Custom RAG
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Retrieval-augmented generation tailored to your data
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    AI Governance
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Comprehensive oversight and compliance management
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Real-time Analysis
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Instant data processing and intelligent insights
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Seamless Escalation
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Smooth handoff between AI and human agents
                                </p>
                            </div>

                            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl">
                                <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                                    Secure AI Adoption
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Enterprise-grade security for AI implementation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="relative py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-32 left-32 w-12 h-12 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-20 right-20 w-20 h-20 border-2 border-white transform rotate-45"></div>
                    <div className="absolute bottom-20 left-20 w-14 h-14 border-2 border-white transform rotate-45"></div>
                    <div className="absolute bottom-32 right-32 w-18 h-18 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-white transform rotate-45"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    {/* Header */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                        Our Mission
                    </h2>

                    {/* Mission Statement */}
                    <p className="text-lg md:text-lg text-white/90 leading-relaxed mb-12 px-4">
                        We design Intelligent AI Agents that automate operations, elevate
                        customer experiences, and protect data with enterprise-grade
                        security. Our mission is to drive continuous innovation, connecting
                        teams, clients, and systems through powerful technology.
                    </p>

                    {/* Quote */}
                    <div className="mb-12 flex">
                        <div className="text-6xl md:text-8xl text-white/20 mb-4">"</div>
                        <blockquote className="text-xl md:text-2xl text-white/95 italic font-light leading-relaxed">
                            If those passionate about shaping the future, this
                            is where bold ideas create real impact.
                        </blockquote>
                        <div className="text-6xl md:text-8xl text-white/20 mt-4 rotate-180">"</div>
                    </div>

                    {/* CTA Button */}
                    <Button className="bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 text-white px-8 py-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        Build Your AI Agent →
                    </Button>
                </div>
            </section>

          

            <FAQSection />
        </>

    );
}
