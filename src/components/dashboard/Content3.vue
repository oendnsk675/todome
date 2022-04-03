<template>
        <!-- content 3 -->
        <div class="lg:w-4/12 md:px-4 relative md:top-16">

            <!-- color picker -->
            <div 
            :class="{
                'top-cp-color-timer opacity-100 z-45': settingPomodoroUserState.color_picker.pomodoro.color_timer,
                'top-cp-text-color opacity-100 z-45': settingPomodoroUserState.color_picker.pomodoro.text_color,
                'top-cp-btn-start opacity-100 z-45': settingPomodoroUserState.color_picker.pomodoro.btn_start,
                'top-cp-btn-reset opacity-100 z-45': settingPomodoroUserState.color_picker.pomodoro.btn_reset,
                'top-cp-tasks-folder opacity-100 z-45': settingPomodoroUserState.color_picker.tasks,
                'top-cp-border-color opacity-100 z-45': settingPomodoroUserState.color_picker.border,
                'hidden': !settingPomodoroUserState.color_picker.pomodoro.color_timer && !settingPomodoroUserState.color_picker.pomodoro.text_color && !settingPomodoroUserState.color_picker.pomodoro.btn_start && !settingPomodoroUserState.color_picker.pomodoro.btn_reset && !settingPomodoroUserState.color_picker.border && !settingPomodoroUserState.color_picker.tasks
            }"
            @click.stop 
            class="w-3/5 py-3 transition-opacity duration-200 px-4 bg-gray-900 bg-opacity-80 absolute lg:right-7 md:right-10 rounded-tl-lg rounded-bl-lg rounded-br-lg">
                <div class="flex flex-col gap-4">
                    <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">{{getStateCpTitle()}}</h1>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setColor('transparent')" class="w-8 h-8 border rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#676FA3')" class="w-8 h-8 bg-color_custom2 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#CDDEFF')" class="w-8 h-8 bg-color_custom3 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#DB6B97')" class="w-8 h-8 bg-color_custom4 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#20ABB5')" class="w-8 h-8 bg-color_custom5 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setColor('#F2FFE9')" class="w-8 h-8 bg-color_custom6 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#557C55')" class="w-8 h-8 bg-color_custom7 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#146356')" class="w-8 h-8 bg-color_custom8 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#30475E')" class="w-8 h-8 bg-color_custom9 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#121212')" class="w-8 h-8 bg-color_custom10 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setColor('#C84B31')" class="w-8 h-8 bg-color_custom11 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#F2789F')" class="w-8 h-8 bg-color_custom12 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#97BFB4')" class="w-8 h-8 bg-color_custom13 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#4C0070')" class="w-8 h-8 bg-color_custom14 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setColor('#B42DC9')" class="w-8 h-8 bg-color_custom15 rounded-full hover:opacity-80"></button>
                    </div>
                </div>
            </div>
            <!-- color picker -->

            <!-- sound picker -->
            <div :class="{
                'hidden': !settingPomodoroUserState.sound_picker.state,
                'top-sound-picker opacity-100 z-45': settingPomodoroUserState.sound_picker.state
            }"
            @click.stop 
            class="w-3/5 transition-opacity duration-200 bg-gray-500 lg:right-0 md:right-4 absolute rounded-bl-lg rounded-br-lg overflow-hidden">
                <div v-for="listSound, id in settingPomodoroUserState.sound_picker.list" :key="id" @click="changeSound(id)"  
                    :class="{'bg-gray-400': settingPomodoroUserState.sound_picker.activeSoundIndex != id}"
                    class="flex flex-col gap-4 px-4 py-2 transition-all duration-200 text-base font-Nunito font-semibold text-gray-100 cursor-pointer hover:opacity-70">
                        {{listSound}}
                </div>
            </div>
            <!-- sound picker -->

            <!-- menu setting -->
            <div @click.stop="hiddeColorPicker()" 
            :class="{'hidden': !settingPomodoroUserState.menu}" 
            class="w-3/5 overflow-hidden py-3 bg-gray-400 absolute lg:top-10 md:top-8 lg:right-0 md:right-4 rounded-tl-lg rounded-bl-lg rounded-br-lg z-40 box-border">
                <svg  
                @click="backToSettingPreferences"
                :class="{
                    'opacity-100 z-40':(settingPomodoroUserState.pomodoro || settingPomodoroUserState.border || settingPomodoroUserState.tasks || settingPomodoroUserState.alarm),
                    'absolute opacity-0 -z-20':(!settingPomodoroUserState.pomodoro && !settingPomodoroUserState.border && !settingPomodoroUserState.tasks && !settingPomodoroUserState.alarm),
                }"
                xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute left-4 top-5" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold ">{{getStateSettingTitle()}}</h1>
                <ul class="mt-4">
                    <!-- main menu -->
                    <div
                        :class="{'opacity-0 -z-20 absolute':(settingPomodoroUserState.pomodoro || settingPomodoroUserState.border || settingPomodoroUserState.tasks || settingPomodoroUserState.alarm)}"
                        class="flex flex-col gap-4 transition-all duration-150">
                            <li @click.stop="toggleSettingPomodoroFolder" class="flex px-6 py-1 font-medium text-gray-100 justify-between hover:opacity-75 cursor-pointer">
                                Pomodoro Setting
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" class="fill-current transform transition cursor-pointer duration-300 hover:rotate-90 hover:opacity-75" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z"/></svg>
                            </li>
                            <li @click.stop="toggleSettingBorderPomodoro" class="flex px-6 py-1 font-medium text-gray-100 justify-between hover:opacity-75 cursor-pointer">
                                Border Setting
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" class="fill-current transform transition cursor-pointer duration-300 hover:rotate-90 hover:opacity-75" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z"/></svg>
                            </li>
                            <li @click.stop="toggleTaskFolderSettingPomodoro" class="flex px-6 py-1 font-medium text-gray-100 justify-between hover:opacity-75 cursor-pointer">
                                Task folder Setting
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" class="fill-current transform transition cursor-pointer duration-300 hover:rotate-90 hover:opacity-75" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z"/></svg>
                            </li>
                            <li @click.stop="toggleAlarmSettingPomodoro" class="flex px-6 py-1 font-medium text-gray-100 justify-between hover:opacity-75 cursor-pointer">
                                Alarm Setting
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" class="fill-current transform transition cursor-pointer duration-300 hover:rotate-90 hover:opacity-75" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z"/></svg>
                            </li>
                    </div>
                    <!-- /main menu -->

                    <!-- pomodoro menu -->
                    <div
                        :class="{
                            'opacity-100 z-40':(settingPomodoroUserState.pomodoro),
                            'absolute':(!settingPomodoroUserState.pomodoro),
                        }"
                        class="opacity-0 -z-20 transition-all duration-150"
                        >
                        
                        <li class="flex items-center justify-between px-6 py-1">
                            <span @click.stop="toggleColorPicker('pomodoro_setting', 'color_timer')" class="cursor-pointer hover:opacity-70 text-gray-100 font-medium text-base">Color timer</span>
                            <button :style="pomodoroStyle.color_picker.pomodoro.color_timer.bg" 
                            @click.stop="toggleColorPicker('pomodoro_setting', 'color_timer')" class="w-6 h-6  rounded-full hover:opacity-80"></button>
                        </li>
                        <li class="flex items-center justify-between px-6 py-1 mt-1">
                            <span @click.stop="toggleColorPicker('pomodoro_setting', 'text_color')" class="cursor-pointer hover:opacity-70 text-gray-100 font-medium text-base">Text color</span>
                            <button :style="pomodoroStyle.color_picker.pomodoro.text_color.bg" 
                            @click.stop="toggleColorPicker('pomodoro_setting', 'text_color')" class="w-6 h-6 border  rounded-full hover:opacity-80"></button>
                        </li>
                        <li class="flex items-center justify-between px-6 py-1 mt-1">
                            <span @click.stop="toggleColorPicker('pomodoro_setting', 'btn_start')" class="cursor-pointer hover:opacity-70 text-gray-100 font-medium text-base">Color button start</span>
                            <button :style="pomodoroStyle.color_picker.pomodoro.btn_start.bg" 
                            @click.stop="toggleColorPicker('pomodoro_setting', 'btn_start')" class="w-6 h-6  rounded-full hover:opacity-80"></button>
                        </li>
                        <li class="flex items-center justify-between px-6 py-1 mt-1">
                            <span @click.stop="toggleColorPicker('pomodoro_setting', 'btn_reset')" class="cursor-pointer hover:opacity-70 text-gray-100 font-medium text-base">Color button reset</span>
                            <button :style="pomodoroStyle.color_picker.pomodoro.btn_reset.bg" 
                            @click.stop="toggleColorPicker('pomodoro_setting', 'btn_reset')" class="w-6 h-6  rounded-full hover:opacity-80"></button>
                        </li>
                    </div>
                    <!-- /pomodoro menu -->

                    <!-- border menu -->
                    <div
                        :class="{
                            'opacity-100 z-40':(settingPomodoroUserState.border),
                            'absolute':(!settingPomodoroUserState.border),
                        }"
                        class="opacity-0 -z-20 transition-all duration-150"
                        >
                        
                        <li class="flex items-center justify-between px-6 py-1">
                            <span @click.stop="toggleColorPicker('border_setting', 'color')" class="text-gray-100 font-medium text-base">Color</span>
                            <button :style="pomodoroStyle.color_picker.border.bg" 
                            @click.stop="toggleColorPicker('border_setting', 'color')" class="w-6 h-6  rounded-full hover:opacity-80"></button>
                        </li>
                    </div>
                    <!-- /border menu -->

                    <!-- task folder menu -->
                    <div
                        :class="{
                            'opacity-100 z-40':(settingPomodoroUserState.tasks),
                            'absolute':(!settingPomodoroUserState.tasks),
                        }"
                        class="opacity-0 -z-20 transition-all duration-150"
                        >
                        
                        <li class="flex items-center justify-between px-6 py-1">
                            <span @click.stop="toggleColorPicker('tasks_setting', 'color')" class="text-gray-100 font-medium text-base">Background Color</span>
                            <button :style="pomodoroStyle.color_picker.tasks.bg" 
                            @click.stop="toggleColorPicker('tasks_setting', 'color')" class="w-6 h-6  rounded-full hover:opacity-80"></button>
                        </li>
                    </div>
                    <!-- /task folder menu -->

                    <!-- task folder menu -->
                    <div
                        :class="{
                            'opacity-100 z-40':(settingPomodoroUserState.alarm),
                            'absolute':(!settingPomodoroUserState.alarm),
                        }"
                        class="opacity-0 -z-20 transition-all duration-150"
                        >
                        
                        <li @click.stop="toggleAudioChange()" class="flex items-center justify-between px-6 py-1 relative cursor-pointer hover:opacity-70 transition-all duration-150">
                            <span class="text-gray-100 font-medium text-base">Change sound</span>
                            <svg  
                                xmlns="http://www.w3.org/2000/svg" 
                                :class="{
                                    'rotate-90': settingPomodoroUserState.sound_picker.state,
                                    'rotate-180': !settingPomodoroUserState.sound_picker.state,
                                    }"
                                class="transform transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute right-7" 
                                width="15" height="15" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
                            </svg>
                        </li>

                        <li @click.stop="toggleMuteAlarm()" class="flex items-center justify-between px-6 py-1 relative cursor-pointer hover:opacity-70 transition-all duration-150 mt-3">
                            <span class="text-gray-100 font-medium text-base">Mute alarm</span>
                            <div class="border w-5 h-5 border-gray-100 rounded-full cursor-pointer hover:opacity-70 flex items-center justify-center">
                                <svg 
                                :class="{
                                    'scale-100 rotate-0 z-30': !settingPomodoroUserState.sound_picker.active, 
                                    'scale-0 rotate-180': settingPomodoroUserState.sound_picker.active}"
                                xmlns="http://www.w3.org/2000/svg" 
                                class="fill-current text-gray-100 transform transition-all duration-300 ease-out" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                            </div>
                        </li>
                    </div>
                    <!-- /task folder menu -->
                </ul>

            </div>
            <!-- menu setting -->

            <!-- header content -->
            <div class="w-full ">
                <div class="flex justify-between items-center">
                    <div @click.stop class="flex gap-4 items-center">
                        <div class="relative">
                            <h1 class="font-Nunito font-bold text-2xl dark:text-gray-50">{{section.header.title}}</h1>
                            <input @change="setTitleSection(section.header.title)" :style="pomodoroStyle.state_border" type="text" 
                            :class="{
                                'bg-gray-100 z-20 opacity-100' : getModeWriteSection,
                                'bg-gray-100 -z-20 opacity-0' : !getModeWriteSection
                                }" class="absolute w-full outline-none h-full transition-all duration-500 top-0 left-0 font-Nunito font-black text-2xl border-b-2 " v-model="section.header.title">
                        </div>
                        <svg @click.stop="setModeWriteSection('nofull')" class="opacity-40 hover:opacity-100 cursor-pointer fill-current dark:text-gray-50" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>

                    </div>
                    <div class="flex gap-3">
                        <button @click.stop="toggleSettingPomodoro()" class="hover:opacity-70 transform transition duration-300 hover:rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z" fill="#b5b1b1"/></svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- /header content -->
            
            <!-- motivation content -->
            <div @click.stop class="flex items-center gap-2 lg:mt-4 md:mt-2 mb-3">
                <span class="font-Nunito font-light text-gray-700 text-sm relative dark:text-gray-50"> 
                    <i>"{{section.motivation.title}}"</i>
                    <input @change="setTitleSectionMotivation(section.motivation.title)" :style="pomodoroStyle.state_border" type="text" 
                            :class="{
                                'bg-gray-100 z-20 opacity-100' : getModeWriteSectionMotivation,
                                'bg-gray-100 -z-20 opacity-0' : !getModeWriteSectionMotivation
                                }" class="absolute w-full outline-none h-full transition-all duration-500 top-0 left-0 font-Nunito font-light text-gray-700 text-sm border-b-2 " v-model="section.motivation.title">
                </span>
                <svg @click.stop="setModeWriteSectionMotivation('nofull')" class="opacity-40 hover:opacity-100 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
            </div>
            <!-- /motivation content -->

            <!-- task content -->
            <div>
                <!-- current task -->
                <div class="flex items-center justify-evenly gap-2 mb-3">
                    <hr :style="pomodoroStyle.color_picker.border.bg" class="w-4/12 h-1 rounded-xl">
                    <h1 class="font-Nunito lg:text-base md:text-xs tracking-tight dark:text-gray-50">You'r current task</h1>
                    <hr :style="pomodoroStyle.color_picker.border.bg" class="w-4/12 h-1 rounded-xl">
                </div>
                <!-- /current task -->


                <!-- card -->
                <div @click.stop="toggleTaskChoiceContainer" :style="getOpacity(pomodoroStyle.color_picker.tasks.bg)" class="relative w-full flex gap-3 lg:p-2 md:p-1.5 mb-3 justify-between hoverthis cursor-pointer items-center transition-opacity duration-150 rounded-2xl">
                    <div class="flex gap-3 items-center justify-center w-full">
                            <h1 class="font-extrabold lg:text-base md:text-sm font-Nunito">{{getCurrentTask.data != undefined ? getCurrentTask.data.title : "No Task Selected"}}</h1>
                    </div>
                </div>
                <!-- card -->

                <!-- timer circle -->
                <div :style="pomodoroStyle.color_picker.pomodoro.color_timer.bg"  class="w-ful flex flex-col items-center mt-4 rounded-2xl  bg-opacity-60 py-5">
                    <div class="flex w-full justify-evenly">
                        <!-- time break setting -->
                        <div :style="pomodoroStyle.color_picker.pomodoro.text_color.text" class="flex flex-col gap-4 justify-center items-center">
                            <div>
                                <h5 class="text-center text-xs font-Nunito font-semibold">Time</h5>
                                <h5 class="text-center text-xs font-Nunito font-semibold">Break</h5>
                            </div>
                            <!-- plush time break setting -->
                            <button 
                            @click="incrementBreakTime"
                            class="hover:opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g transform="translate(-460.142 -365.142)"><rect width="28" height="28" rx="4" transform="translate(460.142 365.142)" fill="#b5b1b1"/><rect width="16.337" height="2.389" transform="translate(465.974 378.384)" fill="#fff"/><rect width="16.337" height="2.389" transform="translate(475.337 371.376) rotate(90)" fill="#fff"/></g></svg>
                            </button>
                            <!-- /plush time break setting -->
                            <div class="flex items-center relative">
                                <svg
                                @click="changeStateSettingTimerBreak(true)"
                                :class="{'hidden': getTimer.setting.break}"
                                 xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute -left-3" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                <h1 class="text-xl font-Nunito font-bold text-center">
                                    <span 
                                    :class="{'hidden': getTimer.setting.break}"
                                    class="flex  flex-col justify-center">
                                        <span class="text-base">{{getTimer.break.minutesFix}}</span>
                                        <span class="text-xs">Minute</span>
                                    </span>

                                    <span 
                                    :class="{'hidden': !getTimer.setting.break}"
                                    class="flex  flex-col justify-center">
                                        <span class="text-base">{{getTimer.break.secondsFix}}</span>
                                        <span class="text-xs">Second</span>
                                    </span>

                                </h1>
                                <svg 
                                @click="changeStateSettingTimerBreak(false)"
                                :class="{'hidden': !getTimer.setting.break}"
                                xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute -right-3" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                            </div>
                            <!-- minus time break setting -->
                            <button 
                            @click="decrementBreakTime"
                            class="hover:opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g transform="translate(-460.142 -365.142)"><rect width="28" height="28" rx="4" transform="translate(460.142 365.142)" fill="#b5b1b1"/><rect width="16.337" height="2.389" transform="translate(465.974 378.384)" fill="#fff"/></g></svg>
                            </button>
                            <!-- /minus time break setting -->
                        </div>
                        <!-- /time break setting -->

                        <!-- timer -->
                        <div  class="w-52 h-52 lg:w-60 lg:h-60 border-4 border-gray-200 rounded-full flex flex-col items-center justify-center">
                            <h1 :style="pomodoroStyle.color_picker.pomodoro.text_color.text" class="font-Nunito font-bold text-4xl">{{!getTimer.breakOrWork? 'Break':'Session'}}</h1>
                            <h1 :style="pomodoroStyle.color_picker.pomodoro.text_color.text" class="font-Nunito font-bold text-4xl">
                                <span v-text="minutesShown"></span>
                                <span>:</span>
                                <span v-text="secondsShown"></span>
                            </h1>
                        </div>
                        <!-- /timer -->

                        <!-- time session setting -->
                        <div :style="pomodoroStyle.color_picker.pomodoro.text_color.text"  class="flex flex-col gap-4 justify-center items-center">
                            <div>
                                <h5 class="text-center text-xs font-Nunito font-semibold">Time</h5>
                                <h5 class="text-center text-xs font-Nunito font-semibold">Session</h5>
                            </div>
                            <!-- plush time session setting -->
                            <button 
                            @click="incrementWorkTime"
                            class="hover:opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g transform="translate(-460.142 -365.142)"><rect width="28" height="28" rx="4" transform="translate(460.142 365.142)" fill="#b5b1b1"/><rect width="16.337" height="2.389" transform="translate(465.974 378.384)" fill="#fff"/><rect width="16.337" height="2.389" transform="translate(475.337 371.376) rotate(90)" fill="#fff"/></g></svg>
                            </button>
                            <!-- /plush time session setting -->
                            <div class="flex items-center relative">
                                <svg
                                @click="changeStateSettingTimerWork(true)"
                                :class="{'hidden': getTimer.setting.work}"
                                 xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute -left-3" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                <h1 class="text-xl font-Nunito font-bold text-center">
                                    <span 
                                    :class="{'hidden': !getTimer.setting.work}"
                                    class="flex  flex-col justify-center">
                                        <span class="text-base">{{getTimer.work.minutesFix}}</span>
                                        <span class="text-xs">Minute</span>
                                    </span>

                                    <span 
                                    :class="{'hidden': getTimer.setting.work}"
                                    class="flex  flex-col justify-center">
                                        <span class="text-base">{{getTimer.work.secondsFix}}</span>
                                        <span class="text-xs">Second</span>
                                    </span>

                                </h1>
                                <svg 
                                @click="changeStateSettingTimerWork(false)"
                                :class="{'hidden': !getTimer.setting.work}"
                                xmlns="http://www.w3.org/2000/svg" class="transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-100 absolute -right-3" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                            </div>
                            <!-- minus time session setting -->
                            <button 
                            @click="decrementWorkTime"
                            class="hover:opacity-60">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><g transform="translate(-460.142 -365.142)"><rect width="28" height="28" rx="4" transform="translate(460.142 365.142)" fill="#b5b1b1"/><rect width="16.337" height="2.389" transform="translate(465.974 378.384)" fill="#fff"/></g></svg>
                            </button>
                            <!-- /minus time session setting -->
                        </div>
                        <!-- /time session setting -->

                    </div>
                    
                    <div class="flex gap-4 mt-8">
                        <!-- start -->
                        <button @click="start" class="btn-start">
                            <span :style="pomodoroStyle.color_picker.pomodoro.btn_start.bg" class="px-4 py-2 font-Nunito text-gray-50 bg-opacity-100 rounded-lg hover:bg-opacity-70">{{handleTitleButtonStart()}}</span>
                        </button>
                        <!-- /start -->

                        <!-- Reset -->
                        <button :disabled="getStatus == 'running'" @click="reset" class="btn-reset">
                            <span :style="pomodoroStyle.color_picker.pomodoro.btn_reset.bg" class="px-4 py-2 font-Nunito text-gray-200 bg-opacity-100 rounded-lg hover:bg-opacity-70">{{handleTitleButtonReset()}}</span>
                        </button>
                        <!-- /Reset -->
                    </div>
                </div>
                <!-- /timer circle -->
            </div>
            <!-- /task content -->
        </div>
        <!-- /content 3 -->
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'


