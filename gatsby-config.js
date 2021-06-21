
module.exports = {
  siteMetadata: {
    title: 'Welcome to the CMS POC-Add content in Strapi to see here',
    description: 'Add more content in the  Strapi admin panel',
    author: 'Sonu'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://cmspoc.herokuapp.com',
        collectionTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'article'
        ],
        queryLimit:100
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
  ],
}
