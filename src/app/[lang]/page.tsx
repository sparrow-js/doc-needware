import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default async function LangHome(props: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await props.params;
  // For default locale, don't include the locale prefix (hideLocale: 'default-locale')
  if (lang === i18n.defaultLanguage) {
    redirect('/docs');
  }
  redirect(`/${lang}/docs`);
}