export default {
    name: 'content3',
    data(){
        return {
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
            listTask: [],
            status: "stop",
            audio : new Audio(require("../../assets/audio/audio-1.wav")),
        }
    },
    computed: {
        ...mapGetters({
            pomodoroStyle: 'pomodoro/pomodoroStyle',
            getModeWriteSection: 'pomodoro/getModeWriteSection',
            getModeWriteSectionMotivation: 'pomodoro/getModeWriteSectionMotivation',
            getTitleSection: 'pomodoro/getTitleSection',
            getTitleSectionMotivation: 'pomodoro/getTitleSectionMotivation',
            settingPomodoroUserState: 'pomodoro/settingPomodoroUserState',
            getTimer: 'pomodoro/getTimer',
            getStatus: 'pomodoro/getStatus',
            getActiveSoundIndex: 'pomodoro/getActiveSoundIndex',
            getCurrentTask: 'taskChoices/getCurrentTask',
            getTitleSectionContent1: 'projects/getTitleSection',
            getTitleSectionContent2: 'important/getTitleSection',
        }),
        secondsShown: function() {
            if (!this.getTimer.breakOrWork) {
                if(this.getTimer.break.seconds > 0){
                    if(this.getTimer.break.seconds < 10) {
                        return "0" + parseInt(this.getTimer.break.seconds, 10)
                    }
                }else{
                    return "00"
                }
                return this.getTimer.break.seconds
            }else{
                if(this.getTimer.work.seconds > 0){
                    if(this.getTimer.work.seconds < 10) {
                        return "0" + parseInt(this.getTimer.work.seconds, 10)
                    }
                }else{
                    return "00"
                }
                return this.getTimer.work.seconds
            }
        },
        minutesShown: function(){
            if (!this.getTimer.breakOrWork) {
                if(this.getTimer.break.minutes > 0){
                    if(this.getTimer.break.minutes < 10) {
                        return "0" + parseInt(this.getTimer.break.minutes, 10);
                    }
                }else{
                    return "00"
                }
                return this.getTimer.break.minutes;
            } else {
                if(this.getTimer.work.minutes > 0){
                    if(this.getTimer.work.minutes < 10) {
                        return "0" + parseInt(this.getTimer.work.minutes, 10);
                    }
                }else{
                    return "00"
                }
                return this.getTimer.work.minutes;
            }
        },
        getAudioActive: function(){
            let sound = this.settingPomodoroUserState.sound_picker
            return sound.list[sound.activeSoundIndex]
        }
    },
    watch: {
        getTitleSection(data){
            this.section.header.title = data
        },
        getTitleSectionMotivation(data){
            this.section.motivation.title = data
        },
        getStatus(data){
            if(data == "stop" && this.status == "running"){
                this.ringingAlarm()
                this.status = "stop"
                if (this.getCurrentTask.data != undefined) {
                    this.$swal({
                        showConfirmButton: true,
                        icon: 'question',
                        text: 'The current task is complete, would you like to add it to the complete list',
                        showDenyButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: 'No',
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.stopRingingAlarm()
                            this.$swal.fire({
                                icon: 'success',
                                text: 'Success add the last task to the complete list'
                            })
                            if (this.getCurrentTask.content == this.getTitleSectionContent1.toLowerCase()) {
                                this.setContentDataCompletedContent1(this.getCurrentTask.data.id_editorjs, true)
                                this.setCurrentTask({})
                                this.setIdTaskSelected(-1)
                            }else if (this.getCurrentTask.content == this.getTitleSectionContent2.toLowerCase()){
                                this.setContentDataCompletedContent2(this.getCurrentTask.data.id_editorjs, true)
                                this.setCurrentTask({})
                                this.setIdTaskSelected(-1)
                            }
                        }else if(result.isDenied){
                            this.stopRingingAlarm()
                        }
                    })
                } else {
                    this.$swal.fire({
                        icon: 'success',
                        text: 'Pomodoro is complete'
                    }).then(result => {
                        if (result.isConfirmed) {
                            this.stopRingingAlarm()
                        }
                    })
                }
                
            }else if(data == "running" && this.status == "stop"){
                this.status = "running"
            }
        },
        getActiveSoundIndex(data){
            let sound = this.settingPomodoroUserState.sound_picker.list
            // console.log(sound[data], data);
            this.audio = new Audio(require(`../../assets/audio/${sound[data]}`))
        }
    },
    methods: {
        ...mapMutations({
            setTitleSection: 'pomodoro/setTitleSection',
            setTitleSectionMotivation: 'pomodoro/setTitleSectionMotivation',
            setModeWriteSection: 'pomodoro/setModeWriteSection',
            setModeWriteSectionMotivation: 'pomodoro/setModeWriteSectionMotivation',
            toggleSettingPomodoro: 'pomodoro/toggleSettingPomodoro',
            toggleSettingPomodoroFolder: 'pomodoro/toggleSettingPomodoroFolder',
            toggleSettingBorderPomodoro: 'pomodoro/toggleSettingBorderPomodoro',
            toggleTaskFolderSettingPomodoro: 'pomodoro/toggleTaskFolderSettingPomodoro',
            toggleAlarmSettingPomodoro: 'pomodoro/toggleAlarmSettingPomodoro',
            toggleAudioChange: 'pomodoro/toggleAudioChange',
            backToSettingPreferences: 'pomodoro/backToSettingPreferences',
            setColorState: 'pomodoro/setColorState',
            changeStateSettingTimerWork: 'pomodoro/changeStateSettingTimerWork',
            changeStateSettingTimerBreak: 'pomodoro/changeStateSettingTimerBreak',
            incrementWorkTime: 'pomodoro/incrementWorkTime',
            decrementWorkTime: 'pomodoro/decrementWorkTime',
            incrementBreakTime: 'pomodoro/incrementBreakTime',
            decrementBreakTime: 'pomodoro/decrementBreakTime',
            resetVariablesWork: 'pomodoro/resetVariablesWork',
            resetVariablesBreak: 'pomodoro/resetVariablesBreak',
            reset: 'pomodoro/reset',
            changeSound: "pomodoro/changeSound",
            toggleMuteAlarm: "pomodoro/toggleMuteAlarm",
            toggleTaskChoiceContainer: "taskChoices/toggleTaskChoiceContainer",
            setCurrentTask: "taskChoices/setCurrentTask",
            setIdTaskSelected: "taskChoices/setIdTaskSelected",
        }),
        ...mapActions({
            start: 'pomodoro/start',
            setContentDataCompletedContent1: "projects/setContentDataCompleted",
            setContentDataCompletedContent2: "important/setContentDataCompleted",
        }),
        hiddeColorPicker(){
            this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false,
            this.settingPomodoroUserState.color_picker.pomodoro.text_color = false,
            this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false,
            this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
            this.settingPomodoroUserState.color_picker.tasks = false
            this.settingPomodoroUserState.color_picker.border = false
            this.settingPomodoroUserState.sound_picker.state = false
        },
        toggleColorPicker(content, s){

            if (content == 'pomodoro_setting') {

                if (s == 'color_timer') {
                    this.settingPomodoroUserState.color_picker.pomodoro.color_timer = !this.settingPomodoroUserState.color_picker.pomodoro.color_timer
                    this.settingPomodoroUserState.color_picker.pomodoro.text_color = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
                    this.settingPomodoroUserState.color_picker.tasks = false
                    this.settingPomodoroUserState.color_picker.border = false
                } else if (s == 'text_color') {
                    this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false
                    this.settingPomodoroUserState.color_picker.pomodoro.text_color = !this.settingPomodoroUserState.color_picker.pomodoro.text_color
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
                    this.settingPomodoroUserState.color_picker.tasks = false
                    this.settingPomodoroUserState.color_picker.border = false
                } else if (s == 'btn_start') {
                    this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false
                    this.settingPomodoroUserState.color_picker.pomodoro.text_color = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_start = !this.settingPomodoroUserState.color_picker.pomodoro.btn_start
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
                    this.settingPomodoroUserState.color_picker.tasks = false
                    this.settingPomodoroUserState.color_picker.border = false
                } else if (s == 'btn_reset') {
                    this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false
                    this.settingPomodoroUserState.color_picker.pomodoro.text_color = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false
                    this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = !this.settingPomodoroUserState.color_picker.pomodoro.btn_reset
                    this.settingPomodoroUserState.color_picker.tasks = false
                    this.settingPomodoroUserState.color_picker.border = false
                }

            }else if(content == 'tasks_setting') {
                this.settingPomodoroUserState.color_picker.tasks = !this.settingPomodoroUserState.color_picker.tasks
                this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false
                this.settingPomodoroUserState.color_picker.pomodoro.text_color = false
                this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false
                this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
                this.settingPomodoroUserState.color_picker.border = false
            }else if(content == 'border_setting') {
                this.settingPomodoroUserState.color_picker.border = !this.settingPomodoroUserState.color_picker.border
                this.settingPomodoroUserState.color_picker.pomodoro.color_timer = false
                this.settingPomodoroUserState.color_picker.pomodoro.text_color = false
                this.settingPomodoroUserState.color_picker.pomodoro.btn_start = false
                this.settingPomodoroUserState.color_picker.pomodoro.btn_reset = false
                this.settingPomodoroUserState.color_picker.tasks = false
            }

        },
        getStateSettingTitle(){
            let state = this.settingPomodoroUserState
            if (state.tasks) {
                return 'Task Folder Setting'
            }else if(state.border){
                return 'Border Setting'
            }else if(state.pomodoro){
                return 'Pomodoro Setting'
            }else if(state.alarm){
                return 'Alarm Setting'
            }else {
                return 'Setting Preference'   
            }
        },
        getStateCpTitle(){
            if (this.settingPomodoroUserState.color_picker.pomodoro.color_timer) {
                return 'Color Timer'
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.text_color) {
                return 'Text Color'
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.btn_start) {
                return 'Color Button Start'
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.btn_reset) {
                return 'Color Button Reset'
            }else if (this.settingPomodoroUserState.color_picker.border) {
                return 'Border Color'
            }else if (this.settingPomodoroUserState.color_picker.tasks) {
                return 'Tasks Folder Color'
            }
        },
        setColor(color){
            // cek what state is active
            if (this.settingPomodoroUserState.color_picker.pomodoro.color_timer) {
                this.setColorState({'color':color, 'state': 'color_timer'})
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.text_color) {
                this.setColorState({'color':color, 'state': 'text_color'})
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.btn_start) {
                this.setColorState({'color':color, 'state': 'btn_start'})
            }else if (this.settingPomodoroUserState.color_picker.pomodoro.btn_reset) {
                this.setColorState({'color':color, 'state': 'btn_reset'})
            }else if (this.settingPomodoroUserState.color_picker.border) {
                this.setColorState({'color':color, 'state': 'border_color'})
            }else if (this.settingPomodoroUserState.color_picker.tasks) {
                this.setColorState({'color':color, 'state': 'task_color'})
            }
        },
        getOpacity(obj){
            console.log(obj);
            var c;
            if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(obj.backgroundColor)){
                c= obj.backgroundColor.substring(1).split('');
                if(c.length== 3){
                    c= [c[0], c[0], c[1], c[1], c[2], c[2]];
                }
                c= '0x'+c.join('');
                return {
                            backgroundColor: 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)',
                            color: obj.backgroundColor,
                        }
            }
            throw new Error('Bad Hex');
        },
        handleTitleButtonStart(){
            let timer = this.getTimer
            // console.log("work: "+timer.work.started,"break: "+ timer.breakOrWork);
            if(timer.status == "stop"){
                return 'Start'
            }else if (timer.status == "running") {
                return 'Pause'
            }else if(timer.status == "pause"){
                return 'Continue'
            }
        },
        handleTitleButtonReset(){
            let timer = this.getTimer
            if(timer.status == "stop"){
                return 'Reset'
            }else if (timer.status == "running") {
                return 'Reset'
            }else if(timer.status == "pause"){
                return 'Stop'
            }
        },
        ringingAlarm(){
            let sound = this.settingPomodoroUserState.sound_picker
            if (sound.active){
                this.audio.play()
                this.audio.loop = true
            }
        },
        stopRingingAlarm(){
            let sound = this.settingPomodoroUserState.sound_picker
            if (sound.active){
                this.audio.pause()
                this.audio.currentTime = 0
            }
        }
    },
    created(){
        this.section.header.title = this.getTitleSection
        this.section.motivation.title = this.getTitleSectionMotivation
    }
}
</script>

<style scoped>
.top-cp-color-timer, .top-cp-tasks-folder, .top-cp-border-color {
    top: 7.9rem;
}

.top-cp-text-color {
    top: 10.2rem;
}

.top-cp-btn-start {
    top: 12.4rem;
}

.top-cp-btn-reset {
    top: 14.7rem;
}

.top-sound-picker {
    top: 7.9rem;
}

.btn-start:hover, .btn-reset:hover {
    opacity: .75;
}

.hoverthis:hover{
    opacity: .7;
}
</style>