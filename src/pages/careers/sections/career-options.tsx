import { JobApplicationDialog } from '@/components/JobApplicationDialog'
import { 
  Code, 
  Brain, 
  Network, 
  BarChart3, 
  Users, 
  Database, 
  Settings, 
  Target, 
  GitBranch, 
  Shield,
  Plus
} from 'lucide-react'

export default function CareerOptions() {
  const careerOptions = [
    {
      title: "Benchsales Recruiter",
      description: "Drive business growth by identifying and recruiting top talent for our clients across various industries.",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Java Full Stack Developer", 
      description: "Build end-to-end applications using Java, Spring Boot, React, and modern web technologies.",
      icon: Code,
      color: "text-green-600 dark:text-green-400"
    },
    {
      title: "AI/ML Engineer",
      description: "Develop and deploy machine learning models and AI solutions to solve complex business problems.",
      icon: Brain,
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Network Engineer",
      description: "Design, implement, and maintain network infrastructure to ensure optimal connectivity and security.",
      icon: Network,
      color: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Data Analyst",
      description: "Transform raw data into actionable insights through statistical analysis and visualization.",
      icon: BarChart3,
      color: "text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Business Analyst",
      description: "Bridge the gap between business needs and technical solutions through requirements analysis.",
      icon: Target,
      color: "text-indigo-600 dark:text-indigo-400"
    },
    {
      title: "Data Engineer",
      description: "Build and maintain data pipelines and infrastructure for large-scale data processing.",
      icon: Database,
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Software Engineering Manager",
      description: "Lead engineering teams and drive technical strategy while managing product development lifecycle.",
      icon: Settings,
      color: "text-red-600 dark:text-red-400"
    },
    {
      title: "Product Manager",
      description: "Define product vision and strategy while coordinating cross-functional teams to deliver solutions.",
      icon: Target,
      color: "text-pink-600 dark:text-pink-400"
    },
    {
      title: "Scrum Master",
      description: "Facilitate agile development processes and remove impediments to ensure team productivity.",
      icon: Users,
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      title: "DevOps (Site Reliability) Engineer",
      description: "Ensure system reliability, scalability, and performance through automation and monitoring.",
      icon: GitBranch,
      color: "text-teal-600 dark:text-teal-400"
    },
    {
      title: "Other Positions",
      description: "Don't see your role? Tell us about yourself and we'll find the right opportunity for you.",
      icon: Plus,
      color: "text-gray-600 dark:text-gray-400"
    }
  ]

  return (
    <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-purple-600 dark:border-purple-400 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-700 dark:text-purple-300 font-medium text-sm uppercase tracking-wide">
              Join Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Build Your Career With Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover exciting opportunities to grow your career in technology, consulting, and innovation. Join our dynamic team and make an impact.
          </p>
        </div>

        {/* Career Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerOptions.map((career, index) => {
            const IconComponent = career.icon
            return (
              <div 
                key={career.title}
                className="group rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 p-6 hover:border-gray-400 dark:hover:border-white/20 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-white/5 ring-1 ring-gray-200 dark:ring-white/10">
                    <IconComponent className={`h-6 w-6 ${career.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {career.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-white/60">
                      Career Opportunity
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <p className="text-sm text-gray-600 dark:text-white/70">
                    {career.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <JobApplicationDialog 
                    position={career.title}
                    isOtherPosition={career.title === "Other Positions"}
                  >
                    <button className="inline-flex items-center rounded-full border border-gray-300 dark:border-white/20 px-4 py-2 text-sm font-medium text-gray-700 dark:text-white/80 transition hover:border-gray-400 dark:hover:border-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5">
                      Apply Now
                    </button>
                  </JobApplicationDialog>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto">
              Join our team of talented professionals and work on cutting-edge projects that make a difference.
            </p>
            <JobApplicationDialog position="General Application" isOtherPosition={true}>
              <button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Apply Today
              </button>
            </JobApplicationDialog>
          </div>
        </div>
      </div>
    </section>
  )
}