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
      <li class="nav-item">
        <img src="https://avatars2.githubusercontent.com/u/5370919?s=460&v=4"           
          class="rounded" width="30" height="30">
        <span v-show ="userName.length > 0" class="align-middle ml-2">{{}}</span>
      </li>            
    </ul>    
  </nav>
</template>
<script>
export default {
    name: 'Header',
    data() {
      return {      
        userName:'',        
        profileUrl:''
      }
    },  
    beforeCreate() {
      if (this.$session.exists()) {
        let userObject = this.$session.get('loggedInUser')
        this.userName = userObject.name ? userObject.name : ''
        this.profileUrl = userObject.profileUrl ? userObject.profileUrl : ''
      }
    },
    //Các phương thức "private"
    methods: {

    }
}
</script>