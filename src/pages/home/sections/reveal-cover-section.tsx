import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

const sectionsData = [
  {
    id: 1,
    title: (
      <>
        A <span className="font-bold italic">Breath</span>. <br />
        <span className="text-5xl">Of Fresh Air.</span>
      </>
    ),
    subtitle: 'Chapter I, page XV',
    description:
      'A Prophet sat in the market-place and told the fortunes of all who cared to engage his services. Suddenly there came running up one who told him that his house had been broken into by thieves, and that they had made off with everything they could lay hands on.',
    image: 'https://zoric.studio/codepen/swiper-1.jpg',
    layout: 'content-left',
  },
  {
    id: 2,
    title: (
      <>
        The <span className="font-bold italic">Drop</span>. <br />
        <span className="text-5xl">Of Eternal life.</span>
      </>
    ),
    subtitle: 'Chapter II, page VII',
    description:
      'A thirsty Crow found a Pitcher with some water in it, but so little was there that, try as she might, she could not reach it with her beak, and it seemed as though she would die of thirst within sight of the remedy.',
    image: 'https://zoric.studio/codepen/swiper-3.jpg',
    layout: 'content-right',
  },
  {
    id: 3,
    title: (
      <>
        A <span className="font-bold italic">Sense</span>. <br />
        <span className="text-5xl">Of Things to Come.</span>
      </>
    ),
    subtitle: 'Chapter III, page XI',
    description:
      'Every man carries Two Bags about with him, one in front and one behind, and both are packed full of faults. The Bag in front contains his neighbours’ faults, the one behind his own. Hence it is that men do not see their own faults, but never fail to see those of others.',
    image: 'https://zoric.studio/codepen/swiper-5.jpg',
    layout: 'content-left',
  },
  {
    id: 4,
    title: (
      <>
        The <span className="font-bold italic">Fourth</span>. <br />
        <span className="text-5xl">Chapter.</span>
      </>
    ),
    subtitle: 'Chapter IV, page I',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    image: 'https://zoric.studio/codepen/swiper-2.jpg',
    layout: 'content-right',
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
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  const content = (
    <motion.div
      style={{ y: contentY }}
      className={`flex flex-col justify-center p-8 text-white md:p-16 ${
        isContentLeft ? 'items-start text-left' : 'items-end text-right'
      }`}
    >
      <div className="max-w-md">
        <h1 className="font-['Cormorant_Garamond'] text-6xl font-medium leading-none md:text-7xl">
          {item.title}
        </h1>
        <p
          className={`font-['Cormorant_SC'] mt-4 text-sm uppercase tracking-widest ${
            isContentLeft ? 'self-start' : 'self-end'
          }`}
        >
          {item.subtitle}
        </p>
        <p className="font-['Cormorant_Garamond'] mt-8 text-lg font-medium">
          {item.description}
        </p>
      </div>
    </motion.div>
  )

  const image = (
    <motion.div
      className="h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${item.image})`,
        y: imageY,
      }}
    />
  )

  return (
    <div className="grid h-screen w-full grid-cols-1 bg-zinc-900 md:grid-cols-2">
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
          <div key={item.id} className="sticky top-0 h-screen">
            <SectionPanel item={item} scrollYProgress={sectionScrollYProgress} />
          </div>
        )
      })}
    </div>
  )
}