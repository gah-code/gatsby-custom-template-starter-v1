module.exports = {
  //-- SITE SETTINGS -----
  author: '@gilbertaharo',
  siteTitle: 'Gilberts Gatsby Theme',
  siteShortTitle: 'gcode', // Used as logo text in header, footer, and splash screen
  siteDescription: 'gilberts gatsby full stack project',
  siteUrl: 'https://github.com/gah-code',
  siteLanguage: 'en_US',
  siteIcon: 'content/favicon.png', // Relative to gatsby-config file
  seoTitleSuffix: 'Gilberts Gatsby Theme', // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: false, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: '', // e.g. UA-XXXXXX-X
  aboutTitle: 'About',
  aboutDescription:
    'Just soaking up the sun in San Jose, California! Im sharing life with my amazing girlfriend and our cute pup, 🌯. During the week, Im all in as a full-time web developer at Robert Half, every day is a crazy mix of work, learning, cooking, and getting my step count in. On the weekends, we relax with friends, go plant shopping, and sometimes I have photography bookings or editing to catch up on. We enjoy delicious food and great views around the Bay area.',
  imageSrc: '../src/images/me.jpg',

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: '#000000',
      secondary: '#FFF4D9',
      tertiary: '#F2F2F2',
      text: '#000000',
      subtext: '#555555',
      background: '#FFFFFF',
      card: '#FFFFFF',
      scrollBar: 'rgba(0, 0, 0, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
    darkTheme: {
      primary: '#f9f4e3',
      secondary: '#2618',
      tertiary: '#252525',
      text: '#f9f4e3',
      subtext: '#AAAAAA',
      background: '#263147',
      card: '#1C1C1C',
      scrollBar: 'rgba(255, 255, 255, 0.5)',
      boxShadow: 'rgba(0, 0, 0, 0.16)',
      boxShadowHover: 'rgba(0, 0, 0, 0.32)',
    },
  },
  fonts: {
    primary: 'Roboto, Arial, sans-serif',
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed: '',
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gilbert-haro-2b108222b/',
    },

    {
      name: 'Github',
      url: 'https://github.com/gah-code',
    },
    {
      name: 'Mail',
      url: 'mailto:mail@gilbertharocode@gmail.com',
    },
  ],

  tags: [
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/gilbert-haro-2b108222b/',
    },

    {
      name: 'Github',
      url: 'https://github.com/gah-code',
    },
    {
      name: 'Mail',
      url: 'mailto:mail@gilbertharocode@gmail.com',
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: 'About Me',
        url: '/about',
      },
      {
        name: 'Features',
        url: '/#projects',
      },
      {
        name: 'Contact',
        url: '/#contact',
      },
    ],
    button: {
      useFileName: true,
      name: 'Resume',
      fileName: '', // the file has to be placed inside the static folder at the root level
      url: '', // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: 'Privacy',
      url: '/privacy',
    },
    {
      name: 'Imprint',
      url: '/imprint',
    },
  ],
};
