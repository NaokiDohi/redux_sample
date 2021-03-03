import { createStore } from 'redux'
import rootReducer from './reducers'
// デフォルトでindex.jsを読み込んでくれるのでパスを最後まで書く必要なし

const store = createStore(rootReducer)

export default store