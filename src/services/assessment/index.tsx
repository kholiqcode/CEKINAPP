import { API } from '../../config';
import {
  setAssessment,
  setDataAssessment,
  setLoading,
  store,
} from '../../libs';
import { getData, handleAsync } from '../../utils';

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
  console.log(res?.data);
  dispatch(setAssessment(res?.data));
};

export const postSelfAssessmentDaily = async (payload = {}) => {
  dispatch(setLoading(true));
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.base.postAssessmentDaily({
        headers: {
          Authorization: resToken?.value,
        },
        params: payload,
      }),
    );
    dispatch(setLoading(false));
    if (err) throw err;
    dispatch(setAssessment(res?.data));
  });

  return true;
};

export const getAssessmentData = async (payload = {}) => {
  getData('TOKEN').then(async (resToken) => {
    const [res, err] = await handleAsync(
      API.base.getAssessmentData({
        headers: {
          Authorization: resToken?.value,
        },
      }),
    );
    // if (err) throw err;
    dispatch(setDataAssessment(res?.data));
  });
};
