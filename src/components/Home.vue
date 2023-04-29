<template>
    <div class="h-screen">
      <Header />
      
          <h1>Hello {{ userName }}, in home page</h1>
          BLOG
CONTACT
CONTENT
CTA
ECOMMERCE
FEATURE
FOOTER
GALLERY
HEADER
HERO
PRICING
STATISTIC
STEP
TEAM
TESTIMONIAL
Copied!

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr >
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">id</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Name</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Address</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resturants" :key="item.id">
            <td class="px-4 py-3">{{item.id}}</td>
            <td class="px-4 py-3">{{item.name}}</td>
            <td class="px-4 py-3">{{item.address}}</td>
            <td class="px-4 py-3 text-lg text-gray-900">{{item.contact}}</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio">
            </td>
          </tr>
                  </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section>
GitHub
  </div>

</template>
<script>
import axios from 'axios';
import Header from './Header.vue'
export default{
    name: "Home",
    data(){
      return{
        userName : '',
        resturants:[]
      }

    },
    // now home page will check is there no user then go to sign up pag
    async mounted(){
      let user = localStorage.getItem("user-info")
      // json.parse change json value into js while json.stringify change js value into json
      // console.log( user );
      if(!user){
        this.$router.push({name: 'LogIn'})
      }
      else
      this.userName =JSON.parse(user).name;
      // always use axios function under  mount function
      let result =await axios.get("http://localhost:3000/resturants");
      // to check result in console use this command
      // console.log(result);
      this.resturants = result.data
      console.log(resturants);
    },
    components:{
    Header
    }
    

}
</script>