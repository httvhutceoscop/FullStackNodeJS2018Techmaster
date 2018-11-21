/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 Gọi các API đăng nhập, đăng ký, kích hoạt User
 yarn add axios
 */
import {SERVER_NAME, SERVER_PORT, APIResponse } from './apiParameters'
import axios from 'axios'
const API_REGISTER_USER = `${SERVER_NAME}:${SERVER_PORT}/users/registerUser`
export const registerUser = async (name, email, password) => {
    try {            
        let settings = {
            method: 'post',
            url: API_REGISTER_USER,
            // withCredentials: true,
            crossdomain: true,
            data: {name,email,password},    
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache",          
            }
        } 
        let response = await axios.post(settings)                        
        alert(`response = ${JSON.stringify(response)}`)   
        return new APIResponse(response.data,response.message,true) //success
    } catch(error) {
        return new APIResponse(null,error.message,false) //false
    }
}