<template>
  <div class="w-full h-screen overflow-hidden pt-4  bg-gray-100 dark:bg-gray-900" @click="closeAllPopUp()">
        <navBar/>
        <!-- content -->
        <div class="md:hidden h-86% px-6">
            <webContent class="h-full"/>
        </div>
        <div class="lg:hidden">
            <mobileContent/>
        </div>
        <!-- /content -->
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from "vuex"
import webContent from './layouts/WebContent.vue';
import mobileContent from './layouts/Mobilecontent.vue';
import navBar from '../components/Navbar.vue';


export default {
    name: 'dashboard',
    components: {
        webContent,
        mobileContent,
        navBar,
    },
    computed: {
        ...mapGetters({
            getStateMenu: 'general/getStateMenu',
            getStateDarkMode: 'general/getStateDarkMode',
        })
    },
    methods: {
        ...mapActions(['closeAllPopUp']),
        ...mapMutations({
            toggleMenuUserSetting: 'general/toggleMenuUserSetting',
            toggleDarkMode: 'general/toggleDarkMode',
            initTheme: 'general/initTheme',
        })
    },
    watch: {
        getStateDarkMode(state){
            const rot = document.querySelector('html')
            state ? rot.classList.add('dark') : rot.classList.remove('dark')
        }
    },
    beforeMount(){
        this.initTheme()
    }

}
</script>

<style scoped>
</style>