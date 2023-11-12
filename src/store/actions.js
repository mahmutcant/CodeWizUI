import {SET_USER} from './types';

export const setUser = (payload) => (
    {
    type : SET_USER,
    payload : {
        email: payload.userEmail,
        username: payload.userName,
        firstName : payload.firstName,
        chats : payload.chats
    },
} );