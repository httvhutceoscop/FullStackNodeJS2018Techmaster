<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
import ComponentA from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
