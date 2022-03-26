import key from 'keymaster';

export default {

    namespace: 'modal',
  
    state: {},
  
    subscriptions: {
      keyboardWatcher({ dispatch }) {
        key('⌘+up, ctrl+up', () => { dispatch({type:'show'}) });
      },
    },
  
    // effects: {
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
    // },
  
    reducers: {
      show(state, { payload: currentTodo }) {
        return { ...state, isShow: true, currentTodo: currentTodo  };
      },
      hide(state, { payload: input }) {
        return { ...state, isShow: false };
      },
    },
  
  };
  