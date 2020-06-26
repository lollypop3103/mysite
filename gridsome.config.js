// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  siteName: 'CheersBeer',
  siteUrl: 'https://cheersbeer.dev',
  plugins: [
    { use: 'gridsome-plugin-typescript' },
    { use: 'gridsome-plugin-pwa' },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-143076714-1',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        // 投稿ファイルは、blogディレクトリ配下に配置
        path: 'blog/*.md',
        // 投稿ページのUIテンプレートは、BlogPost.vueとします
        typeName: 'BlogPost',
        // URLパスは、/blog/:slagとしてアクセス可能
        route: '/blog/:slug',
        remark: {
          plugins: ['@gridsome/remark-prismjs'],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
          },
          '/term': {
            changefreq: 'monthly',
            priority: 0.7,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-htaccess',
    },
  ],
  transformers: {
    remark: {
      // 外部リンクは target="_blank"になるように設定
      externalLinksTarget: '_blank',
      // SEO対策として外部リンクは rel="nofollow noopener noreferrer"になるように設定
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [],
    },
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
};
