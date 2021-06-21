import { API } from '../../config';
import { setDoctor, setHospitals, store } from '../../libs';
import { handleAsync } from '../../utils';

const { dispatch } = store;

export const getDoctors = async (payload = {}) => {
  const [res, err] = await handleAsync(
    API.base.getDoctors({
      params: payload,
    }),
  );
  console.log(res?.data);
  if (err) throw err;
  dispatch(setDoctor(res?.data));
};
