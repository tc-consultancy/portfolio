import { ContactDialog } from '@/components/ContactDialog'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, GraduationCap, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom';

export default function StaffingOptions() {
  const staffingOptions = [
    {
      icon: Building2,
      emoji: "👉",
      title: "Are you an enterprise seeking the right employees?",
      description: "We provide expert, end-to-end staffing services, connecting your business with screened, qualified talent to fill your most critical roles quickly and efficiently.",
      cta: "Hire Now",
      category: "🏢 Enterprise Solutions",
      gradient: "from-purple-500 to-indigo-600",
      href:'/services/outsourcing'
    },
    {
      icon: GraduationCap,
      emoji: "👉", 
      title: "Are you a recent graduate looking for your first opportunity?",
      description: "Skip the entry-level grind. Get connected to exclusive, high-potential tech roles and specialized projects. We fast-track your resume past HR and directly to the hiring managers.",
      cta: "Find My First Tech Job",
      category: "🎓 Recent Graduates",
      gradient: "from-purple-600 to-pink-600",
      href:'/services/hire-recruiter'

    },
    {
      icon: Briefcase,
      emoji: "👉",
      title: "Are you a professional seeking a career change?", 
      description: "Let our recruitment experts represent you, apply to tailored opportunities, and secure interviews that align with your experience and ambitions.",
      cta: "Find My Next Job",
      category: "💼 Working Professionals",
      gradient: "from-indigo-600 to-purple-700",
      href:'/services/hire-recruiter'
    }
  ];

  return (
    <section className=" pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-purple-600 dark:border-purple-400 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-700 dark:text-purple-300 font-medium text-sm uppercase tracking-wide">
              Staffing Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're hiring talent or seeking opportunities, our specialized recruitment approach connects the right people with the right roles.
          </p>
        </div>

        {/* Staffing Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {staffingOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-neutral-900"
              >
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {option.category}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  <span className="mr-2">{option.emoji}</span>
                  {option.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {option.description}
                </p>

                {/* CTA Button */}
                  <Link to={option.href} className="w-full flex items-center gap-4 bg-gradient-to-r bg-clip-text text-transparent from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-purple-500 font-semibold  rounded-lg transition-all duration-300 group">
                 {option.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                  </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-500 dark:to-indigo-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Hiring Process?
            </h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies and professionals who trust our recruitment expertise to make the right connections.
            </p>
            <ContactDialog>
              <Button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Get Started Today
              </Button>
            </ContactDialog>
          </div>
        </div>
      </div>
    </section>
  );
}