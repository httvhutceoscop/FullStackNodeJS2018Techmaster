<template>
  <div>
    <h1>{{ title }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'ComponentA',
  props: {
    title: String
  }
}
</script>

<!-- "scoped" CSS chỉ có tác dụng với component này -->
<style scoped>
h1 {
  color: red;
}
</style>
