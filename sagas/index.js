import {all, fork} from 'redux-saga/effects';
import axios from 'axios';

import goodsSaga from './goods';
import loginSaga from './loginsaga';
import signupSaga from './signupsaga';
import EditInfoSaga from './infosaga';
import resignSaga from './resignsaga';
import infoCheckSaga from './infocheck';
import orderSaga from './orders';
// TODO :  import userSaga from './user'   -> later

axios.defaults.baseURL =
  'http://ec2-52-79-243-136.ap-northeast-2.compute.amazonaws.com:4000';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    fork(goodsSaga),
    fork(loginSaga),
    fork(signupSaga),
    fork(EditInfoSaga),
    fork(resignSaga),
    fork(infoCheckSaga),
    fork(orderSaga),
  ]);
}
