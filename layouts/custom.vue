<template>
    <div class="flex flex-col w-full h-screen overflow-hidden bg-yellow-50">
      <header class="w-full h-16 bg-yellow-50">
  
  
        <nav class="flex my-4 justify-start md:items-center md:justify-center w-full h-full md:text-center text-black ">
          <div class="block md:hidden mx-auto" id="burger">
          <button class="flex px-3 py-2 border rounded text-black border-black " @click="toggle()">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
  
  
          <NuxtLink to="/" class="hidden md:flex text-2xl font-bold p-2 m-3 text-black border-2 border-black hover:bg-yellow-500">The Exhibition </NuxtLink>
          <NuxtLink to="/about" class="hidden md:flex text-2xl font-bold p-2 m-3 text-black border-2 border-black hover:bg-yellow-500">About the Project </NuxtLink>
          <NuxtLink to="/meet" class="hidden md:flex text-2xl font-bold p-2 m-3 text-black border-2 border-black hover:bg-yellow-500">Meet the Artists</NuxtLink>
  
  
        </nav>
      </header>

      <div v-if="showMobileMenu">
        <p class="text-2xl"> AXIS AS BOLD AS LOVE</p>
      </div>
       
              
  
  
      <main class="flex-grow w-full h-full p-4 mx-auto mt-5 max-w-7xl">
        <div class="font-mono">
        <slot />
      </div>
      </main>

      <div class="fixed z-30 bottom-0 right-0 mb-6" id="back-to-top">
        <a href="#">TOP</a>
        </div>
        
      <footer class="flex items-center justify-center w-full h-16 text-black">
          <p class="text-gray-700">
            Golden Shadows &copy; {{ new Date().getFullYear() }}
          </p>
      </footer>
    </div>
  </template>

<script>
    export default defineNuxtComponent({
        data(){
     return{
       showMobileMenu:true,

     }
   },
   methods:{
    toggle(){
        this.showMobileMenu= !this.showMobileMenu
    },
}

    })
    </script>
    