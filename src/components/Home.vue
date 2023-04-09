<template>
    <h1>Hello;user in home page</h1>
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