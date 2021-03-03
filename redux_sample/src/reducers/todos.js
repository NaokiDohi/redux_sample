const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,//分解
                data: [...state.data, {id: Math.random(), text: action.text}],//ステートの更新
            }
        case 'DELETE_TODO':
            return {}
        default:
            return state
    }
}

export default todos