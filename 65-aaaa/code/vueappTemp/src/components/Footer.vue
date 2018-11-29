<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 Header component dùng chung cho các màn hình
 -->
<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <a class="navbar-brand" href="#">BlogPostApp</a>
  <input class="form-control col-lg-4 m-2" type="search" placeholder="Search" aria-label="Search">
  <button class="btn btn-outline-success" >Search</button>
  <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My blogposts</a>
      </li>      
    </ul>    
</nav>
</template>

<script>
export default {
  name: 'Header',
  components: {
    
  },
  //props = "Thuộc tính public"
  props: {
    
  },

  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React !       
      
    }
  },
  //Các phương thức "private"
  methods: {
    async login() {      
      
    },    
  },  
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>

</style>
