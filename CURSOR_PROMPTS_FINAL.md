# Final Cursor Prompts for ConversionIQ Product Pages

These prompts are optimized to reuse existing components from `REFACTORING_SUMMARY.md` and follow the established design system.

---

## === Cursor Prompt: /products/sms-node ===

**Context:**
Create/update the SMS Node product page at `/products/sms-node`. This page follows the same interior product page pattern as Web-Chat Node and ChattiLive. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse the same spacing (top/bottom padding: 80-100px, max-widths, and grid) as the Web-Chat Node page
- Use background alternation: light purple (`#F7F8FC`) → white → light purple → white
- Section-to-section spacing: 80-100px vertical padding, except for tight spacing (24-32px) between related sections

**Hero Section:**
Use the existing `<ProductHero />` component from `components/content/ProductHero.tsx`:
- `eyebrow`: "PRODUCT"
- `title`: "SMS Node" (or the exact H1 from the SMS Node copy deck)
- `subtitle`: The supporting subcopy from the SMS Node copy deck (exact text, max-width 640px)
- Match the typography and spacing of the Web-Chat Node hero (centered text, 96px top/bottom padding)

**Content Sections:**
For each major section in the SMS Node copy deck, use the appropriate component:

1. **First Feature Section** (e.g., "Outbound Execution" or similar):
   - Use `<SplitSection />` from `components/layout/SplitSection.tsx`
   - `title`: The H2 from the copy deck
   - `subtitle`: The intro paragraph
   - `features`: Array of feature items (title + body) from the copy deck bullets
   - `side`: "image-right" (text left, visual right)
   - `background`: "muted" (light purple)
   - `titleWeight`: 300
   - `children`: Placeholder visual card with gradient background matching Web-Chat Node pattern
   - **Copy Coverage**: Include ALL bullets from this section in the copy deck - do not drop or rewrite any content

2. **Second Feature Section** (alternating layout):
   - Use `<SplitSection />` with `side: "image-left"` and `background: "light"`
   - Same structure as above, but visual on left, text on right
   - Include all bullets from the copy deck section

3. **Specifications/Features Grid** (if present):
   - Use `<FeatureList />` from `components/layout/FeatureList.tsx`
   - `layout`: "grid" (2-column responsive grid)
   - `items`: All specification bullets from the copy deck
   - Wrap in `<PageSection />` with `background: "muted"`

4. **ROI/Tracking Section** (if present):
   - Use `<SplitSection />` or a centered layout with `<FeatureList layout="centered" />`
   - Include all metrics/features from the copy deck

**Testimonial Section** (if provided in copy deck):
- Use `<TestimonialBanner />` from `components/content/TestimonialBanner.tsx`
- `backgroundVariant`: "blue" (matching Web-Chat Node testimonial)
- Include exact quote, name, role, and company from copy deck

**Footer CTA:**
Use `<FooterCTA />` from `components/content/FooterCTA.tsx`:
- `title`: "Experience the ConversionIQ Advantage"
- `subtitle`: SMS Node-specific CTA copy from the copy deck
- `primaryLabel`: "Deploy SMS Node Now" (or appropriate CTA)
- `secondaryLabel`: "Speak with an Expert"
- Match the styling of Web-Chat Node footer CTA

**Copy Coverage:**
- Every H1, H2, bullet point, and paragraph from the SMS Node copy deck must appear on this page
- You may restructure into bullet lists, two-column layouts, or cards, but do not drop or rewrite content
- If the copy deck has a "How It Works" section with multiple bullets, ensure ALL bullets are present in the appropriate component

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Products dropdown, ensure "SMS Node" links to `/products/sms-node` (not `/sms` or `/sms-node` without products prefix)
2. Update `components/Footer.tsx` - In the Products column, add/confirm "SMS Node" → `/products/sms-node`
3. Audit all header/footer links to ensure none point to non-existent routes
4. If any stub pages are needed (About, Careers, Partners, Privacy Policy, Terms), create simple coming-soon layouts using existing layout components

