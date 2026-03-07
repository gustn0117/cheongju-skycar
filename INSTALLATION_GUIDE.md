# Installation & Setup Guide

## System Requirements
- Node.js 18.0 or higher
- npm 9.0 or higher (comes with Node.js)
- 200MB free disk space

## Installation Steps

### Step 1: Verify Installation Files
All files should already exist in the project directory:
```bash
cd /sessions/clever-optimistic-lovelace/cheongju-skycar
ls -la src/app src/components
```

You should see:
- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`

### Step 2: Install Dependencies
```bash
npm install
```

This installs all required packages:
- next@16.1.6
- react@19.2.4
- typescript@5.9.3
- tailwindcss@4.2.1
- And other necessary dependencies

### Step 3: Start Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js 16.1.6
- Local:         http://localhost:3000
- Network:       http://[your-ip]:3000

✓ Ready in 420ms
```

### Step 4: Open in Browser
Navigate to http://localhost:3000

You should see the home page with:
- Dark navy header with "청주스카이차" logo
- Hero section with cloud emoji
- Features grid
- Equipment showcase
- Navigation working
- Footer with company info

## Testing the Pages

### Test Homepage
- ✓ Hero section loads
- ✓ Phone number clickable (tel: link)
- ✓ "온라인 문의" button works
- ✓ All sections visible
- ✓ Hover effects work

### Test Navigation
Click header menu items:
- ✓ 홈 (home)
- ✓ 회사소개 (about)
- ✓ 서비스안내 (services)
- ✓ 문의하기 (contact)

### Test Mobile Menu
Resize browser to < 768px:
- ✓ Hamburger menu appears
- ✓ Menu opens/closes
- ✓ Menu links work
- ✓ Phone CTA visible

### Test Contact Form
1. Go to /contact
2. Fill in form:
   - Name: 테스트 사용자
   - Phone: 010-1234-5678
   - Content: 테스트 문의
   - Date: (optional)
3. Click "📝 문의 제출"
4. ✓ Success message appears
5. ✓ Form clears after 3 seconds

### Test Responsive Design
Resize browser to different widths:
- ✓ 320px (mobile)
- ✓ 640px (small tablet)
- ✓ 768px (tablet)
- ✓ 1024px (desktop)
- ✓ 1280px (large desktop)

All content should reflow properly.

## Building for Production

### Step 1: Build
```bash
npm run build
```

Expected output:
```
✓ Compiled successfully in 1310.5ms
✓ Generating static pages using 3 workers (6/6) in 93.7ms

Route (app)
├ ○ /
├ ○ /about
├ ○ /services
└ ○ /contact
```

### Step 2: Test Production Build
```bash
npm start
```

Visit http://localhost:3000 again to verify:
- All pages work correctly
- Styling is intact
- No console errors

### Step 3: Deploy
Choose your deployment platform:

**Vercel** (Recommended):
```bash
npm i -g vercel
vercel
```

**Netlify**:
```bash
npm run build
# Upload .next folder
```

**Self-hosted**:
```bash
npm run build
npm start
# Use PM2 or systemd for process management
```

## Customization After Installation

### Update Business Information
1. Phone number: `010-1234-5678`
   - Header.tsx (line ~50)
   - Footer.tsx (line ~30)
   - Contact page (multiple locations)
   - All CTA buttons

2. Company location: `충청북도 청주시`
   - Footer.tsx
   - Contact page

3. Hours: `08:00 ~ 17:00`
   - Footer.tsx
   - Contact page
   - About page

### Update Pricing
Edit `src/app/services/page.tsx`:
- Find `const equipment = [...]`
- Update `pricing` arrays for each equipment type

### Update Equipment List
Add or remove equipment in `services/page.tsx`:
```typescript
const equipment = [
  {
    name: '새로운 장비',
    height: '50m',
    // ... rest of object
  },
  // ... more equipment
];
```

### Change Colors
Replace these hex codes throughout the project:
- `#1a2744` (dark navy)
- `#f59e0b` (orange)
- `#2a3f5f` (slate blue)

Or use Find & Replace in your code editor:
- Ctrl+H (Windows/Linux)
- Cmd+H (Mac)

## Troubleshooting

### Port 3000 in Use
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Module Not Found Errors
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Styling Issues
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart dev server (Ctrl+C, then `npm run dev`)
3. Check that Tailwind CSS is imported in globals.css

### TypeScript Errors
```bash
npm run build
# Shows all TypeScript errors
```

### CSS Not Loading
Check that `src/app/globals.css` is imported in `src/app/layout.tsx`:
```typescript
import './globals.css';
```

## Verification Checklist

After installation, verify:

- [ ] All dependencies installed (`npm install` completed)
- [ ] Dev server starts (`npm run dev` works)
- [ ] Home page loads at http://localhost:3000
- [ ] Navigation works (all 4 links)
- [ ] Mobile menu works (resize to mobile)
- [ ] Phone links work (click to call)
- [ ] Contact form works (submit shows success)
- [ ] All pages load without errors
- [ ] Styling looks correct (navy header, orange buttons)
- [ ] Production build succeeds (`npm run build`)
- [ ] Production server works (`npm start`)

## Project Statistics

**After Installation:**
- Total files: 11 source files + documentation
- Lines of TypeScript/TSX: ~800 lines
- Lines of CSS: ~40 lines (rest is Tailwind)
- Build time: ~1.3 seconds
- Dev server startup: ~420ms

**Lighthouse Performance** (typical):
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Support

**If something doesn't work:**

1. **Check the documentation:**
   - README.md - Full overview
   - QUICK_START.md - Common tasks
   - FILE_REFERENCE.md - Code snippets

2. **Check error messages:**
   - Look at console errors (F12)
   - Read build output carefully
   - Check for typos in edits

3. **Reset and rebuild:**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

4. **Verify Node.js version:**
   ```bash
   node --version  # Should be 18.0+
   npm --version   # Should be 9.0+
   ```

## Next Steps

After successful installation:

1. **Update content:** Change phone number, location, hours
2. **Update pricing:** Adjust equipment pricing as needed
3. **Test thoroughly:** Try all pages and features
4. **Deploy:** Choose your hosting platform
5. **Monitor:** Check site performance in production
6. **Maintain:** Keep dependencies updated

## Additional Resources

- **Next.js docs**: https://nextjs.org/docs
- **Tailwind docs**: https://tailwindcss.com/docs
- **React docs**: https://react.dev
- **TypeScript docs**: https://www.typescriptlang.org/docs

---

Installation complete! Happy developing!
