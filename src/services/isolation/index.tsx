import { API } from '../../config';
import { setHospitals, setIsolation, store } from '../../libs';
import { getData, handleAsync } from '../../utils';

const { dispatch } = store;

export const getIsolationInfo = async (payload = {}) => {
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.base.getIsolationInfo({
        headers: {
          Authorization: resToken?.value,
        },
      }),
    );
    // if (err) throw err;
    dispatch(setIsolation(res?.data));
  });
};
