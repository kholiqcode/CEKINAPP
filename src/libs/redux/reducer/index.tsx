import { combineReducers } from 'redux';
import { globalReducer } from './globalReducer';
import { vaccinationReducer } from './vaccinationReducer';
import { hospitalReducer } from './hospitalReducer';

const reducer = combineReducers({
  globalReducer,
  vaccinationReducer,
  hospitalReducer,
});

export default reducer;