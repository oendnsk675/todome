export default {
    namespaced: true,
    state: {
        container: false,
        rootFolder: true,
        idTaskSelected: -1,
        currentTask: {},
    },

    mutations: {     
        toggleTaskChoiceContainer(state){
            state.container = !state.container
        },
        backToListFolder(state){
            state.rootFolder = true
        },
        changeStateFolder(state){
            state.rootFolder = false
        },
        closePopUp(state){
            state.container = false
        },
        
        setIdTaskSelected(state, id){
            state.idTaskSelected = id
        },
        setCurrentTask(state, data){
            state.currentTask = data
        },
    },

    actions: {
        
    },

    getters: {
        getStateTaskChoiceContainer(state){
            return state.container
        },
        getStateRootFolder(state){
            return state.rootFolder
        },
        getIdSelected(state){
            return state.idTaskSelected
        },
        getCurrentTask(state){
            return state.currentTask
        },
    }
}