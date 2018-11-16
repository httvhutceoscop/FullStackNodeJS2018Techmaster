<template>
  <div class="container">      
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <h5 class="text-center">Login to your account</h5>            
          <form>
            <div class="form-group">
              <input type="email" id="inputEmail" class="form-control" 
                  placeholder="Email address" required autofocus>                  
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password" required>                
            </div>
            <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label" for="customCheck1">Remember password</label>
            </div>
            <button class="btn-lg btn-primary btn-block text-uppercase" type="submit">
              Login
            </button>
            <hr class="my-4">
            <button class="btn-lg btn-google btn-block text-uppercase" type="submit">
              <i class="fab fa-google mr-2"></i> Sign in with Google</button>
            <button class="btn-lg btn-facebook btn-block text-uppercase" type="submit">
              <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
          </form>
        </div>
      </div>
  </div> 
</template>

<script>
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
  methods: {}
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
