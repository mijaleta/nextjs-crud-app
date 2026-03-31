import { PrismaClient } from "../generated/prisma/client";
// ^ imports the Prisma Client class that was generated to app/generated/prisma
import { PrismaPg } from "@prisma/adapter-pg";
// ^ imports the PostgreSQL adapter from @prisma/adapter-pg package
import pg from "pg";
// ^ imports the pg (node-postgres) library for connecting to PostgreSQL

const { Pool } = pg;
// ^ destructures the Pool class from pg library to create a database connection pool

const globalForPrisma = global as unknown as { prisma: PrismaClient };
// ^ creates a global reference to prevent multiple PrismaClient instances in development

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  // ^ gets the database URL from environment variables
  const pool = new Pool({ connectionString });
  // ^ creates a new PostgreSQL connection pool using the connection string
  const adapter = new PrismaPg(pool);
  // ^ creates a new PrismaPg adapter passing the pool to connect Prisma to PostgreSQL
  return new PrismaClient({ adapter });
  // ^ creates and returns a new PrismaClient instance configured with the adapter
}

export const prisma = globalForPrisma.prisma || createPrismaClient();
// ^ exports the PrismaClient instance - reuses existing global instance or creates new one

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// ^ in development, stores the PrismaClient in global to prevent connection limit issues