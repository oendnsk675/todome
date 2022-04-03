<template>
  <div class="w-full h-screen relative overflow-hidden dark:bg-gray-900" @click="closeAllPopUp()">
    <text-area/>
    <!-- arrow back -->
    <div class="my-6 w-6 h-6 lg:hidden" @click="goHome()">
        <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 ml-4 fill-current text-gray-500 dark:text-gray-100" width="20" height="20" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
    <!-- /arrow back -->
    <content2 class="h-full"/>
  </div>
</template>

<script>
import content2 from '../../../components/dashboard/Content2.vue';
import textArea from '../../../components/dashboard/Textarea.vue';
import {mapMutations, mapActions} from 'vuex'


export default {
    name: 'tasksMyDay',
    components: {
      content2,
      textArea,
    },
    methods: {
      ...mapMutations({
        toggleTextArea: 'textarea/toggleTextArea',
      }),
      ...mapActions(['closeAllPopUp']),
      goHome(){
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>