<template>
  <div class="w-full h-screen relative dark:bg-gray-900" @click="closeAllPopUp()">
    <task-choices/>
    <!-- arrow back -->
    <router-link to="/" class="fixed  px-4 pt-6 z-40">
      <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 fill-current text-gray-500 dark:text-gray-100" width="20" height="20" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </router-link>
    <!-- /arrow back -->
    <content3/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import taskChoices from '../../../components/dashboard/TaskChoices.vue';
import content3 from '../../../components/dashboard/Content3.vue';

export default {
    name: 'pomodoroSpace',
    components: {
      content3,
      taskChoices,
    },
    methods: {
      ...mapActions(['closeAllPopUp'])
    }
}
</script>

<style>

</style>