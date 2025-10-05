# Design Document: IT Staffing Outsourcing Page

## Overview

This design document outlines a unique, minimalistic, and professional IT staffing outsourcing webpage. The page will be built using React with TypeScript, using Framer Motion for animations and Tailwind CSS for styling. The design emphasizes a slick, modern aesthetic with creative visual elements like curved sections, blob shapes, floating elements, and strategic use of white space. Purple-400 serves as the primary accent color with full dark mode support.

**Design Philosophy**: 
- **No generic cards**: Replace traditional card layouts with flowing sections, asymmetric layouts, and organic shapes
- **Minimalistic**: Generous white space, clean typography, subtle shadows
- **Professional**: Sophisticated color palette, refined animations, polished interactions
- **Unique**: Curved dividers, blob backgrounds, floating elements, creative layouts

The page structure follows a conversion-optimized flow: immediate value proposition → trust building → problem empathy → solution clarity → differentiation → social proof → action. Interactive elements (Talent Matcher Quiz, ROI Calculator) are strategically placed to increase engagement and capture leads at different stages of the buyer journey.

## Architecture

### Component Structure

```
src/pages/outsourcing/
├── it-staffing.tsx (Main page component)
└── sections/
    ├── hero-staffing.tsx
    ├── trust-bar.tsx
    ├── problem-promise.tsx
    ├── how-it-works.tsx
    ├── vetting-process.tsx
    ├── roles-grid.tsx
    ├── advantages.tsx
    ├── comparison-table.tsx
    ├── case-studies.tsx
    ├── talent-matcher.tsx
    ├── roi-calculator.tsx
    └── final-cta.tsx
```

### Shared Components

- `VideoModal` (existing): For video demonstrations
- `Button`, `Input`, `Label` (shadcn/ui): Form elements
- `Accordion` (shadcn/ui): FAQ section
- Custom icon components or lucide-react icons

### State Management

- Local component state using React hooks (`useState`, `useRef`)
- Form validation state for Talent Matcher and contact forms
- Modal visibility state for video and interactive elements
- Dark mode handled via Tailwind's `dark:` classes (assumes theme provider exists)

## Components and Interfaces

### 1. Hero Section (`hero-staffing.tsx`)

**Purpose**: Immediate engagement with clear value proposition and primary CTA

**Design**:
- Full-width section with asymmetric layout
- Large blob shape in purple-400/10 opacity as background element (positioned top-right)
- Floating geometric shapes (circles, rounded rectangles) with subtle animations
- Content positioned off-center for visual interest
- Background: white (light mode), neutral-950 (dark mode)

**Key Elements**:
- H1 headline: 5xl-6xl font size, bold, black/white, with one word highlighted in purple-400
- Sub-headline: xl text, neutral-600/neutral-400, max-width for readability
- Primary CTA button: Large pill-shaped button, purple-400 background, white text, shadow-lg
- Secondary CTA: Underlined text link with arrow icon, subtle hover animation
- Hero visual: Large image with rounded-3xl corners, subtle shadow, positioned with overlap

**Visual Elements**:
- Large blob SVG shape behind content (purple-400 with 10% opacity)
- Small floating circles with gradient fills
- Dotted pattern overlay (very subtle)

**Interactions**:
- Blob shape has slow floating animation (translate + scale)
- Floating circles have parallax effect on scroll
- Hero image fades in with slide-up animation
- CTA button has hover scale effect (1.05)

**Layout**:
```
[Blob shape background]
  [Floating circle]
    [Content - 60% width]
      Headline
      Sub-headline
      [CTA buttons]
  [Hero image - 40% width, overlapping]
[Floating circle]
```

### 2. Trust Barometer (`trust-bar.tsx`)

**Purpose**: Build immediate credibility with client logos

**Design**:
- Full-width section with no background (seamless with hero)
- Curved top border using SVG wave divider
- Logos floating on individual rounded platforms
- Minimalistic, clean spacing

