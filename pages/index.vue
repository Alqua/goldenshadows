<template>
    <div class="flex-auto bg-yellow-50 ">
    <Head>
        <Title>The Exhibition | Golden Shadows</Title>
    </Head>


        <div class="flex justify-center">
            <h1 class="font-sans text-5xl p-2 text-gray-900">Golden Shadows</h1>
        </div>
        <div class="flex justify-center">
            <h1 class="font-sans text-3xl p-2 text-gray-900">Voices of Two Exiled Artists</h1>
        </div>
        <div class="flex justify-center">
            <h1 class="font-sans text-xl px-2 pt-2 p-2 text-gray-900">A digital exhibition with Yadanar Win and Kolatt</h1>
        </div>
        <div class="flex justify-center">
            <h1 class="font-sans text-xl px-2 pt-2 pb-5  text-gray-900">01 November 2022 to 11 December 2022</h1>
        </div>
        <div class="flex justify-center">
            <button @click="toggleGuide()" class="font-sans border border-black text-l p-2 mb-4 hover:bg-yellow-400 text-gray-900" v-cloak>
                <span>User Guide </span>
               <font-awesome-icon v-if="showGuide" :icon="['fas', 'chevron-up']" v-cloak /><font-awesome-icon v-else :icon="['fas', 'chevron-down']" v-cloak />
                <!-- <font-awesome-icon icon="fa-solid fa-chevron-down" /> -->
            </button>
        </div>
        <div class="flex justify-center ">
            <div v-if="showGuide" class="max-w-3xl border border-black p-2 mb-4 prose" >
                <p class=""> Visit the digital art exhibition by entering the virtual room displayed below in one of the following ways: 
                    select the <b>“start guided tour”</b> button to follow the intended exhibition flow, beginning with the golden introduction text label, or click <b>“enter exhibition”</b> to move around freely. <br/>
                    You can exit the guided tour at any moment, by moving your view around with the keyboard arrows or with the mouse. 
                    Re-enter the guided tour by opening the menu in the top-right corner and selecting <b>“start tour”</b>.
                    <br>
                    When an artwork is selected, its information can be viewed by clicking the <b>“i”</b> button in the top-right corner.
                    <br/>
                    The menu in the top-right corner also includes the complete <b>“list of works”</b> displayed and a <b>“help”</b> tab .
                </p>

            <!-- <p>
            Visit the exhibition by either: selecting the <b>“start guided tour”</b> button to follow the intended exhibition order, beginning with the <b>golden introduction text label</b>, or clicking <b>“enter exhibition”</b> to move around freely, without a predetermined order.
            <br>
            The guided tour can be exited by moving your view around with the keyboard arrows or with the mouse.
            Re-join the guided tour by opening the menu in the top-right corner and selecting <b>“start tour”</b>.
            Here you can also find and navigate the complete <b>“list of works”</b> displayed.
            <br>
            When an artwork is selected, view its information by clicking the <b>“i”</b>button in the top-right corner.
            <br>
            The menu in the top-right corner also includes a <b>“help”</b> tab.
            </p> -->
            <div class="flex justify-center">
                <img src="/assets/images/start-here.png" alt="showing where the exhibition starts" class="border border-grey-700">
            </div>
            </div>

        </div>


        
     <iframe v-cloak class="test" allowfullscreen="true" frameborder="0" scrolling="no" src="https://art.kunstmatrix.com/apps/artspaces/?external=true&uid=87648&exhibition=10681893" width="100%" height="600"></iframe>
    
    <div class="m-10 p-10"></div>
    </div>
</template>
    
    <style scoped>
    .test {
    background-color: rgb(253, 247, 180) !important;
    border:none;
    /* padding-bottom: 2em !important;
    margin-bottom: 2em !important; */
    height: 600px;

    }

    [v-cloak] {
    display: none !important;
}
    
    
    </style>

<!-- <script>

export default defineNuxtComponent({

    data(){
 return{
   showGuide:false,

 }
},
methods:{
toggleGuide(){
    this.showGuide= !this.showGuide
},
}

})
</script> -->
<script setup>
const showGuide = ref(false)
const toggleGuide = () =>{
    showGuide.value = !showGuide.value
}

useHead({
    meta: [
    { name: 'description', content: 'Golden Shadows, a digital exhibition with works from artists Yadanar Win and Kolatt from Myanmar' }    
    ],
})
</script>