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
    fulfilled: (state, { payload, type }) => {
      state.loading = false;
      console.log('state', state);
      console.log('payload', payload);
      console.log('type', type);
      // state.item = state.item;
    },
  },
};
