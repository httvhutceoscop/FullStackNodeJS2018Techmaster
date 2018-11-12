<template>
  <div class="hello">
    <h1>{{ message }}</h1>   
  </div> 
</template>

<script>
export default {
  name: 'ComponentC',
  //props = "Thuộc tính public"
  props: {
    message: String
  }
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>
h1 {
  color: blue;
}
</style>
