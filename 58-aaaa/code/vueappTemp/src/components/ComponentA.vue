<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="blogPostTitle">
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  props: { //props giống thuộc tính "public readonly"
    title: String
  },
  data:{
    blogPostTitle: ''
  }
}
</script>

<!-- "scoped" CSS chỉ có tác dụng với component này -->
<style scoped>
h1 {
  color: red;
}
</style>
