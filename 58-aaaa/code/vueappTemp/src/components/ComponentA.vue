<template>
  <div class="hello">
    <h1>{{ message }}</h1>   
    <p>{{this.currentDateTime}}</p>
    <p v-if="isShow">This is a show/hide text</p>
    <h3>Đây là danh sách các blogpost</h3>
    <ol>
      <li v-for="blogpost in blogPosts" v-bind:key="blogpost.title">
        <p class='bold'>{{blogpost.title}}</p>
        <p>{{blogpost.content}}</p>
      </li>
    </ol>
  </div> 
</template>

<script>
export default {
  name: 'ComponentA',
  //props = "Thuộc tính public"
  props: {
    message: String,    
  },
  data() {
    return {
      //data = "thuộc tính private" của 1 component
      //data = "state" trong React
      currentDateTime:`Current date/time is :${new Date().toLocaleTimeString()}`,
      //boolean value
      isShow: true,
      blogPosts: [
        { 
          title: 'Học Vuejs để làm gì',
          content:'Vue dùng để viết giao diện web phía Front-end, từ Vue có thể tương tác với server Nodejs(back-end)'
         },
        { 
          title: 'React hay Vuejs giống nhau điểm gì',
          content:'Cả 2 đều viết bằng Javascript, đều dùng để viết Web front-end'
         },
        { 
          title: 'Tương tác giữa Vue và Nodejs',
          content:'Vue gửi các Request lên Nodejs để CRUD dữ liệu trên server, qua axios hoặc fetch'
         },
    ]
    }
  }
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>
h1 {
  color: red;  
}
p.bold {
    font-weight: bold;
}
</style>
