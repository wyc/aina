module.exports = {
  siteMetadata: {
    title: 'Base',
    description: 'The base foundation for a web application.',
    author: '@victoriahchang',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
        name: 'base',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#FFFFFF',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        head: true,
        pageTransitionDelay: 0,
        respectDNT: true,
        trackingId: 'TODO_ADD_GOOGLE_ANALYTICS_ID',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: 'TODO_ADD_GOOGLE_ANALYTICS_ID',
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          exclude: ['/preview/**', '/do-not-track/me/too/'],
          head: true,
          respectDNT: true,
        },
      },
    },
  ],
};
