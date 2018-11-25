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
                placeholder="Enter your full name" autofocus>    
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
            <input v-validate="'required'" name="password" 
                type="password" placeholder="Password" 
                v-model="password"
                :class="{'form-control': true, 
                 'border-danger': errors.has('password')}"   
                ref="password">                
        </div>
        <span v-show="errors.has('password')" 
            class="text-danger">{{ errors.first('password') }}
        </span>
        <div class="form-group">
            <input v-validate="'required|confirmed:password'" 
                name="retypePassword" type="password" 
                placeholder="Type password again"
                :class="{'form-control': true, 
                 'border-danger': errors.has('retypePassword')}"
                data-vv-as="password">                
        </div> 
        <span v-if="errors.has('retypePassword')" 
            class="text-danger">{{ errors.first('retypePassword') }}
        </span> 
        <button class="btn-lg btn-success btn-block text-uppercase"
            @click="createAccount">
            Create Account
        </button>  
        <span v-if="registerResponse.result === false"
            class="text-danger">{{registerResponse.message}}
        </span>
        <span v-else 
            class="text-success">{{registerResponse.message}}
        </span> 
    </div>
 </template>
<script>
import {registerUser} from '../APIs/usersAPI.js'
import {APIResponse} from '../APIs/apiParameters.js'

export default {
    name: "Register",
    props: {},
    data() {
        return {
            //Các thuộc tính "private" => Giống "state" trong React !
            fullName: "",
            email: "",
            password: "",
            retypePassword: "",  
            registerResponse: new APIResponse()      
        }
    },
    methods: {
        async createAccount() {
            let result = await this.$validator.validateAll()
            if (!result) {
                return
            }
            this.registerResponse = await registerUser(this.fullName, this.email, this.password)

        }
    }
}    
</script>
 <!-- scoped: Chỉ có tác dụng trong file .vue này -->
<style scoped>
</style>