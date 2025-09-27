export default function PricingPlans() {
  const plans = [
    {
      name: "Basic",
      price: "$109",
      period: "Per Month",
      description: "Ideal for entry-level professionals launching their careers.",
      features: [
        "Daily job link delivery - you apply directly",
        "Curated list of newly posted roles",
        "Standard job matching",
        "Email support",
        "Human assistant"
      ],
      buttonText: "Get Started",
      isRecommended: false
    },
    {
      name: "Professional",
      price: "$199", 
      period: "Per Month",
      description: "Perfect for mid-career professionals seeking growth and visibility.",
      features: [
        "20+ job applications submitted daily on your behalf",
        "Tailored resumes customized using our AI-powered job matching algorithm",
        "Applications prioritized for new and high-relevance job postings",
        "Dedicated job success team support (email + chat)",
        "Access to our exclusive interview prep vault",
        "Resume and LinkedIn optimization tips",
        "Monthly strategy check-ins with our career experts",
        "Human assistant"
      ],
      buttonText: "Get Started",
      isRecommended: true
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing Plans
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg ${
                plan.isRecommended 
                  ? 'border-2 border-blue-500 dark:border-blue-400' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Recommended Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Highly Recommended
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-purple-500 dark:bg-purple-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-white dark:text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                plan.isRecommended
                  ? 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300 text-white dark:text-gray-900'
                  : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}