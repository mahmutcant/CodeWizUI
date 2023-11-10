import axios from "axios";
const baseUrl = process.env.REACT_APP_USER_SERVICE_API_URL;
export async function loginService(user) {
    try{
        const response = await axios({
            method : "POST",
            url : `${baseUrl}/login`,
            data : {
                "username" : user.username,
                "password" : user.password
            }
        })
        return response.data
    }catch(err){
        throw err
    }
}
export async function getUserInfo(){
    const response = await axios({
        method : "GET",
        url : `${baseUrl}/User/user/details`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
    })
    return response.data
}
export async function getMessage(id) {
    const response = await axios({
        method : "GET",
        url : `${baseUrl}/api/getmessages?chatId=${id}`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
     })
    return response.data
}