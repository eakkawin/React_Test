import {
  createStore,
  applyMiddleware
} from 'redux';
import { combineForms } from 'react-redux-form';

const initialUserState = {
  email:'',
  firstName: '',
  lastName: '',
};

const store = createStore(combineForms({
  user: initialUserState,
}));

export default store;
