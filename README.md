# Thooku Biriyani

<div align="center">
  <img src="public/thooku_biryani_favicon.jpg" alt="Thooku Biriyani Logo" width="120" style="border-radius: 10px;"/>
  
  <h2>Modern Restaurant Web Application</h2>

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-brightgreen?style=for-the-badge&logo=vercel)](https://thooku-biriyani.vercel.app)
  ![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.0+-blue?style=for-the-badge&logo=tailwind-css)
  ![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux)
  ![TypeScript](https://img.shields.io/badge/TypeScript-4+-3178c6?style=for-the-badge&logo=typescript)
</div>

## Overview

Thooku Biriyani is a full-stack restaurant application that enables customers to browse menus, place orders, and track deliveries. The admin dashboard provides comprehensive order management, menu customization, and customer insights.

🔗 **[Live Demo](https://thooku-biriyani.vercel.app)**

## Key Features

- **Customer Portal**
  - Browse menu items by category
  - Real-time cart management
  - Secure checkout process
  - Order tracking
  - User authentication
  - Customer testimonials

- **Admin Dashboard**
  - Order management system
  - Menu item customization
  - Customer database
  - Sales analytics
  - Order status updates

- **Technical Features**
  - Responsive design (mobile-first)
  - Server-side rendering
  - Redux state management
  - Protected routes
  - Dark/Light theme support

## Tech Stack

- **Frontend**
  - Next.js 13+ (App Router)
  - React 18
  - TypeScript
  - Redux Toolkit
  - TailwindCSS

- **Backend**
  - NextAuth.js
  - Server Actions
  - Bun Runtime

- **Development**
  - ESLint
  - PostCSS
  - TypeScript
  - Git

## Project Structure

\`\`\`
thooku-biriyani/
├── backend/
│   ├── Actions/
│   │   ├── actions.ts         # Server-side actions
│   │   └── serverActions.ts   # API endpoints
│   └── config.ts             # Backend configuration
├── public/                   # Static assets
│   ├── icons/               # SVG icons
│   └── images/              # Image assets
├── src/
│   ├── app/
│   │   ├── _components/      # Shared components
│   │   │   ├── Testimony/    # Testimonial components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CartModal.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ...
│   │   ├── account/         # User account pages
│   │   ├── auth/           # Authentication pages
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout process
│   │   ├── dashboard/      # Admin dashboard
│   │   │   ├── _components/
│   │   │   ├── customers/
│   │   │   ├── menus/
│   │   │   └── orders/
│   │   ├── menu/           # Menu pages
│   │   └── layout.tsx      # Root layout
│   ├── components/
│   │   └── ui/            # Reusable UI components
│   ├── lib/
│   │   ├── types.ts       # TypeScript definitions
│   │   └── utils.ts       # Utility functions
│   └── Store/
│       ├── Slices/        # Redux slices
│       └── store.ts       # Redux store configuration
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Screenshots

<div align="center">
  <img src="public/slideone.jpg" alt="Homepage" width="600"/>
  <p><em>Homepage with Featured Items</em></p>
  
  <img src="public/chicken_combo.jpg" alt="Menu Item" width="600"/>
  <p><em>Menu Item Detail View</em></p>
</div>

## Getting Started

1. **Clone and Install:**
   ```bash
   git clone <repository-url>
   cd thooku-biriyani
   npm install   # or: yarn install / pnpm install / bun install
   ```

2. **Development:**
   ```bash
   npm run dev   # or: yarn dev / pnpm dev / bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

Create a `.env.local` file:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
# Add other environment variables
```

## License

MIT License - feel free to use this project for your own purposes.

---

<div align="center">
  <p>Developed by <a href="https://github.com/yourusername">Your Name</a></p>
</div>