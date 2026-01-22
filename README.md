# 🎵 VibeTune Friend

A beautiful, mood-based music recommendation app that suggests perfect songs to match how you're feeling right now. Built with React, TypeScript, and Tailwind CSS.

![VibeTune Friend](https://img.shields.io/badge/Mood-Based%20Music-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Latest-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Mood Selection**: Choose from 5 different moods (Happy, Sad, Relaxed, Romantic, Energetic)
- **Curated Recommendations**: Get 4 carefully selected songs that perfectly match your mood
- **Surprise Tracks**: Discover unexpected songs you might love
- **Beautiful UI**: Dark theme with mood-specific gradients and smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Share Functionality**: Share your mood and recommendations with friends
- **Shuffle Feature**: Get fresh recommendations for the same mood
- **Smooth Animations**: Loading states and transitions for a delightful experience

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd vibe-tune-friend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## 🎨 Design System

The app features a cohesive design system with:

- **Color Palette**: Dark theme with purple and pink accents
- **Mood Gradients**: Each mood has its unique gradient (happy = orange/yellow, sad = blue/gray, etc.)
- **Typography**: Modern, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and loading states
- **Responsive Layout**: Mobile-first design approach

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React hooks (useState)
- **Routing**: React Router DOM

## 📱 Usage

1. **Select Your Mood**: Choose how you're feeling from the mood cards
2. **Get Recommendations**: View 4 curated songs that match your vibe
3. **Discover Surprises**: Check out the special surprise track recommendation
4. **Explore More**: Use the shuffle button for fresh recommendations
5. **Share**: Share your mood and songs with friends

## 🎵 Music Data

The app includes curated music recommendations across genres:

- **Happy**: Upbeat pop, feel-good classics
- **Sad**: Emotional ballads, introspective indie
- **Relaxed**: Ambient, chill, acoustic
- **Romantic**: Love songs, intimate ballads
- **Energetic**: High-energy pop, rock, electronic

## 🔧 Customization

### Adding New Moods

1. Add mood to the `moods` array in `VibeTuneFriend.tsx`
2. Create gradient in `index.css`
3. Add music data in `musicRecommendations.ts`

### Modifying Design

- Edit design tokens in `src/index.css`
- Customize gradients and colors
- Update component variants in shadcn components

## 📦 Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Music recommendations curated with love for music enthusiasts

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

Made with ❤️ for music lovers everywhere