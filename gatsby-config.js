module.exports = {
  siteMetadata: {
      title: "Gallery",
      titleTemplate: "%s · Ace Photo Galleries",
      description:
        "View the extensive catalog of amazing pictures! Specializing primarily in nature, architecture, and outdoor photography.",
      url: "https://wwww.acephotogalleries.ca", // No trailing slash allowed!
      image: "/favicon.ico", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-material-ui`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",

    },
  ],
};
