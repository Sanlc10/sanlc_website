# SL - Web Developer Portfolio

> A modern, bilingual portfolio website showcasing full-stack web development expertise with a focus on clean design, performance, and user experience.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌟 Features

### Design & UX
- **Bilingual Support** - Seamless language switching between English and Spanish
- **Glassmorphism Design** - Modern UI with frosted glass effects
- **Wave Transitions** - Smooth SVG wave transitions between sections
- **Responsive Layout** - Mobile-first design adapting to all screen sizes
- **Dark Theme Footer** - Professional contrast with main content

### Functionality
- **WhatsApp Integration** - Direct contact form to WhatsApp messaging
- **Project Showcase** - Interactive cards linking to live projects
- **Smooth Scrolling** - Native smooth scroll navigation
- **Social Media Links** - GitHub, LinkedIn, and Instagram integration
- **SEO Optimized** - Complete meta tags and Open Graph support

### Performance
- **Fast Loading** - Optimized assets and lazy loading
- **Minimal Dependencies** - Lightweight codebase
- **Modern Build** - Vite for ultra-fast HMR
- **Clean Code** - Modular component architecture

## 🚀 Quick Start

### Prerequisites
```bash
node >= 16.0.0
npm >= 8.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Sanlc10/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio running locally.

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sanlc_website/
├── public/
│   ├── favicon.svg              # Custom computer icon
│   └── og-image.jpg            # Open Graph preview image
├── src/
│   ├── assets/
│   │   ├── hero_banner.jpg     # Hero section background
│   │   ├── honey_company.png   # Project thumbnail
│   │   ├── coffee_shop.png     # Project thumbnail
│   │   └── pizza_restaurant.png # Project thumbnail
│   ├── components/
│   │   ├── Header.jsx          # Navigation with language toggle
│   │   ├── Hero.jsx            # Hero section with wave transition
│   │   ├── About.jsx           # About me section
│   │   ├── Projects.jsx        # Project showcase cards
│   │   ├── Contact.jsx         # Contact form & social links
│   │   └── Footer.jsx          # Footer with links
│   ├── context/
│   │   └── LanguageContext.jsx # Language state management
│   ├── translations/
│   │   └── translations.js     # ES/EN translations
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & animations
├── index.html                  # HTML template with SEO meta tags
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies & scripts
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-bg: #F5F1ED;         /* Warm beige background */
--accent-primary: #4A90E2;     /* Vibrant blue accent */
--accent-light: #E8F4FF;       /* Light blue tint */

/* Neutral Colors */
--neutral-dark: #1A1A1A;       /* Primary text */
--neutral-medium: #707070;     /* Secondary text */
--neutral-light: #E5E5E5;      /* Borders & dividers */

/* Surface Colors */
--surface-card: #FFFFFF;       /* Card backgrounds */
--neutral-dark-surface: #2A2A2A; /* Dark sections */
```

### Typography
```css
/* Font Family */
font-family: 'SF Pro Display', -apple-system, system-ui;

/* Type Scale */
Display Large: 72-96px (Hero titles)
Display Medium: 56-64px
Heading 1: 42-48px (Section titles)
Heading 2: 24-32px (Card titles)
Body: 15-17px (Main text)
Body Small: 13-15px (Supporting text)
Caption: 11-13px (Meta information)
Label: 12-14px (Form labels)
```

### Spacing System
```css
/* 8px Base Unit */
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
```

### Border Radius
```css
--radius-button: 24px
--radius-card: 32px
--radius-card-sm: 16px
--radius-input: 12px
```

### Animations
```css
/* Duration */
--duration-fast: 200ms
--duration-medium: 250ms
--duration-slow: 300ms

/* Easing */
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
```

## 🌐 Internationalization (i18n)

The portfolio supports English and Spanish through a custom context-based solution.

### Language Toggle
```jsx
// Located in Header component
<button onClick={toggleLanguage}>
  {language === 'es' ? '🇲🇽' : '🇺🇸'}
</button>
```

### Adding New Languages

1. Update `src/translations/translations.js`:
```javascript
export const translations = {
  es: { /* Spanish */ },
  en: { /* English */ },
  fr: { /* Add French */ }
};
```

2. Update the language toggle in `Header.jsx`

## 📱 Sections Overview

### Header
- Fixed navigation with glassmorphism
- Language toggle (ES/EN)
- Smooth scroll links
- Mobile responsive menu

### Hero
- Full-screen banner with overlay
- Animated floating elements
- SVG wave transition to next section
- Dual CTA buttons

### About
- Professional introduction
- Skills and experience highlights
- Statistics display (5+ years, 50+ projects, 30+ clients)
- Innovation & Collaboration cards

### Projects
- Three featured projects with live links:
  - **Honey Company** - E-commerce platform
  - **Coffee Shop** - Online ordering system
  - **Pizza Restaurant** - Custom pizza builder
- Technology tags
- Hover animations
- External links to live demos

### Contact
- WhatsApp-integrated contact form
- Email and phone information
- Social media links (GitHub, LinkedIn, Instagram)
- Availability status

### Footer
- Brand information
- Quick navigation links
- Service listings
- Social media icons
- Copyright information

## 🔗 External Integrations

### WhatsApp Contact Form
```javascript
const whatsappMessage = `Hola, soy ${formData.name}. ${formData.message}`;
const whatsappURL = `https://wa.me/522213419629?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappURL, '_blank');
```

### Project Links
- Honey Company: https://website-abeja-blanca-mx.vercel.app/
- Pizza Restaurant: https://obramaestrapizzeria.vercel.app/
- Coffee Shop: https://brusselsbewery.vercel.app/

### Social Media
- GitHub: https://github.com/Sanlc10
- LinkedIn: Coming soon (disabled)
- Instagram: Coming soon (disabled)

## ⚙️ Configuration

### Update Personal Information

1. **Contact Details** (`src/components/Contact.jsx`)
```javascript
// Email
santiagocast.colegionaciones@gmail.com

// WhatsApp
+52 221 341 9629
```

2. **Projects** (`src/translations/translations.js`)
```javascript
honeyCompany: {
  title: 'Your Project',
  description: 'Project description',
  tags: ['React', 'Node.js'],
  url: 'https://your-project.com'
}
```

3. **SEO Meta Tags** (`index.html`)
```html
<title>SL - Web Developer</title>
<meta name="description" content="Your description" />
<meta property="og:image" content="/og-image.jpg" />
```

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool
- **Tailwind CSS 3.4.1** - Styling framework

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📊 Performance Metrics

Target benchmarks:
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 👤 Author

**Santiago Lopez**
- GitHub: [@Sanlc10](https://github.com/Sanlc10)
- Email: santiagocast.colegionaciones@gmail.com
- WhatsApp: +52 221 341 9629

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- React Context API for state management
- Tailwind CSS for rapid styling
- Vite for blazing-fast development experience

---

**Built with ❤️ by Santiago Lopez**
