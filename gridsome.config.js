// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteName = 'Fumi';
const siteUrl = 'https://cheersbeer.dev';
const siteDescription = `Fumi's site`;
const titleTemplate = `%s | Fumi's site`;

module.exports = {
  siteName,
  siteUrl,
  siteDescription,
  titleTemplate,
  icon: {
    favicon: './src/favicon.png',
  },
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
  },
  plugins: [
    { use: 'gridsome-plugin-typescript' },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-143076714-1',
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        manifestPath: 'manifest.json',
        title: siteName,
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: 'src/assets/img/site-icon.png',
        shortName: siteName,
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
          },
          '/': {
            changefreq: 'monthly',
            priority: 0.7,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [
          {
            userAgent: 'Googlebot',
            allow: '/',
            disallow: '/search',
            crawlDelay: 2,
          },
          {
            userAgent: '*',
            allow: '/',
            disallow: '/search',
            crawlDelay: 10,
          },
        ],
      },
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
  ],
  transformers: {
    remark: {
      // 外部リンクは target="_blank"になるように設定
      externalLinksTarget: '_blank',
      // SEO対策として外部リンクは rel="nofollow noopener noreferrer"になるように設定
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
};
