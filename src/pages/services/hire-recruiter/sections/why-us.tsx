export default function WhyUs() {
  const features = [
    {
      title: "Consistency That Delivers",
      description: "We apply to 20-25 fresh job openings every single day-handpicked from trusted career portals and matched to your profile.",
      image: "/api/placeholder/400/300", // Replace with actual image path
      badge: "Real Jobs Applied Daily"
    },
    {
      title: "Tailored, Not Spammy",
      description: "Every resume is tailored, every application is tracked, and every opportunity is selected with care — nothing random, nothing wasted.",
      image: "/api/placeholder/400/300", // Replace with actual image path
      badge: "Real Jobs Applied Daily"
    }
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 rounded-4xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-gray-400 dark:border-gray-500 rounded-full px-6 py-2 mb-6">
            <span className="text-gray-600 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
              Why Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Apply Wizz?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We apply strategically, daily, and only for relevant roles — so you get interviews, not just inbox noise.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
              {/* Green dot indicator */}
              <div className="w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full mb-6"></div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Image with badge */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover"
                />
                {/* Badge overlay */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {feature.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}