**Visual Placeholders:**
- Add `// TODO: Replace placeholder visual card with SMS Node UI mockup` comments for visual slots
- Visual cards should match the gradient style from Web-Chat Node: `bg-gradient-to-br from-[#383299]/5 to-[#ef2d60]/5`

---

## === Cursor Prompt: /products/social-messenger-node ===

**Context:**
Create/update the Social & Messenger Node product page at `/products/social-messenger-node`. This page follows the same interior product page pattern as Web-Chat Node and ChattiLive. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse the same spacing (top/bottom padding: 80-100px, max-widths, and grid) as the Web-Chat Node page
- Use background alternation: light purple (`#F7F8FC`) → white → light purple → white
- Section-to-section spacing: 80-100px vertical padding, except for tight spacing (24-32px) between related sections

**Hero Section:**
Use the existing `<ProductHero />` component from `components/content/ProductHero.tsx`:
- `eyebrow`: "PRODUCT"
- `title`: "Social & Messenger Node" (or the exact H1 from the Social & Messenger Node copy deck)
- `subtitle`: The supporting subcopy from the copy deck (exact text, max-width 640px)
- Match the typography and spacing of the Web-Chat Node hero (centered text, 96px top/bottom padding)

**Content Sections:**
For each major section in the Social & Messenger Node copy deck, use the appropriate component:

1. **First Feature Section** (e.g., "Meta Social Conversion" or similar):
   - Use `<SplitSection />` from `components/layout/SplitSection.tsx`
   - `title`: The H2 from the copy deck
   - `subtitle`: The intro paragraph
   - `features`: Array of feature items (title + body) from the copy deck bullets
   - `side`: "image-right" (text left, visual right)
   - `background`: "muted" (light purple)
   - `titleWeight`: 300
   - `children`: Placeholder visual card with gradient background
   - **Copy Coverage**: Include ALL bullets from this section - do not drop or rewrite any content

2. **Second Feature Section** (alternating layout):
   - Use `<SplitSection />` with `side: "image-left"` and `background: "light"`
   - Same structure, visual on left, text on right
   - Include all bullets from the copy deck section

3. **Specifications/Features Grid** (if present):
   - Use `<FeatureList />` from `components/layout/FeatureList.tsx`
   - `layout`: "grid" (2-column responsive grid)
   - `items`: All specification bullets from the copy deck
   - Wrap in `<PageSection />` with `background: "muted"`

4. **Integration/Platform Features** (if present):
   - Use `<SplitSection />` or `<FeatureList layout="centered" />` as appropriate
   - Include all features from the copy deck

**Testimonial Section** (if provided in copy deck):
- Use `<TestimonialBanner />` from `components/content/TestimonialBanner.tsx`
- `backgroundVariant`: "blue"
- Include exact quote, name, role, and company from copy deck

**Footer CTA:**
Use `<FooterCTA />` from `components/content/FooterCTA.tsx`:
- `title`: "Experience the ConversionIQ Advantage"
- `subtitle`: Social & Messenger Node-specific CTA copy from the copy deck
- `primaryLabel`: "Deploy Social & Messenger Node Now" (or appropriate CTA)
- `secondaryLabel`: "Speak with an Expert"

**Copy Coverage:**
- Every H1, H2, bullet point, and paragraph from the Social & Messenger Node copy deck must appear on this page
- You may restructure into bullet lists, two-column layouts, or cards, but do not drop or rewrite content
- If the copy deck groups multiple bullets under a single heading, preserve that grouping

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Products dropdown, ensure "Social & Messenger Node" links to `/products/social-messenger-node`
2. Update `components/Footer.tsx` - In the Products column, add/confirm "Social & Messenger Node" → `/products/social-messenger-node`
3. Audit all header/footer links to ensure none point to non-existent routes

**Visual Placeholders:**
- Add `// TODO: Replace placeholder visual card with Social & Messenger Node UI mockup` comments for visual slots

---

