<!-- 
  Khoá học FullStackNodejs Techmaster 2018
 * Instructor: Nguyễn Đức Hoàng
 * Youtube: https://www.youtube.com/c/nguyenduchoang
 * Register Component
 -->
<template>
  <div>
    <div class="form-group">
      <input type="text"
        v-model="fullName"
        name="fullName"
        v-validate="'required'"
        :class="{'form-control': true, 
                 'border-danger': errors.has('fullName')}"
        placeholder="Enter your full name" autofocus
        >    
        <span v-show="errors.has('fullName')" class="text-danger">
          {{ errors.first('fullName') }}
        </span>
    </div>
    <div class="form-group">
      <input type="text"
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
    <div class="form-group">
        <input type="password" ref="password"
          name="retypePassword" 
          v-model="retypePassword" 
          v-validate="'required|confirmed:password'"       
          :class="{'form-control': true, 
                 'border-danger': errors.has('retypePassword')}"      
          data-vv-as="password"
          placeholder="Type password again">                
    </div> 
    <span v-show="errors.has('retypePassword')" 
      class="text-danger">{{ errors.first('retypePassword') }}
    </span>    
    <button class="btn-lg btn-success btn-block text-uppercase"
      @click="createAccount">
      Create Account
    </button>            
  </div>
</template>

<script>
import {registerUser} from '../APIs/usersAPI.js'
// import {APIResponse} from '../APIs/apiParameters.js'
export default {
  name: "Register",
  //props = "Thuộc tính public"
  props: {},

  data() {
    return {
      //Các thuộc tính "private" => Giống "state" trong React !
      fullName: "",
      email: "",
      password: "",
      retypePassword: ""
    };
  },

  //Các phương thức "private"
  methods: {
    async createAccount() {
      //Giờ chúng ta cần "validate" các thông tin đăng nhập
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      let response = await registerUser(this.name, this.email, this.password)
      return
      if (response.result) {
        alert('register sucessfully')
      } else {
        alert('register failed')
      }
      // alert(
      //   `Bạn bấm tạo account. Email: ${this.email}, password: ${this.password}`
      // )
    },    
  }
};
</script>

<!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>

</style>
