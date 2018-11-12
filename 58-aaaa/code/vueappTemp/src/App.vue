<template>
  <div id="app">    
    <ComponentA title="Đây là component A"/>
    <ComponentB title="Đây là component B"/>
    <ComponentC title="Đây là component C"/>
  </div>
</template>

<script>
/**
Các bước cài Vue và Vue project:
yarn global add @vue/cli
npm install -g @vue/cli-service-global
vue create vueapp
cd vueapp/
yarn serve
Thay cổng khác: sửa trong package.json => "serve": "vue-cli-service serve --port 4001"
Project lấy trên github về, ko chạy được, có thể cài lại package:
cd vueapp/
rm -rf node_modules && yarn install
yarn serve
 */
import ComponentA from './components/ComponentA.vue'
import ComponentB from './components/ComponentB.vue'
import ComponentC from './components/ComponentC.vue'

export default {
  name: 'app',//app component
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