## === Cursor Prompt: /products/whatsapp-node ===

**Context:**
Create/update the WhatsApp Node product page at `/products/whatsapp-node`. This page follows the same interior product page pattern as Web-Chat Node and ChattiLive. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse the same spacing (top/bottom padding: 80-100px, max-widths, and grid) as the Web-Chat Node page
- Use background alternation: light purple (`#F7F8FC`) → white → light purple → white
- Section-to-section spacing: 80-100px vertical padding

**Hero Section:**
Use the existing `<ProductHero />` component:
- `eyebrow`: "PRODUCT"
- `title`: "WhatsApp Node" (or the exact H1 from the WhatsApp Node copy deck)
- `subtitle`: The supporting subcopy from the copy deck (exact text, max-width 640px)
- Match the typography and spacing of the Web-Chat Node hero

**Content Sections:**
For each major section in the WhatsApp Node copy deck:

1. **First Feature Section** (e.g., "Global Conversational Commerce" or similar):
   - Use `<SplitSection />` with `side: "image-right"`, `background: "muted"`, `titleWeight: 300`
   - Include ALL bullets from the copy deck section in the `features` array
   - Visual placeholder card in `children` slot

2. **Second Feature Section** (alternating):
   - Use `<SplitSection />` with `side: "image-left"`, `background: "light"`
   - Include all bullets from the copy deck section

3. **Specifications/Features Grid** (if present):
   - Use `<FeatureList layout="grid" />` wrapped in `<PageSection background="muted" />`
   - Include all specification bullets from the copy deck

4. **Global/Compliance Features** (if present):
   - Use `<SplitSection />` or `<FeatureList layout="centered" />` as appropriate
   - Include all features from the copy deck

**Testimonial Section** (if provided):
- Use `<TestimonialBanner backgroundVariant="blue" />`
- Include exact quote, name, role, and company from copy deck

**Footer CTA:**
Use `<FooterCTA />`:
- `title`: "Experience the ConversionIQ Advantage"
- `subtitle`: WhatsApp Node-specific CTA copy from the copy deck
- `primaryLabel`: "Deploy WhatsApp Node Now" (or appropriate CTA)
- `secondaryLabel`: "Speak with an Expert"

**Copy Coverage:**
- Every H1, H2, bullet point, and paragraph from the WhatsApp Node copy deck must appear on this page
- Do not drop or rewrite content beyond minor formatting adjustments

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Products dropdown, ensure "WhatsApp Node" links to `/products/whatsapp-node`
2. Update `components/Footer.tsx` - In the Products column, add/confirm "WhatsApp Node" → `/products/whatsapp-node`
3. Audit all header/footer links

**Visual Placeholders:**
- Add `// TODO: Replace placeholder visual card with WhatsApp Node UI mockup` comments

---

## === Cursor Prompt: /products/dotti-deeplink ===

**Context:**
Create/update the Dotti DeepLink™ product page at `/products/dotti-deeplink`. This page follows the same interior product page pattern as Web-Chat Node and ChattiLive. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse the same spacing (top/bottom padding: 80-100px, max-widths, and grid) as the Web-Chat Node page
- Use background alternation: light purple (`#F7F8FC`) → white → light purple → white
- Section-to-section spacing: 80-100px vertical padding

**Hero Section:**
Use the existing `<ProductHero />` component:
- `eyebrow`: "PRODUCT"
- `title`: "Dotti DeepLink™" (or the exact H1 from the Dotti DeepLink copy deck)
- `subtitle`: The supporting subcopy from the copy deck (exact text, max-width 640px)
- Match the typography and spacing of the Web-Chat Node hero

**Content Sections:**
For each major section in the Dotti DeepLink copy deck:

1. **First Feature Section** (e.g., "Real-time Data Enrichment" or similar):
   - Use `<SplitSection />` with `side: "image-right"`, `background: "muted"`, `titleWeight: 300`
   - Include ALL bullets from the copy deck section in the `features` array
   - Visual placeholder card in `children` slot

