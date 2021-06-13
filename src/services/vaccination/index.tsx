import { API } from '../../config';
import { setLoading, store } from '../../libs';
import { setVaccination } from '../../libs/redux/action/vaccinationAction';
import { handleAsync } from '../../utils';

const { dispatch } = store;

export const getVaccination = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(API.base.getVaccination());
  if (err) throw err;
  dispatch(setVaccination(res?.data));
  dispatch(setLoading(false));
};
