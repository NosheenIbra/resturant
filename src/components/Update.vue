<template>
    <div class="h-screen">
      <Header />
      
          <h1>Hello;user on Update Resturant page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere consectetur nisi rem? Dicta amet temporibus optio mollitia eligendi eaque modi expedita! Adipisci incidunt facere in laboriosam quisquam quia dolorum.</p>
  </div>

</template>
<script>
import Header from './Header.vue'
export default{
    name: "Update",
    // now home page will check is there no user then go to sign up pag
    mounted(){
      let user = localStorage.getItem("user-info")
      if(!user){
        this.$router.push({name: 'LogIn'})
      }
    },
    components:{
    Header
    }

}
</script>