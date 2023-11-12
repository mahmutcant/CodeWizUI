import axios from "axios";
const baseUrl = process.env.REACT_APP_USER_SERVICE_API_URL;
const baseUrlBot = process.env.REACT_APP_BOT_SERVICE_API_URL;
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
            Authorization : `Bearer ${localStorage.getItem('token')}`,
            'ngrok-skip-browser-warning': 'true' 
        }
    })
    return response.data
}
export async function getMessage(id) {
    const response = await axios({
        method : "GET",
        url : `${baseUrl}/api/getmessages?chatId=${id}`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
            'ngrok-skip-browser-warning': 'true' 
        }
     })
    return response.data
}
export async function addNewMessage(chatId,message,botResponse){
    const response = await axios({
        method : "GET",
        url : `${baseUrl}/api/addmessage`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`,
            'ngrok-skip-browser-warning': 'true' 
        },
        data : {
            "userMessage": message,
            "messageContent": botResponse
        }
    })
}
export async function sendMessage(message,history,activeChat){
    activeChat ? await axios({
        method : "POST",
        url : `${baseUrlBot}/root`,
        data : {
            "message" : message,
            "history" : history
        }
    }).then(data => {writeDatabase(data.data)}) : await axios({
        method : "POST",
        url : `${baseUrlBot}/root`,
        data : {
            "message" : message
        }
    }).then(data => {createChat(data.data)})
}
export async function createChat(chatName){
    await axios({
        method : "POST",
        url : `${baseUrl}/api/createChat`,
        data : {
            "chatName" : chatName
        }
    }).then(data => writeDatabase(data.data.chatId))
}
export async function writeDatabase(userMessage,messageContent,chatId){
    const response = await axios({
        method : "POST",
        url : `${baseUrl}/api/addmessage?chatId=${chatId}`,
        data : {
            "userMessage": userMessage,
            "messageContent": messageContent
        }
    })
}