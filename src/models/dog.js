import key from 'keymaster';
import { dogQuery } from '../services/dogService';

export default {

  namespace: 'dog',

  state: {},

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+left, ctrl+left', () => { dispatch({type:'markallundone'}) });
      key('⌘+right, ctrl+right', () => { dispatch({type:'markalldone'}) });
    },
  },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'add' });
  //   },
  // },
  
  effects: {
    *add({ call, put }) {  // eslint-disable-line
      try {
        let dog = yield call(dogQuery);
        console.log(`effect: ` + dog.data);
        yield put({type: 'add', payload: dog.data });
      } catch(error) {
        console.log(error);
      }
    },
  },

  reducers: {
    add(state, { payload: dog}) {
      console.log(`Dog reducer: ${dog}`);
      let updatedDataSource = state.dataSource.slice();
      console.log(`array: ${updatedDataSource}`)
      updatedDataSource.push(dog);

      return { ...state, dataSource: updatedDataSource };
    },
    delete(state, { payload: message }) {
      return { ...state, dataSource: state.dataSource.filter(item => item.message !== message) };
    },
  },
};
