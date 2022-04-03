export default {
    namespaced: true,
    state:{
        listTodo: ['projects', 'important'],
    },
    mutations:{
        setTodoList(state, data){
            if(data.index > state.listTodo.length){
                state.listTodo.push(data.data)
            }else{
                state.listTodo[data.index] = data.data
            }
        },
    },
    getters:{
        getTodoList(state){
          return state.listTodo  
        },
    }
}