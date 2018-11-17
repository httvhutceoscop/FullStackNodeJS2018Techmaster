<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * Form đăng nhập 
 yarn add vee-validate
 -->
<template>
  <div class="container">      
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <h5 class="text-center">Login to your account</h5>            
          <form @submit.prevent="submit">
            <div class="form-group">
              <input type="text" id="inputEmail"
                  v-model="email"
                  v-validate="'required|email'"
                  name="email"
                  :class="{'form-control': true, 'border-danger': errors.has('email') }"
                  placeholder="Email address" autofocus>                  
              <i v-show="errors.has('email')" class="fa fa-warning"></i>
              <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
            </div>            
            <div class="form-group">
              <input type="password" 
                class="form-control" placeholder="Password" 
                name="password"
                v-validate="'required'">                
            </div>
            <span v-show="errors.has('required')">{{ errors.first('required') }}</span>
            <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
            </div>
            <button class="btn-lg btn-primary btn-block text-uppercase" 
              type="submit">
              Login
            </button>
            <hr class="my-4">
            <button class="btn-lg btn-google btn-block text-uppercase" 
              type="submit">
              <i class="fab fa-google mr-2"></i> Sign in with Google</button>
            <button class="btn-lg btn-facebook btn-block text-uppercase" 
              type="submit">
              <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
          </form>
        </div>
      </div>
  </div> 
</template>

<script>
// import { Validator } from "vee-validate"
export default {
  name: "Login",
  //props = "Thuộc tính public"
  props: {},

  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React !
      email: '',
      password:'',
    };
  },

  //Các phương thức "private"
  methods: {
    validateBeforeSubmit(e) {
      alert(`e = ${JSON.stringify(e)}`)
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return;
        }  
      })
    },
    
    // login() {
    //   alert('Bạn bấm đăng nhập email/password')
    // },
    // loginFacebook() {
    //   alert('Bạn bấm đăng nhập Facebook')
    // },
    // loginGoogle() {
    //   alert('Bạn bấm đăng nhập Google')
    // },
  }
};
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
