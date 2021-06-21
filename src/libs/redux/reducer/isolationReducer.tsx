const inititalState = {
  isolation: [],
};

export const isolationReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_ISOLATION':
      return {
        ...state,
        isolation: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
