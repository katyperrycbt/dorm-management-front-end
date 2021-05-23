import { combineReducers } from 'redux';
import auth from './auth';
import fix from './fix';
import modalContact from './modalContact';
import dashboard from './dashboard';
import adminAccount from './admin.account';
import adminInfo from './admin.info'

export default combineReducers({ 
    auth, 
    fix, 
    modalContact, 
    //below is fixed
    dashboard, 
    adminAccount, 
    adminInfo });



