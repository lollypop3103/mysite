export default {
  siteTitle: 'CheersBeer Blog',
  siteDescription: 'CheersBeer Blog',
  favicon: '/favicon.ico',
  siteImagePath: '/images/sarissa.png',
  footer: '© 2022 CheersBeer Blog',
  dateFormat: 'dd.MM.yyyy HH:mm',
  socialMedia: {
    twitter: 'cheersbeer__',
    github: 'cheersbeer',
  },
  pageSize: 5,
  categories: [
    {
      name: 'theme',
      color: 'btn-warning',
      image: '/images/theme.jpg',
      order: 1,
    },
  ],
  categorySettings: {
    order: 'name', // name | count
    layout: 'card', //button | card
    image: '',
    color: 'btn-primary',
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: 'title', weight: 3 },
      { name: 'description', weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: 'Search post title and description...',
    },
    archive: {
      select: 'Select Year',
    },
    page: 'Page',
    resultFound: ' result(s) found',
  },
};
