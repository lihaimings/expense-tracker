# Expense Tracker

The Expense Tracker is a mobile-friendly tool designed to help accountants and small business owners manage their expenses efficiently. Our intuitive interface allows users to easily log, categorize, and total their expenses, making it easier to stay organized and make informed financial decisions.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Header, Footer
│   ├── tool/             # Tool components
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## Deployment

This project is ready for deployment on Vercel or Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

MIT License
