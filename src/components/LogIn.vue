<template>
   <div>
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex ">
        <div
          class="lg:w-1/3 md:w-1/2 bg-gray-100 mx-auto rounded-lg p-8 flex justify-center flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          
            <img
              src="https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg"
              class="w-28 h-24 mb-1  mx-auto"
            />
          <h3 class="text-gray-900 text-center font-bold mb-1 text-3xl  title-font">
           Log In
          </h3>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              placeholder="Enter your Email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="Password" class="leading-7 text-sm text-gray-600"
              >Password</label
            >
            <input
            type="password"
              id="password"
              name="password"
              v-model="password"
              placeholder="Enter your password"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  rounded text-lg " @click="signIn"
          >
            Button
          </button>
          <p class=" text-blue-500 hover:text-blue-900 hover:underline  mt-3 text-lg text-right">
           <!-- give router a link to go to log in page -->
           <router-link to="/sign-up">Sign Up</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "LogIn",
    data(){
        return{
            email: 'Bilala@gmail.com',
            password:'bilal234'
        }

    },
    methods: {
      async  signIn(){
            let result=await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
           
            if(result.status==200){
                
                localStorage.setItem("user-info",JSON.stringify(result.data))
                
                this.$router.push({name: 'Home'})


        }
    },}
}
</script>