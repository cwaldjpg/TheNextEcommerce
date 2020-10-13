const path = require('path');

module.exports = () => {
  const env = {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:3000'
  };

  return {
    env,
    webpack: (config) => {
      config.resolve.alias['@@'] = path.resolve(__dirname);
      config.resolve.alias['@components'] = path.resolve(path.join(__dirname, 'src/components'));
      config.resolve.alias['@styles'] = path.resolve(path.join(__dirname, 'src/styles'));
      config.resolve.alias['@utils'] = path.resolve(path.join(__dirname, 'src/utils'));
      config.resolve.alias['@providers'] = path.resolve(path.join(__dirname, 'src/providers'));
      return config;
    }
  }
}