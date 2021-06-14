import { ApiRequest } from '../libs';
import constant from './constant';
import { default as baseUrl, default as url } from './url';

interface API {
  base?: any;
}

const API: API = {};
// Customer
API.base = {
  getVaccination: ApiRequest.get(baseUrl?.vaccination),
  getHospitals: ApiRequest.get(baseUrl?.hospitals),
  postAssessment: ApiRequest.post(baseUrl?.assessment),
};

export { API, constant, url };
