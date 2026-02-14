import { defineI18n } from 'fumadocs-core/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';

export const i18n = defineI18n({
  languages: ['zh', 'en'],
  defaultLanguage: 'zh',
  hideLocale: 'default-locale',
});

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    zh: {
      displayName: '中文',
      search: '搜索',
      searchNoResult: '没有找到结果',
      toc: '目录',
      tocNoHeadings: '没有标题',
      lastUpdate: '最后更新',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      chooseTheme: '选择主题',
      editOnGithub: '在 GitHub 上编辑',
    },
    en: {
      displayName: 'English',
      search: 'Search',
      searchNoResult: 'No results found',
      toc: 'On this page',
      tocNoHeadings: 'No headings',
      lastUpdate: 'Last updated',
      chooseLanguage: 'Choose language',
      nextPage: 'Next',
      previousPage: 'Previous',
      chooseTheme: 'Theme',
      editOnGithub: 'Edit on GitHub',
    },
  },
});

