const path = require('path')

module.exports = {
    pathPrefix: "/crypto-champion",
    siteMetadata: {
        title: `TestGatsby`,
        siteUrl: `https://cryptochampion.game`,
    },

    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    quality: 100,
                },
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                '~': path.join(__dirname, 'src'),
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    implementation: require('node-sass'),
                },
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ],
}