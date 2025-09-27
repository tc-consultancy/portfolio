import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ChevronsUpDown, Upload, X } from 'lucide-react'
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

interface JobApplicationDialogProps {
  children: React.ReactNode
  position: string
  isOtherPosition?: boolean
}

export function JobApplicationDialog({ children, position, isOtherPosition = false }: JobApplicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const lenis = useLenis()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: 'United States',
    position: position,
    resume: null as File | null,
    whyHireYou: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCountryOpen, setIsCountryOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (isOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [isOpen, lenis])

  useEffect(() => {
    setFormData(prev => ({ ...prev, position }))
  }, [position])

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }))
        return
      }
      
      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Only PDF and Word documents are allowed' }))
        return
      }
      
      setFormData(prev => ({ ...prev, resume: file }))
      if (errors.resume) {
        setErrors(prev => ({ ...prev, resume: '' }))
      }
    }
  }

  const removeFile = () => {
    setFormData(prev => ({ ...prev, resume: null }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    const whyHireYou = formData.whyHireYou.trim()

    if (isOtherPosition) {
      // For "Other Positions", only validate resume and tell us about yourself
      if (!formData.resume) {
        nextErrors.resume = 'Resume is required'
      }
      if (whyHireYou.length < 100) {
        nextErrors.whyHireYou = 'Please provide at least 100 characters telling us about yourself'
      }
    } else {
      // For specific positions, validate all fields
      const firstName = formData.firstName.trim()
      const lastName = formData.lastName.trim()
      const email = formData.email.trim()
      const phoneDigits = formData.phone.replace(/\D/g, '')

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
      if (!formData.resume) {
        nextErrors.resume = 'Resume is required'
      }
      if (whyHireYou.length < 100) {
        nextErrors.whyHireYou = 'Please provide at least 100 characters explaining why we should hire you'
      }
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success('Your application has been submitted successfully!')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        countryCode: '+1',
        country: 'United States',
        position: position,
        resume: null,
        whyHireYou: '',
      })
      setErrors({})
      setIsOpen(false)
    } catch (error: any) {
      const message = error?.message || 'Failed to submit application. Please try again later.'
      toast.error(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-neutral-100/80 dark:bg-black/30 backdrop-blur-md border-neutral-300 dark:border-white/10 shadow-xl rounded-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="md:text-2xl font-bold text-gray-900 dark:text-white">
            Apply for {position}
          </DialogTitle>
          <DialogDescription className="text-xs md:text-base text-gray-600 dark:text-gray-300">
            Submit your application and join our team of talented professionals.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-4 max-w-lg">
          {!isOtherPosition && (
            <>
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
                    placeholder="First Name"
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
                    placeholder="Last Name"
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
                  placeholder="example@company.com"
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
                    <PopoverContent
                      className="w-80 p-0 bg-neutral-100/95 dark:bg-black/80 backdrop-blur-md border-neutral-300 dark:border-white/10 shadow-xl rounded-xl"
                      data-lenis-prevent
                      data-lenis-prevent-wheel
                    >
                      <Command
                        className="max-h-72 overflow-y-auto overscroll-contain touch-pan-y"
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                      >
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
            </>
          )}

          <div className="space-y-2">
            <Label className={cn(errors.resume ? 'text-red-600' : '')}>
              Resume <span className="text-red-600">*</span>
            </Label>
            <div className="space-y-2">
              {!formData.resume ? (
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className={cn(
                    'border-2 border-dashed rounded-lg py-4 px-6 text-center hover:border-gray-400 dark:hover:border-white/40 transition-colors',
                    errors.resume ? 'border-red-500' : 'border-gray-300 dark:border-white/20'
                  )}>
                    <Upload className="mx-auto h-4 w-4 text-gray-400 dark:text-white/40 mb-2" />
                    <p className="text-xs text-gray-600 dark:text-white/70">
                      Click to upload your resume
                    </p>
                    <p className="text-[10px] text-gray-500 dark:text-white/50 mt-1">
                      PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-300 dark:border-white/10">
                  <span className="text-sm text-gray-700 dark:text-white/80 truncate">
                    {formData.resume.name}
                  </span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="ml-2 p-1 hover:bg-gray-200 dark:hover:bg-white/10 rounded"
                  >
                    <X className="h-4 w-4 text-gray-500 dark:text-white/50" />
                  </button>
                </div>
              )}
            </div>
            {errors.resume ? (
              <p className="text-xs text-red-600">{errors.resume}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyHireYou" className={cn(errors.whyHireYou ? 'text-red-600' : '')}>
              {isOtherPosition ? 'Tell us about yourself' : 'Why should we hire you?'} <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="whyHireYou"
              value={formData.whyHireYou}
              onChange={(e) => handleInputChange('whyHireYou', e.target.value)}
              placeholder={
                isOtherPosition 
                  ? "Tell us about your background, experience, skills, and what type of role you're looking for..."
                  : "Tell us about your experience, skills, and what makes you the perfect fit for this role..."
              }
              rows={4}
              className={cn(
                'bg-white/5 dark:border-neutral-700 max-h-28 resize-none',
                errors.whyHireYou ? 'border-red-500' : 'border-neutral-300'
              )}
            />
            {errors.whyHireYou ? (
              <p className='text-xs text-red-600 -mt-1 text-end'>{errors.whyHireYou}</p>
            ) : (
              <p className='text-xs text-gray-500 -mt-1 text-end'>Min 100 characters</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-semibold py-5 cursor-pointer rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting Application...
              </motion.div>
            ) : (
              'Submit Application'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}