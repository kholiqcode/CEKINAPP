import appConfig from './constant';

export const config = appConfig;

interface BaseUrl {
  vaccination?: any;
  hospitals?: any;
  assessment?: any;
  assessmentDaily?: any;
  assessmentData?: any;
  userInfo?: any;
  auth?: any;
  isolationInfo?: any;
  doctors?: any;
}

const baseUrl: BaseUrl = {
  vaccination: `${config.url.api}/vaccination/current`,
  hospitals: `${config.url.api}/hospitals/list`,
  assessment: `${config.url.api}/assessment/check`,
  assessmentDaily: `${config.url.api}/assessment/daily`,
  assessmentData: `${config.url.api}/assessment/get-data`,
  userInfo: `${config.url.api}/user/info`,
  isolationInfo: `${config.url.api}/isolation/info`,
  doctors: `${config.url.api}/doctors/list`,
  auth: {
    register: `${config.url.api}/register`,
    login: `${config.url.api}/login`,
    refresh: `${config.url.api}/auth/refresh`,
  },
};

export default baseUrl;
