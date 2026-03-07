# 청주스카이차 Website - File Reference & Code Snippets

## Configuration Files

### tsconfig.json
TypeScript configuration with Next.js support and path aliases.
```json
{
  "paths": {
    "@/*": ["./src/*"]
  },
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```
**Purpose**: Enables `@/` import alias throughout the project

### postcss.config.mjs
PostCSS configuration for Tailwind CSS v4.
```js
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
```
**Purpose**: Connects Tailwind CSS to the build process

### next.config.ts
Next.js configuration with React Strict Mode and compression.
**Purpose**: Optimizes build and enables modern React features

### package.json
Contains all dependencies and npm scripts.
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## Core Application Files

### src/app/layout.tsx
Root layout wrapping all pages with Header and Footer.

**Key Features**:
- Imports Google Fonts (Noto Sans KR)
- Sets up metadata
- Provides Header/Footer structure
- Uses flex layout for full-height pages

**Usage**: Automatically wraps all pages

### src/app/globals.css
Global styles including Tailwind imports and custom styling.

**Key Styles**:
```css
@import "tailwindcss";
body {
  font-family: 'Noto Sans KR', sans-serif;
  color: #1a2744;
}
```

**Custom Features**:
- Smooth scroll behavior
- Custom scrollbar styling
- Font family fallbacks

### src/app/page.tsx
Home page (/) with comprehensive content sections.

**Sections**:
1. Hero section with cloud emoji and CTA buttons
2. 4-item features grid
3. Equipment showcase (4 cards with specs)
4. Work areas grid (6 areas)
5. CTA banner section

**Key Components**:
```tsx
const features = [
  { title: '신속배차', description: '...', icon: '⚡' },
  // ... more items
];
```

### src/app/about/page.tsx
About page (/about) with company information.

**Sections**:
1. Hero with company name
2. Mission & Vision section
3. Core values (4 cards)
4. Timeline (5 milestones from 2009-2024)
5. Stats section with key metrics
6. CTA section

**Timeline Structure**:
```tsx
const timeline = [
  {
    year: '2009',
    title: '회사 설립',
    description: '청주 지역에서...'
  },
  // ... more years
];
```

### src/app/services/page.tsx
Services page (/services) with detailed pricing and specs.

**Sections**:
1. Equipment detail cards (1톤, 3.5톤, 5톤, 25톤)
   - Specs table (height, radius, capacity, deployment time)
   - Pricing table (hourly, 2-hour, half-day rates)
   - Features/use cases
2. 6-step work process visualization
3. Additional services (4 cards)
4. Pricing notes
5. CTA section

**Equipment Structure**:
```tsx
const equipment = [
  {
    name: '1톤 스카이차',
    height: '18m',
    specs: [
      { label: '작업 높이', value: '18m' },
      // ... more specs
    ],
    pricing: [
      { duration: '1시간', price: '25만원' },
      // ... more prices
    ]
  },
  // ... more equipment
];
```

### src/app/contact/page.tsx
Contact page (/contact) with form and business information.

**Sections**:
1. Online contact form
   - Name input (required)
   - Phone input (required)
   - Content textarea (required)
   - Desired date picker
   - Success message display
2. Direct contact info box
3. Service area coverage
4. Company features highlight
5. Map placeholder
6. FAQ section (4 Q&A items)
7. Final CTA

**Form State**:
```tsx
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  content: '',
  date: '',
});

const [submitted, setSubmitted] = useState(false);
```

---

## Component Files

### src/components/Header.tsx
Responsive navigation header with mobile menu.

**Features**:
- Logo with cloud emoji
- Desktop navigation (4 menu items)
- Mobile hamburger menu
- Sticky positioning
- Phone CTA button
- Smooth transitions

**Key State**:
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

**Menu Items**:
```tsx
const menuItems = [
  { label: '홈', href: '/' },
  { label: '회사소개', href: '/about' },
  { label: '서비스안내', href: '/services' },
  { label: '문의하기', href: '/contact' },
];
```

**Styling**:
- Background: `#1a2744` (dark navy)
- Text: white
- Hover: `#f59e0b` (orange)
- z-index: 50 (sticky)

### src/components/Footer.tsx
Footer with company info, links, and services.

**Sections**:
1. Company info (logo, description, contact details)
2. Quick links (navigation)
3. Services list (equipment types)
4. Divider line
5. Copyright and tagline

**Layout**:
- 3 columns on desktop
- Single column on mobile
- Dark navy background
- Orange accents

---

## Styling & Design System

