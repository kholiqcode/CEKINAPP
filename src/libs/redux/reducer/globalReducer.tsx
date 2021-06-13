const inititalStateGlobal = {
  isLoading: false,
  isError: false,
  message: '',
  isLogged: false,
};

export const globalReducer = (state = inititalStateGlobal, action: any) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.value.isError,
        message: action.value.message,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'SET_LOGGED':
      return {
        ...state,
        isLogged: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};