2. **Second Feature Section** (alternating):
   - Use `<SplitSection />` with `side: "image-left"`, `background: "light"`
   - Include all bullets from the copy deck section

3. **Technical Specifications** (if present):
   - Use `<FeatureList layout="grid" />` wrapped in `<PageSection background="muted" />`
   - Include all specification bullets from the copy deck

4. **Integration/Data Features** (if present):
   - Use `<SplitSection />` or `<FeatureList layout="centered" />` as appropriate
   - Include all features from the copy deck

**Testimonial Section** (if provided):
- Use `<TestimonialBanner backgroundVariant="blue" />`
- Include exact quote, name, role, and company from copy deck

**Footer CTA:**
Use `<FooterCTA />`:
- `title`: "Experience the ConversionIQ Advantage"
- `subtitle`: Dotti DeepLink-specific CTA copy from the copy deck
- `primaryLabel`: "Deploy Dotti DeepLink™ Now" (or appropriate CTA)
- `secondaryLabel`: "Speak with an Expert"

**Copy Coverage:**
- Every H1, H2, bullet point, and paragraph from the Dotti DeepLink copy deck must appear on this page
- Do not drop or rewrite content beyond minor formatting adjustments

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Products dropdown, ensure "Dotti DeepLink™" links to `/products/dotti-deeplink`
2. Update `components/Footer.tsx` - In the Products column, add/confirm "Dotti DeepLink™" → `/products/dotti-deeplink`
3. Audit all header/footer links

**Visual Placeholders:**
- Add `// TODO: Replace placeholder visual card with Dotti DeepLink UI mockup` comments

---

## === Cursor Prompt: /customers (index) ===

**Context:**
Create/update the Customer Stories index page at `/customers`. This page showcases customer case studies and testimonials. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse section spacing (80-100px vertical padding) from existing pages
- Use `<PageSection />` for consistent container and background handling

**Hero Section:**
Use a simple hero pattern (not ProductHero, as this is not a product page):
- Use `<PageSection background="light" padding="default" />`
- H1: "Customer Stories" (or exact title from copy deck)
- Subtitle: Supporting copy from the copy deck
- Match typography: H1 at `clamp(44px, 5vw, 52px)`, `fontWeight: 600`, centered
- Body text: `fontSize: 16px`, `lineHeight: 1.6`, max-width 640px, centered

**Customer Stories Grid:**
- Use a responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Each card should use consistent styling:
  - Company logo/image
  - Company name (H3, `fontSize: 20px`, `fontWeight: 600`)
  - Industry/tag (small text, muted)
  - Short description (body text, `fontSize: 14px`, `lineHeight: 1.5`)
  - "Read Case Study" link/button
- Wrap in `<PageSection background="light" />`
- Include all customer stories from the copy deck

**Featured Testimonial** (if present):
- Use `<TestimonialBanner backgroundVariant="blue" />` for a featured testimonial
- Include exact quote, name, role, and company from copy deck

**Call-to-Action Section:**
- Use `<FooterCTA />` or a simpler CTA section:
- Title: "Share Your Success Story" (or appropriate CTA from copy deck)
- Subtitle: Supporting copy
- Primary button: "Contact Us" or appropriate action

**Copy Coverage:**
- Every customer story, testimonial, and section from the copy deck must appear on this page
- Do not drop or rewrite content

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Resources dropdown, ensure "Customer Stories" links to `/customers`
2. Update `components/Footer.tsx` - In the Resources column, add/confirm "Customer Stories" → `/customers`
3. Ensure each customer story card links to `/customers/[slug]` where `[slug]` matches the customer identifier

**Visual Placeholders:**
- Add `// TODO: Replace placeholder with actual company logos` comments for logo slots

---

## === Cursor Prompt: /customers/[slug] (detail template) ===

**Context:**
Create a dynamic case study detail page template at `/customers/[slug]`. This page displays individual customer case studies. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse section spacing (80-100px vertical padding) from existing pages
- Use `<PageSection />` for consistent container and background handling

