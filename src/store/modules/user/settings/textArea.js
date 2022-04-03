
export default {
    namespaced: true,
    state: {
        stateTextArea: false, // state textarea if true then it appears and vice versa if false
        nameContent: '', // the name of content, to be created, (eg. projects) 
        saveConfiguration: {
            change: false, // mode change will be true when the user makes changes in the editor
            mode: true // mode automation if true, and false otherwise
        },
        stateMenu: { // state of some menu in textarea (eg. color picker for card)
            cardColor: { //state color picker for card color
                background: false
            },
            cardIcon: { //state color picker for card color
                background: false
            },
        },
        getIconPagintionSetting: {
            total: 45,
            limit: 15,
            active: 1,
        }
    },

    mutations: {
        // close all pop up on textarea or editor js
        closeAllPopUpTextarea(state) {
            state.stateMenu.cardColor.background = false
            state.stateMenu.cardIcon.background = false
        },

        // toggle pop up setting color card on textarea
        toggleSettingsColorCard(state){
            state.stateMenu.cardColor.background = !state.stateMenu.cardColor.background
        },
        toggleSettingsColorIcon(state){
            state.stateMenu.cardIcon.background = !state.stateMenu.cardIcon.background
        },
        toggleTextArea(state, name){
            state.nameContent = name
            state.stateTextArea = !state.stateTextArea 
        },
        closeAllPopUp(state){
            if (!state.saveConfiguration.mode && state.saveConfiguration.change && state.stateTextArea) {
                let cond = confirm("you haven't saved. Are you sure close the tab");
                if (cond) {
                    state.stateTextArea = false
                } else {
                    state.stateTextArea = true
                }
            } else {
                state.stateTextArea = false
            }
            
        },
        updateStateChange(state, cond){
            state.saveConfiguration.change = cond
        },
        incrementPaginate(state){
            let pagination = state.getIconPagintionSetting 
            let totalPage = pagination.total / pagination.limit
            if (pagination.active < totalPage) {
                state.getIconPagintionSetting.active++
            }
        },
        decrementPaginate(state){
            let pagination = state.getIconPagintionSetting 
            if (pagination.active > 1) {
                state.getIconPagintionSetting.active--
            }
        },       
        
    },

    actions: {
        setBgColorCard({commit, state}, color){  
            let nameContent = state.nameContent
            if (nameContent == 'projects') {
                commit('projects/setBgColorCard', color, {root: true})
            }else if(nameContent == 'important'){
                commit('important/setBgColorCard', color, {root: true})
            }
        },

        saveContent({commit, state}, data){  
            let nameContent = state.nameContent
            if (nameContent == 'projects') {
                commit('projects/saveContent', data, {root: true})
            }else if(nameContent == 'important'){
                // console.log(nameContent);
                commit('important/saveContent', data, {root: true})
            }
            // console.log(nameContent);
        },
        setIcon(commit, data){
            commit('projects/setIcon', data, {root: true})
        },
    },

    getters: {
        settingProjectUserState(state){
            return state.stateMenu
        },

        stateTextArea(state){
            return state.stateTextArea
        },
        getIconPagintionSetting(state){
            return state.getIconPagintionSetting
        },
        getNameContent(state){
            return state.nameContent
        }
    }
}