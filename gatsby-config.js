module.exports = {
    siteMetadata: {
        title: `Gatsby`,
    },
    plugins: [
        'gatsby-plugin-sass', // Required if you want to replace `gatsby-plugin-scss-typescript`
        'gatsby-plugin-dts-css-modules',
        {
            resolve: `gatsby-plugin-name`,
            options: {
                optionA: true,
                optionB: `Another option`,
            },
        },
    ],
};
