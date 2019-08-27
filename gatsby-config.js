/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
  siteMetadata: {
    author: '@victoriahchang',
    description: 'New found land for your awesome web app.',
    title: 'Āina',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
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
        icon: 'src/images/logo.png',
        name: 'Āina',
        short_name: 'Āina',
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
