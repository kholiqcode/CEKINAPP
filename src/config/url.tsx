import appConfig from './constant';

export const config = appConfig;

interface BaseUrl {
  vaccination?: any;
  hospitals?: any;
  assessment?: any;
  auth?: any;
}

const baseUrl: BaseUrl = {
  vaccination: `${config.url.api}/vaccination/current`,
  hospitals: `${config.url.api}/hospitals/list`,
  assessment: `${config.url.api}/assessment/check`,
  auth: {
    register: `${config.url.api}/register`,
    login: `${config.url.api}/login`,
    refresh: `${config.url.api}/auth/refresh`,
  },
};

export default baseUrl;
