# Design Document

## Overview

This document outlines the technical design for the "Hire Your Recruiter" service webpage. The page will be built as a React/TypeScript application using the same technology stack, design patterns, and visual style as the existing outsourcing page. The implementation will leverage Framer Motion for animations, Tailwind CSS for styling, and Lucide React for icons.

### Key Design Principles

1. **Visual Consistency**: Match the outsourcing page's purple-400 color scheme, blob shapes, floating circles, and animation patterns
2. **Component Modularity**: Each section is a separate, reusable component
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **Dark Mode Support**: Full dark mode implementation using Tailwind's dark: prefix
5. **Performance**: Optimized animations using Framer Motion's viewport detection
6. **Accessibility**: Semantic HTML and proper ARIA labels

## Architecture

### Folder Structure

```
src/pages/newhireyourrecruiter/
├── index.tsx                          # Main page component
└── components/
    ├── hero-section.tsx               # Section 1: Hero with immediate impact
    ├── pain-points.tsx                # Section 2: Pain points grid
    ├── solution-overview.tsx          # Section 3: Solution pillars
    ├── how-it-works.tsx               # Section 4: 4-step process
    ├── service-features.tsx           # Section 5: Feature grid
    ├── success-metrics.tsx            # Section 6: Metrics with animated counters
    ├── sample-work.tsx                # Section 7: Before/after showcase
    ├── comparison-table.tsx           # Section 8: Us vs Others comparison
    ├── pricing-section.tsx            # Section 9: Pricing tiers
    ├── guarantees.tsx                 # Section 10: Risk reversal
    ├── success-stories.tsx            # Section 11: Detailed case studies
    ├── team-section.tsx               # Section 12: Team introduction
    ├── urgency-section.tsx            # Section 13: Limited spots
    ├── faq-section.tsx                # Section 14: Accordion FAQs
    ├── final-cta.tsx                  # Section 15: Multi-option CTA
    └── post-conversion.tsx            # Section 16: Onboarding preview
```

### Technology Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with custom purple-400 theme
- **Animations**: Framer Motion for scroll-triggered animations
- **Icons**: Lucide React icon library
- **UI Components**: Existing @/components/ui components (Button, etc.)

## Components and Interfaces

### Main Page Component (index.tsx)

```typescript
interface HireRecruiterPageProps {}

export default function HireRecruiter(): JSX.Element
```

**Responsibilities:**
- Import and compose all section components
- Manage smooth scrolling behavior
- Handle any global state (if needed)
- Provide consistent spacing and overflow handling

**Structure:**
```tsx
<div className="w-full overflow-x-hidden">
  <HeroSection />
  <PainPoints />
  <SolutionOverview />
  <HowItWorks />
  <ServiceFeatures />
  <SuccessMetrics />
  <SampleWork />
  <ComparisonTable />
  <PricingSection />
  <Guarantees />
  <SuccessStories />
  <TeamSection />
  <UrgencySection />
  <FAQSection />
  <FinalCTA />
  <PostConversion />
</div>
```

### Hero Section Component

```typescript
interface HeroSectionProps {}

export default function HeroSection(): JSX.Element
```

**Key Features:**
- Animated blob shapes using SVG paths
- 3+ floating circles with gradient backgrounds
- 12-column grid layout (7 cols content, 5 cols visual)
- Trust metrics bar with 4 key statistics
- Primary and secondary CTA buttons
- Dotted pattern overlay

**Animation Pattern:**
```typescript
// Blob animation
animate={{
  y: [0, -20, 0],
  scale: [1, 1.05, 1],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut',
}}

// Floating circles
animate={{
  y: [0, -30, 0],
  x: [0, 15, 0],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

### Pain Points Component

```typescript
interface PainPoint {
  icon: LucideIcon
  text: string
}

const painPoints: PainPoint[] = [...]

