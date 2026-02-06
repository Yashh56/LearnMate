# LearnMate

LearnMate is a modern platform for uploading, selling, and buying online courses. Built with Next.js, TypeScript, Tailwind CSS, and Prisma/PostgreSQL, it provides a seamless experience for both course creators and learners.

## 🚀 Features

- User Authentication (Sign In/Sign Up)
- Upload and manage courses with chapters and attachments
- Purchase courses securely via Stripe
- Student dashboard: track progress, view enrolled courses
- Teacher dashboard: analytics, manage uploaded courses
- **Multiple teachers support**: Add multiple teachers via environment variables
- Advanced search & filter for courses
- Ratings & Reviews for courses
- File uploads (Uploadthing)
- Secure payment integration (Stripe)
- Personalized dashboards for students and teachers

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Prisma ORM, PostgreSQL
- **Authentication:** Clerk, NextAuth
- **Payments:** Stripe
- **File Uploads:** Uploadthing
- **Deployment:** Vercel

## 📁 Project Structure

```
LearnMate/
│
├── actions/                # Server actions for data fetching
├── app/                    # Next.js app directory (routing, layouts, pages)
│   ├── (auth)/             # Auth routes and layouts
│   ├── (course)/           # Course pages and components
│   ├── (dashboard)/        # Dashboard pages and components
│   └── api/                # API routes (REST endpoints)
├── components/             # Reusable UI components
│   ├── modals/             # Modal components
│   ├── providers/          # Context providers
│   └── ui/                 # UI primitives (buttons, forms, etc.)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries (db, stripe, etc.)
├── prisma/                 # Prisma schema and migrations
├── public/                 # Static assets
├── scripts/                # Seed scripts
├── middleware.ts           # Next.js middleware
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 📋 Prerequisites

- Node.js (v14+)
- npm or yarn
- PostgreSQL
- Git

## ⚡ Getting Started

### 1. Fork & Clone the Repository

```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/Yashh56/LearnMate.git
cd LearnMate
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory. Example:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
MUX_TOKEN_ID =
MUX_TOKEN_SECRET =
STRIPE_API_KEY =
NEXT_PUBLIC_APP_URL = http://localhost:3000
STRIPE_WEBHOOK_SECRET =
# Single teacher (legacy)
NEXT_PUBLIC_TEACHER_ID=
# Multiple teachers (recommended) - comma-separated list of Clerk user IDs
NEXT_PUBLIC_TEACHER_IDS=user_id_1,user_id_2,user_id_3
```

### 4. Set Up the Database

- Ensure PostgreSQL is running.
- Update `DATABASE_URL` in `.env`.
- Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

- (Optional) Seed the database:

```bash
npm run seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Running Tests

_(Add instructions here if you have tests set up, e.g. Jest, Cypress)_

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📝 API Endpoints

- `/api/courses` - Upload, list, and purchase courses
- `/api/chapters` - Manage course chapters
- `/api/dashboard` - Dashboard data for students/teachers
- `/api/uploadthing` - File uploads
- `/api/webhook` - Stripe webhooks

See individual route files in `app/api/` for details.

## 💳 Payment Integration

- Configure Stripe keys in `.env`
- Webhooks handled in `app/api/webhook/route.ts`

## 📦 File Uploads

- Uploadthing integration in `app/api/uploadthing/`

## 🖼️ UI Components

- All UI primitives in `components/ui/`
- Modals in `components/modals/`
- Providers in `components/providers/`

## 🧩 Custom Hooks

- See `hooks/` for reusable logic (e.g., debounce, confetti)

## 🗄️ Database

- Prisma schema in `prisma/schema.prisma`
- Migrations in `prisma/migrations/`

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- Ensure environment variables are set
- Use `npm run build` and `npm start` for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to your branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use ESLint and Prettier
- Follow conventional commits
- Write meaningful names and comments

## 📝 License

MIT License. See [LICENSE](LICENSE).

---

**Made with ❤️ by [Yash](https://github.com/Yashh56)**

---
