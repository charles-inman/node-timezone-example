const withSass = require('@zeit/next-sass');
const withFonts = require("next-fonts");
require('dotenv').config()
module.exports = {
    env: {
        SERVER: process.env.SERVER,
    },
}
module.exports = withFonts(
    withSass({
    /* config options here */
        webpack(config, options) {
            return config;
        }
    })
);