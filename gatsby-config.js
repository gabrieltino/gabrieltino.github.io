/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Miracle Gabriel`,
    titleTemplate: "%s · Software Developer",
    description: `Call me Mimi, a Software Developer based out of Port Harcourt, Nigeria.`,
    author: `@sixpathdev`,
    url: "https://sixpathdev.github.io", // No trailing slash allowed!
    image: "/images/miracle.jpg", // Path to your image placed in the 'static' folder
    twitterUsername: "@sixpathdev",
    keywords: ['sixpathdev', 'portfolio', 'software developer', 'developer', 'web developer']
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-dev",
      options: {
        // This is your username on Dev.to
        username: 'ndiecodes'
      }
    }
  ]
}
