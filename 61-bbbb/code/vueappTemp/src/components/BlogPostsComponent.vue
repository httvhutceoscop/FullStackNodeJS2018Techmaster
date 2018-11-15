<template>
  <div class="container">
    <h1>{{ message }}</h1> 
    <form class="col-lg-6">
      <div class="form-group">
        <label>Tiêu đề Blog</label>
        <input v-model="newBlogPost.title" type="text" class="form-control">
      </div>
      <p v-if="errors.validateTitle" class="text-danger">
        Lỗi: {{errors.validateTitle}}</p>                                   
      <div class="form-group">
        <label>Nội dung Blog:</label>  
        <textarea rows="5" class="form-control" 
            v-model="newBlogPost.content"></textarea>      
      </div>
      <p v-if="errors.validateContent" class="text-danger">
        Lỗi: {{errors.validateContent}}</p>        
      <button type="button"
        class="btn btn-primary"
        @click="addBlogPost">Thêm BlogPost
      </button>
    </form>     
    <!-- Đưa danh sách các blogPosts data vào 1 "list" -->
    <ol class="col-lg-6">
      <li v-for="blogpost in blogPosts" :key="blogpost.title">
        <p class="font-weight-bold">{{blogpost.title}}</p>
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
      errors: {}
    }
  },
  //Theo dõi sự thay đổi của "this.newBlogPost"
  watch: {
    'newBlogPost.title': function(value, oldValue) {      
      this.validateTitle(value)      
    },
    'newBlogPost.content': function(value, oldValue) {            
      this.validateContent(value)      
    }
  },
  //Các phương thức "private"
  methods: {
    addBlogPost() {
      this.validateTitle(this.newBlogPost.title)
      this.validateContent(this.newBlogPost.content)
      if(Object.keys(this.errors).length > 0) {
        return
      }
      this.blogPosts.push(this.newBlogPost)
      this.newBlogPost = {title:'', content:''}
    },        
    validateTitle(value) {
      const regex = /^(?![0-9_])\w+$/;
      this.errors.validateTitle = !regex.test(String(value).toLowerCase())?
          "Bạn phải nhập tiêu đề blog+ko bắt đầu bằng số":undefined
    },
    validateContent(value) {
      this.errors.validateContent = value?
          undefined:"Thiếu nội dung Blog"
    }
  },  
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>

</style>
