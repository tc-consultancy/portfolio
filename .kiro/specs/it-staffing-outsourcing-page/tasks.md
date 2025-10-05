# Implementation Plan

- [x] 1. Create hero section with blob shapes and floating elements



  - Create `src/pages/outsourcing/it-staffing/hero-section.tsx` with asymmetric layout, large blob SVG background, floating geometric shapes, and prominent CTA buttons
  - Implement headline with purple-400 accent on one word, large pill-shaped CTA button, and hero image with rounded-3xl corners
  - Add Framer Motion animations: blob floating animation, parallax effect on circles, hero image fade-in with slide-up
  - Ensure responsive design (mobile: stacked layout, desktop: 60/40 split) and dark mode support using dark: classes
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7_

- [x] 2. Create trust barometer with curved divider and floating logo platforms


  - Create `src/pages/outsourcing/it-staffing/trust-bar.tsx` with curved SVG wave divider at top
  - Implement logo platforms as individual rounded-2xl containers with staggered vertical alignment
  - Add infinite horizontal scroll animation with smooth transitions
  - Implement hover effects: color returns (opacity 100%), platform lifts with shadow-xl
  - Add stagger animation on initial load
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3_



- [ ] 3. Create problem & promise section with asymmetric layout
  - Create `src/pages/outsourcing/it-staffing/problem-promise.tsx` with large circular blob shape on left side
  - Implement asymmetric layout: problems on left (50%), promise on right (50%)
  - Add 4 pain points with large icons in circular containers (80px diameter) and connecting dotted line
  - Create promise statement with decorative curved underline accent


  - Implement sequential fade-in animations for pain points, pulse animation for icons, slide-in for promise text
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_

- [ ] 4. Create how it works section with curved path visualization
  - Create `src/pages/outsourcing/it-staffing/how-it-works.tsx` with gradient background (white to purple-50/10)
  - Implement curved SVG path connecting 4 steps with alternating left/right positioning
  - Add large floating number circles (100px) above path with shadow-xl


  - Create decorative dots along the path
  - Implement SVG stroke animation for path drawing on scroll, sequential number scale-in, content fade-in after numbers
  - Add hover effect: number rotates slightly
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 5. Create vetting process section with horizontal progress bar
  - Create `src/pages/outsourcing/it-staffing/vetting-process.tsx` with dark background (neutral-900/neutral-950)
  - Implement horizontal progress bar (thick, 20px height) with gradient (purple-400 to purple-600)


  - Add 5 stage circles (120px) positioned above bar with connecting lines
  - Display percentage indicators below bar (100% → 80% → 40% → 15% → 5%)
  - Add engagement metrics display (e.g., "10,000+ candidates screened")
  - Implement progress bar fill animation from left to right on scroll, sequential stage light-up, percentage countdown, metrics count-up
  - Add hover effect on stages to show detailed descriptions
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3_



- [ ] 6. Create roles grid with bento-box layout
  - Create `src/pages/outsourcing/it-staffing/roles-grid.tsx` with asymmetric bento-box grid layout
  - Implement 8+ roles in varied-size containers using CSS Grid with different span sizes
  - Add blob SVG backgrounds (random organic shapes, purple-400/5 opacity) to some roles
  - Create icons in different sizes based on container size
  - Implement hover effects: container lifts (translateY -4px), shadow increases, icon rotates slightly
  - Ensure responsive design: desktop (bento-box), tablet (2 cols), mobile (1 col)
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_



- [ ] 7. Create company difference section with pentagonal layout
  - Create `src/pages/outsourcing/it-staffing/company-difference.tsx` with gradient background (purple-50/5 to white)
  - Implement pentagonal/star layout with 5 differentiators radiating from center
  - Add central circle (200px diameter) with "Why Choose Us" text
  - Create dashed lines connecting center to each differentiator forming pentagon/star shape
  - Implement differentiator circles (120px) with gradient borders (purple-400 to purple-600)
  - Add floating decorative elements (small circles, dots)
  - Implement stagger fade-in for differentiators, hover effects (circle scales, line thickens, shows more detail), center rotation animation, line draw-in on scroll, pulse animation for each differentiator
  - Include metrics in differentiators (e.g., "60% hire rate", "95% client retention")


  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 8. Create comparison table with split background and overlapping containers
  - Create `src/pages/outsourcing/it-staffing/comparison-table.tsx` with split background (left: white, right: neutral-100)
  - Implement two large rounded-3xl containers (60% width each, overlapping slightly)
  - Style "Us" container: white with purple-400 accent border, elevated with shadow and glow effect
  - Style "Others" container: neutral-100, flat
  - Add 7 comparison features with large checkmarks (purple-400 circles) for "Us" and small grey circles/X marks for "Others"
  - Implement slide-in animations: "Us" from left, "Others" from right, sequential feature check-ins


  - Add hover effect on "Us" container: glow intensifies
  - Ensure responsive design: desktop (side-by-side overlapping), mobile (stacked)
  - _Requirements: 7.1.1, 7.1.2, 7.1.3, 7.1.4, 7.1.5, 7.1.6, 7.1.7, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_

