import { API } from '../../config';
import { setAssessment, setLoading, store } from '../../libs';
import { handleAsync } from '../../utils';

const { dispatch } = store;

export const postSelfAssessment = async (payload = {}) => {
  dispatch(setLoading(true));
  const [res, err] = await handleAsync(
    API.base.postAssessment({
      params: payload,
    }),
  );
  dispatch(setLoading(false));
  if (err) throw err;
  console.log(res?.data)
  dispatch(setAssessment(res?.data));
};
