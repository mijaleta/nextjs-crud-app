"use client";

export default function About() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About This App</h1>
      <p className="mb-4">
        This is a CRUD (Create, Read, Update, Delete) application built with Next.js 16, 
        React 19, TypeScript, and Prisma ORM with PostgreSQL.
      </p>
      <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Next.js 16 (App Router)</li>
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Prisma ORM</li>
        <li>PostgreSQL</li>
        <li>Tailwind CSS</li>
      </ul>
    </main>
  );
}
