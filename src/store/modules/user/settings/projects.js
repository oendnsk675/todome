// import { mapGetters } from "vuex"
const chunkData = (arr, size) => 
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
);


export default {
    namespaced: true,
    state: {
        temp_title: '', // temp for data title before the task saved
        state: true, // this state it's mind for state complete or uncomplete tasks, if true state is uncomplet, vice versa
        section: {
            mode: false,
            title: "Projects",
        },
        contentData: [],
        contentDataCompleted: [],
        dataEditor: {},
        dataColorCard: [],
        pagginationTaskContent: {
            limit: 6,
            chunk: [],
            active: 0,
        },
        pagginationTaskContentCompleted: {
            limit: 6,
            chunk: [],
            active: 0,
        },
        stateMenu: {
            menu: false, //state menu for setting projects
            background: false, //state color picker for background
            border: false, //state color picker for border
        },
        preferences : {
            mode: {
                light: true,
                dark: false
            },
            projects: {
                default_color: {
                    backgroundColor: "transparant",
                    "border-color": "#87A5A6",  
                },
                default_color_card: {
                    backgroundColor: "#87A5A6",
                    "color" : "white",
                },
                color_picker: {
                    bg:{
                        backgroundColor: "transparant",
                        "border": "0.5px solid #ebebeb", 
                    },
                    border:{
                        backgroundColor: "#87A5A6",
                        "border": "0.5px solid #ebebeb", 
                    },
                    card: {
                        backgroundColor: "#87A5A6",
                        "border": "0.5px solid #ebebeb",
                    }
                },
                state_border:{
                    "border-color": "#87A5A6"
                }
            },
        },
    },
    mutations: {
        setBgProjects(state, color){  
            state.preferences.projects.default_color.backgroundColor = color
            state.preferences.projects.color_picker.bg.backgroundColor = color
        },
        setBorderProjects(state, color){
            state.preferences.projects.default_color['border-color'] = color
            state.preferences.projects.state_border['border-color'] = color == 'transparent'? '#87A5A6': color
            state.preferences.projects.color_picker.border.backgroundColor = color
        },
        setBgColorCard(state, color){  
            // let index = state.contentData.
            // let index = state.contentData.map(function(e) { return e.id_editorjs; }).indexOf(color.id);
            // console.log(state.contentData[color.id - 1], color.id - 1);
            // alert(color)
            // state.contentData.forEach(element => {
            //     if (element.id_editorjs == color.id) {
            //         // console.log(element.id_editorjs);
            //         element.default_color_card.backgroundColor = color.color
            //     }
            //     // console.log(element.default_color_card.backgroundColor);
            // });
            let index = state.dataColorCard.findIndex(content => content.id === color.id)
            if (~index) {
                // state.dataColorCard.push({id:data.id_editorjs,color:"#87A5A6"})
                state.dataColorCard.splice(index, 1, color)
            }else{
                state.dataColorCard.push(color)
            }
            state.preferences.projects.default_color_card.backgroundColor = color.color
            state.preferences.projects.color_picker.card.color = color.color
        },
        toggleSettingProject(state){
            let projects = state.stateMenu
            if (!projects.background && !projects.border) {
              projects.menu = !projects.menu 
            } else {
              projects.menu = false
              projects.background = false
              projects.border = false
            } 
        },
        closeAllPopUp(state){
          state.stateMenu.menu = false
          state.stateMenu.background = false
          state.stateMenu.border = false
        },
        saveContent(state, data){
            // if (state.state) {
                let index = state.contentData.findIndex(content => content.id_editorjs === data.id_editorjs)
                // console.log(index);
                if (~index) {
                    state.contentData.splice(index, 1, data)
                } else{
                    state.contentData.unshift(data)
                }

            let check = state.dataColorCard.some(content => content.id === data.id_editorjs)
            if (!check) {
                state.dataColorCard.push({id:data.id_editorjs,color:"#87A5A6"})
            }
        },
        changeTemp_title(state, data){
            // console.log(data);
            state.temp_title = data
        },
        setDataEditor(state,  data){
            // console.log(data);
            state.dataEditor = data
        },
        setEmptydataEditor(state){
            // console.log(data);
            state.dataEditor = {}
        },
        goToTaskPaginate(state, data){
            // console.log(data);
            if (data.mode) {
                state.pagginationTaskContent.active = data.index
            }else{
                state.pagginationTaskContentCompleted.active = data.index
            }
        },
        setFalseContentTimerEnable(state, id_editorjs){
            let index = state.contentData.findIndex(content => content.id_editorjs === id_editorjs)
            if (~index) {
                let task = state.contentData[index]
                clearInterval(task.interval)
                task.timerCount.timerEnabled = false
                task.isComplete = false
                task.timerCount.time = 5
            }
        },
        setContentDataCompleted(state, index){
            let data = state.contentData.splice(index, 1)[0]
            state.contentDataCompleted.unshift(data)
        },
        setState(state, cond){
            state.state = cond
        },
        setRedoContentDataCompleted(state, index){
            let data = state.contentDataCompleted.splice(index, 1)[0]
            state.contentData.unshift(data)
        },
        setModeWriteSection(state, cond){
            if (cond == 'full') {
                state.section.mode = false
            }else{
                state.section.mode = !state.section.mode
            }
        },
        setTitleSection(state, data){
            state.section.title = data
        },
        deleteContentDataCompleted(state, index){
            state.contentDataCompleted.splice(index, 1)
        },
        deleteContentDataUncompleted(state, index){
            state.contentData.splice(index, 1)
        },
        incrementLimitTask(state){
            state.pagginationTaskContent.limit++
            state.pagginationTaskContentCompleted.limit++
        },
        decrementLimitTask(state){
            if(state.pagginationTaskContent.limit != 0 && state.pagginationTaskContentCompleted.limit != 0){
                state.pagginationTaskContent.limit--
                state.pagginationTaskContentCompleted.limit--
            }
        },
    },
    getters: {
        projectStyle(state){
          return state.preferences.projects
        },
        settingProjectUserState(state){
          return state.stateMenu
        },
        getTasks(state){
            try {
                let pg = state.pagginationTaskContent
    
                pg.chunk = chunkData(state.contentData, pg.limit)
                return {
                    data: pg.chunk[pg.active],
                    totalPage: pg.chunk.length,
                    active: pg.active,
                    limit: pg.limit,
                } 
                
            } catch (error) {
                return 
            }
        },
        getLastId(state){ // last id is used as a reference for creating new tasks id in the textarea
            return state.contentData.length
        },
        getDataEditorProjects(state){
            return state.dataEditor
        },
        getDataColorCard(state){
            return state.dataColorCard
        },
        getContentDataCompleted(state){
            try {
                let pg = state.pagginationTaskContentCompleted
    
                pg.chunk = chunkData(state.contentDataCompleted, pg.limit)
                return {
                    data: pg.chunk[pg.active],
                    totalPage: pg.chunk.length,
                    active: pg.active,
                    limit: pg.limit,
                } 
                
            } catch (error) {
                return 
            }
        },
        getState(state){
            return state.state
        },
        getModeWriteSection(state){
            return state.section.mode
        },
        getTitleSection(state){
            return state.section.title
        },
        getCountTask(state){
            return state.contentData.length
        }
    },
    actions: {
        setContentDataCompleted({commit, state}, id_editorjs){
            let index = state.contentData.findIndex(content => content.id_editorjs === id_editorjs)
            if (~index) {
                let task = state.contentData[index]
                task.isComplete = !task.isComplete
                task.timerCount.timerEnabled = true
                let timerInterval = setInterval(() => {
                    // console.log('hore');
                    if (task.timerCount.timerEnabled && task.timerCount.time > 0) {
                        task.timerCount.time--
                    }else{
                        return
                    }
                    if (task.timerCount.time == 0 && task.timerCount.timerEnabled) {
                        setTimeout(() => {
                            let ind = state.contentData.findIndex(content => content.id_editorjs === id_editorjs)
                            commit("setContentDataCompleted", ind)
                            // console.log(state.contentData, state.contentDataCompleted);
                            return
                        }, 400);
                    }


                }, 1000);
                task.interval = timerInterval
                // console.log(index, state.contentData[index], 'apa ini');
            }
        },
        setRedoContentDataCompleted({commit, state}, id_editorjs){
            let index = state.contentDataCompleted.findIndex(content => content.id_editorjs === id_editorjs)
            if (~index) {
                let task = state.contentDataCompleted[index]
                task.isComplete = false
                task.timerCount.time = 5
                task.timerCount.timerEnabled = false
                commit("setRedoContentDataCompleted", index)
            }
        },
        deleteContentData({commit, state}, data){
            let index = state.contentDataCompleted.findIndex(content => content.id_editorjs === data.id_editorjs)
            if (~index && data.cond == 'complete') {
                if (data.cond == 'complete') {
                    commit("deleteContentDataCompleted", index)
                } 
            }else {
                let index = state.contentData.findIndex(content => content.id_editorjs === data.id_editorjs)
                if (~index) {
                    commit("deleteContentDataUncompleted", index)
                }
            }
        },
        setTitleSection({commit}, data){
            if (data != '') {
                commit("listTodo/setTodoList", {data, index:0}, {root : true})
                commit("setTitleSection", data)
            } else {
                commit("listTodo/setTodoList", {data : "Untitle", index:0}, {root : true})
                commit("setTitleSection", "Untitle")
            }
        },
    }
}