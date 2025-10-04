import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { sendContactEmail } from '@/lib/email'

const companySize = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees',
]

const headquarters = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'India',
  'Singapore',
  'United Arab Emirates',
  'Other',
]

export default function Outsourcing() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companySize: '',
    headquarters: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompanySizeOpen, setIsCompanySizeOpen] = useState(false)
  const [isHeadquartersOpen, setIsHeadquartersOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    const firstName = formData.firstName.trim()
    const lastName = formData.lastName.trim()
    const email = formData.email.trim()

    if (!firstName) nextErrors.firstName = 'First name is required'
    if (!lastName) nextErrors.lastName = 'Last name is required'
    if (!email) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!formData.companySize) {
      nextErrors.companySize = 'Please select company size'
    }
    if (!formData.headquarters) {
      nextErrors.headquarters = 'Please select headquarters location'
    }

    setErrors(nextErrors)
    return nextErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      const firstErrorMessage = Object.values(validationErrors)[0]
      toast.error(firstErrorMessage)
      return
    }
    setIsSubmitting(true)
    try {
      await sendContactEmail({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: '',
        countryCode: '',
        country: formData.headquarters,
        service: 'Outsourcing Services',
        comment: `Company Size: ${formData.companySize}, Headquarters: ${formData.headquarters}`,
      })
      toast.success('Your request has been submitted!')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companySize: '',
        headquarters: '',
      })
      setErrors({})
    } catch (error: any) {
      const message = error?.message || 'Failed to send request. Please try again later.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-purple-400 via-purple-300 to-blue-300 dark:from-purple-900 dark:via-purple-800 dark:to-blue-900 px-6 py-20 md:py-0 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="text-neutral-900 dark:text-white">
          <div className="inline-block mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">deel.</h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-white dark:bg-neutral-800 px-3 py-1 inline-block">Managing a global</span>
            <br />
            <span className="bg-white dark:bg-neutral-800 px-3 py-1 inline-block mt-2">workforce shouldn't</span>
            <br />
            <span className="bg-white dark:bg-neutral-800 px-3 py-1 inline-block mt-2">be this hard.</span>
          </h1>

          <div className="space-y-4 text-base md:text-lg">
            <p>
              Your team is probably juggling up to <span className="font-bold">16 disconnected tools</span> —maybe more—wasting time, money, and energy just to keep up with the shifting global landscape.
            </p>
            <p>
              Hiring, payroll, and compliance feel like roadblocks instead of fuel pushing your company's growth.
            </p>
            <p className="font-semibold">We can change that.</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 px-6 py-6 rounded-lg font-semibold">
              ▶ See it in action
            </Button>
            <Button variant="outline" className="border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white hover:bg-neutral-900/10 dark:hover:bg-white/10 px-6 py-6 rounded-lg font-semibold">
              View pricing
            </Button>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-500 text-xl">★</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">★ 4.8/5 · 10143 Reviews</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Book a free 30-minute product demo
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Experience a personalized product demo and get all your questions answered by our experts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className={cn(errors.firstName ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300')}>
                  First name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="First name"
                  className={cn(
                    'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white',
                    errors.firstName ? 'border-red-500' : ''
                  )}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className={cn(errors.lastName ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300')}>
                  Last name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Last name"
                  className={cn(
                    'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white',
                    errors.lastName ? 'border-red-500' : ''
                  )}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={cn(errors.email ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300')}>
                Work email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Work email"
                className={cn(
                  'bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white',
                  errors.email ? 'border-red-500' : ''
                )}
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className={cn(errors.companySize ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300')}>
                How many people work at your company?
              </Label>
              <Popover open={isCompanySizeOpen} onOpenChange={setIsCompanySizeOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={isCompanySizeOpen}
                    className={cn(
                      'w-full justify-between bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700',
                      errors.companySize ? 'border-red-500' : ''
                    )}
                  >
                    <span className="truncate text-left">
                      {formData.companySize || 'How many people work at your company?'}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No option found.</CommandEmpty>
                      <CommandGroup>
                        {companySize.map((size) => (
                          <CommandItem
                            key={size}
                            value={size}
                            onSelect={() => {
                              setFormData(prev => ({ ...prev, companySize: size }))
                              setIsCompanySizeOpen(false)
                              if (errors.companySize) setErrors(prev => ({ ...prev, companySize: '' }))
                            }}
                          >
                            <Check className={cn('mr-2 h-4 w-4', formData.companySize === size ? 'opacity-100' : 'opacity-0')} />
                            <span>{size}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {errors.companySize && (
                <p className="text-xs text-red-600">{errors.companySize}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className={cn(errors.headquarters ? 'text-red-600' : 'text-neutral-700 dark:text-neutral-300')}>
                Headquarters
              </Label>
              <Popover open={isHeadquartersOpen} onOpenChange={setIsHeadquartersOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={isHeadquartersOpen}
                    className={cn(
                      'w-full justify-between bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-700',
                      errors.headquarters ? 'border-red-500' : ''
                    )}
                  >
                    <span className="truncate text-left">
                      {formData.headquarters || 'Headquarters'}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700">
                  <Command>
                    <CommandInput placeholder="Search..." />
                    <CommandList>
                      <CommandEmpty>No location found.</CommandEmpty>
                      <CommandGroup>
                        {headquarters.map((location) => (
                          <CommandItem
                            key={location}
                            value={location}
                            onSelect={() => {
                              setFormData(prev => ({ ...prev, headquarters: location }))
                              setIsHeadquartersOpen(false)
                              if (errors.headquarters) setErrors(prev => ({ ...prev, headquarters: '' }))
                            }}
                          >
                            <Check className={cn('mr-2 h-4 w-4', formData.headquarters === location ? 'opacity-100' : 'opacity-0')} />
                            <span>{location}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              {errors.headquarters && (
                <p className="text-xs text-red-600">{errors.headquarters}</p>
              )}
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our privacy policy.
            </p>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-semibold py-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="h-4 w-4 border-2 border-white/30 dark:border-neutral-900/30 border-t-white dark:border-t-neutral-900 rounded-full animate-spin" />
                  Submitting...
                </motion.div>
              ) : (
                <>📅 Choose a date & time</>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
