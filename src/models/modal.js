
export default {

    namespace: 'modal',
  
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
      show(state) {
        return { ...state, isShow: true };
      },
      hide(state) {
        return { ...state, isShow: false };
      },
    },
  
  };
  