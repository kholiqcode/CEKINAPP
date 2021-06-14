const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://192.168.1.12:8000/api',
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
