import { NextResponse } from 'next/server';
import { noseconeConfig, noseconeMiddleware } from '@c14/security/middleware';
import { env } from '@c14/env';
import { secure } from '@c14/security';
import { parseError } from '@c14/observability/error';

const securityHeaders = noseconeMiddleware(noseconeConfig);

export async function middleware(request: Request) {
  if (!env.ARCJET_KEY) {
    return securityHeaders();
  }

  try {
    await secure(
      [
        'CATEGORY:SEARCH_ENGINE',
        'CATEGORY:PREVIEW',
        'CATEGORY:MONITOR',
      ],
      request
    );

    return securityHeaders();
  } catch (error) {
    const message = parseError(error);
    return NextResponse.json({ error: message }, { status: 403 });
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};