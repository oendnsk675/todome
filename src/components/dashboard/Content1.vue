<template>
        <!-- content 1 -->
        <div class="lg:w-4/12 h-full relative">

            <!-- menu setting -->
            <div @click.stop="hiddeColorPicker()" :class="{'hidden': !settingProjectUserState.menu}" class="w-3/5 py-3 px-6 bg-gray-400 absolute lg:top-10 md:top-9 lg:right-0 md:right-4 rounded-tl-lg rounded-bl-lg rounded-br-lg z-40">
                <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">Setting Preference</h1>
                <ul class="mt-5 flex flex-col gap-4">
                    <li class="flex items-center justify-between">
                        <span class="text-gray-100 font-medium">Background color</span>
                        <button :style="projectStyle.color_picker.bg" 
                        @click.stop="toggleColorPicker('projects', 'bg')" class="w-8 h-8  rounded-full hover:opacity-80"></button>
                    </li>
                    <li class="flex items-center justify-between">
                        <span class="text-gray-100 font-medium">Border color</span>
                        <button :style="projectStyle.color_picker.border" 
                        @click.stop="toggleColorPicker('projects', 'border')" class="w-8 h-8 bg-red-400 rounded-full hover:opacity-80"></button>
                    </li>
                    <li class="flex items-center justify-between">
                        <span class="text-gray-100 font-medium">Limit task</span>
                        <div class="flex gap-1 items-center">
                            <!-- prev -->
                            <button :disabled="getTasks.limit == 0" :class="{'opacity-40': getTasks.limit == 0}" class="transition-all duration-300">
                                <span @click="decrementLimitTask()" class="flex items-center justify-center cursor-pointer hover:opacity-70  h-6 text-gray-800 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="transform -rotate-90" fill="white" width="9" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/></svg>
                                </span>
                            </button>
                            <!-- /prev -->

                            <!-- limit task number -->
                            <span class="text-gray-50 font-semibold">{{getTasks.limit}}</span>
                            <!-- /limit task number -->
                            
                            <!-- next -->
                            <button class="transition-all duration-300">
                                <span @click="incrementLimitTask()" class="flex items-center justify-center cursor-pointer hover:opacity-70  h-6 text-gray-800 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-90" fill="white" width="9" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/></svg>
                                </span>
                            </button>
                            <!-- /prev -->
                        </div>
                    </li>
                </ul>
            </div>
            <!-- menu setting -->

            <!-- menu setting background color picker -->
            <div @click.stop :class="{'hidden': !settingProjectUserState.background}" class="w-3/5 py-3 px-4 bg-gray-900 bg-opacity-80 absolute lg:top-36 md:top-32 lg:right-7 md:right-11  rounded-tl-lg rounded-bl-lg rounded-br-lg z-40">
                <div class="flex flex-col gap-4">
                    <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">Color Picker</h1>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgProjects('transparent')" class="w-8 h-8 border rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#676FA3')" class="w-8 h-8 bg-color_custom2 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#CDDEFF')" class="w-8 h-8 bg-color_custom3 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#DB6B97')" class="w-8 h-8 bg-color_custom4 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#20ABB5')" class="w-8 h-8 bg-color_custom5 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgProjects('#F2FFE9')" class="w-8 h-8 bg-color_custom6 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#557C55')" class="w-8 h-8 bg-color_custom7 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#146356')" class="w-8 h-8 bg-color_custom8 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#30475E')" class="w-8 h-8 bg-color_custom9 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#121212')" class="w-8 h-8 bg-color_custom10 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBgProjects('#C84B31')" class="w-8 h-8 bg-color_custom11 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#F2789F')" class="w-8 h-8 bg-color_custom12 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#97BFB4')" class="w-8 h-8 bg-color_custom13 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#4C0070')" class="w-8 h-8 bg-color_custom14 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBgProjects('#B42DC9')" class="w-8 h-8 bg-color_custom15 rounded-full hover:opacity-80"></button>
                    </div>
                </div>
            </div>
            <!-- menu setting background color picker -->

            <!-- menu setting border color picker -->
            <div @click.stop :class="{'hidden': !settingProjectUserState.border}" class="w-3/5 py-3 px-4 bg-gray-900 bg-opacity-80 absolute lg:top-48 md:top-44 lg:right-7 md:right-11 right-7 rounded-tl-lg rounded-bl-lg rounded-br-lg z-40">
                <div class="flex flex-col gap-4">
                    <h1 class="text-lg text-center text-gray-100 font-Nunito font-semibold">Color Picker</h1>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBorderProjects('transparent')" class="w-8 h-8 border rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#676FA3')" class="w-8 h-8 bg-color_custom2 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#CDDEFF')" class="w-8 h-8 bg-color_custom3 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#DB6B97')" class="w-8 h-8 bg-color_custom4 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#20ABB5')" class="w-8 h-8 bg-color_custom5 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBorderProjects('#F2FFE9')" class="w-8 h-8 bg-color_custom6 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#557C55')" class="w-8 h-8 bg-color_custom7 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#146356')" class="w-8 h-8 bg-color_custom8 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#30475E')" class="w-8 h-8 bg-color_custom9 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#121212')" class="w-8 h-8 bg-color_custom10 rounded-full hover:opacity-80"></button>
                    </div>
                    <div class="flex items-center justify-around">
                        <button @click.stop="setBorderProjects('#C84B31')" class="w-8 h-8 bg-color_custom11 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#F2789F')" class="w-8 h-8 bg-color_custom12 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#97BFB4')" class="w-8 h-8 bg-color_custom13 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#4C0070')" class="w-8 h-8 bg-color_custom14 rounded-full hover:opacity-80"></button>
                        <button @click.stop="setBorderProjects('#B42DC9')" class="w-8 h-8 bg-color_custom15 rounded-full hover:opacity-80"></button>
                    </div>
                </div>
            </div>
            <!-- menu setting border color picker -->
            
            <!-- header content -->
            <div  class="w-full md:px-4">
                <div class="flex justify-between items-center">
                    <div @click.stop class="flex gap-4 items-center">
                        <div class="relative">
                            <h1 class="font-Nunito font-bold text-2xl dark:text-gray-50">{{section.title}}</h1>
                            <input @change="setTitleSection(section.title)" :style="this.projectStyle.state_border" type="text" 
                            :class="{
                                'bg-gray-100 z-20 opacity-100' : getModeWriteSection,
                                'bg-gray-100 -z-20 opacity-0' : !getModeWriteSection
                                }" class="absolute w-full outline-none h-full transition-all duration-500 top-0 left-0 font-Nunito font-black text-2xl border-b-2 " v-model="section.title">
                        </div>
                        <svg @click.stop="setModeWriteSection('nofull')" class="opacity-40 hover:opacity-100 cursor-pointer fill-current dark:text-gray-50" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
                    </div>
                    <div class="flex gap-3">
                        <button @click.stop="toggleTextArea('projects')" class="hover:opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="plush" transform="translate(-461 -365)">
                                <circle id="Ellipse_2" data-name="Ellipse 2" cx="10" cy="10" r="10" transform="translate(461 365)" fill="#b5b1b1"/>
                                <rect id="Rectangle_1" data-name="Rectangle 1" width="12" height="2" transform="translate(465 374.5)" fill="#fff"/>
                                <rect id="Rectangle_2" data-name="Rectangle 2" width="12" height="2" transform="translate(472 369.5) rotate(90)" fill="#fff"/>
                            </g>
                            </svg>
                        </button>
                        <button @click.stop="toggleSettingProject()" class="hover:opacity-70 transform transition duration-300 hover:rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M19.555,8.3l-2.34-.574a7.547,7.547,0,0,0-.492-1.2l1.2-1.992a.583.583,0,0,0-.082-.715L16.172,2.164a.583.583,0,0,0-.715-.082l-1.992,1.2a7.547,7.547,0,0,0-1.2-.492L11.707.445A.6.6,0,0,0,11.133,0H8.789a.6.6,0,0,0-.574.445l-.562,2.34a7.547,7.547,0,0,0-1.2.492l-1.992-1.2a.583.583,0,0,0-.715.082L2.086,3.828A.583.583,0,0,0,2,4.543L3.2,6.535a7.547,7.547,0,0,0-.492,1.2L.445,8.3A.578.578,0,0,0,0,8.867v2.344a.578.578,0,0,0,.445.563l2.262.574a7.547,7.547,0,0,0,.492,1.2L2,15.535a.583.583,0,0,0,.082.715L3.75,17.914A.583.583,0,0,0,4.465,18l1.992-1.2a7.547,7.547,0,0,0,1.2.492l.562,2.262A.6.6,0,0,0,8.789,20h2.344a.6.6,0,0,0,.574-.445l.563-2.262a7.547,7.547,0,0,0,1.2-.492L15.457,18a.583.583,0,0,0,.715-.082l1.664-1.664a.583.583,0,0,0,.082-.715l-1.2-1.992a7.547,7.547,0,0,0,.492-1.2l2.34-.574A.578.578,0,0,0,20,11.211V8.867A.578.578,0,0,0,19.555,8.3ZM9.961,12.969a2.93,2.93,0,1,1,2.93-2.93A2.931,2.931,0,0,1,9.961,12.969Z" fill="#b5b1b1"/></svg>
                        </button>
                    </div>
                </div>
                <!-- category content -->
                <div class="flex items-center gap-3 my-4">
                    <button @click="setState(true)" :style="this.projectStyle.state_border" :class="{'border-b-2': getState}" class=" font-Nunito font-semibold text-sm hover:opacity-60 dark:text-gray-50">Progress</button>
                    <button @click="setState(false)" :style="this.projectStyle.state_border" :class="{'border-b-2': !getState}" class="font-Nunito font-semibold text-sm hover:opacity-60 dark:text-gray-50">Complete</button>
                </div>
                <!-- /category content -->
            </div>
            <!-- /header content -->
            
            

            <!-- task content -->
            
            <div id="taskContent" :style="projectStyle.default_color" class="border-2 lg:rounded-2xl md:rounded-lg p-2 w-full overflow-y-scroll md:h-68% lg:h-77%">

                <!-- card for tasks uncomplet-->
                <div v-if="getState">
                    <div v-for="task in getTasks.data" :key="task.id">
                        <div :style="{'background-color' : getColorCard(task.id_editorjs), color: 'white'}" 
                        class="relative w-full flex gap-3 mb-3 justify-between bg-opacity-30 items-center rounded-2xl cursor-pointer transition-all duration-300 hover:bg-opacity-60 overflow-hidden"
                        >

                            <div :class="{
                                'opacity-100 z-30' : task.timerCount.timerEnabled,
                                'hidden': !task.timerCount.timerEnabled
                                }" class="h-full w-full absolute transition-all duration-700 flex items-center justify-center flex-col left-0 top-0 bg-gray-700 bg-opacity-70">
                                <span class="lg:text-lg md:text-sm font-Nunito font-semibold mt-1">This tasks will be completed</span>
                                <!-- btn cancel timer -->
                                <input id="cancelCountDown" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded-full">
                                <label for="cancelCountDown" class="cancelCountDown">
                                    <div @click="setFalseContentTimerEnable(task.id_editorjs)" class="border border-white rounded-full cursor-pointer flex items-center justify-center hover:opacity-70 countainer-timer-count">
                                        <div class="transform transition-all duration-300 ease-out opacity-0 btn-cancel">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>
                                        </div>
                                        <span class="absolute timer-count">{{task.timerCount.time}}</span>
                                    </div>
                                </label>
                                <!-- /btn cancel timer -->
                            </div>


                            <div @click.stop="toggleTextAreaSpecific('projects', task)" class="flex gap-3 items-center w-full lg:p-4 md:py-2 md:px-4">
                                <div>
                                    <img class="w-10" :src="cover(task.icon)" alt="" srcset="">
                                </div>
                                <div>
                                    <h1 class=" font-extrabold text-lg font-Nunito">{{task.title}}</h1>
                                    <h1 class=" font-thin font-Nunito">{{parserText(task.body)}}</h1>
                                </div>
                            </div>
                            <div class="absolute lg:top-4 md:top-6 right-4">
                                <!-- check done -->
                                <input id="checkListCompleted" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded-full">
                                <label for="checkListCompleted" class="checkListCompleted flex lg:flex-col lg:gap-2 md:gap-3 items-center">
                                    <div @click="setContentDataCompleted(task.id_editorjs)" class="border border-white rounded-full cursor-pointer hover:opacity-70">
                                        <svg 
                                        :class="{'scale-100 rotate-0 z-30': task.isComplete, 'scale-0 rotate-180': !task.isComplete}" xmlns="http://www.w3.org/2000/svg" class="transform transition-all duration-300 ease-out" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                                    </div>

                                    <div @click="deleteContentData({id_editorjs:task.id_editorjs, cond:'uncomplete'})" class="cursor-pointer hover:opacity-70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.833" height="19" viewBox="0 0 15.833 19"><path d="M15.458,19H4.375a1.584,1.584,0,0,1-1.583-1.583V4.75h14.25V17.417A1.584,1.584,0,0,1,15.458,19M8.333,7.917a.792.792,0,1,0-1.583,0v7.125a.792.792,0,1,0,1.583,0Zm4.75,0a.792.792,0,1,0-1.583,0v7.125a.792.792,0,1,0,1.583,0Zm4.75-3.958H2V2.375H6.75V1.188A1.189,1.189,0,0,1,7.938,0H11.9a1.189,1.189,0,0,1,1.188,1.188V2.375h4.75Zm-9.5-1.583H11.5V1.583H8.333Z" transform="translate(-2)" fill="white" fill-rule="white"/></svg>
                                    </div>
                                </label>
                                <!-- /check done -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card for tasks uncomplet-->

                <!-- card for tasks complete-->
                <div v-if="!getState">
                    <div v-for="task in getContentDataCompleted.data" :key="task.id">
                        <div :style="{'background-color' : getColorCard(task.id_editorjs), color: 'white'}" 
                        class="relative w-full flex gap-3 mb-3 justify-between bg-opacity-30 items-center rounded-2xl cursor-pointer transition-all duration-300 hover:bg-opacity-60 overflow-hidden"
                        >
                            <div @click.stop="toggleTextAreaSpecific('projects', task)" class="flex gap-3 items-center w-full lg:p-4 md:py-2 md:px-4">
                                <div>
                                    <img width="35px" :src="cover(task.icon)" alt="" srcset="">
                                </div>
                                <div>
                                    <h1 class=" font-extrabold text-lg font-Nunito">{{task.title}}</h1>
                                    <h1 class=" font-thin font-Nunito">{{parserText(task.body)}}</h1>
                                </div>
                            </div>

                            <div class="absolute top-6 right-4">
                                <!-- check done -->
                                <input id="checkListCompleted" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600 rounded-full">
                                <label for="checkListCompleted" class="checkListCompleted flex lg:flex-col gap-2 items-center">
                                    <div @click="setRedoContentDataCompleted(task.id_editorjs)" class="border border-white rounded-full cursor-pointer hover:opacity-70">
                                        <svg :class="{'scale-100 rotate-0 z-30': task.isComplete, 'scale-0 rotate-180': !task.isComplete}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 23.27 23.27"><path d="M9.5,0A9.5,9.5,0,1,0,19,9.5,9.511,9.511,0,0,0,9.5,0ZM3.178,6.6h0A7.149,7.149,0,1,1,11.8,16.578l-.978-2.688a4.352,4.352,0,0,0,3.044-3.922A4.29,4.29,0,0,0,5.732,7.884l1.6.807L3.143,10.216,1.526,5.771,3.177,6.6Z" transform="matrix(-0.966, -0.259, 0.259, -0.966, 18.353, 23.27)" fill="white"/></svg>
                                    </div>

                                    <div @click="deleteContentData({id_editorjs:task.id_editorjs, cond:'complete'})" class="cursor-pointer hover:opacity-70">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.833" height="19" viewBox="0 0 15.833 19"><path d="M15.458,19H4.375a1.584,1.584,0,0,1-1.583-1.583V4.75h14.25V17.417A1.584,1.584,0,0,1,15.458,19M8.333,7.917a.792.792,0,1,0-1.583,0v7.125a.792.792,0,1,0,1.583,0Zm4.75,0a.792.792,0,1,0-1.583,0v7.125a.792.792,0,1,0,1.583,0Zm4.75-3.958H2V2.375H6.75V1.188A1.189,1.189,0,0,1,7.938,0H11.9a1.189,1.189,0,0,1,1.188,1.188V2.375h4.75Zm-9.5-1.583H11.5V1.583H8.333Z" transform="translate(-2)" fill="white" fill-rule="white"/></svg>
                                    </div>
                                </label>
                                <!-- /check done -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card for tasks complet-->

            </div>
            <!-- /task content -->

            <!-- pagination -->
            <div class="flex justify-center">
                <div class="flex items-center z-30 justify-center lg:mt-2 md:mt-2 gap-2">
                    <!-- prev -->
                    <button :disabled="!decrement.cond" :class="{'opacity-40': !decrement.cond}" class="transition-all duration-300">
                        <span @click="goToTaskPaginate({index:decrement.active, mode:decrement.mode})" class="flex items-center justify-center w-6 cursor-pointer hover:opacity-70  h-6 mr-3 bg-black text-white rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transform -rotate-90" fill="white" width="9" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/></svg>
                        </span>
                    </button>
                    <!-- /prev -->

                    
                    <!-- number page -->
                    <span v-for="page, index in getTotalPageTaks" :key="index">
                        <span @click="goToTaskPaginate({index:page-1, mode:getState})" :class="{
                            'bg-black text-white': checkActivePagination(page),
                            'text-black': !checkActivePagination(page)
                            }" class="flex cursor-pointer transition-all duration-300 hover:opacity-70 items-center justify-center w-6 h-6 border-2 border-black rounded-sm">{{page}}</span>
                    </span>
                    <!-- /number page -->

                    
                    <!-- next -->
                    <button @click="goToTaskPaginate({index:increment.active, mode:increment.mode})" :disabled="increment.cond == false" :class="{'opacity-40': increment.cond == false}" class="transition-all duration-300">
                        <span class="flex items-center justify-center w-6 h-6 ml-3 cursor-pointer hover:opacity-70  bg-black text-white rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-90" fill="white" width="9" viewBox="0 0 24 24"><path d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"/></svg>
                        </span>
                    </button>
                    <!-- /next -->
                </div>
            </div>
            <!-- /pagination -->
        </div>
        <!-- /content 1 -->
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex"

