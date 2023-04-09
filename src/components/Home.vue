<template>
  <div>

    <h1>Hello;user in home page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere consectetur nisi rem? Dicta amet temporibus optio mollitia eligendi eaque modi expedita! Adipisci incidunt facere in laboriosam quisquam quia dolorum.</p>
  </div>
</template>
<script>
export default{
    name: "Home",
    // now home page will check is there no user then go to sign up pag
    mounted(){
      let user = localStorage.getItem("user-info")
      if(!user){
        this.$router.push({name: 'LogIn'})
      }
    }

}
</script>