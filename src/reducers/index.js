import { combineReducers } from 'redux';
import auth from './auth';
import fix from './fix';
import modalContact from './modalContact';

export default combineReducers({ auth, fix, modalContact });



