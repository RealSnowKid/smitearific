// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/blog',
          permanent: true
        }
      ]
    }
  }
  // your other plugins here

]);