/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Gọi các API đăng nhập, đăng ký User
 */
import { 
    SERVER_NAME, 
    SERVER_PORT, 
    APIResponse 
} from './apiParameters'
// http://127.0.0.1:3000/users/registerUser
const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
export const registerUser = async (name, email, password) => {
    try {
        let response = await fetch(API_REGISTER_USER, {
            method: 'POST',
            body: `name=${name}&email=${email}&password=${password}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },            
        })
        let responseJson = await response.json()
        if(responseJson.result === "ok") {
            return new APIResponse(
                responseJson.data, 
                responseJson.message,true)
        } else {
            return new APIResponse(
                null, 
                responseJson.message,false)
        }
    } catch (error) {
        return new APIResponse(null, error.message, false) //false
    }
}