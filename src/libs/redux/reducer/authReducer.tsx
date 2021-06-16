const inititalState = {
  user: [],
};

export const authReducer = (state = inititalState, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
