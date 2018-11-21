/**
 Khoá học FullStackNodejs 2018 - Techmaster Vietnam
 Instructor: Nguyễn Đức Hoàng
 File này chứa thông tin liên quan đến API, VD: server name, port,...
 */
export const SERVER_NAME = 'http://localhost'
export const SERVER_PORT = '3000'
export class APIResponse {
    constructor(data, message, result){
        this.data = data ? data : {}
        this.message = message ? message : ""
        this.result = result
    }
}