export default function PainPoints(): JSX.Element
```

**Key Features:**
- Large circular blob SVG on left side
- Icon circles with pulsing animation
- Connecting dotted line between pain points
- Promise statement with decorative curved underline SVG
- Checkmark badges with purple-400/10 backgrounds

**Layout:**
- lg:grid-cols-2 (pain points left, promise right)
- Icon circles: w-20 h-20 rounded-full
- Staggered animation delays for each pain point

### Solution Overview Component

```typescript
interface SolutionPillar {
  icon: LucideIcon
  title: string
  description: string
}

const pillars: SolutionPillar[] = [...]

export default function SolutionOverview(): JSX.Element
```

**Key Features:**
- Grid layout for solution pillars
- Card-based design with hover effects
- Icon containers with purple-400/10 backgrounds
- Checkmark badges for key benefits

### How It Works Component

```typescript
interface Step {
  number: number
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [...]

export default function HowItWorks(): JSX.Element
```

**Key Features:**
- 4-step process in 2x2 grid
- Numbered badges with purple gradient
- Icon containers for each step
- Timeline text below steps
- CTA button at bottom

**Numbered Badge Styling:**
```css
absolute -left-6 -top-6 w-16 h-16 rounded-2xl z-10
bg-gradient-to-br from-purple-400 to-purple-600
group-hover:scale-110 transition-transform
```

### Service Features Component

```typescript
interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [...]

export default function ServiceFeatures(): JSX.Element
```

**Key Features:**
- 6 features in responsive grid (1/2/3 columns)
- Card-based layout with hover shadow effects
- Icon containers with purple-400/10 backgrounds
- Staggered animation on scroll

### Success Metrics Component

```typescript
interface Metric {
  value: number | string
  label: string
}

function Counter({ end, duration }: { end: number; duration?: number }): JSX.Element

export default function SuccessMetrics(): JSX.Element
```

**Key Features:**
- Animated counter component using useInView and requestAnimationFrame
- 5 metrics in responsive grid
- Large bold numbers with descriptive labels
- Scroll-triggered animation

**Counter Implementation:**
```typescript
const [count, setCount] = useState(0)
const ref = useRef(null)
const isInView = useInView(ref, { once: true })

useEffect(() => {
  if (!isInView) return
  // Animate from 0 to end value using requestAnimationFrame
}, [isInView, end, duration])
```

### Sample Work Component

```typescript
interface CaseStudy {
  candidateName: string
  role: string
  problem: string
  solution: string
  result: string
  photoPlaceholder: string
}

const caseStudies: CaseStudy[] = [...]

export default function SampleWork(): JSX.Element
```

**Key Features:**
- Before/after comparison cards
- Case study cards with candidate photos
- Result highlights in purple-400
- Hover effects on cards

### Comparison Table Component

```typescript
interface ComparisonFeature {
  text: string
  ourService: boolean
  others: boolean | 'partial'
}

const features: ComparisonFeature[] = [...]

export default function ComparisonTable(): JSX.Element
```

**Key Features:**
- Split background (white left, neutral-100 right)
- Side-by-side containers (48% width each)
- "Our Service" container with purple border and glow
- Check/X icons for feature availability
- Rating badges at bottom
- Hover scale effect on "Our Service" container

**Styling Pattern:**
```typescript
// Our Service container
whileHover={{ scale: 1.02 }}
style={{
  boxShadow: '0 0 60px rgba(168, 85, 247, 0.3)',
}}
```

### Pricing Section Component

```typescript
interface PricingTier {
  name: string
  applicationsPerWeek: number
  features: string[]
  popular?: boolean
}

const tiers: PricingTier[] = [...]

export default function PricingSection(): JSX.Element
```

**Key Features:**
- Gradient background (from-white to-purple-50/30)
- Featured pricing card with purple gradient background
- Background decorations (blur circles)
- Key points with icon containers
- Savings highlight section
- Comparison grid showing features

### Guarantees Component

```typescript
interface Guarantee {
  icon: LucideIcon
  title: string
  description: string
}

const guarantees: Guarantee[] = [...]

export default function Guarantees(): JSX.Element
```

**Key Features:**
- 3 guarantee cards in responsive grid
- Gradient backgrounds with purple accents
- Icon containers with purple-400 backgrounds
- Scale animation on hover
- Border with purple-400/20

### Success Stories Component

```typescript
interface SuccessStory {
  candidateName: string
  role: string
  company: string
  before: string
  after: string
  metrics: string
  quote: string
  photoPlaceholder: string
}

const stories: SuccessStory[] = [...]

export default function SuccessStories(): JSX.Element
```

**Key Features:**
- 3 case study cards in responsive grid
- Candidate photo placeholders
- Before/After sections
- Metrics badges
- Quote testimonials
- Staggered animation

### Team Section Component

```typescript
interface TeamMember {
  name: string
  specialization: string
  expertise: string
  photoPlaceholder: string
}

const team: TeamMember[] = [...]

export default function TeamSection(): JSX.Element
```

**Key Features:**
- 4 team members in responsive grid
- Photo placeholders with gradient backgrounds
- Specialization in purple-400
- Hover effects (shadow and scale)

### Urgency Section Component

```typescript
interface UrgencySectionProps {}

export default function UrgencySection(): JSX.Element
```

**Key Features:**
- Purple gradient background
- Background blur decorations
- Countdown or spots remaining indicator
- Waitlist CTA button
- Pulse/scale animations for attention

### FAQ Section Component

```typescript
interface FAQ {
  question: string
  answer: string
  category: string
}

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

const faqs: FAQ[] = [...]

export default function FAQSection(): JSX.Element
```

**Key Features:**
- Accordion-style expandable questions
- 5 category sections
- ChevronDown icons that rotate on expand
- Smooth expand/collapse animations
- 15-20 questions total

**Accordion State Management:**
```typescript
const [openIndex, setOpenIndex] = useState<number | null>(null)

const handleToggle = (index: number) => {
  setOpenIndex(openIndex === index ? null : index)
}
```

### Final CTA Component

```typescript
interface CTAOption {
  icon: LucideIcon
  title: string
  description: string
}

const secondaryOptions: CTAOption[] = [...]

export default function FinalCTA(): JSX.Element
```

**Key Features:**
- Purple gradient background
- Multiple background blur decorations
- Primary CTA button (large, prominent)
- 3 secondary option cards
- Backdrop blur effects
- Hover animations

### Post Conversion Component

```typescript
interface OnboardingStep {
  number: number
  icon: LucideIcon
  title: string
  description: string
}

const steps: OnboardingStep[] = [...]

export default function PostConversion(): JSX.Element
```

**Key Features:**
- 4 onboarding steps in timeline layout
- Connecting dotted line between steps
- Numbered badges with purple gradient
- Icon containers
- Staggered animation

## Data Models

### Color Palette

```typescript
const colors = {
  primary: {
    purple400: '#a855f7',
    purple500: '#9333ea',
    purple600: '#7e22ce',
    purple700: '#6b21a8',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    400: '#a3a3a3',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
}
```

### Animation Variants

```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}
```

### Responsive Breakpoints

```typescript
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
}
```

## Error Handling

### Graceful Degradation

1. **Animation Fallbacks**: If Framer Motion fails to load, components should still render without animations
2. **Icon Fallbacks**: If Lucide icons fail to load, use text labels or simple SVG shapes
3. **Image Placeholders**: All images should have proper alt text and placeholder backgrounds

### Error Boundaries

```typescript
// Wrap each major section in error boundary if needed
<ErrorBoundary fallback={<SectionErrorFallback />}>
  <HeroSection />
