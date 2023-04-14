<template>
<header class="text-white font bg-zinc-500">
  <div class=" container mx-auto flex flex-wrap p-5 justify-between items-center ">
    <nav class="flex lg:w-2/5 flex-wrap item-center text-base">
        <!-- :to in this function to said the value of nav.to is mine not nav.to is itself a value -->
        <router-link v-for="nav in navList" :to="nav.to" class="px-3 hover:text-gray-900 hover:underline  hover:bg-gray-100">{{nav.name}}</router-link> 
    </nav>
   
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button class="inline-flex items-center bg-gray-100 border-0 text-zinc-500 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" @click="logout">log Out
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
</template>

<script>
export default{
    name:"Header",
    setup(){
       const navList= [
       {
        to:"/",
        name:"Home"
    }, {
        to:"/add",
        name:"Add Resturant"
    }, {
        to:"/update",
        name:"Ubdate Resturant"
    },
]
    return {
        navList
    }
    },
    methods:{
      logout(){
        // console.log("logout");
        localStorage.clear();
        this.$router.push({name: "LogIn"})
      }

    }
    
}

</script>