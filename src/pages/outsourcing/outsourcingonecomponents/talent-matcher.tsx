import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code, Palette, Database, Cloud, TestTube, Smartphone, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const roles = [
  { id: 'fullstack', name: 'Full-Stack Developer', icon: Code },
  { id: 'designer', name: 'UX/UI Designer', icon: Palette },
  { id: 'data', name: 'Data Scientist', icon: Database },
  { id: 'devops', name: 'DevOps Engineer', icon: Cloud },
  { id: 'qa', name: 'QA Engineer', icon: TestTube },
  { id: 'mobile', name: 'Mobile Developer', icon: Smartphone },
]

const techStacks = [
  'React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java',
  'TypeScript', 'Go', 'Rust', 'AWS', 'Azure', 'Docker',
]

export default function TalentMatcher() {
  const [step, setStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState('')
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [email, setEmail] = useState('')

  const handleNext = () => {
    if (step === 1 && selectedRole) setStep(2)
    else if (step === 2 && selectedTech.length > 0) setStep(3)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    )
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log({ selectedRole, selectedTech, email })
    alert("Thank you! We'll match you with the perfect candidates.")
  }

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-purple-50/10 dark:from-neutral-950 dark:to-purple-950/5 py-20  overflow-hidden">
      {/* Blob Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Headline */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Find Your Perfect Match in 30 Seconds
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Tell us what you need, and we'll connect you with top talent
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          className="relative bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-12">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === step
                    ? 'w-12 bg-purple-400'
                    : i < step
                    ? 'w-8 bg-purple-400/50'
                    : 'w-8 bg-neutral-200 dark:bg-neutral-700'
                }`}
              />
            ))}
          </div>

          {/* Steps */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                  What role do you need?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {roles.map(role => (
                    <button
                      key={role.id}
                      onClick={() => setSelectedRole(role.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                        selectedRole === role.id
                          ? 'border-purple-400 bg-purple-400/10'
                          : 'border-neutral-200 dark:border-neutral-700 hover:border-purple-400/50'
                      }`}
                    >
                      <role.icon
                        className={`w-12 h-12 mx-auto mb-3 ${
                          selectedRole === role.id
                            ? 'text-purple-400'
                            : 'text-neutral-400'
                        }`}
                      />
                      <div className="text-sm font-semibold text-neutral-900 dark:text-white text-center">
                        {role.name}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                  What's your primary tech stack?
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {techStacks.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                        selectedTech.includes(tech)
                          ? 'border-purple-400 bg-purple-400 text-white'
                          : 'border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-purple-400/50'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-6">
                  Select all that apply
                </p>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                  Where should we send your matches?
                </h3>
                <div className="max-w-md mx-auto space-y-6">
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="h-14 text-lg"
                  />
                  <div className="bg-purple-400/10 rounded-xl p-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      <strong>Your selection:</strong>
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                      Role: {roles.find(r => r.id === selectedRole)?.name}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Tech: {selectedTech.join(', ')}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <Button
              onClick={handleBack}
              variant="outline"
              disabled={step === 1}
              className="px-6 py-3"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </Button>

            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedRole) ||
                  (step === 2 && selectedTech.length === 0)
                }
                className="px-8 py-3 bg-purple-400 hover:bg-purple-500 text-white"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!email}
                className="px-8 py-3 bg-purple-400 hover:bg-purple-500 text-white"
              >
                Find My Match
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
