# TechInk - Technology Reports, Projects & Research

A modern, SEO-optimized website for technology-focused academic and professional services. Built with React, TypeScript, and Tailwind CSS.

**Live Site**: [Glimfo-assist.dev](https://glimfo-assist.vercel.app/)

## 🚀 Features

### Core Functionality
- **Contact Form** with Google Drive file upload integration
- **Email Integration** via custom mail sender API
- **WhatsApp Floating Button** with pulse animations
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Complete meta tags, structured data, sitemap
- **Modern UI** - Dark theme with orange accents

### Services Showcase
- Technical Report Writing
- Final Year Projects
- Dissertation & Thesis
- Research Paper Writing
- System Design & Architecture
- Documentation
- Assignment Help

### Technologies & Tools
- **Languages**: Python, Java, C, C++, JavaScript, Dart
- **Frameworks**: React, Node.js, Flutter, React Native
- **AI/ML**: LLM, LangGraph, LangChain
- **Blockchain**: Solidity
- **Automation**: N8n
- **Cloud**: AWS, Azure, GCP
- **Databases**: MySQL, MongoDB, PostgreSQL

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Hooks
- **Forms**: React Hook Form
- **Notifications**: Sonner
- **Backend API**: Vercel Serverless Functions
- **File Storage**: Google Drive API

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/uumair327/GlimfoAssist
cd TechInk

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Vercel API URL for Google Drive uploads
VITE_API_URL=https://your-vercel-app.vercel.app
```

### Google Drive Setup

For file upload functionality, set up Google Drive API:

1. Follow the guide in `GOOGLE_DRIVE_SETUP.md`
2. Add environment variables in Vercel:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`

### Email API

The contact form uses a custom mail sender API. Update the API endpoint in `src/components/ContactSection.tsx` if needed:

```typescript
fetch("https://custom-mail-sender.vercel.app/api/send", ...)
```

### WhatsApp Integration

Update WhatsApp number in `src/components/WhatsAppFloat.tsx`:

```typescript
const whatsappNumber = "919766447298"; // Your WhatsApp number
```

## 📁 Project Structure

```
TechInk/
├── api/                    # Vercel serverless functions
│   └── upload-to-drive.js  # Google Drive upload endpoint
├── public/                 # Static assets
│   ├── image/             # Images
│   ├── sitemap.xml        # SEO sitemap
│   └── robots.txt         # SEO robots file
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── pages/            # Page components
│   ├── hooks/           # Custom React hooks
│   └── lib/              # Utility functions
├── index.html            # Main HTML file
├── package.json          # Dependencies
└── vite.config.ts        # Vite configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📧 API Endpoints

### Google Drive Upload
- **Endpoint**: `/api/upload-to-drive`
- **Method**: POST
- **Body**: `{ files: [...], folderName: string }`
- **Returns**: Shareable Google Drive links

### Email Sender
- **Endpoint**: `https://custom-mail-sender.vercel.app/api/send`
- **Method**: POST
- **Body**: `{ to, subject, text, html }`

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` and `tailwind.config.ts` for theme customization.

### Content
- **Services**: `src/components/ServicesSection.tsx`
- **Technologies**: `src/components/TechnologiesSection.tsx`
- **Testimonials**: `src/components/TestimonialsSection.tsx`
- **FAQ**: `src/components/FAQSection.tsx`

### SEO
- **Meta Tags**: `index.html`
- **Structured Data**: `index.html` (JSON-LD)
- **Sitemap**: `public/sitemap.xml`
- **Robots**: `public/robots.txt`

## 📚 Documentation

- **SEO Guide**: `SEO_IMPLEMENTATION.md`
- **Google Drive Setup**: `GOOGLE_DRIVE_SETUP.md`

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph & Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Mobile-optimized
- ✅ Fast loading times

## 📱 Features Breakdown

### Contact Form
- Name, Email, Service selection
- Project details textarea
- File upload (up to 5 files, 50MB total)
- Google Drive integration
- Email notifications with Drive links

### WhatsApp Integration
- Floating button with animations
- Pulse effects
- Hover tooltip
- Direct chat link

### Responsive Design
- Mobile-first approach
- Tablet & desktop optimized
- Smooth animations
- Touch-friendly interactions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Contact

- **Email**: uumair327@gmail.com
- **Phone**: +91 9766447298
- **Website**: [techink.dev](https://GlimfoAssist.dev)
- **GitHub**: [@Gunjankadam/TechInk](https://github.com/uumair327/GlimfoAssist)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Lucide](https://lucide.dev/) for icons
- [Vercel](https://vercel.com/) for hosting

---

**Built with ❤️ by GlimfoAssist Team**
