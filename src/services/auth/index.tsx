import { API } from '../../config';
import { setLoading, setUser, store } from '../../libs';
import { handleAsync, storeData } from '../../utils';
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
    return true;
  }
};

export const postLogin = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(
    API.base.postLogin({
      params: payload,
    }),
  );
  dispatch(setLoading(false));
  showMessage(res?.meta?.message);
  if (err) throw err;
  if (res) {
    const token = `Bearer ${res.data.token}`;
    storeData('TOKEN', { value: token });
    dispatch(setUser(res?.data?.user));
    return true;
  }
};
