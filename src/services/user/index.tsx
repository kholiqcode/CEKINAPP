import { useNavigation } from '@react-navigation/native';
import { API } from '../../config';
import { setLoading, setUser, store } from '../../libs';
import { getData, handleAsync, removeData } from '../../utils';

const { dispatch } = store;

export const getUserInfo = async (token = null) => {
  const [res, err] = await handleAsync(
    API.base.getUserInfo({
      headers: {
        Authorization: token,
      },
    }),
  );
  if (err) throw err;
  dispatch(setUser(res?.data));
  return true;
};
