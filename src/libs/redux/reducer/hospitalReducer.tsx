const inititalState = {
  hospital: [],
  hospitals: [],
};

export const hospitalReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_HOSPITAL':
      return {
        ...state,
        hospital: action.value,
      };
    case 'SET_HOSPITALS':
      return {
        ...state,
        hospitals: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
