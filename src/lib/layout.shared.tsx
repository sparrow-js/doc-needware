import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from './i18n';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'My App',
    },
    i18n,
  };
}

