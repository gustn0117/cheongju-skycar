# 청주스카이차 (Cheongju Sky Car) - Next.js Website

## Project Overview
A complete, production-ready Next.js website for "청주스카이차" (Cheongju Sky Car), an aerial work platform/sky car rental business in Cheongju, South Korea.

## Key Features
- **Modern Design**: Dark navy (#1a2744) and orange/amber (#f59e0b) brand colors
- **Fully Responsive**: Mobile-first approach with Tailwind CSS
- **Korean-Optimized**: Noto Sans KR font, full Korean content
- **4 Main Pages**: Home, About, Services, Contact
- **Professional Layout**: Hero sections, feature cards, equipment showcase, pricing tables
- **Contact Features**: Online form + direct phone contact (010-1234-5678)
- **24/7 Service Messaging**: Emphasizes rapid deployment and safety

## Tech Stack
- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with PostCSS
- **Font**: Noto Sans KR (Google Fonts)
- **Deployment Ready**: Optimized build configuration

## Directory Structure
```
cheongju-skycar/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with Header/Footer
│   │   ├── page.tsx             # Home page (/)
│   │   ├── globals.css          # Global styles & Tailwind
│   │   ├── about/
│   │   │   └── page.tsx         # About page (/about)
│   │   ├── services/
│   │   │   └── page.tsx         # Services page (/services)
│   │   └── contact/
│   │       └── page.tsx         # Contact page (/contact)
│   └── components/
│       ├── Header.tsx           # Responsive navigation header
│       └── Footer.tsx           # Footer with links & info
├── public/                      # Static assets
├── tsconfig.json               # TypeScript config with path aliases
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS/Tailwind config
├── package.json                # Dependencies and scripts
└── package-lock.json           # Locked dependencies
```

## Pages & Content

### 1. Home Page (/)
**Components**:
- Hero section with cloud emoji, company name, phone CTA
- 4-item features grid (신속배차, 안전최우선, 합리적 가격, 전문 기술력)
- 4-equipment showcase cards (1톤, 3.5톤, 5톤 스카이차, 25톤 크레인)
- Work areas grid (6 areas: 간판, 외벽, 철거, 태양광, 교량, CCTV)
- CTA banner with phone & contact links

### 2. About Page (/about)
**Components**:
- Mission statement and vision section
- 4 core values cards (안전, 신속성, 전문성, 신뢰)
- 5-point company timeline (2009-2024)
- Stats section (15+ years, 5000+ projects, 99% satisfaction, 24H service)

### 3. Services Page (/services)
**Components**:
- 4 equipment detail cards with full specs and pricing
- 6-step work process visualization
- 4 additional services cards
- Pricing notes and important information
- Equipment details include:
  - 1톤: 18m height, 25-30만원/hour
  - 3.5톤: 30m height, 35-40만원/hour
  - 5톤: 45m height, 45-50만원/hour
  - 25톤 crane: 40m height, 80-100만원/hour

### 4. Contact Page (/contact)
**Components**:
- Online contact form (이름, 전화, 작업내용, 희망일자)
- Direct contact info box
- Service area coverage
- Company features highlight
- Map placeholder
- 4 FAQ items with common questions

## Layout Components

### Header.tsx
- Sticky navigation header with logo
- Responsive menu (desktop nav + mobile hamburger)
- Phone CTA button with link
- Dark navy background with orange highlights
- Mobile-friendly toggle

### Footer.tsx
- 3-column footer layout
- Company info with icon and hours
- Quick links navigation
- Services list
- Copyright and tagline

### Root Layout (layout.tsx)
- Google Fonts integration (Noto Sans KR)
- Metadata configuration
- Header/Footer wrapper
- Proper HTML structure

## Styling Details

### Color Scheme
- **Primary**: #1a2744 (Dark Navy)
- **Accent**: #f59e0b (Orange/Amber)
- **Secondary**: #2a3f5f (Slate Blue)
- **Text**: White on dark backgrounds, #1a2744 on light
- **Backgrounds**: White, gray-50, gradients

### Design Features
- Smooth animations using Tailwind animate classes
- Gradient backgrounds for hero sections
- Rounded corners (rounded-lg, rounded-xl)
- Shadow effects (shadow-lg, hover effects)
- Responsive grid layouts (grid-cols-1, md:grid-cols-2, lg:grid-cols-3/4)
- Hover transforms and transitions

### Typography
- Font Family: Noto Sans KR (from Google Fonts)
- Heading Sizes: text-2xl to text-6xl with font-bold
- Body Text: text-base to text-lg
- Proper line heights and spacing

## Features & Functionality

### Form Handling
- Contact form with client-side state management
- Form validation (required fields)
- Success message display after submission
- Auto-reset after 3 seconds

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Proper breakpoints (md, lg)
- Touch-friendly buttons and links

### SEO
- Proper metadata in layout
- Semantic HTML structure
- Descriptive page titles and descriptions
- Korea-optimized keywords

### Performance
- Static site generation (SSG)
- Optimized build configuration
- Proper asset handling
- Font preloading from Google Fonts

## Scripts & Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## File Sizes & Completeness
All files are created and fully functional:
- Header component: 2.7KB (responsive, mobile menu)
- Footer component: 2.7KB (complete info sections)
- Home page: 7.4KB (hero, features, equipment, CTA)
- About page: 8.1KB (mission, values, timeline, stats)
- Services page: 13KB (equipment specs, pricing, process, FAQ)
- Contact page: 12KB (form, contact info, FAQ, map)
- Global CSS: 720B (Tailwind config, custom styles)
- Root layout: 1.3KB (metadata, fonts, structure)

## Configuration Files

### tsconfig.json
- Strict TypeScript mode
- Path alias: @/* -> src/*
- React JSX automatic runtime
- Isolated modules for SWC compilation

### next.config.ts
- React Strict Mode enabled
- Compression enabled
- Optimized build settings

### postcss.config.mjs
- Tailwind CSS v4 integration
- Modern ES module format

### package.json
- All standard Next.js scripts
- Development, build, and production configurations
- Complete dependencies list

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancement Ideas
1. Google Maps integration for location
2. Contact form backend (send email)
3. Photo gallery with equipment images
4. Real phone icon with click-to-call
5. Live chat widget
6. Blog section for updates
7. Online booking system
8. Customer testimonials section

## Deployment Ready
✓ TypeScript compilation successful
✓ Build completes without errors
✓ All routes configured (/, /about, /services, /contact)
✓ Responsive design tested across breakpoints
✓ SEO metadata configured
✓ Performance optimized

The website is ready to be deployed to Vercel, Netlify, or any Node.js hosting platform.

---
Built with Next.js 16.1.6, React 19, TypeScript, and Tailwind CSS v4
Last Updated: 2026-03-07