</ErrorBoundary>
```

## Testing Strategy

### Component Testing

1. **Unit Tests**: Test individual components in isolation
   - Verify correct rendering of content
   - Test animation triggers
   - Validate responsive behavior

2. **Integration Tests**: Test component interactions
   - Verify smooth scrolling works
   - Test CTA button click handlers
   - Validate FAQ accordion functionality

3. **Visual Regression Tests**: Ensure design consistency
   - Compare screenshots across breakpoints
   - Verify dark mode rendering
   - Check animation states

### Accessibility Testing

1. **Keyboard Navigation**: All interactive elements should be keyboard accessible
2. **Screen Reader Testing**: Verify proper ARIA labels and semantic HTML
3. **Color Contrast**: Ensure WCAG AA compliance for text contrast ratios

### Performance Testing

1. **Animation Performance**: Monitor FPS during scroll animations
2. **Bundle Size**: Keep component bundle sizes minimal
3. **Load Time**: Optimize initial page load

## Implementation Notes

### Reusable Patterns from Outsourcing Page

1. **Blob Shapes**: Copy SVG path patterns from outsourcing hero section
2. **Floating Circles**: Reuse animation patterns with different positions
3. **Card Styles**: Use same rounded-2xl/3xl patterns with hover effects
4. **Icon Containers**: Consistent w-14 h-14 rounded-xl bg-purple-400/10 pattern
5. **Numbered Badges**: Same gradient and positioning as how-it-works component
6. **Comparison Layout**: Adapt split-background pattern from comparison-table
7. **Pricing Cards**: Use gradient background pattern from pricing-section
8. **FAQ Accordion**: Reuse accordion logic and styling

### Dark Mode Implementation

All components must support dark mode using Tailwind's dark: prefix:

```tsx
// Background colors
className="bg-white dark:bg-neutral-950"