export default {
    name: 'content1',
    data(){
        return {
            section: {
                state: false,
                title: "Projects",
            } 
        }
    },
    computed: {
        ...mapGetters({
          projectStyle:'projects/projectStyle', 
          settingProjectUserState: 'projects/settingProjectUserState',
          getTasks: 'projects/getTasks',
          getContentDataCompleted: 'projects/getContentDataCompleted',
          getDataColorCard: 'projects/getDataColorCard',
          getState: 'projects/getState',
          getModeWriteSection: 'projects/getModeWriteSection',
          getTitleSection: 'projects/getTitleSection',
        }),
        getTotalPageTaks(){
            if (this.getState) {
                return this.getTasks.totalPage
            }else{
                return this.getContentDataCompleted.totalPage
            }
        },
        increment(){
            // alert()
            if (this.getState) {
                let active = this.getTasks.active
                // console.log(active, this.getTasks.totalPage, active < this.getTasks.totalPage);
                if (active < this.getTasks.totalPage -1) {
                    // console.log('yeah');
                    active++
                    return {active, cond: true, mode: true}
                }
                return {active: active, cond: false, mode: true}
            } else {
                let active = this.getContentDataCompleted.active
                // console.log(active, this.getContentDataCompleted.totalPage, active < this.getContentDataCompleted.totalPage);
                if (active < this.getContentDataCompleted.totalPage -1) {
                    // console.log('yeah');
                    active++
                    return {active, cond: true, mode: false}
                }
                return {active: active, cond: false, mode: false}
            }
        },

        decrement(){
            if (this.getState) {
                let active = this.getTasks.active
                // console.log(active, 0, active > 0);
                if (active > 0) {
                    active--
                    return {active, cond: true, mode: true}
                }
                return {active: active, cond: false, mode: true}
            } else {
                let active = this.getContentDataCompleted.active
                // console.log(active, 0, active > 0);
                if (active > 0) {
                    active--
                    return {active, cond: true, mode: false}
                }
                return {active: active, cond: false, mode: false}
            }
        },
    },
    watch: {
        getTitleSection(data){
            this.section.title = data
        }
    },
    methods: {
        ...mapActions({
            setContentDataCompleted: 'projects/setContentDataCompleted',
            setRedoContentDataCompleted: 'projects/setRedoContentDataCompleted',
            deleteContentData: 'projects/deleteContentData',
            setTitleSection: 'projects/setTitleSection',
        }),
        ...mapMutations({
            setBgProjects: 'projects/setBgProjects', 
            setBorderProjects: 'projects/setBorderProjects', 
            toggleSettingProject: 'projects/toggleSettingProject',
            setDataEditor: 'projects/setDataEditor',
            setFalseContentTimerEnable: 'projects/setFalseContentTimerEnable',
            setState: 'projects/setState',
            setModeWriteSection: 'projects/setModeWriteSection',
            goToTaskPaginate: 'projects/goToTaskPaginate',
            incrementLimitTask: 'projects/incrementLimitTask',
            decrementLimitTask: 'projects/decrementLimitTask',
            toggleTextArea: 'textarea/toggleTextArea'
        }),
        checkActivePagination(page){
            if (this.getState) {
                if(this.getTasks.active+1 == page){
                    return true
                }else{
                    return false
                }
            }else{
                if(this.getContentDataCompleted.active+1 == page){
                    return true
                }else{
                    return false
                }
            }
        },
        toggleTextAreaSpecific(content, data){
            this.setDataEditor(data)
            this.toggleTextArea(content)
        },
        parserText(text){
            // console.log(typeof(text), 'ini text');
            let sprt
            if (typeof(text) != 'string') {
                text.forEach(element => {
                    // console.warn(element);
                    if (element.type == "paragraph") {
                        sprt = this.sparateBodyText(element.data.text)
                        console.info(sprt);
                        return sprt
                    }else{
                        sprt = '...'
                    }
                });
            }else{
                sprt = '...'
            }
            return sprt
            
        },
        getColorCard(id){
            let dataColor = this.getDataColorCard;
            let index = dataColor.findIndex(card => card.id === id)
            // console.log(index);
            if (~index) {
                return dataColor[index].color
            } 
        },
        toggleColorPicker(content, s){
            if (content == 'projects') {
                if (s == 'bg') {
                    this.settingProjectUserState.background = !this.settingProjectUserState.background,
                    this.settingProjectUserState.border = false
                }else{
                    this.settingProjectUserState.border = !this.settingProjectUserState.border,
                    this.settingProjectUserState.background = false
                }
            }
        },
        cover(url) {
            // console.log(`url: ${url}`);
            if (url !== ''){ // You can check any matching expression.
                try {
                    url = require('@/assets/icons/' + url)
                } catch (e) {
                    url = require('@/assets/icons/1.svg'); // I used a default image. 
                }
            }
            else
                url = require('@/assets/icons/1.svg'); // Default image. 
            return url;
        },
        hiddeColorPicker(){
            this.settingProjectUserState.background = false,
            this.settingProjectUserState.border = false
        },

        sparateBodyText(string){
            let limit = 20
            if (string.length > limit) {
                return string.substring(0, limit) + " ..."
            }
            return string
        }
    },
    created(){
        this.section.title = this.getTitleSection
    }
}
</script>

<style scoped>
#arrow {
    filter: invert(100%) sepia(19%) saturate(0%) hue-rotate(35deg) brightness(103%) contrast(103%);
}

/* Hide scrollbar for Chrome, Safari and Opera */
#taskContent::-webkit-scrollbar{
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#taskContent {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

#checkListCompleted, #cancelCountDown {
    display: none;
}

/* .btn-cancel:hover {
    position: relative;
    z-index: 32;
} */

.countainer-timer-count:hover .btn-cancel {
    opacity: 100%;
}

.countainer-timer-count:hover .timer-count {
    opacity: 0%;
}
</style>