**Key Elements**:
- Small centered text: "Trusted by" in neutral-500
- Logo platforms: Individual rounded-2xl containers with subtle shadow
- Logos in grayscale with 60% opacity
- Staggered vertical alignment for visual interest

**Visual Elements**:
- Curved SVG divider at top (subtle wave)
- Each logo on a floating platform (white bg in light mode, neutral-900 in dark)
- Platforms have different sizes for hierarchy

**Interactions**:
- Infinite horizontal scroll animation (smooth, slow)
- Hover on logo: Color returns (opacity 100%), platform lifts (shadow-xl)
- Stagger animation on initial load

### 3. Problem & Promise Section (`problem-promise.tsx`)

**Purpose**: Show empathy for pain points and present the solution

**Design**:
- Full-width section with curved bottom divider
- Large circular blob shape on left side (purple-400/5 opacity)
- Asymmetric layout: Problems on left, Promise on right
- No background color, uses white space

**Key Elements**:
- H2 headline: "Tired of the Endless Hunt for Qualified Tech Talent?" - positioned top-left
- 4 pain points in vertical list with large spacing
- Each pain point: Large icon in circle (neutral-100 bg), text beside
- Promise statement: Large text block on right side with purple-400 underline accent

**Visual Elements**:
- Large blob SVG on left side (organic shape)
- Icons in circular containers (80px diameter)
- Connecting dotted line between pain points (vertical)
- Promise text has decorative curved underline

**Layout**:
```
[Headline - full width]
[Blob shape]
  [Pain points - 50%]     [Promise - 50%]
    Icon + Text              Large text
    Icon + Text              with accent
    Icon + Text
    Icon + Text
```

**Interactions**:
- Pain points fade in sequentially on scroll
- Icons have subtle pulse animation
- Promise text slides in from right

### 4. How It Works Section (`how-it-works.tsx`)

**Purpose**: Demystify the process with clear, numbered steps

**Design**:
- Full-width section with gradient background (white to purple-50/10 in light mode)
- Curved path connecting steps (organic, flowing line)
- Steps positioned along the curved path
- Floating number badges

**Key Elements**:
- H2 headline: "How It Works in 4 Easy Steps" - centered
- Each step: Large floating number (100px circle), icon, title, description
- Curved SVG path connecting all steps (purple-400/20)
- Steps alternate left/right of the path for visual interest

**Visual Elements**:
- Curved path (SVG) flowing through the section
- Number circles float above the path with shadow-xl
- Small decorative dots along the path
- Each step has a subtle rounded-3xl container (no border, just shadow)

**Layout (Desktop)**:
```
        [Headline]
    
Step 1          Path curve
    [Number]    ~~~
    Content         ~~~
                        Step 2
                        [Number]
                        Content
Step 3          ~~~
    [Number]    ~~~
    Content
                    Step 4
                    [Number]
                    Content
```

**Interactions**:
- Path draws in on scroll (SVG stroke animation)
- Numbers scale in sequentially
- Content fades in after number appears
- Hover on step: Number rotates slightly

### 5. Vetting Process Section (`vetting-process.tsx`)

**Purpose**: Justify quality and premium positioning

**Design**:
- Full-width section with dark background (neutral-900 in light mode, neutral-950 in dark mode)
- Inverted color scheme for contrast
- Horizontal progress bar visualization with stages
- Stages positioned along the progress bar

**Key Elements**:
- H2 headline: "Only the Top 5% Make It Through Our Vetting" - white text
- Horizontal progress bar (full width, thick)
- 5 stages positioned along the bar with icons
- Each stage: Icon in circle, title, brief description
- Progress bar fills from left to right showing filtering

**Process Steps**:
1. **Profile Screening**: Initial qualifications check
2. **Technical Assessment**: Role-specific skills testing
3. **Soft Skills Evaluation**: Communication and problem-solving
4. **Cultural Fit Analysis**: Alignment with client values
5. **Trial Project**: Real-world task performance

