import Empty from '@/components/empty';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span className="logo">C14</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  color: {
    hue: 271,
    saturation: 81,
    lightness: {
      dark: 60,
      light: 46,
    },
  },

  backgroundColor: {
    light: '251, 251, 251',
    dark: '27, 29, 33',
  },

  head: <link rel="icon" type="image/svg" href="/icon.svg" />,
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    component: Empty,
  },
  search: {
    loading: 'Loading...',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: Empty,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
};

export default config;
