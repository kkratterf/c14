import Empty from '@/components/empty';
import Pictogram from '@/components/pictogram';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <Pictogram size={36} />,
  project: {
    link: 'https://github.com/kkratterf/c14',
  },
  head: (
    <>
      <link rel="icon" type="image/svg" href="/icon.svg" />
      <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/apple-icon.png" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/kkratterf/c14',
  useNextSeoProps() {
    return {
      titleTemplate: 'C14 – %s',
    };
  },
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
