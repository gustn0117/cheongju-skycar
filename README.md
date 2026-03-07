# 청주스카이차 (Cheongju Sky Car) - Next.js Website

A modern, professional, fully responsive website for an aerial work platform rental business in Cheongju, South Korea.

## Overview

This is a complete, production-ready Next.js website built with:
- **Next.js 16.1.6** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **React 19** - Latest React version
- **Noto Sans KR** - Korean-optimized typography

## Directory Structure

```
cheongju-skycar/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page (/)
│   │   ├── layout.tsx            # Root layout (Header/Footer wrapper)
│   │   ├── globals.css           # Global styles & Tailwind config
│   │   ├── about/
│   │   │   └── page.tsx          # About page (/about)
│   │   ├── services/
│   │   │   └── page.tsx          # Services page (/services)
│   │   └── contact/
│   │       └── page.tsx          # Contact page (/contact)
│   └── components/
│       ├── Header.tsx            # Responsive navigation header
│       └── Footer.tsx            # Footer with company info
├── public/                       # Static assets
├── node_modules/                 # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS/Tailwind configuration
├── package.json                  # Project metadata & scripts
├── package-lock.json             # Locked dependencies
└── README.md                      # This file
```

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Server runs at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## Pages

### Home Page (/)
- Hero section with cloud emoji and CTA buttons
- 4-item features grid highlighting key benefits
- Equipment showcase with 4 sky car cards
- Work areas section (6 different job types)
- Final CTA banner with phone and contact links

### About Page (/about)
- Mission and vision statement
- 4 core company values with icons
- 5-milestone company timeline (2009-2024)
- Key statistics (15+ years, 5000+ projects, 99% satisfaction)
- Professional design with gradients and cards

### Services Page (/services)
- Detailed equipment cards with full specifications:
  - 1톤 스카이차 (18m) - 25-30만원/hour
  - 3.5톤 스카이차 (30m) - 35-40만원/hour
  - 5톤 스카이차 (45m) - 45-50만원/hour
  - 25톤 크레인 (40m) - 80-100만원/hour
- 6-step work process visualization
- Additional services section
- Pricing notes and important information
- CTA banner

### Contact Page (/contact)
- Online contact form with validation
  - Name, phone, work content, desired date
  - Success message on submission
- Direct contact information box
- Service area coverage details
- Company features highlight
- Map placeholder
- 4 common FAQ questions and answers
- Final CTA section

## Design System

### Color Palette
```
Primary Dark:     #1a2744  (Header, Hero, Footer, Buttons)
Accent Orange:    #f59e0b  (Highlights, Hover states, CTAs)
Secondary Blue:   #2a3f5f  (Gradient backgrounds)
Light Gray:       #f1f5f9  (Alternative backgrounds)
```

### Typography
- **Font Family**: Noto Sans KR (Google Fonts)
- **Headings**: Bold weight (700-900)
- **Sizes**: 
  - H1: `text-6xl` (hero), `text-5xl` (pages)
  - H2: `text-3xl` to `text-4xl`
  - H3: `text-xl` to `text-2xl`
  - Body: `text-base` to `text-lg`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to all screen sizes

## Features

### Technical
- ✓ TypeScript strict mode for type safety
- ✓ App Router for modern routing
- ✓ Static Site Generation (SSG) for performance
- ✓ Responsive design with mobile-first approach
- ✓ SEO optimized with proper metadata
- ✓ Tailwind CSS v4 for efficient styling
- ✓ Google Fonts integration for Korean text

### Functional
- ✓ Contact form with client-side validation
- ✓ Phone click-to-call links (tel: protocol)
- ✓ Mobile hamburger navigation menu
- ✓ Smooth scroll behavior
- ✓ Hover animations and transitions
- ✓ Form success feedback

### Design
- ✓ Professional color scheme
- ✓ Gradient backgrounds for visual interest
- ✓ Shadow effects for depth
- ✓ Rounded corners and modern styling
- ✓ Unicode emoji icons (no icon library needed)
- ✓ Consistent spacing and typography

## Components

### Header.tsx
Responsive navigation component with:
- Logo with cloud emoji
- Navigation menu (4 items on desktop)
- Mobile hamburger menu
- Phone CTA button
- Sticky positioning at top
- Smooth hover effects

### Footer.tsx
3-column footer with:
- Company information and contact details
- Quick navigation links
- Services/equipment list
- Copyright and tagline
- Professional styling matching header

