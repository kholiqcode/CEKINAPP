import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { vaccinationReducer } from './vaccinationReducer';
import { hospitalReducer } from './hospitalReducer';
import { assessmentReducer } from './assessmentReducer';

const reducer = combineReducers({
  globalReducer,
  vaccinationReducer,
  hospitalReducer,
  assessmentReducer,
});

export default reducer;