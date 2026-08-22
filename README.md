# ModPilot - Mod Management & Community Platform

A modern, beautiful web application for discovering, managing, and sharing game mods. Built with Next.js, TypeScript, and Tailwind CSS.

![ModPilot](https://img.shields.io/badge/status-active-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)

## 🚀 Features

- **Browse & Search Mods** - Explore thousands of high-quality mods with advanced filtering
- **User Profiles** - Create profiles, follow creators, and build your mod collection
- **Community Engagement** - Rate, review, and discuss mods with other players
- **Trending & Featured** - Discover trending mods, top-rated selections, and curated collections
- **Responsive Design** - Beautiful UI that works seamlessly on desktop, tablet, and mobile
- **Dark Mode** - Eye-friendly dark theme optimized for gaming
- **Modern Stack** - Built with the latest web technologies

## 📋 Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/dipendar69kumar-sys/Modpilot-ai.git
cd Modpilot-ai
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the app running.

## 📦 Project Structure

```
Modpilot-ai/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ModGrid.tsx         # Mods grid with search
│   │   ├── ModCard.tsx         # Individual mod card
│   │   ├── FeaturedSection.tsx # Featured mods section
│   │   └── Footer.tsx          # Footer component
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand (ready to integrate)
- **Notifications**: React Hot Toast
- **HTTP Client**: Axios (ready to integrate)

## 🌐 Deployment to Vercel

### Option 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

### Option 2: Using GitHub Integration

1. **Push to GitHub** (Already done!)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository `Modpilot-ai`
   - Click "Deploy"

3. **Environment Variables**
   - Add your `.env.local` variables in Vercel project settings

## 📝 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🎯 Future Features

- [ ] User authentication (Sign up/Login)
- [ ] Mod upload & creation tools
- [ ] Real-time notifications
- [ ] Advanced mod editor
- [ ] Social features (follow, messages, groups)
- [ ] Mod compatibility checker
- [ ] API integration with game launchers
- [ ] Analytics dashboard for creators
- [ ] Marketplace/Premium features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@modpilot.com or open an issue on GitHub.

## 👨‍💻 Author

- **Dipendar Kumar** - [@dipendar69kumar-sys](https://github.com/dipendar69kumar-sys)

## 🙏 Acknowledgments

- Inspired by modern mod management platforms
- Built with ❤️ for the gaming community

---

**Made with ❤️ by the ModPilot Team**
