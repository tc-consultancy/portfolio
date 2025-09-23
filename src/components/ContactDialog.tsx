import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useLenis } from './LenisProvider'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'

// Country data with codes
const countries = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Hungary', code: '+36', flag: '🇭🇺' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Morocco', code: '+212', flag: '🇲🇦' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' },
  { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
]

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const lenis = useLenis()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: 'United States',
    service: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [isOpen, lenis])

  const handleInputChange = (field: string, value: string) => {
    const normalizedValue = field === 'phone'
      ? value.replace(/[^\d+\-\s()]/g, '')
      : value
    setFormData(prev => ({ ...prev, [field]: normalizedValue }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCountrySelect = (country: typeof countries[0]) => {
    setFormData(prev => ({ ...prev, countryCode: country.code, country: country.name }))
    setIsCountryOpen(false)
  }

  const services = useMemo(
    () => [
      'Software Development',
      '? (Hire requter)',
      'IT Consulting & Services.',
      'Tech Support',
      'AI Integration',
      'Cybersecurity',
      'BPO/Contact Center Services',
      'IT Staffing Solutions',
      'Accounting and Payrolls',
      'Digital Marketing Services',
      'Out Sourcing Services',
    ],
    []
  )

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    const firstName = formData.firstName.trim()
    const lastName = formData.lastName.trim()
    const email = formData.email.trim()
    const phoneDigits = formData.phone.replace(/\D/g, '')
    const comment = formData.comment.trim()
    const service = formData.service.trim()

    if (!firstName) nextErrors.firstName = 'First name is required'
    if (!lastName) nextErrors.lastName = 'Last name is required'
    if (!email) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!phoneDigits) {
      nextErrors.phone = 'Phone number is required'
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      nextErrors.phone = 'Phone number should be 7-15 digits'
    }
    if (!service) {
      nextErrors.service = 'Please select a service'
    }
    if (comment.length < 200) {
      nextErrors.comment = 'Comment must be at least 200 characters'
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    toast.success('Your message has been sent!')
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '+1',
      country: 'United States',
      service: '',
      comment: '',
    })
    setErrors({})
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-neutral-100/80 dark:bg-black/30 backdrop-blur-md border-neutral-300 dark:border-white/10 shadow-xl rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Start Your Journey
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Get in touch with our team to discuss your enterprise technology, staffing, and outsourcing needs.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className={cn(errors.firstName ? 'text-red-600' : '')}>
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
                className={cn(
                  'bg-white/5 dark:border-neutral-700',
                  errors.firstName ? 'border-red-500' : 'border-neutral-300'
                )}
              />
              {errors.firstName ? (
                <p className="text-xs text-red-600">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className={cn(errors.lastName ? 'text-red-600' : '')}>
                Last Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Doe"
                className={cn(
                  'bg-white/5 dark:border-neutral-700',
                  errors.lastName ? 'border-red-500' : 'border-neutral-300'
                )}
              />
              {errors.lastName ? (
                <p className="text-xs text-red-600">{errors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={cn(errors.email ? 'text-red-600' : '')}>
              Email <span className="text-red-600">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="john.doe@company.com"
              className={cn(
                'bg-white/5 dark:border-neutral-700',
                errors.email ? 'border-red-500' : 'border-neutral-300'
              )}
            />
            {errors.email ? (
              <p className="text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label className={cn(errors.phone ? 'text-red-600' : '')}>
              Phone Number <span className="text-red-600">*</span>
            </Label>
            <div className="flex gap-2">
              <Popover open={isCountryOpen} onOpenChange={setIsCountryOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={isCountryOpen}
                    className="w-28 justify-between bg-white/5 border-neutral-300 dark:border-neutral-700"
                  >
                    <span className="flex items-center gap-2">
                      <span>{countries.find(c => c.name === formData.country)?.flag}</span>
                      <span className="text-xs">{formData.countryCode}</span>
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 bg-neutral-100/95 dark:bg-black/80 backdrop-blur-md border-neutral-300 dark:border-white/10 shadow-xl rounded-xl">
                  <Command>
                    <CommandInput placeholder="Search country..." />
                    <CommandList>
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((country) => (
                          <CommandItem
                            key={country.name}
                            value={`${country.name} ${country.code}`}
                            onSelect={() => handleCountrySelect(country)}
                          >
                            <Check className={cn('mr-2 h-4 w-4', formData.country === country.name ? 'opacity-100' : 'opacity-0')} />
                            <span className="mr-2">{country.flag}</span>
                            <span>{country.name}</span>
                            <span className="ml-auto text-muted-foreground">{country.code}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="123-456-7890"
                className={cn(
                  'flex-1 bg-white/5 dark:border-neutral-700',
                  errors.phone ? 'border-red-500' : 'border-neutral-300'
                )}
              />
            </div>
            {errors.phone ? (
              <p className="text-xs text-red-600">{errors.phone}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label className={cn(errors.service ? 'text-red-600' : '')}>
              Select your service <span className="text-red-600">*</span>
            </Label>
            <div>
              <Popover open={isServiceOpen} onOpenChange={setIsServiceOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    role="combobox"
                    aria-expanded={isServiceOpen}
                    className={cn(
                      'w-full justify-between bg-white/5 dark:border-neutral-700',
                      errors.service ? 'border-red-500' : 'border-neutral-300'
                    )}
                  >
                    <span className="truncate text-left">
                      {formData.service || 'Select a service'}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 bg-neutral-100/95 dark:bg-black/80 backdrop-blur-md border-neutral-300 dark:border-white/10 shadow-xl rounded-xl">
                  <Command>
                    <CommandInput placeholder="Search service..." />
                    <CommandList>
                      <CommandEmpty>No service found.</CommandEmpty>
                      <CommandGroup>
                        {services.map((serviceName) => (
                          <CommandItem
                            key={serviceName}
                            value={serviceName}
                            onSelect={() => {
                              setFormData(prev => ({ ...prev, service: serviceName }))
                              setIsServiceOpen(false)
                              if (errors.service) setErrors(prev => ({ ...prev, service: '' }))
                            }}
                          >
                            <Check className={cn('mr-2 h-4 w-4', formData.service === serviceName ? 'opacity-100' : 'opacity-0')} />
                            <span>{serviceName}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            {errors.service ? (
              <p className="text-xs text-red-600">{errors.service}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment" className={cn(errors.comment ? 'text-red-600' : '')}>
            Comments ( Elaborate on what you are looking for. ) <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => handleInputChange('comment', e.target.value)}
              placeholder="Describe your technology needs, team requirements, or outsourcing goals..."
              rows={4}
              className={cn(
                'bg-white/5 dark:border-neutral-700 resize-none',
                errors.comment ? 'border-red-500' : 'border-neutral-300'
              )}
            />
            {errors.comment ? (
              <p className='text-xs text-red-600 -mt-1 text-end'>{errors.comment}</p>
            ) : (
              <p className='text-xs text-gray-500 -mt-1 text-end'>Min 200 characters</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold py-5! cursor-pointer! rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </motion.div>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
        <Toaster richColors position="top-right" />
      </DialogContent>
    </Dialog>
  )
}
