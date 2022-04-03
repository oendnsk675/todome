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
            title: "Important",
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
            menu: false, //state menu for setting my day
            background: false, //state color picker for background
            border: false, //state color picker for border
        },
        preferences : {
            mode: {
                light: true,
                dark: false
            },
            important: {
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
        interval: null
    },
    mutations:{
        saveContent(state, data){
            // console.log('state : '+ state.state, 'data' + data);
            // if (state.state) {
                let index = state.contentData.findIndex(content => content.id_editorjs === data.id_editorjs)
                // console.log(index);
                if (~index) {
                    state.contentData.splice(index, 1, data)
                } else{
                    state.contentData.unshift(data)
                }
                
            // }else{
            //     let index = state.contentDataCompleted.findIndex(content => content.id_editorjs === data.id_editorjs)
            //     // console.log(index);
            //     if (~index) {
            //         state.contentDataCompleted.splice(index, 1, data)
            //     } else{
            //         state.contentDataCompleted.unshift(data)
            //     }
            // }

            let check = state.dataColorCard.some(content => content.id === data.id_editorjs)
            if (!check) {
                state.dataColorCard.push({id:data.id_editorjs,color:"#87A5A6"})
            }
        },
        setBgColorCard(state, color){  
            let index = state.dataColorCard.findIndex(content => content.id === color.id)
            if (~index) {
                state.dataColorCard.splice(index, 1, color)
            }else{
                state.dataColorCard.push(color)
            }
            state.preferences.important.default_color_card.backgroundColor = color.color
            state.preferences.important.color_picker.card.color = color.color
        },
        setDataEditor(state,  data){
            // console.log(data);
            state.dataEditor = data
        },
        setContentDataCompleted(state, index){
            let data = state.contentData.splice(index, 1)[0]
            console.log(state.contentData, state.contentDataCompleted);
            state.contentDataCompleted.unshift(data)
        },
        setState(state, cond){
            state.state = cond
        },
        setRedoContentDataCompleted(state, index){
            let data = state.contentDataCompleted.splice(index, 1)[0]
            state.contentData.unshift(data)
        },
        goToTaskPaginate(state, data){
            // console.log(data);
            if (data.mode) {
                state.pagginationTaskContent.active = data.index
            }else{
                state.pagginationTaskContentCompleted.active = data.index
            }
        },
        deleteContentDataCompleted(state, index){
            state.contentDataCompleted.splice(index, 1)
        },
        deleteContentDataUncompleted(state, index){
            state.contentData.splice(index, 1)
        },
        toggleSettingImportant(state){
            let important = state.stateMenu
            if (!important.background && !important.border) {
              important.menu = !important.menu 
            } else {
              important.menu = false
              important.background = false
              important.border = false
            } 
        },
        setBgImportant(state, color){  
            state.preferences.important.default_color.backgroundColor = color
            state.preferences.important.color_picker.bg.backgroundColor = color
        },
        setBorderImportant(state, color){
            state.preferences.important.default_color['border-color'] = color
            state.preferences.important.state_border['border-color'] = color == 'transparent'? '#87A5A6': color
            state.preferences.important.color_picker.border.backgroundColor = color
        },
        closeAllPopUp(state){
            state.stateMenu.menu = false
            state.stateMenu.background = false
            state.stateMenu.border = false
        },
        setTitleSection(state, data){
            state.section.title = data
        },
        setModeWriteSection(state, cond){
            if (cond == 'full') {
                state.section.mode = false
            }else{
                state.section.mode = !state.section.mode
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
        getDataColorCard(state){
            return state.dataColorCard
        },
        settingImportantUserState(state){
            return state.stateMenu
        },
        importantStyle(state){
            return state.preferences.important
        },
        getDataEditorImportant(state){
            return state.dataEditor
        },
        getState(state){
            return state.state
        },
        getContentDataCompleted(state){
            // console.log('asd');
            try {
                let pg = state.pagginationTaskContentCompleted
    
                pg.chunk = chunkData(state.contentDataCompleted, pg.limit)
                // console.log(pg);
                return {
                    data: pg.chunk[pg.active],
                    totalPage: pg.chunk.length,
                    active: pg.active,
                    limit: pg.limit,
                } 
                
            } catch (error) {
                console.log(error);
            }
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
                commit("listTodo/setTodoList", {data, index:1}, {root : true})
                commit("setTitleSection", data)
            } else {
                commit("listTodo/setTodoList", {data : "Untitle", index:1}, {root : true})
                commit("setTitleSection", "Untitle")
            }
        },
    }
}