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
  getDoctors: ApiRequest.get(baseUrl?.doctors),
  postAssessment: ApiRequest.post(baseUrl?.assessment),
  postAssessmentDaily: ApiRequest.post(baseUrl?.assessmentDaily),
  getAssessmentData: ApiRequest.get(baseUrl?.assessmentData),
  postRegister: ApiRequest.post(baseUrl?.auth?.register),
  postLogin: ApiRequest.post(baseUrl?.auth?.login),
  getUserInfo: ApiRequest.get(baseUrl?.userInfo),
  getIsolationInfo: ApiRequest.get(baseUrl?.isolationInfo),
};

export { API, constant, url };
