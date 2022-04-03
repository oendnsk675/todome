<template>
    <div @click.stop 
        :class="{
          'invisible opacity-0' : !getStateTaskChoiceContainer,
          'opacity-100 transition-all duration-150 ease-out' : getStateTaskChoiceContainer
        }"
        id="contentText" class="w-9/12 md:w-full lg:h-full md:h-screen lg:rounded-2xl bg-gray-100 border border-gray-400 absolute z-50 overflow-y-scroll">
        <div class="h-full w-full relative py-6 lg:px-10 md:px-3">
            <svg  
              @click="backToListFolder"
              :class="{
                'hidden': getStateRootFolder
              }"
              xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 transition-all duration-300 fill-current cursor-pointer hover:opacity-75 hover:scale-125 text-gray-400 absolute lg:left-10 md:left-5 top-8 w-4" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
          <h1 class="text-center lg:text-2xl md:text-xl font-Nunito font-semibold">List Folder Tasks</h1>

          <!-- close -->
          <button @click="closeAllPopUp()" class="bg-gray-600 bg-opacity-25 hover:bg-opacity-50 absolute p-2 lg:top-0 md:top-2 md:right-2 lg:right-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-50" width="16" height="16" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          </button>
          <!-- close -->

          <hr class="h-0.5 bg-gray-300 mt-3">
          <!-- menu folder container tasks -->
          <div 
          :class="{'absolute -z-20 opacity-0': !getStateRootFolder}"
          class="w-full transition-all duration-300 ease-out bg-opacity-10 flex flex-wrap gap-6 mt-6">

            

            <!-- card folder task -->
            <div v-for="todo, id in getTodoList" :key="id">
              <div @click.stop="getDataTask(todo)" class="flex flex-col items-center cursor-pointer hover:opacity-60">
                <svg
                :class="{'text-yellow-700': id == 1, 'text-gray-400': todo != 'important',}"
                 xmlns="http://www.w3.org/2000/svg" class="lg:w-20 md:w-16 fill-current" viewBox="0 0 24 24"><path d="M24 7v15h-24v-20h6.938c1.812 3.188 2.281 5 6 5h11.062zm-10.891-2h10.891v-3h-14.604c1.39 2.574 1.63 3 3.713 3z"/>
                </svg>
                <span class="font-semibold text-sm text-gray-700">
                  {{todo}}
                </span>
              </div>
            </div>
              
          </div>
          <!-- /menu folder container tasks -->

          <!-- list detail task -->
          <div 
          :class="{'hidden': getStateRootFolder && listTask != undefined}"
          class="w-full bg-opacity-10 flex flex-wrap gap-6 mt-6">
            <table class="w-full">
              <tbody>
                <!-- bg-gray-200 -->
                <tr v-for="task in listTask" :key="task.id" @click="toggleTheTask(task.data.id_editorjs)"
                :class="{'bg-gray-300': task.isSelected}"
                class="border-b cursor-pointer hover:opacity-60 hover:bg-gray-200 border-gray-400" height="50px">
                  <td>
                    <h1 class="font-extrabold text-lg font-Nunito">{{task.data.title}}</h1>
                  </td>
                  <td width="60%">
                    <h1 class="font-thin font-Nunito">{{parserText(task.data.body)}}</h1>
                  </td>
                  <td width="15%">
                    <h1 class="font-thin font-Nunito">{{task.data.updated}}</h1>
                  </td>
                  <td>
                    <div class="border w-6 h-6 border-gray-600 rounded-full cursor-pointer hover:opacity-70 flex items-center justify-center">
                        <svg 
                          :class="{'scale-100 rotate-0 z-30': task.isSelected, 'scale-0 rotate-180': !task.isSelected}"
                          xmlns="http://www.w3.org/2000/svg" 
                          class="fill-current text-gray-600 transform transition-all duration-300 ease-out" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
          <!-- /list detail task -->

          <!-- alert folder empty -->
          <div
          :class="{
            'hidden': checkEmptyOrNot
          }"
          class="w-full mt-6">
            <h1 class="text-base font-Nunito font-medium text-center opacity-70">This folder is empty</h1>
          </div>
          <!-- alert folder empty -->
          
          
        </div>

    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
    name: 'task_choices',
    data: function () {
      return {
        listTask: []
      }
    },
    computed: {
      ...mapGetters({
        getStateTaskChoiceContainer: 'taskChoices/getStateTaskChoiceContainer',
        getStateRootFolder: 'taskChoices/getStateRootFolder',
        getTasksContent1: 'projects/getTasks',
        getTitleSectionContent1: 'projects/getTitleSection',
        getTasksContent2: 'important/getTasks',
        getTitleSectionContent2: 'important/getTitleSection',
        getTodoList: 'listTodo/getTodoList',
        getIdSelected: 'taskChoices/getIdSelected',
      }),

      
      checkEmptyOrNot(){
        if (this.getStateRootFolder) {
           return true
        } else {
          if (this.listTask.length == 0) {
            return false
          } else {
            return true
          }
        }
      },
    },
    methods: {
      ...mapMutations({
        toggleTaskChoiceContainer: "taskChoices/toggleTaskChoiceContainer",
        backToListFolder: "taskChoices/backToListFolder",
        changeStateFolder: "taskChoices/changeStateFolder",
        setIdTaskSelected: "taskChoices/setIdTaskSelected",
        setCurrentTask: "taskChoices/setCurrentTask",
        closeAllPopUp: 'taskChoices/closePopUp', 
      }),
      getDataTask(todo){
        this.changeStateFolder()
        // console.log(todo, this.getTitleSectionContent1.toLowerCase());
        if (todo.toLowerCase() == this.getTitleSectionContent1.toLowerCase()) {
          this.listTask = []
          if (this.getTasksContent1.data != undefined) {
            this.getTasksContent1.data.forEach((data) => {
                if (this.getIdSelected == data.id_editorjs) {
                    let d = {
                      data,
                      isSelected: true,
                      content: this.getTitleSectionContent1.toLowerCase(),
                    }
                    this.setCurrentTask(d)
                    this.listTask.unshift(d)
                  } else {
                    let d = {
                      data,
                      isSelected: false,
                      content: this.getTitleSectionContent1.toLowerCase(),
                    }
                    this.listTask.unshift(d)
                }
            })
          }
        }else if(todo.toLowerCase() == this.getTitleSectionContent2.toLowerCase()){
          this.listTask = []
          if (this.getTasksContent2.data != undefined) {
              this.getTasksContent2.data.forEach((data) => {
                  if (this.getIdSelected == data.id_editorjs) {
                      let d = {
                        data,
                        isSelected: true,
                        content: this.getTitleSectionContent2.toLowerCase(),
                      }
                      this.setCurrentTask(d)
                      this.listTask.unshift(d)
                    } else {
                      let d = {
                        data,
                        isSelected: false,
                        content: this.getTitleSectionContent2.toLowerCase(),
                      }
                      this.listTask.unshift(d)
                  }
              }) 
          }
        }
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
      sparateBodyText(string){
          let limit = 30
          if (string.length > limit) {
              return string.substring(0, limit) + " ..."
          }
          return string
      },
      toggleTheTask(index){
          
          let idx = this.listTask.findIndex(content => content.data.id_editorjs === index)
          
          let item = this.listTask[idx]
          this.setCurrentTask(item)
          
          if (item.isSelected) {
            this.setIdTaskSelected(-1)
            item.isSelected = !item.isSelected
            this.setCurrentTask({})
          } else {
            this.toast({
              title: 'Success selected task',
              icon: 'success',
              position: 'top-end',
              timer: 1500
            })
            this.setIdTaskSelected(index)
            this.listTask.forEach(data => {
              data.isSelected = false
            })
            item.isSelected = !item.isSelected
          }
      },
      toast(data){
            this.$swal({
                toast: true,
                position: data.position,
                showConfirmButton: false,
                timer: data.timer,
                timerProgressBar: true,
                icon: data.icon,
                title: data.title,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', this.$swal.stopTimer)
                  toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            });
      }
    }

}
</script>

<style>

</style>