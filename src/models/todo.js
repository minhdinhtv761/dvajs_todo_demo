import key from 'keymaster';

export default {

  namespace: 'todo',

  state: {},

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+left, ctrl+left', () => { dispatch({type:'markallundone'}) });
      key('⌘+right, ctrl+right', () => { dispatch({type:'markalldone'}) });
    },
  },

  // effects: {
  //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //     yield put({ type: 'save' });
  //   },
  // },

  reducers: {
    add(state, { payload: input }) {
      const updatedDataSource = state.dataSource.slice();
      updatedDataSource.push({ key: updatedDataSource[updatedDataSource.length - 1].key + 1, title: input.title, description: input.description })

      return { ...state, dataSource: updatedDataSource };
    },
    edit(state, { payload: input }) {
      const updatedDataSource = state.dataSource.map(item => item.key === input.key ? { ...item, title: input.title, description: input.description } : item)

      return { ...state, dataSource: updatedDataSource };
    },
    delete(state, { payload: key }) {
      return { ...state, dataSource: state.dataSource.filter(item => item.key !== key) };
    },
    changestatus(state, { payload: key }) {
      const updatedDataSource = state.dataSource.map(item => item.key === key ? { ...item, tag: !item.tag } : item)

      return { ...state, dataSource: updatedDataSource };
    },
    markalldone(state) {
      const updatedDataSource = state.dataSource.map(item => item.tag === false ? { ...item, tag: true } : item)

      return { ...state, dataSource: updatedDataSource };
    },
    markallundone(state) {
      const updatedDataSource = state.dataSource.map(item => item.tag === true ? { ...item, tag: false } : item)

      return { ...state, dataSource: updatedDataSource };
    },
  },
};
