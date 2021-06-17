import { combineReducers } from 'redux';
import auth from './auth';
import fix from './fix';
import modalContact from './modalContact';
import dashboard from './dashboard';
import adminAccount from './admin.account';
import adminInfo from './admin.info'
import studentAccount from './student.account';
import studentInfo from './student.info';
import adminAuth from './admin.auth';
import studentAuth from './student.auth';
import studentSee from './student.see';
import studentRequestFix from './student.request.fix';
import studentRequestReturn from './student.request.return';
import adminSee from './admin.see';
import snack from './snack';
import linear from './linear';
import recovery from './recovery';

export default combineReducers({ 
    auth, 
    fix, 
    modalContact, 
    //below is fixed
    dashboard, 
    adminAccount, 
    adminInfo,
    studentAccount,
    studentInfo,
    adminAuth,
    studentAuth,
    studentSee,
    studentRequestFix,
    studentRequestReturn, 
    adminSee,
    snack, linear,
    recovery
});



