import CommonHero from '@/components/common/common-hero'
import ServicePageInductries from '@/components/common/service-page-inductries'
import { Button } from '@/components/ui/button'
import { ContactDialog } from '@/components/ContactDialog'

export default function AIML() {
    return (
        <>
            <CommonHero
                subtleHeading="Cognitive Solutions"
                heading="Artificial Intelligence and \n Machine Learning Services"
                subheading="Optimise processes, boost decisions, and fuel growth with our Intelligent AI Solutions tailored for your business challenges."
                buttontitle="Start Your AI Transformation Now"
            />

         

            {/* What do we do Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            What do we do?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-5xl">
                            Terralogic provides a comprehensive and intelligent approach to incorporating Gen AI and ML Services into business operations by providing best in business solutions for our clients. From AI adoption to a hyper-personalised solutions, we got you covered. Our Gen AI and ML services are built to simplify the complexities in your business and help you scale to the next level.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Gen AI Adoption */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">🧠</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Gen AI Adoption
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Discover the power of Gen AI Adoption and upgrade your business & adopting Gen AI tech into your operational system to improve efficiency
                            </p>
                        </div>

                        {/* AI-Enhanced Applications */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">📱</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                AI-Enhanced Applications
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Transform your business applications with Gen AI solutions and fast-pace your digital landscape.
                            </p>
                        </div>

                        {/* AI-Powered Copilots */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">🤖</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                AI-Powered Copilots
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Build AI-driven chatbots & Voicebots capable of interacting with human languages, appointment booking, and providing a personalized customer experience
                            </p>
                        </div>

                        {/* AI enabled enterprise mobile apps */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">📋</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                AI enabled enterprise mobile apps
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Enhance product capabilities with AI-enabled enterprise and mobile solutions.
                            </p>
                        </div>

                        {/* Robotic Process Automation with Gen AI */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">⚙️</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Robotic Process Automation with Gen AI
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Automate repetitive tasks with Gen AI agents.
                            </p>
                        </div>

                        {/* Scalable OCR & NLP AI Solutions */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <span className="text-4xl">📈</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                Scalable OCR & NLP AI Solutions
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Reduce manual processing with scalable Optical Character Recognition (OCR) technology and Natural Language processing solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

               {/* Let's Discuss Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 dark:from-purple-800 dark:via-purple-700 dark:to-pink-700">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Let's Discuss how we can Reshape your Business with Gen AI.
                            </h2>
                            <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                To empower businesses through innovative Generative AI and ML solutions that drive efficiency, foster growth, and enhance customer engagement.
                            </p>
                            <ContactDialog>
                                <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-white dark:text-purple-700 dark:hover:bg-gray-100 px-8 py-6 text-lg rounded-lg font-semibold shadow-lg">
                                    Start Your AI Journey →
                                </Button>
                            </ContactDialog>
                        </div>

                        {/* Right Stats */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                {/* 9 ZB+ */}
                                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">9 ZB+</div>
                                    <div className="text-white/80 text-sm">Enterprise Data</div>
                                </div>

                                {/* 44% */}
                                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">44%</div>
                                    <div className="text-white/80 text-sm">Enterprise Data Goes Unused</div>
                                </div>

                                {/* 68% */}
                                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">68%</div>
                                    <div className="text-white/80 text-sm">Enterprise Data Goes Unused</div>
                                </div>

                                {/* 1B */}
                                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                                    <div className="text-5xl md:text-6xl font-bold text-white mb-2">1B</div>
                                    <div className="text-white/80 text-sm">Apps to be created by 2028</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 bg-white dark:bg-gray-950">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Us?
                        </h2>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Right Scale */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-5xl">🌍</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Right Scale
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We operate in the US, India, and Vietnam, with an expert team supporting global customers.
                            </p>
                        </div>

                        {/* Technology Insights */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-5xl">💡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Technology Insights
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We specialize in industries but solve tech problems with cross-industry solutions.
                            </p>
                        </div>

                        {/* Business Focus */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-5xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Business Focus
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We prioritize technology that drives business value.
                            </p>
                        </div>

                        {/* Integrated Delivery */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-5xl">🧩</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Integrated Delivery
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                We create business-driven tech strategies and provide development and operational services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Approach
                        </h2>
                    </div>

                    {/* Approach Flow */}
                    <div className="relative">
                        {/* Top Row */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                            {/* Define Objective */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                                    <span className="text-3xl">✅</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Define Objective
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Identify and assign specific goals
                                </p>
                            </div>

                            {/* Selection of Tools & Technology */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                                    <span className="text-3xl">🔧</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Selection of Tools & Technology
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Choose tools according to your requirements
                                </p>
                            </div>

                            {/* Pilot Program & Validation */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                                    <span className="text-3xl">📊</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Pilot Program & Validation
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Use the Pilot Program for data accuracy & validation
                                </p>
                            </div>

                            {/* Monitoring & Maintenance */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                                    <span className="text-3xl">👁️</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Monitoring & Maintenance
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Monitor & Update performance as you need
                                </p>
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                            {/* Data Collection & Use Case */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">📈</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Data Collection & Use Case
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Collect data from every corner of your business
                                </p>
                            </div>

                            {/* Model Development */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">🧠</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Model Development
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Develop & Deploy ML models in business operations
                                </p>
                            </div>

                            {/* Operational Integration */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-400 dark:bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">⚙️</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    Operational Integration
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Implement AI tools & Models in business operations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicePageInductries />

        </>
    )
}