**Visual Elements**:
- Thick horizontal bar (20px height) with gradient (purple-400 to purple-600)
- Stages as circles (120px) positioned above the bar
- Connecting lines from circles to bar
- Percentage indicators below bar (100% → 80% → 40% → 15% → 5%)
- Engagement metrics displayed (e.g., "10,000+ candidates screened")

**Layout**:
```
        [Headline - white text]
        
  ○         ○         ○         ○         ○
Stage 1   Stage 2   Stage 3   Stage 4   Stage 5
  │         │         │         │         │
  └─────────┴─────────┴─────────┴─────────┘
  ═══════════════════════════════════════
  100%      80%       40%       15%       5%
```

**Interactions**:
- Progress bar fills from left to right on scroll
- Stages light up sequentially as bar reaches them
- Hover on stage: Shows detailed description
- Percentage numbers count down on scroll
- Metrics count up when in view

### 6. Roles Grid Section (`roles-grid.tsx`)

**Purpose**: Show breadth of expertise and cater to specific searches

**Design**:
- Full-width section with white background
- Bento-box style layout (asymmetric grid)
- Roles in different sized containers for visual hierarchy
- Blob shapes as backgrounds for some roles

**Key Elements**:
- H2 headline: "Specialized Talent Across the Tech Spectrum" - left-aligned
- 8+ roles in varied-size containers
- Each role: Large icon, title, optional short description
- Some roles have blob backgrounds, others are minimal

**Visual Elements**:
- Bento-box grid (CSS Grid with different span sizes)
- Blob SVG backgrounds (random organic shapes, purple-400/5 opacity)
- Icons in different sizes based on container size
- Subtle borders on some containers, none on others

**Layout Example**:
```
[Headline]

┌─────────┬─────┬─────────┐
│ Role 1  │ R2  │ Role 3  │
│ (large) │     │ (large) │
├─────┬───┴─────┴───┬─────┤
│ R4  │   Role 5    │ R6  │
│     │   (wide)    │     │
├─────┴─────┬───────┴─────┤
│  Role 7   │   Role 8    │
│  (wide)   │   (wide)    │
└───────────┴─────────────┘
```

**Interactions**:
- Hover: Container lifts (translateY -4px), shadow increases
- Icon rotates slightly on hover
- Cursor changes to pointer
- Click: Navigate to role details

### 7. Company Difference Section (`company-difference.tsx`)

**Purpose**: Highlight unique differentiators with emphasis on outcomes and human touch

**Design**:
- Full-width section with gradient background (purple-50/5 to white)
- Pentagonal/star layout with differentiators radiating from center
- Center element: Large "Why Us" text or company icon
- No traditional grid, organic positioning

**Key Elements**:
- H2 headline: "Why Companies Choose Us as Their Outsourcing Partner" - centered
- 5 differentiators positioned around a central element
- Each differentiator: Icon in large circle (120px), title, description
- Connecting lines from center to each differentiator (subtle, dashed)

**Differentiators**:
1. **Outcome-Focused Teams**: "We don't just fill seats; we deliver measurable results"
2. **Flexible Engagement Models**: "Scale up/down as needed - no long-term lock-ins"
3. **Cultural Integration**: "Teams that understand and embody your company values"
4. **Transparent Pricing**: "All-inclusive pricing with no hidden costs"
5. **Dedicated Success Manager**: "Your single point of contact for seamless coordination"

**Visual Elements**:
- Central circle with "Why Choose Us" text (200px diameter)
- Dashed lines connecting center to each differentiator
- Differentiator circles have gradient borders (purple-400 to purple-600)
- Floating decorative elements (small circles, dots)
- Pentagon/star shape formed by connecting lines

**Layout**:
```
    [Headline]

      Diff 1
       ╱  ╲
      ╱    ╲
  Diff 2   Diff 3
      ╲    ╱
       ╲  ╱
      [Center]
       ╱  ╲
      ╱    ╲
  Diff 4   Diff 5
```

**Interactions**:
- Differentiators fade in with stagger
- Hover on differentiator: Circle scales, line thickens, shows more detail
- Center element has slow rotation animation
- Lines draw in on scroll
- Each differentiator has a subtle pulse animation

