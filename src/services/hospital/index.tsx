import { API } from "../../config";
import { setHospitals, store } from "../../libs";
import { handleAsync } from "../../utils";

const { dispatch } = store;

export const getHospitals = async (payload = {}) => {
  console.log(payload);
  const [res, err] = await handleAsync(
    API.base.getHospitals({
      params: payload,
    }),
  );
  if (err) throw err;
  dispatch(setHospitals(res?.data));
};

