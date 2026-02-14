import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source, {
  localeMap: {
    // Orama doesn't natively support Chinese; use default tokenizer
    zh: { language: undefined },
    en: 'english',
  },
});
