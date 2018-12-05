<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * Màn hình Home
 -->
 <template>
  <div class="container">  
    <Header @clickToLogin="navigateToLogin" @clickToSignOut="signOut"></Header>        
    <h5 class="text-center">This is BlogPosts List</h5>    
    <Footer></Footer>
  </div> 
</template>
<script>
import Header from '@/components/Header'
export default {
    name: 'Home',
    components: {
      Header
    },
    data() {
      return {      
        email:'',
        password:''
      }
    },  
    methods: {
      navigateToLogin() {        
        this.$router.push("Login")
      },
      signOut() {
        this.$session.destroy()
        this.$router.push('/')
      }
    }
}
</script>
<style scoped>

</style>