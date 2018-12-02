<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 Header component dùng chung cho các màn hình
 -->
 <template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a class="navbar-brand" href="#">BlogPostApp</a>
    <input class="form-control col-lg-4 m-2" type="search" 
        placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" >Search</button>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My blogposts</a>
      </li>      
      <li class="nav-item" v-if="isLoggedIn === true">
        <img src ="profileUrl" v-show="profileUrl.length > 0"
          class="rounded" width="30" height="30">
        <span v-show ="userName.length > 0" class="align-middle ml-2">{{userName.userName}}</span>
      </li>   
      <li class="nav-item" v-else>
        <button type="button" 
          @click="login"
          class="btn btn-warning">Login
        </button>
      </li>         
    </ul>    
  </nav>
</template>
<script>
export default {
    name: 'Header',
    props: {
      navigateToLogin: Function
    },
    data() {
      return {      
        userName:'',        
        profileUrl:'',
        isLoggedIn: false
      }
    },  
    methods: {
      login() {
        this.$router
      }
    },
    beforeCreate() {
      if (this.$session.exists()) {
        let userObject = this.$session.get('loggedInUser')
        this.userName = userObject.name ? userObject.name : ''
        this.profileUrl = userObject.profileUrl ? userObject.profileUrl : ''
        this.isLoggedIn = userObject ? true : false
      }
    }  
}
</script>