# Next.js CRUD Application

A modern, full-stack CRUD (Create, Read, Update, Delete) application built with Next.js 16, React 19, TypeScript, and Prisma ORM.

## 🚀 Features

- **Modern Tech Stack** - Next.js 16, React 19, TypeScript
- **Database Integration** - Prisma ORM with PostgreSQL
- **Styling** - Tailwind CSS 4
- **Type Safety** - Full TypeScript support
- **API Routes** - RESTful API endpoints
- **Responsive Design** - Mobile-friendly UI

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- Node.js 18.x or later
- PostgreSQL (or your preferred database)
- npm, yarn, pnpm, or bun

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-crud-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

Edit the `.env` file with your database credentials:

```
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

4. Initialize Prisma:

```bash
npx prisma generate
npx prisma db push
```

## 🏃‍♂️ Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nextjs-crud-app/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── users/         # Users API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── prisma/
│   └── schema.prisma      # Prisma schema
├── public/                # Static assets
├── .env                   # Environment variables
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma database GUI |
| `npx prisma generate` | Generate Prisma client |
| `npx prisma db push` | Push schema to database |

## 🧑‍💻 Technologies

- **Framework**: [Next.js](https://nextjs.org) 16.2.1
- **Language**: [TypeScript](https://www.typescriptlang.org) 5
- **UI Library**: [React](https://react.dev) 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4
- **Database ORM**: [Prisma](https://www.prisma.io) 7.6.0
- **Database**: PostgreSQL (configurable)

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js and Prisma
