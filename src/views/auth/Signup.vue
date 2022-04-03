<template>
  <div class="relative w-full h-full overflow-x-hidden">
        <div class="w-60 absolute top-80 -left-20 z-0">
            <img src="@/assets/img/air_kecil_ijo.svg">
        </div>
        <div class="w-60 absolute -top-20 -right-20 z-0">
            <img src="@/assets/img/air_kecil_ijo2.svg">
        </div>
        

        <!-- header -->
        <header>
            <!-- nav web -->
            <nav class="flex px-8 pt-4 justify-between items-center md:hidden">
            <div class="flex gap-4 items-center">
                <img src="@/assets/img/os.svg">
                <span class="text-2xl font-bold font-Nunito text-secondary">TODOME</span>
            </div>
            <div class="flex gap-20 mr-24">
                <div class="flex gap-10">
                <span class="text-lg font-Nunito text-secondary transition-opacity hover:opacity-70">Home</span>
                <span class="text-lg font-Nunito text-secondary transition-opacity hover:opacity-70">About</span>
                <span class="text-lg font-Nunito text-secondary transition-opacity hover:opacity-70">Contact</span>
                </div>
                <div>
                <span class="bg-secondary py-2 px-4 text-secondary3 rounded-md cursor-pointer transition-opacity hover:opacity-70">Sign in</span>
                </div>
            </div>
            </nav>
            <!-- nav web -->

            <!-- nav mobile -->
            <nav class="lg:hidden z-10 relative">
                <div class="flex  bg-opacity-90 px-6 pt-4 justify-between items-center">
                <div class="flex gap-4 items-cente">
                    <img src="@/assets/img/os.svg" class="w-8">
                    <span class="text-xl font-bold font-Nunito text-secondary">TODOME</span>
                </div>

                <!-- hamburger menu -->
                <img src="@/assets/img/menuR.svg" class="w-8">
                <!-- hamburger menu -->
                </div>

                <!-- list navbar -->
                <div class="absolute hidden w-full bg-teal bg-opacity-90 pt-6 z-30">
                <ul class="flex flex-col items-center gap-7">
                    <li class="transition-all duration-300 ease-in-out hover:bg-green-700 flex justify-center w-full p-4"><a href="#" class="font-Nunito text-lg text-secondary3 font-semibold">Home</a></li>
                    <li class="transition-all duration-300 ease-in-out hover:bg-green-700 flex justify-center w-full p-4"><a href="#" class="font-Nunito text-lg text-secondary3 font-semibold">About</a></li>
                    <li class="transition-all duration-300 ease-in-out hover:bg-green-700 flex justify-center w-full p-4"><a href="#" class="font-Nunito text-lg text-secondary3 font-semibold">Contact</a></li>
                    <li class="transition-all duration-300 ease-in-out hover:bg-green-700 flex justify-center w-full p-4"><a href="#" class="font-Nunito text-lg text-secondary3 font-semibold">Sign in</a></li>
                </ul>
                </div>
                <!-- /list navbar -->
            </nav>
            <!-- nav mobile -->

        </header>
        <!-- /header -->


        <div class="w-full h-full flex justify-center mt-20 mb-10">
          <div class="w-4/5 h-full ">
            <h1 class="text-3xl text-center text-gray-700 font-bold font-nunito ">Sign up</h1>
            <form action="" @submit.prevent="signup()">
                <div class="flex flex-wrap justify-center gap-4 w-full font-nunito font-semibold mt-9">

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
                    <div class="flex flex-col w-2/5">
                        <label for="confirmation_password">Confirmation password</label>
                        <div class="relative w-full">
                            <input :type="passwordConfirmType" name="confirmation_password" placeholder="password confirmation" class="h-10 w-full pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
                            <svg @click="showPassword('passwordConfirmation')" class="absolute cursor-pointer hover:opacity-60 right-3 top-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"/></svg>
                        </div>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <input type="submit" value="Sing up" class="px-5 py-2 bg-secondary rounded-lg mt-7 text-sm font-semibold font-nunito text-gray-100 hover:opacity-75 focus:ring-2 transition-all duration-300 cursor-pointer">
                </div>
            </form>
          </div>
        </div>

        <!-- footer -->
        <footer class="footer w-screen flex md:flex-col justify-between  px-32 md:px-20 py-16 mt-44 md:mt-72">
            <div>
                <img src="@/assets/img/os.svg" class="w-36 md:w-32 mb-4">
                <div class="flex flex-col animate-pulse">
                <span class="text-secondary3 font-Nunito font-semibold text-lg">Created by.</span>
                <span class="text-secondary3 font-Nunito font-medium text-lg">Sayidina ahmadal qososyi</span>
                </div>
            </div>
            <div class="flex md:flex-col gap-20 md:mt-14">
                <div>
                <h1 class="text-3xl font-Nunito font-bold text-secondary3 mb-6">My Portofolio</h1>
                <ul class="text-secondary3 font-Nunito text-opacity-90">
                    <li class="hover:opacity-80"><a href="#" target="_blank" rel="noopener noreferrer">Smarttandon</a></li>
                    <li class="hover:opacity-80"><a href="#" target="_blank" rel="noopener noreferrer">Todome</a></li>
                </ul>
                </div>
                <div>
                <h1 class="text-3xl font-Nunito font-bold text-secondary3 mb-6">Get In Touch</h1>
                <div class="flex gap-4">
                    <div class="p-2 border border-gray-900 rounded-full transition-opacity hover:bg-secondary3 cursor-pointer">
                    <img src="@/assets/img/gitconbw.svg" alt="github icon" class="opacity-70 w-6">
                    </div>
                    <div id="ig" class="p-2 border border-gray-900 rounded-full transition-opacity  cursor-pointer">
                    <img src="@/assets/img/iiconbw.svg" alt="github icon" class="opacity-70 w-6">
                    </div>
                    <div id="fb" class="p-2 border border-gray-900 rounded-full transition-opacity hover:  cursor-pointer">
                    <img src="@/assets/img/ficonbw.svg" alt="github icon" class="opacity-70 w-6">
                    </div>
                </div>
                </div>
            </div>
        </footer>
        <!-- /footer -->
  </div>
</template>

<script>

export default {
    name: 'signup',
    data(){
        return {
            passwordType: 'password',
            passwordConfirmType: 'password'
        }
    },
    methods: {
        signup(){
            // alert()
        },
        showPassword(a){
            if(a == 'password'){
                if(this.passwordType == 'password'){
                    this.passwordType = 'text'
                }else{
                    this.passwordType = 'password'
                }
            }else{
                if(this.passwordConfirmType == 'password'){
                    this.passwordConfirmType = 'text'
                }else{
                    this.passwordConfirmType = 'password'
                }
            }
        }
    }
}
</script>

<style scoped>
  .footer{
    background-image: linear-gradient(to bottom right, #1e4244, #89bfc2);
  }

  #ig:hover{
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  }

  #ig img:hover
  {
    filter: invert(100%) sepia(68%) saturate(2%) hue-rotate(297deg) brightness(114%) contrast(100%);
  }
  #fb img:hover
  {
    filter: invert(100%) sepia(68%) saturate(2%) hue-rotate(297deg) brightness(114%) contrast(100%);
  }

  #fb:hover {
    background-color: #2b72e3;
  }
</style>