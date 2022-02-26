import { PrismaClient } from "@prisma/client";

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient();
  if (!client) throw new Error("couldn't initialize prisma client");
  console.log("[+] Prisma client initialized");
  return client;
}

const prisma = createPrismaClient();

export default prisma;