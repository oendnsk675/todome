<template>
  <div class="w-full h-screen relative overflow-hidden dark:bg-gray-900" @click="closeAllPopUp()">
    <text-area/>
    <!-- arrow back -->
    <div class="my-6 w-6 h-6 lg:hidden" @click="goHome()">
        <svg xmlns="http://www.w3.org/2000/svg" class="transform rotate-180 ml-4 fill-current text-gray-500 dark:text-gray-100" width="20" height="20" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
    </div>
    <!-- /arrow back -->
    <content1 class="h-full"/>
    <!-- <button @click.stop="toggleTextArea('projects')" class="hover:opacity-70 lg:hidden fixed bottom-5 right-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 20 20">
        <g id="plush" transform="translate(-461 -365)">
            <circle id="Ellipse_2" data-name="Ellipse 2" cx="10" cy="10" r="10" transform="translate(461 365)" fill="#b5b1b1"/>
            <rect id="Rectangle_1" data-name="Rectangle 1" width="12" height="2" transform="translate(465 374.5)" fill="#fff"/>
            <rect id="Rectangle_2" data-name="Rectangle 2" width="12" height="2" transform="translate(472 369.5) rotate(90)" fill="#fff"/>
        </g>
        </svg>
    </button> -->
  </div>
</template>

<script>
import content1 from '../../../components/dashboard/Content1.vue';
import textArea from '../../../components/dashboard/Textarea.vue';
import {mapMutations, mapActions} from 'vuex'

export default {
    name: 'tasksProject',
    components: {
      content1,
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