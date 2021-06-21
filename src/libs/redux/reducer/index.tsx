import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { vaccinationReducer } from './vaccinationReducer';
import { hospitalReducer } from './hospitalReducer';
import { assessmentReducer } from './assessmentReducer';
import { authReducer } from './authReducer';
import { isolationReducer } from './isolationReducer';
import { doctorReducer } from './doctorReducer';

const reducer = combineReducers({
  globalReducer,
  vaccinationReducer,
  hospitalReducer,
  assessmentReducer,
  authReducer,
  isolationReducer,
  doctorReducer,
});

export default reducer;