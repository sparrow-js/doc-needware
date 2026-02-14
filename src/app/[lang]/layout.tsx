import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import "../globals.css";
import { i18n, i18nUI } from '@/lib/i18n';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={i18nUI.provider(lang)}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

