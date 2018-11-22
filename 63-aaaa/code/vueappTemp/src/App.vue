<template>
  <div id="container">   
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">    
    <Login/>    
  </div>
</template>

<script>
import Login from './components/Login.vue'
/**
Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    Login,
  }
}
</script>

<style>

</style>
