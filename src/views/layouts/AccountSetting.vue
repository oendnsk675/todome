<template>
  <div class="w-full h-screen overflow-hidden pt-4  bg-gray-100 dark:bg-gray-900">
        <navBar/>
        <!-- content container -->
        <hr class="absolute top-36 lef-0 w-full h-0.5">
        <div class="flex w-full h-full px-11 pt-11 relative">
            <!-- left content -->
            <div class=" flex flex-col items-center w-1/3 h-full">
                <div class="w-72 h-72 object-cover overflow-hidden border-4 dark:border-gray-100 border-teal rounded-full">
                    <img src="@/assets/img/user/osi.png">
                </div>
                <h1 class="text-2xl font-bold font-Nunito dark:text-gray-100 text-gray-900 mt-5">Sayidina ahmadal qososyi</h1>
                <h1 class="text-md font-base font-Nunito dark:text-gray-100 text-gray-900 mt-2">Osi</h1>

                <!-- friends info -->
                <div class="flex items-center gap-3 mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-500" width="20" height="20" viewBox="0 0 24 24"><path d="M10.119 16.064c2.293-.53 4.427-.994 3.394-2.946-3.147-5.941-.835-9.118 2.488-9.118 3.388 0 5.643 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.393 2.946 1.985.458 2.118 1.428 2.118 3.107l-.003.828h-1.329c0-2.089.083-2.367-1.226-2.669-1.901-.438-3.695-.852-4.351-2.304-.239-.53-.395-1.402.226-2.543 1.372-2.532 1.719-4.726.949-6.017-.902-1.517-3.617-1.509-4.512-.022-.768 1.273-.426 3.479.936 6.05.607 1.146.447 2.016.206 2.543-.66 1.445-2.472 1.863-4.39 2.305-1.252.29-1.172.588-1.172 2.657h-1.331c0-2.196-.176-3.406 2.116-3.936zm-10.117 3.936h1.329c0-1.918-.186-1.385 1.824-1.973 1.014-.295 1.91-.723 2.316-1.612.212-.463.355-1.22-.162-2.197-.952-1.798-1.219-3.374-.712-4.215.547-.909 2.27-.908 2.819.015.935 1.567-.793 3.982-1.02 4.982h1.396c.44-1 1.206-2.208 1.206-3.9 0-2.01-1.312-3.1-2.998-3.1-2.493 0-4.227 2.383-1.866 6.839.774 1.464-.826 1.812-2.545 2.209-1.49.345-1.589 1.072-1.589 2.334l.002.618z"/></svg>
                    <span class="text-sm font-semibold font-Nunito">10 Friends</span>
                </div>
                <!-- /friends info -->

                <!-- button change picture -->
                <button class="px-5 py-2 bg-teal rounded-lg mt-7 text-sm font-semibold font-nunito text-gray-100 hover:opacity-75 focus:ring-2 transition-all duration-300 focus:ring-green-400">Change You Avatar</button>
                <!-- /button change picture -->
            </div>
            <!-- /left content -->

            <!-- right content -->
            <div class="w-full h-full ml-10">
                <h1 class="text-2xl font-bold font-nunito text-gray-700">Account setting</h1>
                    
                <form action="">
                    <div class="flex flex-wrap gap-4 w-full font-nunito font-semibold mt-7">

                        <div class="flex flex-col w-2/5">
                            <label for="email">Email</label>
                            <input type="text" name="email" placeholder="Email" value="sayidinaahmadalqososyi@gmail.com" disabled class="h-10 pl-4 border border-teal rounded-md bg-gray-700 bg-opacity-30 cursor-not-allowed">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="fullname">Fullname</label>
                            <input type="text" name="fullname" placeholder="Fullname" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="nickname">Nick name</label>
                            <input type="text" name="nickname" placeholder="Nick name" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="linkidn">Link linkidn</label>
                            <input type="text" name="linkidn" placeholder="/account" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="github">Link github</label>
                            <input type="text" name="github" placeholder="/account" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="facebook">Link facebook</label>
                            <input type="text" name="facebook" placeholder="/account" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="twiter">Link twiter</label>
                            <input type="text" name="twiter" placeholder="/account" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="phone">Phone number</label>
                            <input type="text" name="phone" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                            <label for="phone">Phone number</label>
                            <input type="text" name="phone" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                        </div>
                        <div class="flex flex-col w-2/5">
                        <label for="password">Password</label>
                            <div class="relative w-full">
                                <input :type="passwordType" id="password" name="password" placeholder="password" class="h-10 w-full pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                                <svg @click="showPassword('password')" class="absolute cursor-pointer hover:opacity-60 right-3 top-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"/></svg>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Save change" class="px-5 py-2 bg-teal rounded-lg mt-7 text-sm font-semibold font-nunito text-gray-100 hover:opacity-75 focus:ring-2 transition-all duration-300 focus:ring-green-400">
                </form>
            </div>
            <!-- right content -->

        </div>
        <!-- /content container -->
  </div>
</template>

<script>
import navBar from '../../components/Navbar.vue';

export default {
    name: 'account setting',
    components: {
        navBar,
    },
    methods: {
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>