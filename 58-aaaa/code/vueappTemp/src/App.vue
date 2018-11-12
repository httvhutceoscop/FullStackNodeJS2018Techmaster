<template>
  <div id="app">    
    <ComponentA message="Đây là component A"/>
    <ComponentB message="Đây là component B"/>
    <ComponentC message="Đây là component C"/>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import ComponentC from './components/ComponentC.vue'
/**
Một file Vue gồm 3 phần chính: template, script và style
 */
export default {
  name: 'app',
  components: {
    ComponentA,
    ComponentB,
    ComponentC
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
