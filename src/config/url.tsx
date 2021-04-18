import appConfig from './constant';

export const config = appConfig;

interface BaseUrl {
  customer?: any;
  auth?: any;
}

const baseUrl: BaseUrl = {
  customer: {
    login: `${config.url.api}/customer/login`,
  },
  auth: {
    refresh: `${config.url.api}/auth/refresh`,
  },
};

export default baseUrl;