### Root Layout (layout.tsx)
- Wraps all pages with Header and Footer
- Loads Google Fonts (Noto Sans KR)
- Sets up proper metadata
- Provides flex structure for full-height pages

## Content Management

All page content is defined in data structures that can be easily updated:

**Equipment** (Services page):
```typescript
const equipment = [
  {
    name: '1톤 스카이차',
    height: '18m',
    specs: [...],        // Technical specifications
    pricing: [...],      // Pricing tiers
    features: [...],     // Use cases
    icon: '🚗'           // Emoji icon
  },
  // ... more equipment
];
```

**Timeline** (About page):
```typescript
const timeline = [
  {
    year: '2009',
    title: '회사 설립',
    description: 'Description here'
  },
  // ... more years
];
```

Easy to modify without touching layout code!

## Customization

### Change Phone Number
Search for `010-1234-5678` and replace with your number:
- Appears in Header, Footer, Contact page
- All links use `tel:` protocol for click-to-call

### Update Pricing
Edit the `pricing` arrays in `src/app/services/page.tsx`:
```typescript
pricing: [
  { duration: '1시간', price: '25만원' },
  { duration: '2시간', price: '45만원' },
  // ... etc
]
```

### Modify Colors
Replace color codes throughout project:
- Primary: `#1a2744` (dark navy)
- Accent: `#f59e0b` (orange)
- Secondary: `#2a3f5f` (slate blue)

### Add New Pages
Create new directory in `src/app/` with `page.tsx`:
```bash
mkdir src/app/news
echo 'export default function NewsPage() { return <div>...</div>; }' > src/app/news/page.tsx
```

Then update navigation in `Header.tsx`:
```typescript
{ label: '뉴스', href: '/news' },
```

### Add Equipment
Add to `equipment` array in `services/page.tsx`:
```typescript
{
  name: 'New Equipment',
  height: '50m',
  icon: '🚀',
  specs: [...],
  pricing: [...],
  features: [...]
}
```

## Backend Integration

The contact form currently uses client-side state. To handle real submissions:

```typescript
// In src/app/contact/page.tsx, update handleSubmit:
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // Send to your backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

Then create `src/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Handle submission (send email, save to DB, etc.)
  return Response.json({ success: true });
}
```

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Pushes to GitHub automatically, deploys with one command.

### Netlify
```bash
npm run build
# Deploy .next folder to Netlify
```

### Self-Hosted
```bash
npm run build
npm start
# Runs on port 3000 by default
```

Use PM2 for process management:
```bash
npm i -g pm2
pm2 start "npm start" --name "cheongju-skycar"
pm2 startup
pm2 save
```

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Then:
```bash
docker build -t cheongju-skycar .
docker run -p 3000:3000 cheongju-skycar
```

## Performance

- **Build Time**: ~1.3 seconds (Turbopack)
- **Route Generation**: All 5 routes compile without errors
- **Image Optimization**: Uses Next.js Image component (when adding images)
- **Font Loading**: Preconnected Google Fonts for fast rendering
- **CSS**: Tailwind v4 with PostCSS optimization
- **JavaScript**: Minimal client-side code, mostly SSG

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive down to 320px width

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build fails with module errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Styling looks broken?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that Tailwind classes are being used
- Ensure PostCSS config is correct

**TypeScript errors?**
```bash
npm run build
# Shows all TypeScript errors
```

## Support

For issues or questions:

1. **Next.js Docs**: https://nextjs.org/docs
2. **Tailwind CSS Docs**: https://tailwindcss.com/docs
3. **React Docs**: https://react.dev
4. **TypeScript Docs**: https://www.typescriptlang.org/docs

## Additional Documentation

This project includes comprehensive documentation:

- **PROJECT_SUMMARY.md** - Complete technical overview
- **QUICK_START.md** - Developer quick reference
- **FILE_REFERENCE.md** - Code snippets and customization guide
- **BUILD_SUCCESS.txt** - Build checklist and information

## License

This project is provided as-is for the Cheongju Sky Car business.

## Version

- **Next.js**: 16.1.6
- **React**: 19.2.4
- **TypeScript**: 5.9.3
- **Tailwind CSS**: 4.2.1
- **Created**: 2026-03-07

---

**Ready to deploy!** Run `npm run dev` to start the development server.
