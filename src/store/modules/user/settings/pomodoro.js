export default {
    namespaced: true,
    state: {
        section: {
            header:{
                mode: false,
                title: "Pomodoro",
            },
            motivation:{
                mode: false,
                title: "What your motivation?",
            }
        },
        stateMenu: {
            menu: false, //state menu for setting pomodoro section
            tasks: false, //state for tasks folder setting in pomodoro section
            border: false, //state for border folder setting in pomodoro section
            pomodoro: false, //state for pomodoro folder setting in pomodoro section
            alarm: false,
            sound_picker:{
                state: false,
                active: true,
                list: ['audio-1.wav','audio-2.wav','audio-3.wav'],
                activeSoundIndex: 0,
            },
            color_picker: {
                tasks: false, //state for tasks color picker in pomodoro section
                border: false, //state for border color picker in pomodoro section
                pomodoro: {
                    color_timer: false,
                    text_color: false,
                    btn_start: false,
                    btn_reset: false,
                }, //state for pomodoro color picker in pomodoro section
            },
        },
        current_task: {
            title: "",
            status: false
        },
        timer:{
            work: {
                minutes: 0,
                minutesFix: 0,
                seconds: 1,
                secondsFix: 1,
            },
            break: {
                minutes: 0,
                minutesFix: 0,
                seconds: 1,
                secondsFix: 1,
            },
            setting:{
                work: true, // if true timer setting is minutes, vice versa if for seconds
                break: false, // if false timer setting is minutes, vice versa if for seconds
            },
            status: "stop",
            breakOrWork: true, // if true session start, vice versa if false break is start
            interval: null,
            fillerHeight : 0,
            fillerIncrement : 0
        },
        preferences : {
            mode: {
                light: true,
                dark: false
            },
            pomodoro: {
                color_picker: {
                    pomodoro: {
                        color_timer: {
                            bg:{
                                backgroundColor: "#30475E",
                                "border": "0.5px solid #ebebeb", 
                            },
                        },
                        text_color: {
                            bg:{
                                backgroundColor: "#F2FFE9",
                                "border": "0.5px solid #ebebeb", 
                            },
                            text: {
                                color: "#F2FFE9"
                            },
                        },
                        btn_start: {
                            bg:{
                                backgroundColor: "#87A5A6",
                                "border": "0.5px solid #ebebeb",
                            },
                        },
                        btn_reset: {
                            bg:{
                                backgroundColor: "transparant",
                                "border": "0.5px solid #ebebeb", 
                            },
                        },
                    },
                    border: {
                        bg:{
                            backgroundColor: "#30475E",
                            "border-color": "#ebebeb", 
                        },
                        border:{
                            "border-color": "#87A5A6"
                        }
                    },
                    tasks: {
                        bg:{
                            backgroundColor: "#6D28D9",
                        },
                    },
                },
                state_border:{
                    "border-color": "#87A5A6"
                },
            },
        }
    },
    mutations: {
        setTitleSection(state, data){
            if (data != '') {
                state.section.header.title = data
            } else {
                state.section.header.title = "Untitle"
            }
        },
        setTitleSectionMotivation(state, data){
            if (data != '') {
                state.section.motivation.title = data
            } else {
                state.section.motivation.title = "What your motivation?"
            }
        },
        setModeWriteSection(state, cond){
            if (cond == 'full') {
                state.section.header.mode = false
            }else{
                state.section.header.mode = !state.section.header.mode
            }
        },
        setModeWriteSectionMotivation(state, cond){
            if (cond == 'full') {
                state.section.motivation.mode = false
            }else{
                state.section.motivation.mode = !state.section.motivation.mode
            }
        },
        toggleSettingPomodoro(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.background && !pomodoro.border) {
              pomodoro.menu = !pomodoro.menu 
            } else {
              pomodoro.menu = false
              pomodoro.tasks = false
              pomodoro.border = false
              pomodoro.pomodoro = false
              pomodoro.alarm = false
            } 
        },
        toggleTaskFolderSettingPomodoro(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.background && !pomodoro.border) {
              pomodoro.tasks = !pomodoro.tasks 
            } else {
                pomodoro.menu = false
                pomodoro.tasks = false
                pomodoro.border = false
                pomodoro.pomodoro = false
                pomodoro.alarm = false
            } 
        },
        toggleSettingBorderPomodoro(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.background && !pomodoro.border) {
              pomodoro.border = !pomodoro.border 
            } else {
                pomodoro.menu = false
                pomodoro.tasks = false
                pomodoro.border = false
                pomodoro.pomodoro = false
                pomodoro.alarm = false
            } 
        },
        toggleSettingPomodoroFolder(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.background && !pomodoro.border) {
              pomodoro.pomodoro = !pomodoro.pomodoro 
            } else {
                pomodoro.menu = false
                pomodoro.tasks = false
                pomodoro.border = false
                pomodoro.pomodoro = false
                pomodoro.alarm = false
            } 
        },
        toggleAlarmSettingPomodoro(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.background && !pomodoro.border) {
                pomodoro.alarm = !pomodoro.alarm 
            } else {
                pomodoro.menu = false
                pomodoro.tasks = false
                pomodoro.border = false
                pomodoro.pomodoro = false
                pomodoro.alarm = false
            } 
        },
        toggleAudioChange(state){
            let pomodoro = state.stateMenu
            if (!pomodoro.sound_picker.state) {
                pomodoro.sound_picker.state = true
            } else {
                pomodoro.sound_picker.state = false
                // pomodoro.menu = false
                // pomodoro.tasks = false
                // pomodoro.border = false
                // pomodoro.pomodoro = false
                // pomodoro.alarm = false
            } 
        },
        backToSettingPreferences(state){
            let pomodoro = state.stateMenu
            pomodoro.tasks = false
            pomodoro.border = false
            pomodoro.pomodoro = false
            pomodoro.alarm = false
        },
        toggleSoundePicker(state){
            let pomodoro = state.stateMenu
            let statePicker = pomodoro.sound_picker.state
            if(!statePicker){
                statePicker = true
            }else{
                statePicker = false
            }
        },
        changeSound(state, index){
            let pomodoro = state.stateMenu
            pomodoro.sound_picker.activeSoundIndex = index
        },
        setColorState(state, data){
            if(data.state == 'color_timer'){
                state.preferences.pomodoro.color_picker.pomodoro.color_timer.bg.backgroundColor = data.color
            }else if(data.state == 'text_color'){
                state.preferences.pomodoro.color_picker.pomodoro.text_color.bg.backgroundColor = data.color
                state.preferences.pomodoro.color_picker.pomodoro.text_color.text.color = data.color
            }else if(data.state == 'btn_start'){
                state.preferences.pomodoro.color_picker.pomodoro.btn_start.bg.backgroundColor = data.color
            }else if(data.state == 'btn_reset'){
                state.preferences.pomodoro.color_picker.pomodoro.btn_reset.bg.backgroundColor = data.color
            }else if(data.state == 'border_color'){
                state.preferences.pomodoro.color_picker.border.bg.backgroundColor = data.color
                state.preferences.pomodoro.color_picker.border.border.border = data.color
            }else if(data.state == 'task_color'){
                state.preferences.pomodoro.color_picker.tasks.bg.backgroundColor = data.color
            }
        },
        closeAllPopUp(state){
            state.stateMenu.menu = false
            state.stateMenu.tasks = false
            state.stateMenu.border = false
            state.stateMenu.pomodoro = false
            state.stateMenu.color_picker.tasks = false
            state.stateMenu.color_picker.border = false
            state.stateMenu.color_picker.pomodoro.color_timer = false
            state.stateMenu.color_picker.pomodoro.text_color = false
            state.stateMenu.color_picker.pomodoro.btn_start = false
            state.stateMenu.color_picker.pomodoro.btn_reset = false
            state.stateMenu.sound_picker.state = false
        },
        incrementWorkTime(state){
            const timer = state.timer
            if (timer.setting.work) {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        timer.work.minutes++
                        timer.work.minutesFix = timer.work.minutes 
                    } else {
                        timer.work.minutes++
                        timer.work.minutesFix++
                    }
                }else{
                    return false
                }
            } else {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.work.seconds >= 59) {
                            timer.work.seconds = 0
                            timer.work.secondsFix = 0
                            timer.work.minutes++
                            timer.work.minutesFix++
                        } else {
                            timer.work.seconds++
                            timer.work.secondsFix = timer.work.seconds 
                        }
                    }else{
                        if (timer.work.seconds >= 59) {
                            timer.work.seconds = 0
                            timer.work.secondsFix = 0
                            timer.work.minutes++
                            timer.work.minutesFix++
                        } else {
                            timer.work.seconds++
                            timer.work.secondsFix++
                        }
                    }
                }else{
                    return false
                }
            }
        },
        decrementWorkTime(state){
            const timer = state.timer
            if (timer.setting.work) {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.work.minutes > 0) {
                            timer.work.minutes--
                            timer.work.minutesFix = timer.work.minutes
                        }
                    }else{
                        if (timer.work.minutes > 0) {
                            timer.work.minutes--
                            timer.work.minutesFix--
                        }
                    }
                }else{
                    return false
                }
            } else {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.work.seconds > 0) {
                            timer.work.seconds--
                            timer.work.secondsFix = timer.work.seconds
                        }
                    }else{
                        if (timer.work.seconds > 0) {
                            timer.work.seconds--
                            timer.work.secondsFix--
                        }
                    }
                }else{
                    return false
                }
            }
        },
        incrementBreakTime(state){
            const timer = state.timer
            if (!timer.setting.break) {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        timer.break.minutes++
                        timer.break.minutesFix = timer.break.minutes 
                    } else {
                        timer.break.minutes++
                        timer.break.minutesFix++
                    }
                }else{
                    return false
                }
            } else {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.break.seconds >= 59) {
                            timer.break.seconds = 0
                            timer.break.secondsFix = 0
                            timer.break.minutes++
                            timer.break.minutesFix++
                        } else {
                            timer.break.seconds++
                            timer.break.secondsFix = timer.break.seconds 
                        }
                    }else{
                        if (timer.break.seconds >= 59) {
                            timer.break.seconds = 0
                            timer.break.secondsFix = 0
                            timer.break.minutes++
                            timer.break.minutesFix++
                        } else {
                            timer.break.seconds++
                            timer.break.secondsFix++
                        }
                    }
                }else{
                    return false
                }
            }
        },
        decrementBreakTime(state){
            const timer = state.timer
            if (!timer.setting.break) {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.break.minutes > 0) {
                            timer.break.minutes--
                            timer.break.minutesFix = timer.break.minutes
                        }
                    }else{
                        if (timer.break.minutes > 0) {
                            timer.break.minutes--
                            timer.break.minutesFix--
                        }
                    }
                }else{
                    return false
                }
            } else {
                if(timer.status != "running"){
                    if (timer.status == "pause") {
                        if (timer.break.seconds > 0) {
                            timer.break.seconds--
                            timer.break.secondsFix = timer.break.seconds
                        }
                    }else{
                        if (timer.break.seconds > 0) {
                            timer.break.seconds--
                            timer.break.secondsFix--
                        }
                    }
                }else{
                    return false
                }
            }
        },
        changeStateSettingTimerWork(state, cond){
            state.timer.setting.work = cond
        },
        changeStateSettingTimerBreak(state, cond){
            state.timer.setting.break = cond
        },
        resetVariablesWork(state){
            const timer = state.timer
            timer.work.minutes = timer.work.minutesFix
            timer.work.seconds = timer.work.secondsFix
        },
        resetVariablesBreak(state){
            const timer = state.timer
            timer.break.minutes = timer.break.minutesFix
            timer.break.seconds = timer.break.secondsFix
        },
        handleUpdates(state) {
            let timer = state.timer
            if (timer.breakOrWork) {
                timer.work.seconds--;
                if (timer.work.seconds < 0) {
                    timer.work.minutes--;
                    if(timer.work.minutes < 0 && timer.work.seconds < 0){
                        timer.breakOrWork = false
                    }else{
                        timer.work.seconds = 59;
                    }
                }
            } else {
                timer.break.seconds--;
                if (timer.break.seconds < 0) {
                    timer.break.minutes--;
                    if(timer.break.minutes < 0 && timer.break.seconds < 0){
                        timer.breakOrWork = true
                        timer.status = "stop"
                        timer.work.minutes = timer.work.minutesFix
                        timer.work.seconds = timer.work.secondsFix
                        timer.break.minutes = timer.break.minutesFix
                        timer.break.seconds = timer.break.secondsFix
                    }else{
                        timer.break.seconds = 59;
                    }
                }
            }
        },
        reset(state){
            const timer = state.timer;
            timer.status = "stop"
            timer.breakOrWork = true
            timer.work.minutes = timer.work.minutesFix 
            timer.work.seconds = timer.work.secondsFix 
            timer.break.seconds = timer.break.secondsFix 
            timer.break.seconds = timer.break.secondsFix 
        },
        toggleMuteAlarm(state){
            state.stateMenu.sound_picker.active = !state.stateMenu.sound_picker.active
        }
    },
    getters: {
        pomodoroStyle(state){
            return state.preferences.pomodoro
        },
        getModeWriteSection(state){
            return state.section.header.mode
        },
        getModeWriteSectionMotivation(state){
            return state.section.motivation.mode
        },
        getTitleSection(state){
            return state.section.header.title
        },
        getTitleSectionMotivation(state){
            return state.section.motivation.title
        },
        settingPomodoroUserState(state){
            return state.stateMenu
        },
        getTimer(state){
            return state.timer
        },
        getStatus(state){
            return state.timer.status
        },
        getActiveSoundIndex(state){
           return state.stateMenu.sound_picker.activeSoundIndex
        }
    },
    actions: {
        start({commit, state}){
            const timer = state.timer;
            if (timer.status == "stop") {
                timer.status = "running"
            }else if(timer.status == "running"){
                timer.status = "pause"
            }else if(timer.status == "pause"){
                timer.status = "running"
            }
            if(timer.interval){
                clearInterval(timer.interval)
            }
            timer.interval = setInterval(() => {
                if(timer.status == "running"){
                    commit("handleUpdates")
                }
            }, 1000)
        },
    }
}