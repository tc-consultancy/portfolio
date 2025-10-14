import { FAQSection } from '@/components/sections/faq-section';
import { Button } from '@/components/ui/button'

import CommonHero from '@/components/common/common-hero';
import { ContactDialog } from '@/components/ContactDialog';
import { robo1 } from '@/assets';
import ServicePageInductries from '@/components/common/service-page-inductries';

const features = [
    {
        icon: "📝",
        title: "Creates personalized content at scale across platforms",
        description: "Generate tailored content for multiple channels automatically while maintaining brand consistency"
    },
    {
        icon: "�",
        title: "A/B tests and optimizes campaigns on the fly",
        description: "Continuously test variations and optimize performance in real-time for maximum impact"
    },
    {
        icon: "⚙️",
        title: "Automates the boring stuff so your team stays creative",
        description: "Handle repetitive marketing tasks automatically, freeing your team to focus on strategy and innovation"
    },
    {
        icon: "📊",
        title: "Delivers data-driven insights to inform your next move",
        description: "Analyze trends and performance metrics to provide actionable recommendations for your campaigns"
    }
];

const definingFeatures = [
    {
        title: "Content Automation",
        description: "From social posts to email campaigns, the Marketing Agent creates on-brand content at scale, adapting tone and style for each platform while maintaining consistency."
    },
    {
        title: "Campaign Optimization",
        description: "Real-time A/B testing and performance analysis ensure your campaigns are always improving. The agent learns what works and automatically adjusts strategies."
    },
    {
        title: "Trend Intelligence",
        description: "Stay ahead of the curve with AI-powered trend spotting and competitive analysis. Get actionable insights that inform your marketing strategy and drive results."
    }
];

const marketingFaqs = [
    {
        question: "How does the Marketing Agent create personalized content?",
        answer: "The Marketing Agent uses advanced AI to understand your brand voice, target audience, and campaign goals. It generates personalized content for different platforms—social media, email, blogs, ads—while maintaining consistency. The agent adapts tone, style, and messaging based on audience segments and platform requirements, ensuring every piece resonates with its intended audience."
    },
    {
        question: "Can the agent run A/B tests automatically?",
        answer: "Yes! The Marketing Agent continuously runs A/B tests on your campaigns, testing different headlines, copy variations, images, and CTAs. It analyzes performance in real-time and automatically optimizes based on what's working. You get detailed insights on winning variations and the agent applies learnings to future campaigns automatically."
    },
    {
        question: "What marketing tasks can the agent automate?",
        answer: "The agent handles repetitive tasks like content scheduling, social media posting, email campaign setup, performance reporting, and basic analytics. It can also automate content repurposing across platforms, hashtag research, competitor monitoring, and trend analysis. This frees your team to focus on creative strategy and high-level decision making."
    },
    {
        question: "How does the agent provide data-driven insights?",
        answer: "The Marketing Agent analyzes campaign performance, audience behavior, market trends, and competitive activity to deliver actionable insights. It identifies patterns, predicts outcomes, and recommends next steps based on data. You get clear recommendations on what content to create, which channels to prioritize, and how to optimize your marketing spend for maximum ROI."
    },
    {
        question: "Can the Marketing Agent work across multiple channels simultaneously?",
        answer: "Absolutely! The agent is designed for multichannel execution. It can launch and manage campaigns across email, social media (LinkedIn, Twitter, Facebook, Instagram), newsletters, blogs, and paid advertising—all from one unified workspace. It ensures consistent messaging while adapting content format and style for each platform's unique requirements."
    },
    {
        question: "How does the agent stay on-brand with our company's voice?",
        answer: "The Marketing Agent learns your brand voice by analyzing your existing content, style guides, and messaging preferences. You can set brand parameters, tone guidelines, and approval workflows. The agent maintains consistency across all content while allowing flexibility for different audiences and platforms. You always have final approval before content goes live."
    },
    {
        question: "What kind of trend insights does the agent provide?",
        answer: "The agent monitors industry trends, competitor activities, social media conversations, and emerging topics in real-time. It alerts you to trending hashtags, viral content patterns, and shifts in audience behavior. You'll get actionable recommendations on which trends to leverage, what content to create, and when to publish for maximum engagement and relevance."
    },
    {
        question: "How does audience segmentation work with the Marketing Agent?",
        answer: "The agent uses behavioral data, engagement history, demographics, and intent signals to segment your audience intelligently. It creates dynamic segments based on user actions and preferences, then tailors messaging for each group. This ensures every campaign reaches the right people with the right message at the right time, maximizing conversion rates and engagement."
    }
];

export default function MarketingAgent() {
    return (
        <>
            <CommonHero
                subtleHeading="AI Marketing Agent"
                heading="Never Miss a Beat. \n Market Smarter with AI"
                subheading="Supercharge Your Brand 24/7: Discover the AI Marketing Agent That Writes Content, Optimizes Campaigns, and Spots Trends Before Your Competitors—Your Ultimate Creative Strategist, Data Analyst, and Execution Partner in One!"
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
                            Marketing that moves faster than the market.
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl  leading-relaxed">
                            The Terralogic Marketing Agent automates content, optimizes campaigns, and spots trends—so you move from idea to execution in minutes. Your team stays creative; your agent handles the rest. Always learning, always delivering results.
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
                                Automating Newsletter Creation with an AI-Powered Content Agent:
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
                                An enterprise-grade AI agent that automates end-to-end newsletter creation—curating content, generating on-brand summaries, and optimizing layouts.
                            </p>

                            <Button className='py-5'>
                                Read More →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Marketing That Never Slows Down.
                        </h2>
                        <p className='text-base md:text-lg text-white mb-6'>
                            Let the Terralogic Marketing Agent handle execution while your team leads with strategy. From insights to impact—it’s always on, always improving.</p>
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

            {/* Our Standout Key Features Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Standout Key Features
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {/* AI Content Generator */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl">📝</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                AI Content Generator
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Instantly generate high-converting content. Create emails, social posts, blog intros, and LinkedIn content—ready to publish and perfectly on-brand.
                            </p>
                        </div>

                        {/* Campaign Optimizer */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl">🔬</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Campaign Optimizer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Boost results with real-time adjustments. Watch your campaigns improve automatically as the AI analyzes performance and makes smart tweaks instantly.
                            </p>
                        </div>

                        {/* Multichannel Automation */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl">⚙️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Multichannel Automation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Launch everywhere at once—effortlessly. Execute campaigns across email, social, and newsletters—all from one powerful AI workspace.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - 2 Cards Centered */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Trend Insights */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Trend Insights
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Stay ahead of the curve. Get real-time alerts on what's trending in your industry, so your content is always relevant and fresh.
                            </p>
                        </div>

                        {/* Audience Intelligence */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Audience Intelligence
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                Personalize every message for maximum impact. Segment your audience and tailor messaging based on behavior, intent, and engagement—for results that matter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ServicePageInductries/>
            <FAQSection faqs={marketingFaqs} />

        </>

    )
}