### 8. Comparison Table Section (`comparison-table.tsx`)

**Purpose**: Provide clear competitive differentiation

**Design**:
- Full-width section with split background (left: white, right: neutral-100)
- Two large rounded containers side-by-side
- "Us" container elevated with shadow, "Others" container flat
- Diagonal divider line between sections

**Key Elements**:
- H2 headline: "Why Choose Us Over Others" - centered above
- Two large rounded-3xl containers (60% width each, overlapping slightly)
- "Us" container: White with purple-400 accent border, elevated
- "Others" container: Neutral-100, flat
- 7 features listed vertically in each container

**Comparison Points**:
1. Dedicated Account Manager
2. Risk-Free Trial Period (2 weeks)
3. 48-Hour Candidate Matching
4. Cultural Fit Assessment
5. Transparent Pricing
6. Ongoing Integration Support
7. Top 3% Talent Only

**Visual Design**:
- "Us" side: Large checkmarks in purple-400 circles
- "Others" side: Small grey circles or X marks
- Feature text larger on "Us" side
- "Us" container has subtle glow effect (box-shadow with purple tint)

**Layout**:
```
      [Headline]

┌──────────────┐
│     US       │╲
│ ✓ Feature 1  │ ╲┌──────────────┐
│ ✓ Feature 2  │  │    OTHERS    │
│ ✓ Feature 3  │  │ ○ Feature 1  │
│ ✓ Feature 4  │  │ ○ Feature 2  │
│ ✓ Feature 5  │ ╱│ ○ Feature 3  │
│ ✓ Feature 6  │╱ └──────────────┘
│ ✓ Feature 7  │
└──────────────┘
```

**Interactions**:
- "Us" container slides in from left
- "Others" container slides in from right
- Features check in sequentially
- Hover on "Us" container: Glow intensifies

### 9. Case Studies Section (`case-studies.tsx`)

**Purpose**: Provide tangible social proof with real examples

**Design**:
- Full-width section with white background
- Horizontal scrolling carousel (not traditional grid)
- Each case study in a large rounded container
- Asymmetric layout within each case study

**Key Elements**:
- H2 headline: "Success Stories" - left-aligned
- Horizontal scroll container with 3 case studies
- Each case study: Large rounded-3xl container (600px width)
- Layout: Image/logo on left, content on right (within container)

**Visual Elements**:
- Large client logo or image (40% of container)
- Content area with Challenge, Solution, Result
- Large quote with decorative quotation marks (SVG)
- Metrics displayed in large circles with purple-400 borders
- Avatar positioned absolutely, overlapping content

**Layout (Single Case Study)**:
```
┌─────────────────────────────┐
│ [Logo/Image] │ Challenge    │
│              │ Solution     │
│              │ Result       │
│              │              │
│              │ "Quote..."   │
│              │   [Avatar]   │
└─────────────────────────────┘
```

**Interactions**:
- Horizontal scroll with snap points
- Scroll indicators (dots) below
- Hover on case study: Slight scale increase
- Drag to scroll on desktop
- Metrics count up when in view

### 10. Talent Matcher Quiz (`talent-matcher.tsx`)

**Purpose**: Interactive lead capture with personalized matching

**Design**:
- Dedicated full-width section with gradient background (white to purple-50/5)
- Large rounded-3xl container in center
- Playful, engaging design with illustrations
- Multi-step form (not all at once)

**Key Elements**:
- Headline: "Find Your Perfect Match in 30 Seconds"
- Step 1: "What role do you need?" - Large buttons with icons
- Step 2: "What is your primary tech stack?" - Tag selection
- Step 3: Email input for results
- Progress indicator (dots or bar)

**Visual Elements**:
- Large container with white background, shadow-2xl
- Decorative blob shapes in background
- Role buttons: Large (150px), rounded-2xl, icon + text
- Tech stack tags: Pill-shaped, toggle on/off
- Animated transitions between steps

