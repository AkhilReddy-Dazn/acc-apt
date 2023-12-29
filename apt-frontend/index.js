const portal = require('@dazn/acc-portal');

const webpackConfig = require('./webpack.config');

const moduleConfig = () => {
  const config = {
    modules: [
      {
        js: '/modules/apt-frontend/apt-frontend.js',
        path: '/apt',
      },
    ],
    links: [
      {
        name: 'Ad Preview Tool',
        path: '/apt',
      },
    ],
  }

  return config;
};

portal({
  webpackConfig,
  moduleConfig,
});
