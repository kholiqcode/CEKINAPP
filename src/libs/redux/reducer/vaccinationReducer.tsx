const inititalState = {
  vaccination: [],
};

export const vaccinationReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_VACCINATION':
      return {
        ...state,
        vaccination: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
