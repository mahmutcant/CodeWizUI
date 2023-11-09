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