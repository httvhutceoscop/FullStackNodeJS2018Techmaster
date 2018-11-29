<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * Bài này sẽ hướng dẫn các bạn:
 - Viết Component Register
 - Gọi Api đăng ký user từ VueJS sang Nodejs
 -->
<template>
  <div class="container">    
    <Header></Header>
    <h5 class="text-center">This is BlogPosts List</h5>    
    <Footer></Footer>
  </div> 
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header
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
