import axios from "axios";
const baseUrl = "https://c1f4-176-33-117-60.ngrok-free.app";
const baseUrlBot = "https://c308-34-132-132-248.ngrok-free.app";

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
    if(activeChat) {
        const response = await axios({
            method : "POST",
            url : `${baseUrlBot}/root`,
            data : {
                "message" : message,
                "history" : history
            }
        })
        return response.data
    }
    else{
        const response = await axios({
            method : "POST",
            url : `${baseUrlBot}/root`,
            data : {
                "message" : message + " Can you refactor this code in its most correct form please give only answer Can you please pay attention to the indentations and protrusions? Can you write in which language this code is written as language : ?",
                "history" : ["",""]
            }
        })
        return response.data
    }
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