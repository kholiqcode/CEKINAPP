const inititalState = {
  doctor: [],
};

export const doctorReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_DOCTOR':
      return {
        ...state,
        doctor: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
