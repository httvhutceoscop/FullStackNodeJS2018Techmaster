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
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <h5 class="text-center">Login to your account</h5>
        <div class="form-group">
          <input type="text" id="inputEmail"
            v-model="email"
            name="email"
            v-validate="'required|email'"
            :class="{'form-control': true, 
                     'border-danger': errors.has('email')}"
            placeholder="Email address" autofocus
            >    
            <span v-show="errors.has('email')" class="text-danger">
              {{ errors.first('email') }}
            </span>
        </div>
        <div class="form-group">
            <input type="password" 
              name="password" 
              v-model="password" 
              v-validate="'required'"       
              :class="{'form-control': true, 
                     'border-danger': errors.has('password')}"      
              placeholder="Password">                
        </div> 
        <span v-show="errors.has('password')" 
          class="text-danger">{{ errors.first('password') }}
        </span>
        <!-- checkbox ? -->
        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" 
              id="customCheck1" v-model="rememberPassword">
          <label class="custom-control-label" 
              for="customCheck1">Remember password</label>
        </div>
        <button class="btn-lg btn-primary btn-block text-uppercase"
          @click="login">
          Login
        </button>
        <!-- Muốn hiện icon, dùng font Awesome -->
        <button class="btn-lg btn-google btn-block text-uppercase"
          @click="loginGoogle">
          <i class="fab fa-google mr-2"></i>
          Signin with Google
        </button>
        <button class="btn-lg btn-facebook btn-block text-uppercase"
          @click="loginFacebook">
          <i class="fab fa-facebook-f mr-2"></i> 
          Sign in with Facebook
        </button>
        <h5 class="text-center mx-auto mt-1">OR</h5>
        <Register></Register>
      </div>
    </div>
  </div> 
</template>

<script>
import Register from '@/components/Register.vue'
import {loginUser} from '@/APIs/usersAPI.js'
export default {
  name: 'Login',
  components: {
    Register
  },
  //props = "Thuộc tính public"
  props: {
    
  },

  data() {
    if(this.$session.exists()) {
      return {
        email: this.$session.get("email"),
        password: this.$session.get("password"),
        rememberPassword: false
      }
    }
    return {
      //Các thuộc tính "private" => Giống "state" trong React !       
      email:'',
      password:'',
      rememberPassword: false
    }
  },
  watch: {
    // whenever question changes, this function will run
    rememberPassword: function (newValue, oldValue) {
      if (newValue === true) {
        this.$session.start()
        this.$session.set('email', this.email)        
        this.$session.set('password', this.password)        
      }
    }
  },
  created() {
    
  },
  //Các phương thức "private"
  methods: {
    async login() {
      //Giờ chúng ta cần "validate" các thông tin đăng nhập
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
      let loggedInUser = await loginUser(this.email, this.password)
      if (Object.keys(loggedInUser).length > 0) { //Đăng nhập thành công
        this.$session.start()
        this.$session.set('loggedInUser', loggedInUser)
        this.$router.push('/') //Home
      } else {
        alert("Đăng nhập ko thành công, kiểm tra lại email/password")
      }       
      //alert(`Bạn bấm đăng nhập. Email: ${this.email}, password: ${this.password}`)
    },
    async loginFacebook() {
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }
      alert('Bạn bấm đăng nhập Facebook')
    },
    async loginGoogle() {    
      let result = await this.$validator.validateAll()
      if(!result) {
        return
      }  
      alert('Bạn bấm đăng nhập Google')
    },
  },  
}
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>
.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
</style>
