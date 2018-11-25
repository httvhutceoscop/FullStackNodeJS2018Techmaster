<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 Header component dùng chung cho các màn hình
 -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">BlogPostApp</a>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My blogposts</a>
      </li>      
    </ul>    
  </div>
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
