<template>
  <div class="container">
    <h1>{{ message }}</h1>         
    <!-- v-if là 1 "directive": v-if = true thì thẻ chứa nó mới hiện ra -->
    <!-- Nhập thông tin blog post mới, dùng thẻ input -->                
    <form class="col-lg-6">
      <div class="form-group">
        <label>Tiêu đề Blog:</label>
        <input v-model="newBlogPost.title" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Nội dung Blog:</label>
        <textarea v-model="newBlogPost.content" rows="5" class="form-control"></textarea>
      </div>
      <!-- Thêm button để thực hiện hàm "thêm mới BlogPost" -->
      <button type="button" class="btn btn-primary">Thêm BlogPost</button>
    </form>    
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
  name: 'BlogPostsComponent',
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
      //Thêm mới BlogPost, cần data: "newBlogPost"
      newBlogPost: {title:'', content:''},      
    }
  },
  //Các phương thức "private"
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