**Page Structure:**
This is a Next.js dynamic route. Create the file at `app/customers/[slug]/page.tsx`.

**Hero Section:**
- Use `<PageSection background="light" padding="default" />`
- H1: Company name + case study title (from data/copy deck)
- Subtitle: Brief overview from the case study
- Company logo (if available)
- Match typography: H1 at `clamp(44px, 5vw, 52px)`, `fontWeight: 600`

**Case Study Content Sections:**
For each section in the case study structure:

1. **Challenge Section:**
   - Use `<SplitSection />` with `side: "image-right"`, `background: "light"`
   - Title: "The Challenge"
   - Include all challenge points from the case study

2. **Solution Section:**
   - Use `<SplitSection />` with `side: "image-left"`, `background: "muted"`
   - Title: "The Solution"
   - Include all solution details from the case study

3. **Results Section:**
   - Use `<PageSection background="light" />` with centered content
   - Title: "Results"
   - Display metrics/stats in a grid or card layout
   - Include all results data from the case study

4. **Testimonial:**
   - Use `<TestimonialBanner backgroundVariant="blue" />`
   - Include exact quote, name, role, and company from case study

**Back to Stories Link:**
- Add a link/button at the bottom: "← Back to Customer Stories" → `/customers`

**Copy Coverage:**
- Every section, bullet point, metric, and quote from the case study copy deck must appear on this page
- Do not drop or rewrite content

**Data Structure:**
- Create a data file (e.g., `app/customers/case-studies.ts` or similar) with case study data
- Each case study should have: `slug`, `companyName`, `title`, `challenge`, `solution`, `results`, `testimonial`, `logo`, etc.
- The `[slug]` parameter should map to the case study data

**Navigation & Footer Wiring:**
- Ensure the page is accessible via `/customers/[slug]` routes
- The customer stories index page should link to these detail pages
- No additional nav/footer changes needed (inherits from layout)

**Visual Placeholders:**
- Add `// TODO: Replace placeholder with actual case study images` comments

---

## === Cursor Prompt: /faq ===

**Context:**
Create/update the FAQ page at `/faq`. This page displays frequently asked questions in an organized, scannable format. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse section spacing (80-100px vertical padding) from existing pages
- Use `<PageSection />` for consistent container and background handling

**Hero Section:**
- Use `<PageSection background="light" padding="default" />`
- H1: "Frequently Asked Questions" (or exact title from copy deck)
- Subtitle: Brief intro text from the copy deck
- Match typography: H1 at `clamp(44px, 5vw, 52px)`, `fontWeight: 600`, centered
- Body text: `fontSize: 16px`, `lineHeight: 1.6`, max-width 640px, centered

**FAQ Categories:**
Organize FAQs by category if the copy deck groups them (e.g., "Getting Started", "Pricing", "Technical", etc.):

- Use `<PageSection background="light" />` for each category section
- Category H2: `fontSize: clamp(36px, 3vw, 40px)`, `fontWeight: 600`, left-aligned
- FAQ items: Use an accordion or expandable card pattern
  - Question: H3, `fontSize: 18px`, `fontWeight: 600`, `color: #1B1340`
  - Answer: Body text, `fontSize: 16px`, `lineHeight: 1.6`, `color: #6B7280`
  - Spacing: 16px between question and answer, 24px between FAQ items

**FAQ Item Structure:**
If using an accordion pattern:
- Each FAQ item should be expandable/collapsible
- Use consistent styling for all questions and answers
- Include all FAQs from the copy deck - do not drop any questions

**Search/Filter** (if specified in copy deck):
- Add a search input at the top of the FAQ list
- Filter by category if categories exist
- Match input styling to existing form components

**Call-to-Action Section:**
- Use `<FooterCTA />` or a simpler CTA:
- Title: "Still Have Questions?" (or appropriate CTA from copy deck)
- Subtitle: "Contact our support team"
- Primary button: "Contact Support" or "Get Help"

