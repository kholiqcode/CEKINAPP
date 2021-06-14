const inititalState = {
  assessment: [],
};

export const assessmentReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_ASSESSMENT':
      return {
        ...state,
        assessment: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
