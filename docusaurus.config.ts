import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Onmyoji DB',
  tagline: 'Comprehensive Shikigami Database',
  favicon: 'img/favicon.ico',

  url: 'https://ssig31025.github.io',
  baseUrl: '/onmyojidbTH/',

  organizationName: 'ssig31025',
  projectName: 'onmyojidbTH',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-org/onmyoji-db/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Onmyoji DB',
      logo: {
        alt: 'Onmyoji DB Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/shikigami', label: 'Shikigami', position: 'left' },
        { to: '/souls', label: 'Souls', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Game Modes',
        },
        { to: '/tools', label: 'Tools', position: 'left' },
        { to: '/news', label: 'News', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Database',
          items: [
            { label: 'All Shikigami', to: '/shikigami' },
            { label: 'Soul Library', to: '/souls' },
            { label: 'Game Mechanics', to: '/docs/mechanics' },
          ],
        },
        {
          title: 'Tools',
          items: [
            { label: 'Team Builder', to: '/tools/team-builder' },
            { label: 'Speed Calculator', to: '/tools/speed' },
            { label: 'Damage Sim', to: '/tools/damage' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Terms of Service', to: '/terms' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Onmyoji DB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function shikigamiPlugin(context, options) {
      return {
        name: 'docusaurus-shikigami-plugin',
        async contentLoaded({ content, actions }) {
          const { createData, addRoute } = actions;
          const { shikigamiData } = require('./src/data/shikigami.ts');

          await Promise.all(
            shikigamiData.map(async (shikigami) => {
              const jsonPath = await createData(
                `${shikigami.id}.json`,
                JSON.stringify(shikigami),
              );
              addRoute({
                path: `/shikigami/${shikigami.id}`,
                component: '@site/src/components/shikigami/ShikigamiDetail.tsx',
                modules: {
                  data: jsonPath,
                },
                exact: true,
              });
            }),
          );
        },
      };
    },
  ],
};

export default config;
