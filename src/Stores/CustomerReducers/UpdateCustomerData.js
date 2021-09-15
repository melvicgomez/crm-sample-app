import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';

import UpdateCustomerData from '../../Services/CustomerApis/UpdateCustomerData';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('UPDATE/CUSTOMER_DATA', UpdateCustomerData),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'error',
      loadingKey: 'loading',
      itemKey: 'item',
    }),
  },
};
