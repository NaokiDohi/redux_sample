import { createStore } from 'redux'
import rootReducer from './reducers'
// デフォルトでindex.jsを読み込んでくれるのでパスを最後まで書く必要なし

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// 第2引数はReduxの開発ツール用

export default store