// Text colors
className="text-neutral-900 dark:text-white"
className="text-neutral-600 dark:text-neutral-400"

// Border colors
className="border-neutral-200 dark:border-neutral-800"

// Card backgrounds
className="bg-neutral-50 dark:bg-neutral-900"
```

### Smooth Scrolling Setup

```typescript
useEffect(() => {
  document.documentElement.style.scrollBehavior = 'smooth'
  
  return () => {
    document.documentElement.style.scrollBehavior = 'auto'
  }
}, [])
```

### Animation Performance Optimization

1. Use `viewport={{ once: true }}` to prevent re-triggering animations
2. Use `will-change` CSS property sparingly
3. Prefer `transform` and `opacity` for animations (GPU-accelerated)
4. Use `useInView` hook for scroll-triggered animations

### Content Strategy

All text content should be:
- Stored as constants at the top of each component
- Easy to update without modifying JSX structure
- Properly typed with TypeScript interfaces

Example:
```typescript
const HERO_HEADLINE = "Stop Applying, Start Interviewing. We Get You 5x More Interviews."
const HERO_SUBHEADLINE = "Our experts apply to 50+ jobs weekly..."
```

## Design Decisions and Rationales

### Why Component-Based Architecture?

- **Maintainability**: Each section is isolated and easy to update
- **Reusability**: Components can be reused in other pages if needed
- **Testing**: Easier to test individual components
- **Performance**: Can lazy-load sections if needed

### Why Framer Motion?

- **Consistency**: Already used in outsourcing page
- **Performance**: Optimized for React animations
- **Developer Experience**: Declarative API is easy to use
- **Features**: Built-in scroll detection and viewport tracking

### Why Tailwind CSS?

- **Consistency**: Matches existing codebase
- **Productivity**: Rapid development with utility classes
- **Responsive**: Built-in breakpoint system
- **Dark Mode**: First-class dark mode support

### Why Separate Components Folder?

- **Organization**: Clear separation between page and components
- **Scalability**: Easy to add new sections
- **Imports**: Clean import statements in main page file

## Future Enhancements

### Phase 2 Considerations

1. **Interactive Elements**:
   - ROI calculator (similar to outsourcing page)
   - Resume analyzer tool
   - Application tracker preview

2. **Dynamic Content**:
   - Load testimonials from API
   - Real-time spots remaining counter
   - Dynamic pricing based on user location

3. **Analytics Integration**:
   - Track section scroll depth
   - Monitor CTA click rates
   - A/B test different headlines

4. **Performance Optimizations**:
   - Lazy load below-the-fold sections
   - Optimize images with next/image
   - Implement skeleton loaders

## Conclusion

This design provides a comprehensive blueprint for implementing the "Hire Your Recruiter" webpage. By following the established patterns from the outsourcing page and maintaining consistency in styling, animations, and component structure, we ensure a cohesive user experience while building a scalable and maintainable codebase.

The modular component architecture allows for easy updates and testing, while the detailed specifications ensure that all requirements are met with high-quality implementation.
