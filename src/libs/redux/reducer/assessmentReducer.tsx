const inititalState = {
  assessment: [],
  assessmentData: [],
};

export const assessmentReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_ASSESSMENT':
      return {
        ...state,
        assessment: action.value,
      };
    case 'SET_DATA_ASSESSMENT':
      return {
        ...state,
        assessmentData: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
