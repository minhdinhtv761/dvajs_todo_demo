
export default {

  namespace: 'todo',

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },

  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
    delete(state, { payload: key }) {
      const newState = { ...state };
      
      newState.dataSource.forEach(deleteItem);

      function deleteItem(item, index, arr) {
        if (item.key === key) {
          arr.splice(index, 1);
        }
      }

      return { ...state, dataSource: newState.dataSource };
    },
  },

};
