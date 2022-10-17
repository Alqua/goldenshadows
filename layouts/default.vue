<template>
    <div class="flex flex-col w-screen overflow-y-auto overflow-x-hidden bg-yellow-50 h-screen">
      <header class="w-full h-16 bg-yellow-50">
  
  
        <nav class="flex my-4 justify-between flex-wrap md:justify-center w-full h-full md:text-center text-black ">

          <div class="block md:hidden mx-4" id="burger">
          <button class="flex px-3 py-2 border-2 rounded text-black border-black " @click="toggle()">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
  
            <div :class="showMobileMenu? 'block': 'hidden'" class="w-full flex-grow sticky md:flex md:items-center md:w-auto bg-yellow-50 shadow-xl md:shadow-none">
                <div class="text-sm md:flex-grow">
                <NuxtLink to="/" @click="toggleClose()" class="block sticky mt-4 sm:inline-block text-2xl font-bold p-2 m-3 text-black border-2 border-black bg-yellow-50  hover:bg-yellow-500">The Exhibition </NuxtLink>
                <NuxtLink to="/about" @click="toggleClose()" class="block sticky  sm:inline-block text-2xl font-bold p-2 m-3 text-black border-2 border-black bg-yellow-50 hover:bg-yellow-500" >About the Project </NuxtLink>
                <NuxtLink to="/artworks" @click="toggleClose()" class="block sticky sm:inline-block text-2xl font-bold p-2 m-3 text-black border-2 border-black bg-yellow-50 hover:bg-yellow-500">About the Artworks</NuxtLink>
                <NuxtLink to="/meet" @click="toggleClose()" class="block sticky sm:inline-block text-2xl font-bold p-2 m-3 text-black border-2 border-black bg-yellow-50 hover:bg-yellow-500">Meet the Artists</NuxtLink>
                </div> 
            </div>
  
        </nav>


      </header>

       
              
  
  
      <main class="flex-grow w-full h-full p-4 mx-auto my-10 max-w-7xl">
        <div class="font-sans">
        <slot />
      </div>
      </main>

    
      <footer class="sticky top-[100vh] justify-center m-2 p-2 w-full h-auto text-black">
        
          <p class="text-gray-700 text-center">
            Golden Shadows &copy; {{ new Date().getFullYear() }}
          </p>
      </footer>


    </div>
  </template>

 

<script>
    export default defineNuxtComponent({
        data(){
     return{
       showMobileMenu:false,

     }
   },
   methods:{
    toggle(){
        this.showMobileMenu= !this.showMobileMenu
    },
    toggleClose(){
      this.showMobileMenu=false
    },
}

    })
    </script>
    