### Color Palette
```
Primary Dark:     #1a2744 (Header, Hero, Footer)
Accent Orange:    #f59e0b (Buttons, Highlights)
Secondary Blue:   #2a3f5f (Gradients)
Light Gray:       #f1f5f9 (Backgrounds)
```

### Responsive Breakpoints
- Mobile: 0px (default)
- Small: 640px (sm)
- Medium: 768px (md)
- Large: 1024px (lg)
- XL: 1280px (xl)

### Typography
```
Font Family: 'Noto Sans KR'
Headings: font-bold (700-900 weight)
h1: text-6xl (home), text-5xl (pages)
h2: text-3xl to text-4xl
h3: text-xl to text-2xl
Body: text-base to text-lg
```

### Common Classes Used
```
Grid Layouts:
- grid-cols-1 (mobile)
- md:grid-cols-2 (tablet)
- lg:grid-cols-3, lg:grid-cols-4 (desktop)

Spacing:
- py-16 md:py-24 (vertical)
- px-4 (horizontal)
- gap-6, gap-8 (grid gaps)

Cards:
- rounded-xl (border radius)
- shadow-lg (shadow)
- hover:shadow-xl (hover effect)
- p-6 md:p-8 (padding)
```

---

## Key Features Implementation

### 1. Responsive Navigation
**Desktop**: Horizontal menu with phone button
**Mobile**: Hamburger menu that slides down

```tsx
// Mobile toggle
<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  {mobileMenuOpen ? '✕' : '☰'}
</button>

// Show menu conditionally
{mobileMenuOpen && <nav>...</nav>}
```

### 2. Contact Form with Validation
```tsx
const handleSubmit = (e) => {
  e.preventDefault();
  // Validates via HTML required attribute
  console.log('Form submitted:', formData);
  setSubmitted(true);
  setTimeout(() => { /* reset */ }, 3000);
};
```

### 3. Emoji Icons
Uses Unicode emoji instead of icon library:
- ☁️ Cloud (company logo)
- ⚡ Lightning (fast)
- 🛡️ Shield (safety)
- ☎️ Phone (contact)
- 📍 Location pin
- 🚗 🚙 🚕 Cars
- 🏗️ Construction
- And many more...

### 4. Gradient Backgrounds
```jsx
<section className="bg-gradient-to-b from-[#1a2744] to-[#2a3f5f]">
<section className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f]">
```

### 5. Hover Effects
```jsx
<a className="hover:text-[#f59e0b] transition-colors">
<button className="hover:bg-[#f97316] transition-all transform hover:scale-105">
```

---

## Content Data Structures

All pages use JavaScript arrays/objects for content:

**Home Page Features**:
```tsx
const features = [
  { title: string, description: string, icon: string }
]
```

**Equipment Cards**:
```tsx
const equipment = [
  {
    name: string,
    height: string,
    price: string,
    features: string[],
    icon: string
  }
]
```

**Timeline Events**:
```tsx
const timeline = [
  {
    year: string,
    title: string,
    description: string
  }
]
```

**Work Process Steps**:
```tsx
const workProcess = [
  {
    step: string,
    title: string,
    description: string,
    icon: string
  }
]
```

---

## Import Paths & Aliases

All imports use the `@/` alias for cleaner code:

```tsx
// Header imports
import Link from 'next/link';
import { useState } from 'react';

// Component imports
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Style imports
import './globals.css';
```

---

## Build & Deploy Information

**Build Command**: `npm run build`
**Dev Server**: `npm run dev`
**Start Production**: `npm start`

**Build Output**:
- ✓ All 5 routes compile
- ✓ Static generation (SSG)
- ✓ No runtime errors
- ✓ Production-optimized

---

## Customization Guide

### Change Company Name
Edit in:
1. `src/components/Header.tsx` - Line with "청주스카이차"
2. `src/components/Footer.tsx` - Footer section
3. `src/app/layout.tsx` - Metadata title

### Change Phone Number
Search for `010-1234-5678` and replace:
1. Header CTA button
2. Footer contact info
3. Contact page directly
4. All pages CTA sections

### Change Business Hours
Search for `08:00 ~ 17:00`:
1. Footer
2. Contact page
3. About page stats

### Update Pricing
Edit arrays in `/services/page.tsx`:
1. `equipment` array - pricing tables
2. Update `pricing` objects with new rates

### Add New Equipment
Add to `equipment` array in `/services/page.tsx`:
```tsx
{
  name: 'New Equipment',
  height: 'XXm',
  icon: 'emoji',
  specs: [...],
  pricing: [...],
  features: [...]
}
```

---

This reference covers all 11 files created for the project.
