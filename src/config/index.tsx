import { ApiRequest } from '../libs';
import constant from './constant';
import { default as baseUrl, default as url } from './url';

interface API {
  customer?: Object;
}

const API: API = {};
// Customer
API.customer = {
  login: ApiRequest.post(baseUrl?.customer?.login),
};

export { API, constant, url };
