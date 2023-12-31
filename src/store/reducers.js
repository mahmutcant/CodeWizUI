const initialState = {
    user: {
      userName: '',
      userEmail: '',
      chats: []
    }
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: {
            ...state.user,
            userName: action.payload.username,
            userEmail: action.payload.email,
            userFirstName : action.payload.firstName,
            userLastName : action.payload.lastName,
            chats: action.payload.chats
          }
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;