**Layout**:
```
[Headline]

┌─────────────────────────────┐
│  [Progress: ●●○]            │
│                             │
│  What role do you need?     │
│                             │
│  ┌────┐ ┌────┐ ┌────┐      │
│  │Dev │ │QA  │ │Des │      │
│  └────┘ └────┘ └────┘      │
│                             │
│  ┌────┐ ┌────┐ ┌────┐      │
│  │Ops │ │Data│ │PM  │      │
│  └────┘ └────┘ └────┘      │
│                             │
│         [Next →]            │
└─────────────────────────────┘
```

**Interactions**:
- Step transitions slide left/right
- Selected options highlight in purple-400
- Form validates before allowing next step
- Final step opens modal with results or contact form

### 11. ROI Calculator (`roi-calculator.tsx`)

**Purpose**: Demonstrate cost savings to justify investment

**Design**:
- Full-width section with dark background (neutral-900)
- Large circular visualization showing savings
- Interactive slider for salary input
- Inverted color scheme (white text)

**Key Elements**:
- Headline: "Calculate Your Savings" - white text, centered
- Large circular progress indicator (300px diameter)
- Salary input: Custom slider with large handle
- Results displayed inside circle
- Assumptions text below

**Visual Elements**:
- Large circle with gradient stroke (purple-400 to purple-600)
- Circle fills based on savings percentage
- Savings amount in center of circle (large, bold, white text)
- Slider with purple-400 track and large circular handle
- Decorative grid pattern in background (subtle)

**Layout**:
```
    [Headline - white]

[Salary Slider]
    $50k ────●──── $200k

        ╭─────────╮
       │           │
      │   $48,000  │
      │   SAVED    │
      │  ANNUALLY  │
       │           │
        ╰─────────╯

[Assumptions text]
[CTA Button]
```

**Interactions**:
- Slider updates circle fill in real-time
- Numbers count up/down smoothly
- Circle has glow effect
- Hover on slider: Handle scales up
- CTA button: "Get Started" in white with purple-400 background

### 12. FAQ Section

**Purpose**: Address objections and build trust

**Design**:
- Full-width section with white background
- Two-column layout: Questions on left, visual on right
- Minimal accordion design (no borders, just spacing)
- Large decorative element on right side

**Key Elements**:
- H2 headline: "Frequently Asked Questions" - left-aligned
- 5-7 FAQ items in left column (60% width)
- Right column (40%): Large decorative illustration or abstract shape
- Each FAQ: Question + expandable answer

**Questions**:
1. How long does it take to find a candidate?
2. What are your costs?
3. How do you handle contracts and compliance?
4. What if the candidate isn't a good fit?
5. Can I scale my team up or down?

**Visual Elements**:
- No borders on accordion items
- Plus/minus icon that rotates on expand
- Generous spacing between items (py-6)
- Right side: Large blob shape or abstract illustration in purple-400/10

**Layout**:
```
[Headline]

┌─────────────────┬─────────┐
│ Q: Question 1   │         │
│ A: Answer...    │  [Blob  │
│                 │   or    │
│ Q: Question 2   │  Illus] │
│                 │         │
│ Q: Question 3   │         │
│                 │         │
└─────────────────┴─────────┘
```

**Interactions**:
- Click question to expand/collapse
- Smooth height animation
- Icon rotates 180deg on expand
- Only one open at a time
- Scroll to expanded item if needed

### 13. Engagement Models Section (`engagement-models.tsx`)

**Purpose**: Show flexibility and different ways to work together

**Design**:
- Full-width section with white background
- Four models in a flowing, connected layout
- Each model in a rounded container with unique positioning
- Connecting lines showing relationships between models

**Key Elements**:
- H2 headline: "Choose the Model That Fits Your Needs"
- 4 engagement models with icons, titles, descriptions
- Each model: Icon, title, short description, "Learn More" link
- CTA at bottom: "Which model is right for you? Talk to an expert"

**Models**:
1. **Dedicated Team**: "Full team working exclusively on your projects"
2. **Project-Based**: "Fixed-scope projects with defined deliverables"
3. **Hybrid Model**: "Mix of dedicated and project resources"
4. **Staff Augmentation**: "Individual professionals to complement your team"

