# Kstryke Vogue - Modern Fashion Website

A visually appealing and modern interactive UI website built with React and Next.js, designed to be deployed on Vercel. The website follows a clean, minimalist aesthetic with smooth animations, responsive layout, and intuitive navigation.

## Features

- **Responsive Design**: Fully optimized for both desktop and mobile devices
- **Modern UI Components**: Cards, modals, tabbed views, and dynamic content rendering
- **Smooth Animations**: Using Framer Motion for engaging user interactions
- **Tailwind CSS**: For modern, maintainable styling
- **Next.js**: For server-side rendering and optimal performance

## Key Components

- Responsive header with hamburger menu on mobile
- Hero section with call-to-action and background animation
- Dynamic product cards with hover effects
- Modal pop-ups for quick product views
- Tabbed content areas for organized information display
- Newsletter subscription form
- Responsive footer with social media links

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kstrykevogue.git
cd kstrykevogue
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will detect that you're using Next.js and set up the build configuration for you.
4. Your application will be deployed and available at a Vercel URL.

## Environment Variables

Create a `.env.local` file in the root directory and add any environment variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Project Structure

```
kstrykevogue/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── Features.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Modal.tsx
│   │       └── Tabs.tsx
│   ├── lib/
│   ├── types/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   └── images/
├── vercel.json
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
