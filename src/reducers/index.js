import { combineReducers } from 'redux';
import auth from './auth';
import fix from './fix';
import modalContact from './modalContact';
import dashboard from './dashboard';

export default combineReducers({ auth, fix, modalContact, dashboard });



