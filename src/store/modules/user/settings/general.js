export default {
    namespaced: true,
    state: {
        menu: {
            state: false
        },
        darkMode: {
            state: false
        }
    },
    mutations: {
        toggleMenuUserSetting(state){
            state.menu.state = !state.menu.state
        },
        toggleDarkMode(state){
            state.darkMode.state = !state.darkMode.state
            if (state.darkMode.state){
                localStorage.theme = 'dark'
            }else{
                localStorage.theme = 'light'
            }
        },
        closeAllPopUp(state){
            state.menu.state = false
        },
        initTheme(state){
            let theme = localStorage.theme
            state.darkMode.state = theme == 'dark' ? true: false
        }
    },
    getters: {
        getStateMenu(state){
            return state.menu.state
        },
        getStateDarkMode(state){
            return state.darkMode.state
        }
    }
}