- [ ] 9. Create case studies section with horizontal scroll carousel
  - Create `src/pages/outsourcing/it-staffing/case-studies.tsx` with horizontal scrolling carousel
  - Implement 3 case study containers (600px width each) with large rounded-3xl styling
  - Create asymmetric layout within each case study: image/logo (40%), content (60%)


  - Add large decorative quotation marks (SVG), metrics in large circles with purple-400 borders
  - Position avatar absolutely, overlapping content
  - Implement horizontal scroll with snap points, scroll indicators (dots), drag-to-scroll functionality
  - Add hover effect: slight scale increase, metrics count-up when in view
  - Ensure responsive design: mobile (single column, vertical scroll)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3_

- [ ] 10. Create talent matcher quiz with multi-step form
  - Create `src/pages/outsourcing/it-staffing/talent-matcher.tsx` with gradient background (white to purple-50/5)
  - Implement large rounded-3xl container in center with white background and shadow-2xl


  - Create multi-step form: Step 1 (role selection with large icon buttons), Step 2 (tech stack tag selection), Step 3 (email input)
  - Add progress indicator (dots or bar), decorative blob shapes in background
  - Implement step transitions (slide left/right), selected options highlight in purple-400, form validation before next step
  - Add final step action: open modal with results or contact form
  - Ensure responsive design and dark mode support
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_

- [ ] 11. Create ROI calculator with circular visualization
  - Create `src/pages/outsourcing/it-staffing/roi-calculator.tsx` with dark background (neutral-900)


  - Implement large circular progress indicator (300px diameter) with gradient stroke (purple-400 to purple-600)
  - Add custom salary slider with large circular handle and purple-400 track
  - Display savings amount in center of circle (large, bold, white text)
  - Add decorative grid pattern in background (subtle)
  - Implement real-time calculation as user types, smooth number count-up/down, circle glow effect
  - Add hover effect on slider: handle scales up
  - Include CTA button: "Get Started" in white with purple-400 background
  - Display assumptions text below calculator
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_



- [ ] 12. Create engagement models section with diamond layout
  - Create `src/pages/outsourcing/it-staffing/engagement-models.tsx` with white background
  - Implement 4 models in diamond/cross pattern with connecting dashed lines
  - Add central element: "Flexible" text or icon
  - Create each model in rounded-2xl container with icon in large circle (100px) with gradient background
  - Implement stagger fade-in for models, hover effects (container lifts, shadow increases), line draw-in on scroll
  - Add CTA at bottom: "Which model is right for you? Talk to an expert"
  - Add click interaction: expand to show more details or navigate


  - Ensure responsive design: desktop (diamond pattern), mobile (vertical stack)
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4_

- [ ] 13. Create FAQ section with two-column layout
  - Create `src/pages/outsourcing/it-staffing/faq-section.tsx` with white background
  - Implement two-column layout: questions (60%), decorative visual (40%)



  - Create minimal accordion design with no borders, generous spacing (py-6)
  - Add plus/minus icon that rotates 180deg on expand
  - Implement right column: large blob shape or abstract illustration in purple-400/10
  - Add 5-7 FAQ items with smooth height animation, only one open at a time
  - Implement scroll to expanded item if needed
  - Ensure responsive design: mobile (single column, visual below)
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3_

- [ ] 14. Create final CTA section with floating container
  - Create `src/pages/outsourcing/it-staffing/final-cta.tsx` with gradient background (purple-400 to purple-600)
  - Implement curved wave SVG divider at top (white to purple gradient)
  - Add large white rounded-3xl container (max-w-5xl) floating on purple background with shadow-2xl
  - Create decorative circles around container (purple-300, various sizes) with slow floating animation
  - Add headline, sub-headline, large pill-shaped CTA button with glow effect
  - Include trust indicators below button (reviews, clients, success rate) with count-up animation
  - Implement container fade-in with scale animation, button hover scale (1.05) and glow intensification
  - Ensure responsive design and dark mode support
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 15. Create shared utility components and SVG shapes
  - Create `src/pages/outsourcing/it-staffing/components/blob-shape.tsx` for reusable organic blob SVG shapes with configurable size, color, and opacity
  - Create `src/pages/outsourcing/it-staffing/components/curved-divider.tsx` for reusable wave/curve SVG dividers
  - Create `src/pages/outsourcing/it-staffing/components/floating-circle.tsx` for decorative floating circles with animation
  - Create `src/pages/outsourcing/it-staffing/components/metric-counter.tsx` for animated number counting component
  - Ensure all components support dark mode using dark: classes
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 15.1, 15.2, 15.3, 15.4, 15.5_

- [ ] 16. Integrate all sections into outsourcingone page
  - Update `src/pages/outsourcing/outsourcingone.tsx` to import and render all IT staffing sections in order
  - Ensure proper spacing between sections
  - Add smooth scroll behavior for navigation
  - Verify all sections work together cohesively
  - Test responsive design across all breakpoints (mobile, tablet, desktop)
  - Test dark mode toggle functionality across all sections
  - Verify all animations perform smoothly without jank
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7_
