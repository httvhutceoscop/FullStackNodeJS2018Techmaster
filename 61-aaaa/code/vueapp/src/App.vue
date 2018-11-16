<template>
  <div id="container">   
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
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
