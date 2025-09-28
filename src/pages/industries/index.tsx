import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { IndustrySection } from "./sections/industry-section"

const industries = [
  {
    id: "banking-financial",
    title: "Banking & Financial",
    subtitle: "Financial Services & Banking Solutions",
    description: "The banking and financial services industry encompasses institutions that provide financial products and services to consumers, businesses, and governments. This includes commercial banks, investment banks, insurance companies, credit unions, and fintech companies. These organizations facilitate economic growth by providing capital, managing risk, and enabling financial transactions. Modern financial services leverage technology to offer digital banking, mobile payments, cryptocurrency services, and automated investment platforms, transforming how people and businesses manage their finances."
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Educational Technology & Learning Solutions",
    description: "The education industry encompasses institutions and organizations dedicated to teaching, learning, and knowledge dissemination. This includes K-12 schools, universities, vocational training centers, online learning platforms, and educational technology companies. The sector has evolved significantly with digital transformation, incorporating e-learning platforms, virtual classrooms, AI-powered tutoring systems, and personalized learning experiences. Educational institutions now focus on preparing students for the digital economy while ensuring accessibility and quality education for all learners."
  },
  {
    id: "information-services",
    title: "Information Services",
    subtitle: "Data Management & Information Technology",
    description: "Information services companies provide data processing, hosting, and related services to organizations worldwide. This industry includes data centers, cloud computing providers, software publishers, and information management companies. These businesses enable digital transformation by offering scalable infrastructure, data analytics, cybersecurity solutions, and software-as-a-service platforms. The sector plays a crucial role in supporting modern business operations and enabling innovation across all industries."
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Industrial Production & Smart Manufacturing",
    description: "The manufacturing industry transforms raw materials into finished goods through various production processes. This sector includes automotive, aerospace, electronics, textiles, food processing, and industrial equipment manufacturing. Modern manufacturing embraces Industry 4.0 technologies, incorporating IoT sensors, robotics, artificial intelligence, and predictive maintenance to optimize production efficiency, reduce costs, and improve product quality. Smart factories and sustainable manufacturing practices are driving the industry's evolution."
  },
  {
    id: "technology",
    title: "Technology",
    subtitle: "Innovation & Digital Solutions",
    description: "The technology industry develops, manufactures, and distributes technological products and services. This includes software development, hardware manufacturing, telecommunications, semiconductors, and emerging technologies like artificial intelligence, blockchain, and quantum computing. Tech companies drive innovation across all sectors, creating solutions that enhance productivity, connectivity, and quality of life. The industry continues to evolve rapidly, with focus areas including cloud computing, cybersecurity, mobile applications, and sustainable technology solutions."
  },
  {
    id: "communications",
    title: "Communications",
    subtitle: "Telecommunications & Media Networks",
    description: "The communications industry provides voice, data, and video transmission services through various networks and platforms. This includes telecommunications companies, internet service providers, satellite communications, and broadcasting networks. The sector enables global connectivity through fiber optic networks, 5G wireless technology, satellite systems, and emerging communication technologies. Modern communications infrastructure supports remote work, digital entertainment, IoT devices, and the growing demand for high-speed, reliable connectivity."
  },
  {
    id: "energy-utilities",
    title: "Energy & Utilities",
    subtitle: "Power Generation & Sustainable Energy",
    description: "The energy and utilities sector provides essential services including electricity, natural gas, water, and waste management. This industry encompasses traditional power generation, renewable energy sources, smart grid technologies, and utility infrastructure. Companies in this sector are transitioning toward sustainable energy solutions, incorporating solar, wind, hydroelectric, and other renewable sources. Smart meters, energy storage systems, and grid modernization are key focus areas for improving efficiency and reliability."
  },
  {
    id: "insurance",
    title: "Insurance",
    subtitle: "Risk Management & Protection Services",
    description: "The insurance industry provides financial protection against various risks through policies covering life, health, property, casualty, and specialty risks. Insurance companies assess risk, collect premiums, and pay claims to policyholders. The sector has embraced digital transformation with online policy management, AI-powered underwriting, telematics for auto insurance, and personalized risk assessment. Insurtech companies are innovating with new products and distribution models to meet evolving customer needs."
  },
  {
    id: "media-entertainment",
    title: "Media & Entertainment",
    subtitle: "Content Creation & Digital Media",
    description: "The media and entertainment industry creates, produces, and distributes content across various platforms including television, film, music, gaming, and digital media. This sector includes traditional broadcasters, streaming services, gaming companies, social media platforms, and content creators. Digital transformation has revolutionized content consumption with on-demand streaming, interactive gaming, virtual reality experiences, and user-generated content platforms that engage global audiences."
  },
  {
    id: "transportation-logistics",
    title: "Transportation & Logistics",
    subtitle: "Supply Chain & Mobility Solutions",
    description: "The transportation and logistics industry manages the movement of goods and people through various modes including trucking, shipping, aviation, rail, and emerging mobility solutions. This sector includes freight carriers, logistics providers, ride-sharing services, and autonomous vehicle developers. Technology integration has improved route optimization, real-time tracking, warehouse automation, and last-mile delivery solutions. The industry is evolving toward sustainable transportation with electric vehicles and alternative fuel technologies."
  },
  {
    id: "consumer-goods",
    title: "Consumer Goods",
    subtitle: "Retail Products & Consumer Brands",
    description: "The consumer goods industry manufactures and distributes products for personal and household use, including food and beverages, personal care items, household products, and consumer electronics. Companies in this sector focus on brand development, product innovation, and supply chain efficiency. E-commerce integration, sustainable packaging, personalized products, and direct-to-consumer sales models are transforming how consumer goods companies reach and serve their customers."
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Medical Services & Health Technology",
    description: "Businesses in the healthcare industry offer medical services, produce medical equipment or medications, provide health insurance, and facilitate patient healthcare delivery. The healthcare industry encompasses many businesses, from research to production to facility management. Equal access to holistic, high-quality health care services is essential for improving and sustaining public health, reducing disease, decreasing avoidable disability and premature death, and achieving health equity for all individuals. As for the advantages of primary health care to society, it provides professional care to the patients by integrating an action-driven approach that combines various protective measures, treatment of chronic disease, and encouragement of self-care."
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    subtitle: "Biotechnology & Pharmaceutical Research",
    description: "The life sciences industry focuses on research, development, and commercialization of products and services that improve human health and quality of life. This includes pharmaceutical companies, biotechnology firms, medical device manufacturers, and research institutions. The sector drives innovation in drug discovery, gene therapy, personalized medicine, and diagnostic technologies. Advanced technologies like AI, machine learning, and genomics are accelerating research and development processes, leading to breakthrough treatments and therapies."
  },
  {
    id: "retail",
    title: "Retail",
    subtitle: "Commerce & Customer Experience",
    description: "The retail industry involves the sale of goods and services directly to consumers through various channels including physical stores, e-commerce platforms, and mobile applications. This sector includes department stores, specialty retailers, grocery chains, and online marketplaces. Digital transformation has created omnichannel experiences, personalized shopping, augmented reality try-ons, and seamless payment solutions. Retailers focus on customer experience, inventory optimization, and sustainable practices to remain competitive."
  },
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality",
    subtitle: "Tourism & Guest Services",
    description: "The travel and hospitality industry provides services to travelers and tourists, including accommodations, transportation, dining, entertainment, and travel planning. This sector includes hotels, airlines, cruise lines, restaurants, travel agencies, and tourism boards. Technology has transformed the industry with online booking platforms, mobile check-ins, personalized recommendations, and virtual travel experiences. The focus on sustainable tourism and contactless services continues to shape industry evolution."
  }
]

export function IndustriesPage() {
  const location = useLocation()

  useEffect(() => {
    // Handle anchor link scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We provide specialized solutions across diverse industries, understanding unique challenges and delivering tailored services that drive growth and innovation.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {industries.map((industry, index) => (
            <IndustrySection
              key={industry.id}
              industry={industry}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}