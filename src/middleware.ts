import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { i18n } from '@/lib/i18n';

export default createI18nMiddleware(i18n);

export const config = {
  // Don't run middleware on static files and api routes
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg$).*)'],
};

