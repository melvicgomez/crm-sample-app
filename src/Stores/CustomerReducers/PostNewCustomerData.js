import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper';

import PostNewCustomerData from '../../Services/CustomerApis/PostNewCustomerData';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('POST/NEW_CUSTOMER_DATA', PostNewCustomerData),
  reducers: {
    ...buildAsyncReducers({
      errorKey: 'error',
      loadingKey: 'loading',
      itemKey: 'item',
    }),
  },
};
