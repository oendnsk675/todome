<template>
  <div class="relative overflow-x-hidden">
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

      <!-- content -->
      <div class="relative md:z-0 flex justify-around p-20">
        <div class="w-96 z-0 md:hidden">
            <img src="@/assets/img/character.svg">
        </div>
        <div class="w-72 md:mt-9 flex flex-col items-center">
          <h1 class="font-Nunito font-bold text-4xl md:text-5xl text-secondary mb-2 md:mb-28">Sign in</h1>
          <form action="" class="w-full">
            <div class="w-full font-nunito font-semibold mt-6">
              <div class="flex flex-col">
                  <label for="email">Email</label>
                  <input type="email" name="email" placeholder="cozy@example.com" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
              </div>
              <div class="flex flex-col mt-2">
                  <label for="password">Password</label>
                  <input type="password" name="password" placeholder="password" class="h-10 pl-4 border bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-color_custom7 border-teal rounded-md">
              </div>
            </div>
            <input type="submit" value="Sign in" class="px-5 py-2 w-full bg-secondary rounded-lg mt-7 text-sm font-semibold font-nunito text-gray-100 hover:opacity-75 focus:ring-2 transition-all duration-300 focus:ring-green-400">
            <div class="w-full flex justify-center mt-3">
              <span class="text-xs opacity-70">Forget you'r password? </span>
              <router-link to="/forget_password" class="text-xs font-semibold hover:opacity-70">Get help.</router-link>
            </div>
          </form>
          <div class="w-full flex justify-between items-center gap-5 lg:mt-2 md:mt-3">
            <hr class="h-0.5 border-gray-400 w-2/6">
            <span>Or</span>
            <hr class="h-0.5 border-gray-400 w-2/6">
          </div>
          <div class="md:absolute w-full md:-bottom-52 lg:mt-5">
            <!-- google btn login -->
            <button class="flex relative mb-4 justify-center items-center gap-8 w-full pl-3 h-9 text-sm rounded-md overflow-hidden bg-secondary2 hover:opacity-70 transition-opacity">
              <span class="bg-secondary3 absolute left-0 h-full w-8 flex justify-center">
                <img src="@/assets/img/gicon.svg" class="w-5">
              </span>
              <span class="text-secondary3">Sign in with google</span>
            </button>
            <!-- /google btn login -->

            <!-- facebook btn login -->
            <button class="flex relative mb-4 justify-center items-center gap-8 w-full pl-3 h-9 text-sm rounded-md overflow-hidden bg-secondary hover:opacity-70 transition-opacity">
              <span class="bg-secondary3 absolute left-0 h-full w-8 flex justify-center">
                <img src="@/assets/img/ficon.svg" class="w-5">
              </span>
              <span class="text-secondary3">Sign in with facebook</span>
            </button>
            <!-- /facebook btn login -->
          </div>

          <p>
            <span class="text-xs opacity-70">Don't have an account </span>
            <router-link to="/signup" class="text-xs font-semibold">Sign up.</router-link>
          </p>
        </div>
      </div>
      <!-- /content -->

      <!-- footer -->
      <footer class="footer w-screen flex md:flex-col justify-between  px-32 md:px-20 py-16 mt-20 md:mt-72">
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