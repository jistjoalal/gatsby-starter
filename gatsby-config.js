const path = require("path");

/*
  Config
*/

// metadata
const SITE_TITLE = "Gatsby Starter";
const SITE_URL = "https://www.example.com/";

// sitemap defaults
const SITEMAP_CHANGE_FREQ = "monthly";
const SITEMAP_PRIORITY = 0.5;

// analytics
const G_ANALYTICS_ID = "asdf";

/*
  Init
*/

// Gatsby init
module.exports = {
  siteMetadata: {
    title: SITE_TITLE,
    siteUrl: SITE_URL
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: path.join(__dirname, `static`, `media`)
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(({ node }) => {
            const { path } = node;
            let changefreq = SITEMAP_CHANGE_FREQ;
            let priority = SITEMAP_PRIORITY;
            return {
              url: site.siteMetadata.siteUrl + path,
              changefreq,
              priority
            };
          })
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: G_ANALYTICS_ID
      }
    }
  ]
};
