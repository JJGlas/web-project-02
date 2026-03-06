import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Guides by JJG",
  tagline: 'Comprehensive Guides',
  //favicon: 'img/favicon.ico',
  favicon: 'img/faceLogo_128px.png',

  // Set the production url of your site here
  url: 'https://guides.byjjg.fyi', //got this domain on cloudflare for about $7 CAD per year
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JJGlas', // Usually your GitHub org/user name.
  projectName: 'web-project-02', // Your repo name
  deploymentBranch: 'gh-pages', // The branch where the static files live
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // ← Makes docs the root URL
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: false, // Force this to false
          showLastUpdateTime: false,   // Force this to false
        },
        blog: false, // <--- This kills the "date" error instantly as I do not want a blog on this site
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '312F8A6934875BB5',
      },
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "Guides by JJG",

      logo: {
        alt: 'My Site Logo',
        src: 'img/faceLogo_128px.png',
        href: '/', // This makes the title/logo link to your docs/home.md (slug: /)
      },
      items: [
        {
          href: 'https://ko-fi.com/jjglaserart',
          className: 'navbar-icon kofi-icon',
          'aria-label': 'Ko-fi',
          title: 'Support me on Ko-fi',
          position: 'right',
        },
        
        {
          type: 'search', // ✅ Adds the search bar
          position: 'right',
          className: 'navbar-item-search',
        },    

      ],
    },
    
    docs: {
      sidebar: {
        hideable: true, // This adds the arrow toggle button!
        autoCollapseCategories: true, // Optional: closes other categories when you open a new one
      },
    },

    footer: {
      style: 'dark',
      /*
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Popular',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      */
      copyright: 'A collection of guides and observations by JJG. Some images are my own. Tools and other screenshots are used for educational purposes.'
      //copyright: `Copyright © ${new Date().getFullYear()} JJGlas`,
    },

    colorMode: {
        defaultMode: 'dark', // Set this to dark so it starts there
        disableSwitch: false, // Allow users to switch between light and dark mode
        respectPrefersColorScheme: true, // This listens to your browser
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'ini'],
    },

  //DocSearch
    
    algolia: {
      // The application ID provided by Algolia
      appId: 'DOE4VTW1KO',

      // Public API key: it is safe to commit it
      apiKey: '70177270f3c0ed885882a3ebb0029a48',

      indexName: 'Guides by JJG',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: '',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: 'https://guides.byjjg.fyi/', // Change this from '/docs/' to your full URL
        to: '/',                          // This turns it into an internal "relative" link
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;
