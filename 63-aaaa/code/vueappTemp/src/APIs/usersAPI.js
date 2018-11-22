/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Gọi các API đăng nhập, đăng ký, kích hoạt User
 yarn add axios
 */
import { SERVER_NAME, SERVER_PORT, APIResponse } from './apiParameters'
const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
export const registerUser = async (name, email, password) => {
    try {
        
        let response = await fetch(API_REGISTER_USER, {
            method: 'POST',
            //mode: 'no-cors',
            // mode: "same-origin",
            body: `name=${name}&email=${email}&password=${password}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            },            
        })      
        
        let res1 = await response.json()
        alert(res1)          
        if(response.result === "ok") {
            return new APIResponse(response.data, response.message, true) //success
        } else {
            return new APIResponse(null, response.message, false) //false
        }        
    } catch (error) {
        return new APIResponse(null, error.message, false) //false
    } 
}