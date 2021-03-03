import { combineReducers } from 'redux';
import todos from './todos'
import user from './user'

const rootReducer = combineReducers({
    todos,// todos: todoと同じ意味の簡略記法
    user,
})
export default rootReducer