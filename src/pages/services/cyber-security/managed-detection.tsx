import { robo1 } from "@/assets";
import { Button } from "@/components/ui/button";

export default function ManagedDetection() {
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
                            Managed Detection  <br /> And Response.<br />
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg leading-relaxed">
                            Our MDR combines incident response automation with people skills to deliver end-to-end threat management for a resilient cyber defense.</p>
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

            {/* Why Terralogic as MDR Provider Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-800 dark:via-purple-900 dark:to-purple-950 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-16 h-16 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-32 right-32 w-12 h-12 border-2 border-white transform rotate-45"></div>
                    <div className="absolute top-20 right-64 w-20 h-20 border-2 border-white transform rotate-45"></div>
                    <div className="absolute bottom-20 right-20 w-14 h-14 border-2 border-white transform rotate-45"></div>
                    <div className="absolute bottom-32 right-48 w-18 h-18 border-2 border-white transform rotate-45"></div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Why Terralogic as an MDR provider?
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed">
                            For any detected potential threat that is correlated and prioritized, We have a team of qualified
                            personnel who will investigate the origin and scope of the attack. We hunt, monitor, analyze and
                            respond to threats and perform continuous monitoring with centralized visibility.
                        </p>
                    </div>

                    {/* Right Process Flow */}
                    <div className="relative">
                        {/* Process Steps */}
                        <div className="grid grid-cols-3 gap-8 items-center">
                            {/* Step 01 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-2xl text-purple-600">🎯</span>
                                </div>
                                <div className="text-white/60 text-sm font-medium mb-1">01</div>
                                <div className="text-white font-semibold text-sm">STRATEGIZE</div>
                            </div>

                            {/* Step 02 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-2xl text-purple-600">🔍</span>
                                </div>
                                <div className="text-white/60 text-sm font-medium mb-1">02</div>
                                <div className="text-white font-semibold text-sm">HUNT</div>
                            </div>

                            {/* Step 03 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-2xl text-purple-600">📊</span>
                                </div>
                                <div className="text-white/60 text-sm font-medium mb-1">03</div>
                                <div className="text-white font-semibold text-sm">ANALYZE</div>
                            </div>

                            {/* Step 04 */}
                            <div className="text-center col-start-2">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-2xl text-purple-600">⚖️</span>
                                </div>
                                <div className="text-white/60 text-sm font-medium mb-1">04</div>
                                <div className="text-white font-semibold text-sm">NEUTRALIZE</div>
                            </div>

                            {/* Step 05 */}
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                    <span className="text-2xl text-purple-600">🚫</span>
                                </div>
                                <div className="text-white/60 text-sm font-medium mb-1">05</div>
                                <div className="text-white font-semibold text-sm">DISRUPT</div>
                            </div>
                        </div>

                        {/* Connecting Lines */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 300 200">
                                <path
                                    d="M 50 50 Q 150 30 250 50 Q 200 100 150 120 Q 100 100 50 150"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="5,5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offered MDR Services Section */}
            <section className="py-20 px-4 bg-white dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Offered MDR Services
                        </h2>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* SOC Services */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🛡️</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                SOC Services
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Our 24x7 vigilance team helps you strengthen your environment quickly and
                                become more resilient, efficient, and vigilant by solving cyber-security skill
                                shortages and skimming new threats.
                            </p>
                        </div>

                        {/* Incident Response */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🚨</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Incident Response
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                Our wide range of automated processes, and technologies can be deployed at both the
                                network and host layers which assist enterprises with their incident response needs.
                            </p>
                        </div>

                        {/* Threat Hunting */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🎯</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Threat Hunting
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                With advanced asset identification, threat detection, and response capabilities,
                                we protect your network and endpoints & provide a secured environment.
                            </p>
                        </div>

                        {/* Threat Intelligence */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-2xl text-purple-600 dark:text-purple-400">🧠</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Threat Intelligence
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                We enable organizations to secure themselves by combining advanced analytics,
                                threat intelligence, and human expertise to investigate and respond to incidents
                                deployed at the host and network levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our MDR Security Section */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Our MDR Security
                        </h2>
                    </div>

                    {/* Security Features Grid */}
                    <div className="space-y-16">
                        {/* Threat Anticipation */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Threat Anticipation
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                    Our Threat intelligence platform automates the collection, analysis, and correlation of global 
                                    threat data including the latest attacker.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-80 h-60 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-50">🔍</div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center">
                                        <span className="text-xl">⚠️</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 w-16 h-8 bg-purple-300 dark:bg-purple-600 rounded-lg"></div>
                                    <div className="absolute top-1/2 left-6 w-8 h-8 bg-pink-300 dark:bg-pink-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Analyze Data */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="md:order-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Analyze Data
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                    From your entire IT stack and security data and detect suspicious, anomalous activities for 
                                    endpoint threat analytics.
                                </p>
                            </div>
                            <div className="md:order-1 flex justify-center">
                                <div className="w-80 h-60 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder chart illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-50">📊</div>
                                    </div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-end gap-2">
                                            <div className="w-8 h-12 bg-purple-300 dark:bg-purple-600 rounded-t"></div>
                                            <div className="w-8 h-16 bg-purple-400 dark:bg-purple-500 rounded-t"></div>
                                            <div className="w-8 h-20 bg-purple-500 dark:bg-purple-400 rounded-t"></div>
                                            <div className="w-8 h-14 bg-purple-300 dark:bg-purple-600 rounded-t"></div>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-green-300 dark:bg-green-600 rounded-full flex items-center justify-center">
                                        <span className="text-sm">✓</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Collect Continuous Data */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Collect Continuous Data
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                    Determine threats that might impact business and ensure the protection within hours of new, 
                                    successful attacks.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-80 h-60 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder data collection illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-50">💾</div>
                                    </div>
                                    <div className="absolute top-4 left-4 w-16 h-12 bg-purple-300 dark:bg-purple-600 rounded-lg"></div>
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-pink-300 dark:bg-pink-600 rounded-lg"></div>
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-purple-400 dark:bg-purple-500 rounded-lg"></div>
                                    <div className="absolute top-1/2 right-6 w-6 h-6 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Incident Remediation */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="md:order-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                                    Incident Remediation
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                    The Security teams and incident responders utilize our advanced SOAR tools and solution to 
                                    identify threats, break the kill chain, and drastically minimize the meantime to respond.
                                </p>
                            </div>
                            <div className="md:order-1 flex justify-center">
                                <div className="w-80 h-60 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder incident response illustration */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-50">🛡️</div>
                                    </div>
                                    <div className="absolute top-6 left-6 w-12 h-12 bg-red-300 dark:bg-red-600 rounded-full flex items-center justify-center">
                                        <span className="text-xl">⚠️</span>
                                    </div>
                                    <div className="absolute bottom-6 right-6 w-14 h-10 bg-green-300 dark:bg-green-600 rounded-lg flex items-center justify-center">
                                        <span className="text-sm">✓</span>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-300 dark:bg-purple-600 rounded-full border-4 border-white dark:border-slate-800"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
