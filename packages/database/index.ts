import 'server-only';
import { PrismaClient } from '@prisma/client';

export const database = new PrismaClient();

export * from '@prisma/client';
