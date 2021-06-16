import { API } from '../../config';
import { setHospitals, setLoading, setUser, store } from '../../libs';
import { handleAsync } from '../../utils';
import showMessage from '../../utils/showMessage';

const { dispatch } = store;

export const postRegister = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(
    API.base.postRegister({
      params: payload,
    }),
  );
  dispatch(setLoading(false));
  showMessage(res?.meta?.message);
  if (err) throw err;
  if (res) {
    dispatch(setUser(res?.data?.user));
    console.log(res?.data?.user);
    return true;
  }
};
