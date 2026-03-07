# 청주스카이차 Website - Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# Server runs at http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure Overview

```
src/
├── app/
│   ├── page.tsx              # Home page (/)
│   ├── layout.tsx            # Root layout & metadata
│   ├── globals.css           # Global styles
│   ├── about/page.tsx        # About page (/about)
│   ├── services/page.tsx     # Services page (/services)
│   └── contact/page.tsx      # Contact page (/contact)
└── components/
    ├── Header.tsx            # Navigation component
    └── Footer.tsx            # Footer component
```

## Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Main landing page with hero, features, equipment, CTA |
| `/about` | About | Company mission, values, timeline, stats |
| `/services` | Services | Equipment details, specs, pricing, process |
| `/contact` | Contact | Contact form, company info, FAQ, map |

## Key Features Implemented

✓ **Responsive Design** - Mobile-first, works on all devices
✓ **4 Complete Pages** - Home, About, Services, Contact
✓ **Contact Form** - With validation and success message
✓ **Modern Styling** - Dark navy + orange color scheme
✓ **Korean Fonts** - Noto Sans KR for optimal Korean text
✓ **Mobile Navigation** - Hamburger menu for mobile
✓ **Professional Layout** - Hero sections, grids, cards, tables
✓ **SEO Ready** - Proper metadata and structure
✓ **Production Build** - Optimized and tested

## Styling & Colors

**Primary Colors:**
- Dark Navy: `#1a2744`
- Orange Accent: `#f59e0b`
- Slate Blue: `#2a3f5f`

**All styling uses Tailwind CSS** - no CSS files except globals.css

## Making Changes

### Edit a Page
```bash
# Home page
nano src/app/page.tsx

# About page
nano src/app/about/page.tsx

# Services page
nano src/app/services/page.tsx

# Contact page
nano src/app/contact/page.tsx
```

### Edit Navigation/Layout
```bash
# Header component
nano src/components/Header.tsx

# Footer component
nano src/components/Footer.tsx

# Root layout
nano src/app/layout.tsx
```

### Add Styling
Edit `src/app/globals.css` for global styles
Use Tailwind classes inline in components

## Content to Update

### Company Information
- Phone: `010-1234-5678` (Update with real number)
- Location: `충청북도 청주시` (Update with real address)
- Hours: `08:00 ~ 17:00` (Update if different)

### Business Details
- Services: Equipment types and pricing
- Work areas: Types of jobs handled
- Company stats: Years in business, projects, satisfaction

### Contact Form
Currently uses client-side state. For real submissions, add:
- Backend API endpoint
- Email service integration
- Database storage (optional)

## Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build first
npm run build

# Deploy the .next folder
```

### Other Platforms
- **AWS**: Use App Runner, Amplify
- **Google Cloud**: Use Cloud Run
- **Azure**: Use App Service
- **Self-hosted**: Use Docker, PM2

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors?**
- Check `tsconfig.json` is correct
- Ensure all imports have proper paths (@/)
- Run `npm run build` to see full errors

## Development Tips

1. **Hot Reload**: Changes auto-refresh in development
2. **Tailwind Intellisense**: Install VS Code extension
3. **TypeScript**: Strict mode catches errors early
4. **Mobile Testing**: Use Chrome DevTools device emulation
5. **Performance**: Use Next.js Image component for images

## File Checklist

All required files are created:

✓ `tsconfig.json` - TypeScript configuration
✓ `next.config.ts` - Next.js configuration  
✓ `postcss.config.mjs` - PostCSS configuration
✓ `package.json` - Dependencies and scripts
✓ `src/app/layout.tsx` - Root layout
✓ `src/app/page.tsx` - Home page
✓ `src/app/globals.css` - Global styles
✓ `src/app/about/page.tsx` - About page
✓ `src/app/services/page.tsx` - Services page
✓ `src/app/contact/page.tsx` - Contact page
✓ `src/components/Header.tsx` - Header component
✓ `src/components/Footer.tsx` - Footer component

## Questions?

Refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---
Ready to run with: `npm run dev`
