import appConfig from './constant';

export const config = appConfig;

interface BaseUrl {
  vaccination?: any;
  hospitals?: any;
  auth?: any;
}

const baseUrl: BaseUrl = {
  vaccination: `${config.url.api}/vaccination/current`,
  hospitals: `${config.url.api}/hospitals/list`,
  auth: {
    refresh: `${config.url.api}/auth/refresh`,
  },
};

export default baseUrl;