**Visual Elements**:
- Models arranged in a diamond/cross pattern
- Connecting lines between models (dashed, subtle)
- Each model in rounded-2xl container with hover effect
- Icons in large circles (100px) with gradient backgrounds
- Central element: "Flexible" text or icon

**Layout**:
```
    [Headline]

      Model 1
         │
Model 2 ─┼─ Model 3
         │
      Model 4

    [CTA Button]
```

**Interactions**:
- Models fade in with stagger
- Hover: Container lifts, shadow increases
- Lines draw in on scroll
- Click: Expand to show more details or navigate

### 14. Final CTA Section (`final-cta.tsx`)

**Purpose**: Final conversion opportunity with high contrast

**Design**:
- Full-width section with gradient background (purple-400 to purple-600)
- Large rounded container in center (white)
- Floating effect with shadow-2xl
- Curved top divider (wave SVG)

**Key Elements**:
- Curved wave divider at top (white to purple gradient)
- Large white rounded-3xl container (max-w-5xl)
- H2 headline: "Stop Searching. Start Building." - black text
- Sub-headline: "Get your first candidate shortlist in 48 hours"
- Large pill-shaped CTA button: Purple-400 background, white text
- Trust indicators: Small icons with stats (reviews, clients, success rate)

**Visual Elements**:
- Wave SVG divider at section top
- White container floats on purple background
- Decorative circles around container (purple-300, various sizes)
- Button has glow effect (box-shadow with purple tint)
- Small trust badges below button

**Layout**:
```
~~~~ Wave divider ~~~~

  ┌─────────────────────┐
  │                     │
  │  Stop Searching.    │
  │  Start Building.    │
  │                     │
  │  Get your first...  │
  │                     │
  │  [CTA Button]       │
  │                     │
  │  ⭐ 4.8  👥 500+    │
  └─────────────────────┘

○  Decorative circles  ○
```

**Interactions**:
- Container fades in with scale animation
- Button has hover scale (1.05) and glow intensifies
- Decorative circles have slow floating animation
- Trust indicators count up on view

## Data Models

### Role Interface
```typescript
interface Role {
  id: string
  title: string
  icon: string // Icon name or component
  description?: string
}
```

### Case Study Interface
```typescript
interface CaseStudy {
  id: string
  clientName: string
  clientLogo: string
  challenge: string
  solution: string
  result: string
  metrics?: {
    label: string
    value: string
  }[]
  quote: string
  quoteName: string
  quoteTitle: string
  quoteAvatar: string
}
```

### FAQ Interface
```typescript
interface FAQ {
  question: string
  answer: string
}
```

### Comparison Feature Interface
```typescript
interface ComparisonFeature {
  feature: string
  us: boolean
  others: boolean
  highlight?: boolean // For key differentiators
}
```

## Error Handling

### Form Validation
- Real-time validation for Talent Matcher and contact forms
- Error states with red borders and error messages
- Prevent submission with invalid data
- Toast notifications for success/error (using existing toast system)

### Video Loading
- Fallback image if video fails to load
- Loading spinner while video loads
- Error message if video unavailable

### Interactive Elements
- Graceful degradation if JavaScript disabled
- Loading states for calculator and quiz
- Error boundaries for component failures

## Testing Strategy

### Unit Testing
- Test form validation logic
- Test ROI calculator calculations
- Test FAQ accordion interactions
- Test responsive breakpoints

### Integration Testing
- Test form submission flow
- Test video modal open/close
- Test navigation between sections
- Test dark mode toggle

### Visual Testing
- Screenshot testing for each section
- Test responsive layouts (mobile, tablet, desktop)
- Test dark mode appearance
- Test hover states and animations

### Accessibility Testing
- Keyboard navigation for all interactive elements
- Screen reader compatibility
- ARIA labels for icons and buttons
- Color contrast ratios (WCAG AA minimum)
- Focus indicators visible

