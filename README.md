# Next.js CRUD Application

A modern, full-stack CRUD (Create, Read, Update, Delete) application built with Next.js 16, React 19, TypeScript, Prisma ORM, and PostgreSQL.

## 🚀 Features

- **Full CRUD Operations** - Create, Read, Update, and Delete users
- **Modern Tech Stack** - Next.js 16, React 19, TypeScript
- **Database Integration** - Prisma ORM with PostgreSQL
- **RESTful API** - Built-in API routes
- **Styling** - Tailwind CSS 4
- **Type Safety** - Full TypeScript support
- **Responsive Design** - Mobile-friendly UI
- **Component Architecture** - Reusable Header/Footer components

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
│   ├── components/        # Reusable components
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Footer component
│   ├── lib/               # Utility functions
│   │   ├── api.ts        # API client functions
│   │   └── prisma.ts     # Prisma client
│   ├── about/             # About page
│   │   └── page.tsx      # About page component
│   ├── globals.css        # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page (User CRUD)
├── prisma/
│   ├── schema.prisma     # Prisma schema
│   └── migrations/       # Database migrations
├── public/               # Static assets
├── .env                  # Environment variables
├── .env.example          # Environment template
├── .gitignore            # Git ignore rules
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
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

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users` | Update a user |
| DELETE | `/api/users?id=` | Delete a user by ID |

### Example API Usage

```bash
# Get all users
curl http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'

# Delete a user
curl -X DELETE "http://localhost:3000/api/users?id=1"
```

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
