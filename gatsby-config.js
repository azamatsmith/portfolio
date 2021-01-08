require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'contentful-blog',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bike and Code`,
        short_name: `Bike and Code`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`alegreya sans`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
