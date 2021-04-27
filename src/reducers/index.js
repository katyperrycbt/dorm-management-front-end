import { combineReducers } from 'redux';

import auth from './auth';

import open from '../components/Request/FixingRoom/FixingRequest/open';

import RequestInfor from '../components/Request/FixingRoom/FixingRequest/RequestInfor';



export default combineReducers({ auth, isOpen: open, RequestList: RequestInfor });