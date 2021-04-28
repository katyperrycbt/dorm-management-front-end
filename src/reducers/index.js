import { combineReducers } from 'redux';
import RequestInfor from '../components/Request/FixingRoom/FixingRequest/RequestInfor';
import auth from './auth';
import open from '../components/Request/FixingRoom/FixingRequest/open';
export default combineReducers({ auth, isOpen: open, RequestList: RequestInfor });



