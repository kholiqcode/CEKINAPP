import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { vaccinationReducer } from './vaccinationReducer';
import { hospitalReducer } from './hospitalReducer';
import { assessmentReducer } from './assessmentReducer';
import { authReducer } from './authReducer';

const reducer = combineReducers({
  globalReducer,
  vaccinationReducer,
  hospitalReducer,
  assessmentReducer,
  authReducer,
});

export default reducer;