### Performance Testing
- Lazy load images and videos
- Optimize animation performance
- Test page load time
- Test scroll performance with animations

## Design Tokens

### Colors
```css
/* Light Mode */
--bg-primary: white
--bg-secondary: neutral-50
--bg-tertiary: neutral-100
--text-primary: neutral-900
--text-secondary: neutral-600
--text-tertiary: neutral-400
--accent: purple-400
--accent-hover: purple-500

/* Dark Mode */
--bg-primary: neutral-950
--bg-secondary: neutral-900
--bg-tertiary: neutral-800
--text-primary: white
--text-secondary: neutral-400
--text-tertiary: neutral-500
--accent: purple-400
--accent-hover: purple-500
```

### Typography
```css
--font-heading: 'Inter', sans-serif (or existing font)
--font-body: 'Inter', sans-serif

/* Sizes */
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 1.875rem
--text-4xl: 2.25rem
--text-5xl: 3rem
```

### Spacing
```css
--spacing-xs: 0.5rem
--spacing-sm: 1rem
--spacing-md: 1.5rem
--spacing-lg: 2rem
--spacing-xl: 3rem
--spacing-2xl: 4rem
```

### Shadows
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
```

## Animation Guidelines

### Scroll Animations
- Use Framer Motion's `whileInView` for scroll-triggered animations
- Fade-in + slide-up pattern for sections
- Stagger animations for lists and grids
- Duration: 0.5-0.8s
- Easing: ease-out

### Hover Animations
- Scale: 1.02-1.05 for cards
- Color transitions: 200-300ms
- Shadow elevation on hover
- Smooth transitions with `transition-all duration-200`

### Loading States
- Spinner for form submissions
- Skeleton screens for lazy-loaded content
- Progress indicators for multi-step processes

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Layout Adjustments
- **Mobile (< 640px)**: Single column, stacked sections, full-width buttons
- **Tablet (640px - 1024px)**: 2-column grids, adjusted spacing
- **Desktop (> 1024px)**: Multi-column layouts, horizontal timelines, side-by-side comparisons

## Implementation Notes

### New Patterns to Introduce
- **Blob shapes**: Organic SVG shapes for backgrounds and decorative elements
- **Curved dividers**: SVG wave/curve transitions between sections
- **Floating elements**: Decorative circles and shapes with parallax/animation
- **Asymmetric layouts**: Off-center content, varied sizing, bento-box grids
- **Circular visualizations**: For ROI calculator, advantages layout, vetting funnel
- **Horizontal scroll**: For case studies carousel
- **Multi-step forms**: For talent matcher quiz
- **Gradient backgrounds**: Subtle gradients for section variety
- **Glow effects**: Box-shadows with color tints for emphasis
- **Custom sliders**: For ROI calculator input

### Performance Considerations
- Lazy load images below the fold
- Use `loading="lazy"` attribute for images
- Optimize SVG files (remove unnecessary paths, compress)
- Use CSS transforms for animations (GPU-accelerated)
- Debounce calculator inputs
- Use `will-change` CSS property sparingly for animated elements
- Code-split sections if page becomes too large
- Use React.memo for expensive components
- Optimize blob SVG complexity (fewer path points)

### Accessibility Considerations
- Semantic HTML (section, article, nav, etc.)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for icon-only buttons
- Keyboard navigation support
- Focus management for modals
- Color contrast ratios meet WCAG AA standards

## Migration Strategy

Since this is a redesign of the existing outsourcing page, we have two options:

### Option 1: Replace Existing Page
- Create new sections in `src/pages/outsourcing/sections/`
- Update `src/pages/outsourcing/index.tsx` to use new sections
- Keep existing sections as backup
- Test thoroughly before removing old sections

### Option 2: Create New Route
- Create `src/pages/outsourcing/it-staffing.tsx` as new page
- Add new route in routing configuration
- Keep existing outsourcing page unchanged
- Gradually migrate traffic to new page

**Recommendation**: Option 2 (new route) for safer deployment and A/B testing capability.
