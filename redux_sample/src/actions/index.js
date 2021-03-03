const ADD_TODO = "ADD_TODO"//action
// 外部ファイルで使用するためエクスポート
export const addTodo = (text) => ({
    type: ADD_TODO,
    text //payload
})//action creator

const DELETE_TODO = "DELETE_TODO"//action
const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})//action creator

// ES6以降の構文で書くと上記のように省略できる。
// const addTodo = () => {
//     return{
//         type: ADD_TODO
//     }
// }//action creator