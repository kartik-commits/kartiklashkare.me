# Kartik Lashkare - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Design & User Experience
- **Modern Design**: Clean, professional design with smooth animations
- **Dark Mode**: Full dark mode support with system preference detection
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Beautiful transitions using Framer Motion
- **Interactive Elements**: Hover effects, smooth scrolling, and animated backgrounds

### Performance
- **Static Site Generation**: Optimized build for fast loading
- **Image Optimization**: Using Next.js Image component for optimized images
- **Code Splitting**: Automatic code splitting for faster page loads
- **PWA Ready**: Progressive Web App support with manifest.json

### SEO & Accessibility
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and Twitter Cards
- **Structured Data**: JSON-LD schema for better search engine understanding
- **Sitemap**: Auto-generated sitemap.xml for search engines
- **Robots.txt**: Proper robots.txt configuration
- **WCAG Compliant**: ARIA labels, semantic HTML, keyboard navigation
- **Screen Reader Support**: Skip to content link and proper heading hierarchy
- **Focus Management**: Visible focus indicators for keyboard users
- **Reduced Motion**: Respects prefers-reduced-motion for accessibility

### Sections
- **Hero**: Eye-catching landing with typewriter effect and social links
- **About**: Personal journey and professional background
- **Skills**: Technology stack and expertise showcase
- **Experience**: Professional work experience timeline
- **Projects**: Filterable project showcase with categories
- **Contact**: Contact information and functional form

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/kartik-commits/kartiklashkare.me.git

# Navigate to project directory
cd kartiklashkare.me

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Theme**: next-themes

## 📁 Project Structure

```
kartiklashkare.me/
├── app/                    # Next.js app directory
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Sitemap generation
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/                # Reusable UI components
│   └── theme-provider.tsx
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots file
└── package.json
```

## 🎨 Customization

### Updating Personal Information

Edit the component files in `components/sections/` to update:
- Hero text and social links
- About section content
- Skills and technologies
- Work experience
- Projects portfolio
- Contact information

### Styling

The project uses Tailwind CSS. Customize the theme in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles and CSS variables

### Adding Projects

Edit `components/sections/projects.tsx` and add your projects to the `projects` array:

```typescript
{
  title: 'Project Name',
  description: 'Project description',
  image: 'image-url',
  technologies: ['Tech1', 'Tech2'],
  category: 'Website', // or 'Script', 'Operating System'
  github: 'github-url',
  demo: 'demo-url',
  featured: true // or false
}
```

## 🔍 SEO Configuration

Update SEO metadata in `app/layout.tsx`:
- Page title and description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

## 📱 PWA Configuration

The site supports Progressive Web App features. Update `public/manifest.json` to customize:
- App name and description
- Theme colors
- Icons (add your own icons to `/public/`)

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
# Upload the 'out' directory to your hosting provider
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kartik Lashkare**
- GitHub: [@kartik-commits](https://github.com/kartik-commits)
- LinkedIn: [kartiklashkare](https://www.linkedin.com/in/kartiklashkare)
- Twitter: [@kartik_ane_nenu](https://x.com/kartik_ane_nenu)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

⭐ If you find this portfolio template helpful, please consider giving it a star!
