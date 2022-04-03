<template>
  <div class="mt-8">
      <ul class="">
          <li class="focus:bg-gray-500">
              <router-link to="/detail-tasks/projects" class="flex justify-between p-5">
                <div class="flex gap-4 items-center">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"><g transform="translate(-719 -351)"><g transform="translate(719 351)" fill="none" stroke="#7c92e6" stroke-width="1.5"><rect width="20" height="21" rx="4" stroke="none"/><rect x="0.75" y="0.75" width="18.5" height="19.5" rx="3.25" fill="none"/></g><g transform="translate(-0.5 -0.5)"><line y2="13" transform="translate(724.5 355.5)" fill="none" stroke="#7c92e6" stroke-width="1.5"/><line y2="13" transform="translate(729.5 355.5)" fill="none" stroke="#7c92e6" stroke-width="1.5"/><line y2="13" transform="translate(734.5 355.5)" fill="none" stroke="#7c92e6" stroke-width="1.5"/></g></g></svg>
                        <span class="text-lg font-Nunito font-semibold text-gray-800 dark:text-gray-50">{{limitText(getTitleSectionProject)}}</span>
                </div>
                <span class="text-lg font-Nunito font-semibold text-gray-700 dark:text-gray-50">
                    <!-- count the task -->
                    {{getCountTaskProject}}
                    <!-- /count the task -->
                </span>
              </router-link>
          </li>

          <div class="w-full flex justify-center">
            <hr class="w-full h-0.2 bg-gray-600 opacity-40">
          </div>
          
          <li class="focus:bg-gray-500">
              <router-link to="/detail-tasks/my-day" class="flex justify-between p-5">
                <div class="flex gap-4 items-center">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.132" height="21.363" viewBox="0 0 23.132 21.363"><path d="M23.043,16.423,19.351,9.805a.7.7,0,0,0-.613-.36H4.4a.7.7,0,0,0-.613.36L.09,16.423a.7.7,0,0,0,.069.786l10.864,13.34.011.012c.011.013.023.026.035.038l0,0,.01.009,0,0,.039.034.019.015.042.029.02.013.037.021.015.008.014.007.043.018.027.011.005,0h0l.019.005a.7.7,0,0,0,.072.017l.03.005a.7.7,0,0,0,.088.007h.017a.7.7,0,0,0,.088-.007l.03-.005a.678.678,0,0,0,.073-.017l.019,0h0l.005,0,.027-.01.043-.018.015-.007.015-.008.038-.021.021-.013.042-.029.019-.015.039-.034,0,0,.009-.008,0,0c.013-.013.024-.026.036-.039l.01-.011,10.863-13.34A.7.7,0,0,0,23.043,16.423ZM12.953,10.85l1.989,5.213H8.191l1.99-5.213Zm2.038,6.618L11.567,27.861,8.142,17.468Zm-8.328,0,3.046,9.244L2.181,17.468Zm9.807,0h4.482l-7.527,9.243Zm4.763-1.4H16.446L14.457,10.85h3.869ZM4.808,10.85h3.87l-1.99,5.213H1.9Z" transform="translate(-0.001 -9.445)" fill="#e23375"/></svg>
                        <!-- icon -->
                        <span class="text-lg font-Nunito font-semibold text-gray-800 dark:text-gray-50">{{limitText(getTitleSectionImportant)}}</span>
                </div>
                <span class="text-lg font-Nunito font-semibold text-gray-700 dark:text-gray-50">
                    <!-- count the task -->
                    {{getCountTaskImportant}}
                    <!-- /count the task -->
                </span>
              </router-link>
          </li>

          <div class="w-full flex justify-center">
            <hr class="w-full h-0.2 bg-gray-600 opacity-40">
          </div>

          <li class="focus:bg-gray-500">
              <router-link to="/detail-tasks/pomodoro" class="flex justify-between p-5">
                <div class="flex gap-4 items-center">
                        <!-- icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.312" height="21.975" viewBox="0 0 18.312 21.975"><path d="M12.072,10.987l-.63-3.662h-.558l-.644,3.662a1.831,1.831,0,1,0,1.831,0Zm-.916-7.325a9.156,9.156,0,1,0,9.156,9.156A9.157,9.157,0,0,0,11.156,3.662Zm0,16.481a7.325,7.325,0,1,1,7.325-7.325A7.333,7.333,0,0,1,11.156,20.144ZM9.325,2V0h3.662V2A10.235,10.235,0,0,0,9.325,2Zm8.4,2.038,1.288-1.288,1.295,1.295L19.1,5.251A11.11,11.11,0,0,0,17.729,4.035Z" transform="translate(-2)" fill="#a18927"/></svg>
                        <!-- icon -->
                        <span class="text-lg font-Nunito font-semibold text-gray-800 dark:text-gray-50">{{getTitleSectionPomodoro}}</span>
                </div>
              </router-link>
          </li>

          <div class="w-full flex justify-center">
            <hr class="w-full h-0.2 bg-gray-600">
          </div>
        <!-- other tasks -->
          <!-- add other tasks or group -->
          <li class="focus:bg-gray-500 bg-gray-300 dark:bg-gray-500">
              <div class="flex justify-between p-5">
              <div @click="addTask()" class="flex gap-4 items-center">
                      <!-- icon -->
                      <img src="@/assets/img/plush-rectangle.svg" alt="" srcset="">
                      <!-- icon -->
                      <span class="text-lg font-Nunito font-semibold text-gray-800">New Tasks</span>
              </div>
              <span @click="addGroupTask()" class="text-lg font-Nunito font-semibold text-gray-700">
                  <!-- add group -->
                  <img src="@/assets/img/add-group.svg" alt="" srcset="">
                  <!-- /add group -->
              </span>
              </div>
          </li>
          <!-- /add other tasks or group -->
        <!-- /other tasks -->
          <div class="w-full flex justify-center">
            <hr class="w-full h-0.2 bg-gray-600">
          </div>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "mobileContent",
    computed: {
      ...mapGetters({
        getCountTaskProject: 'projects/getCountTask',
        getTitleSectionProject: 'projects/getTitleSection',
        getCountTaskImportant: 'important/getCountTask',
        getTitleSectionImportant: 'important/getTitleSection',
        getTitleSectionPomodoro: 'pomodoro/getTitleSection',
      })
    },
    methods:{
      addTask(){
        this.$swal({
          icon: 'error',
          text: "Add task for now isn't available"
        })
      },
      addGroupTask(){
        this.$swal({
          icon: 'error',
          text: "Add group task for now isn't available"
        })
      },
      limitText(data){
        let limit = 15
        if (data.length > limit) {
            return data.substring(0, limit) + " ..."
        }
        return data
      }
    }
}
</script>

<style>

</style>