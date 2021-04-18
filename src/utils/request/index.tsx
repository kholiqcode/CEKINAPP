export const getPath = (path: String = '') => (path ? `/${path}` : '');

export const createUrlParamFromObj = (params: any = null) => {
  if (!params) return '';
  const result: any = [];
  Object.keys(params).map((key) => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

export const getCustomUrl = (url: string = '') => url;

export const getContentType = (type: string = '') => {
  switch (type) {
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value,
});

export const handleAsync = async (promise: React.FC<Promise<any>>) => {
  try {
    const response = await promise;
    return [response, undefined];
  } catch (err) {
    return [undefined, err];
  }
};
