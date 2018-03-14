import { combineReducers } from 'redux';
import { reducers as restReducers } from '../utils/rest';
// ## Reducer Imports ##
import NavigatorStateReducer from '../state/navigator';
import PersonalityStateReducer from '../state/personalities';
import TagStateReducer from '../state/tags';
import KeyboardStateReducer from '../state/keyboard';
import SignUpReducer from '../state/_signup2';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  // ## Reducers ##

  // Navigator state
  navigatorState: NavigatorStateReducer,
  personalityState: PersonalityStateReducer,
  keyboardState: KeyboardStateReducer,
  tagState: TagStateReducer,
  //signup: SignUpReducer,
  form: formReducer,

  //
  ...restReducers,
};

const appReducer = combineReducers(reducers);
const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
