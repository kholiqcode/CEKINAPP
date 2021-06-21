const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://cekin.stack.co.id/api',
      assets: '',
      origin: '',
    },
  },

  production: {
    url: {
      api: '',
      assets: '',
      origin: '',
    },
  },
};

const appConfig = constants[activeConfig];

export default appConfig;