**Copy Coverage:**
- Every FAQ question and answer from the copy deck must appear on this page
- Do not drop or rewrite content
- Preserve category groupings if they exist in the copy deck

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Resources dropdown, ensure "FAQ" links to `/faq`
2. Update `components/Footer.tsx` - In the Resources column, add/confirm "FAQ" → `/faq`
3. Audit all header/footer links

---

## === Cursor Prompt: /help ===

**Context:**
Create/update the Help Center page at `/help`. This page provides help documentation, guides, and support resources. The design system, component library, and typography tokens are documented in `REFACTORING_SUMMARY.md` and the style guide pages at `/style/components` and `/style/layout`. **You must reuse existing components** - do not create new layouts or reinvent patterns that already exist.

**Design System Requirements:**
- Match H1, H2, body text, and button typography to the scales defined on `/style/layout`
- Reuse section spacing (80-100px vertical padding) from existing pages
- Use `<PageSection />` for consistent container and background handling

**Hero Section:**
- Use `<PageSection background="light" padding="default" />`
- H1: "Help Center" (or exact title from copy deck)
- Subtitle: Brief intro text from the copy deck
- Match typography: H1 at `clamp(44px, 5vw, 52px)`, `fontWeight: 600`, centered
- Body text: `fontSize: 16px`, `lineHeight: 1.6`, max-width 640px, centered

**Help Categories:**
Organize help content by category (e.g., "Getting Started", "Product Guides", "Troubleshooting", etc.):

- Use `<PageSection background="light" />` for each category section
- Category H2: `fontSize: clamp(36px, 3vw, 40px)`, `fontWeight: 600`, left-aligned
- Help articles: Display as cards in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
  - Article title: H3, `fontSize: 18px`, `fontWeight: 600`
  - Article description: Body text, `fontSize: 14px`, `lineHeight: 1.5`
  - "Read Article" link
  - Include all help articles from the copy deck

**Quick Links Section:**
- Use `<FeatureList layout="grid" />` for quick access links
- Include common help topics from the copy deck
- Each item should link to the relevant help article or section

**Search Functionality:**
- Add a search input at the top
- Allow searching across help articles
- Match input styling to existing form components

**Contact Support Section:**
- Use `<PageSection background="muted" />` for a highlighted support section
- Title: "Need More Help?"
- Include contact options from the copy deck (email, chat, ticket system, etc.)
- Use `<FooterCTA />` or a simpler CTA pattern

**Copy Coverage:**
- Every help category, article, and resource from the copy deck must appear on this page
- Do not drop or rewrite content
- Preserve category groupings if they exist in the copy deck

**Navigation & Footer Wiring:**
After creating/updating this page:
1. Update `components/Navigation.tsx` - In the Resources dropdown, ensure "Help Center" links to `/help`
2. Update `components/Footer.tsx` - In the Resources column, add/confirm "Help Center" → `/help`
3. Audit all header/footer links

**Visual Placeholders:**
- Add `// TODO: Replace placeholder with actual help article icons/images` comments if needed

---

## Notes for All Prompts

1. **Component Imports**: Always import components from their correct paths:
   - `@/components/layout/PageSection`
   - `@/components/layout/SplitSection`
   - `@/components/layout/FeatureList`
   - `@/components/content/ProductHero`
   - `@/components/content/FooterCTA`
   - `@/components/content/SecurityProtocolsSection`
   - `@/components/content/TestimonialBanner`

2. **Typography Consistency**: Reference `/style/layout` for exact font sizes, weights, and line-heights. Do not invent new typography values.

3. **Spacing Consistency**: Use the same padding values (80-100px for sections, 24-32px for tight spacing) as existing product pages.

4. **Background Alternation**: Follow the pattern: light purple → white → light purple → white for product pages.

5. **Copy Fidelity**: Never drop or rewrite content from the copy deck. If restructuring is needed, preserve all original text.

6. **Visual Placeholders**: Always include TODO comments for placeholder images/visuals that need to be replaced later.

