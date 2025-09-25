import { ContactDialog } from '@/components/ContactDialog'
import { home } from '@/assets'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'

export default function HireRecruiterHero() {
  return (
    <section className="relative h-svh md:h-full md:min-h-screen isolate overflow-hidden bg-white dark:bg-black text-gray-900 dark:text-white">

      {/* Floating avatar chips (no wavy background) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 select-none">
        <AvatarChip position="left-8 top-40 hidden md:flex" src={home.mp} alt="SDE" label="SDE" labelClass="bg-green-400 text-black" />
        <AvatarChip position="right-12 md:right-16 top-20 md:top-28" src={home.oa} alt="Medical" label="Medical" labelClass="bg-orange-300 text-black" size="md" />
        <AvatarChip position=" left-[40%] md:left-[20%] md:bottom-60 bottom-24" src={home.ps} alt="Analyst" label="Analyst" labelClass="bg-cyan-400 text-black" size="md" />
        <AvatarChip position="left-16 bottom-10 " src={home.wp} alt="AI" label="AI" labelClass="bg-pink-200 text-black" size="sm" />
        <AvatarChip position="right-24 bottom-16 hidden md:flex" src={home.tool} alt="CS" label="CS" labelClass="bg-purple-300 text-black" />
        <AvatarChip position="right-40 top-48 md:top-64 " src={home.tool} alt="Finance" label="Finance" labelClass="bg-yellow-300 text-black" size="md" />
        {/* Mobile versions */}
        <AvatarChip position="left-8 top-40 block md:hidden" src={home.mp} alt="SDE" label="SDE" labelClass="bg-green-400 text-black" size="sm"/>
        <AvatarChip position="right-16 bottom-10 block md:hidden" src={home.wp} alt="AI" label="AI" labelClass="bg-pink-200 text-black" size="sm" />

      </div>

      <div className="mx-auto w-full max-w-7xl px-4 p-20 sm:py-24 md:py-28 lg:py-32 flex items-center justify-center h-full">
        <div className="mx-auto  max-w-5xl pt-24 text-center">
          <h1
            className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl"
          >
            <span className=" text-gray-900 dark:text-white inline-block md:block">Find Your Next</span>
            <span className=" text-gray-900 dark:text-white inline-block md:block ml-2 md:ml-0">Career Here</span>
            <span className="mt-2 block bg-gradient-to-br leading-[1.1] from-indigo-600 via-violet-600 to-fuchsia-700 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-500 bg-clip-text text-transparent">
              We Apply Daily
            </span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-sm md:text-base text-gray-600 dark:text-white/70 sm:text-lg"
          >
            No time to apply? We do it for you. We send 20–25 tailored job applications every day — so you can focus on interviews, not job boards.
          </p>

          <div
            className="mt-6 md:mt-10 flex items-center justify-center gap-4"
          >
            <ContactDialog>
              <Button className="bg-gradient-to-r-purple-fuchsia group hover:-translate-y-2 transition-transform duration-300 dark:bg-white/90 px-6! py-5! text-sm font-semibold text-white dark:text-black shadow-md  hover:bg-gray-800 dark:hover:bg-white">
              <span> Get jobs Applied</span>
              <span className='group-hover:scale-150 group-hover:rotate-45 transition-transform duration-300'><ArrowUpRight/></span>
              </Button>
            </ContactDialog>

          
          </div>

          <div
            className="mx-auto mt-6 md:mt-10 h-1 w-16 rounded bg-gray-400 dark:bg-white/70"
          />
        </div>
      </div>

    </section>
  )
}


type AvatarChipProps = {
  src: string
  alt: string
  label: string
  labelClass?: string
  position?: string
  size?: 'sm' | 'md' | 'lg'
}

function AvatarChip({ src, alt, label, labelClass = '', position = '', size = 'lg' }: AvatarChipProps) {
  const sizeClasses =
    size === 'sm' ? 'h-14 w-14' : size === 'md' ? 'h-20 w-20' : 'h-28 w-28'

  return (
    <div className={`absolute ${position} flex flex-col items-center gap-2`}>
      <div className={`rounded-full overflow-hidden ring-2 ring-white/70 dark:ring-black/70 shadow-md ${sizeClasses}`}>
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
      <span className={`pointer-events-auto rounded-full px-3 py-1 text-xs font-semibold shadow ${labelClass}`}>{label}</span>
    </div>
  )
}
