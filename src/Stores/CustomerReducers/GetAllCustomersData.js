import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';

import GetAllCustomersData from '../../Services/CustomerApis/GetAllCustomersData';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('GET/ALL_CUSTOMER_DATA', GetAllCustomersData),
  reducers: buildAsyncReducers({
    errorKey: 'error',
    loadingKey: 'loading',
  }),
};
