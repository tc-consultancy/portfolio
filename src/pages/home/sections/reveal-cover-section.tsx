import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { home } from '@/assets'

const sectionsData = [
  {
    id: 1,
    title: (
      <>
        Problem <span className="font-bold italic">Solving</span>
      </>
    ),
    subtitle: 'Book a Demo',
    description:
      "We follow a structured and innovative problem-solving approach to deliver effective IT solutions. Our methodology ensures that we identify challenges, analyze root causes, and implement scalable solutions tailored to your business needs. By leveraging advanced data analytics, user feedback, and collaboration across teams, we ensure our solutions are well-informed and continuously evolve. Our focus on proactive issue resolution helps clients stay ahead of potential obstacles, maximizing the impact of each solution. We strive to foster long-term partnerships by consistently delivering value and exceeding expectations.",
    image: home.ps,
    layout: 'content-left',
  },
  {
    id: 2,
    title: (
      <>
        Our <span className="font-bold italic">Architecture</span>
      </>
    ),
    subtitle: 'Book a Demo',
    description:
      "We use a microservices and modular approach, allowing components to scale independently, ensuring flexibility and maintainability. Our architecture enables the seamless integration of new features, rapid deployment, and high availability, which is critical in today's fast-paced digital world. With a focus on modularity, we design each service to be independent yet capable of working in harmony with others. This approach ensures that our systems are agile, adaptable, and capable of evolving to meet changing business requirements while maintaining stability and performance at scale.",
    image: home.oa,
    layout: 'content-right',
  },
  {
    id: 3,
    title: (
      <>
        Work <span className="font-bold italic">Process</span>
      </>
    ),
    subtitle: 'Book a Demo',
    description:
      "We start by understanding your challenges, goals, and technical requirements to craft a solution that aligns with your business objectives. Our team conducts in-depth research, evaluates industry best practices, and designs a strategic roadmap for implementation. We emphasize a collaborative approach, keeping you engaged throughout every stage of development. Our iterative process ensures that we remain aligned with your vision, delivering high-quality results on time. With continuous feedback and adjustments, we ensure that the final product meets your exact specifications, ultimately driving measurable success.",
    image: home.wp,
    layout: 'content-left',
  },
  {
    id: 4,
    title: (
      <>
        Management <span className="font-bold italic">Process</span>
      </>
    ),
    subtitle: 'Book a Demo',
    description:
      "Our management philosophy is built on efficiency, transparency, and innovation. We ensure seamless collaboration, strategic decision-making, and a results-driven approach to empower our teams and deliver outstanding solutions. Our management structure fosters open communication across all levels, ensuring that decisions are well-informed and timely. By focusing on results, we create an environment where teams can thrive, driving innovation and growth. We continuously assess project performance to ensure milestones are met and that the final product meets the highest standards of quality, value, and impact.",
    image: home.mp,
    layout: 'content-right',
  },
  {
    id: 5,
    title: (
      <>
        Our <span className="font-bold italic">Tools</span>
      </>
    ),
    subtitle: 'Book a Demo',
    description:
      "We leverage cutting-edge tools and technologies to ensure efficiency, scalability, and innovation in our solutions. Our toolset is carefully selected to optimize development, collaboration, and performance. We utilize modern frameworks like Next.js, React, Node.js, and TypeScript to build high-performance, scalable applications. In addition to our technical stack, we employ tools for continuous integration, version control, and automated testing to enhance productivity and maintain the integrity of the codebase. By staying at the forefront of technological advancements, we ensure that our solutions are robust, future-proof, and capable of addressing complex business challenges.",
    image: home.tool,
    layout: 'content-left',
  },
]

function SectionPanel({
  item,
  scrollYProgress,
}: {
  item: (typeof sectionsData)[0]
  scrollYProgress: any
}) {
  const isContentLeft = item.layout === 'content-left'

  const contentY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '10%'])

  const content = (
    <motion.div
      style={{ y: contentY }}
      className={`flex flex-col justify-center p-8 mb-8 text-white md:p-12 lg:p-14 xl:p-16 ${
        isContentLeft ? 'items-start text-left' : 'items-end text-right'
      }`}
    >
      <div className="max-w-lg">
        <h1 className="font-['Cormorant_Garamond'] text-4xl font-medium leading-none md:text-4xl lg:text-6xl xl:text-7xl">
          {item.title}
        </h1>

        <p className="font-['Cormorant_Garamond'] leading-tight mt-4 md:mt-2 lg:mt-4 text-sm md:text-sm  lg:text-lg font-medium">
          {item.description}
        </p>
      </div>
      <Button className='mt-6 md:mt-2 lg:mt-6 bg-gradient-to-br from-purple-400 via-pruple-500 to-violet-500'>Book a Demo</Button>
    </motion.div>
  )

  const image = (
    <motion.div
      className="h-40 md:h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${item.image})`,
        y: imageY,
      }}
    />
  )

  return (
    <div className="grid h-[85vh] md:h-[72vh] lg:h-[80vh] xl:h-screen w-full grid-cols-1 bg-zinc-900 md:grid-cols-2">
      {isContentLeft ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  )
}

export default function RevealCoverSection() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  return (
    <div ref={containerRef} className="relative bg-black">
      {sectionsData.map((item, index) => {
        const start = index / sectionsData.length
        const end = (index + 1) / sectionsData.length
        const sectionScrollYProgress = useTransform(scrollYProgress, [start, end], [0, 1])

        return (
          <div key={item.id} className="sticky top-0 h-[85vh] md:h-[72vh] lg:h-[80vh] xl:h-screen">
            <SectionPanel item={item} scrollYProgress={sectionScrollYProgress} />
          </div>
        )
      })}
    </div>
  )
}