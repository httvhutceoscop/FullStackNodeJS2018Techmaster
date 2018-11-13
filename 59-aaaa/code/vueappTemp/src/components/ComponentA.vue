<template>
  <div class="hello">
    <h1>{{ message }}</h1> 
    <p>{{this.currentDateTime}}</p>    
    <!-- v-if là 1 "directive": v-if = true thì thẻ chứa nó mới hiện ra -->
    <p v-if="isShow">Dòng này sẽ ẩn / hiện</p>
    <!-- Nhập thông tin blog post mới -->
    <input v-model="newBlogPost.title" placeholder="Tiêu đề Blog">
    <p>{{this.newBlogPost.title}}</p>    
    <input v-model="newBlogPost.content" placeholder="Nội dung Blog">
    <p>{{this.newBlogPost.content}}</p>
    <!-- Nút thêm mới một blogPost -->
    <button v-on:click="addBlogPost">Thêm blogPost</button>
    <!-- Đưa danh sách các blogPosts data vào 1 "list" -->
    <ol>
      <li v-for="blogpost in blogPosts" v-bind:key="blogpost.title">
        <p class="bold">{{blogpost.title}}</p>
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
    message: String
  },
  //Hàm data chứa các thuộc tính "private" của 1 Component
  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React ! 
      currentDateTime: `Thời gian hiện tại: ${new Date().toLocaleTimeString()}`,  
      //data có thể là kiểu boolean
      isShow: false,
      //data là "mảng các object"
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
      ],
      newBlogPost: {title:'', content:''}
    }
  },
  methods: {
    addBlogPost() {
      this.blogPosts.push(this.newBlogPost)
      this.newBlogPost = {title:'', content:''}
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
