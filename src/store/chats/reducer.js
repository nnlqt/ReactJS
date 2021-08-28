import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE, SET_CHATS, SET_ERROR } from "./actionTypes";
import { AUTHORS } from '../../constants';


const initialState = {
  chats: [],
  error: null,
};

      export const chatsReducer = (state = initialState, {type, payload}) => {
          switch (type) {
      //         case ADD_CHAT: {
      //             return {
      //               ...state,
      //               [payload.chatId]: {
      //                   name: payload.name,
      //                   id: payload.chatId,
      //                   messages: []
      //               },
      //             };
      //         }
      //         case DELETE_CHAT: {
      //           const newState = { ...state };
      //           delete newState[payload];
      //           return newState;
      //       }
      //         case SEND_MESSAGE: {
      //           return {
      //             ...state,
      //             [payload.chatId]: {
      //               ...state[payload.chatId],
      //                 messages: [...state[payload.chatId].messages, payload.message]
      //             },
      //           };
      //       }
      //         default:
      //             return state;
      //     }
      // };

        case SET_CHATS: {
          return {
            ...state,
            chats: payload,
          };
        }
        case SET_ERROR: {
          return {
            ...state,
            error: payload,
          };
        }
        default:
          return state;
      }
    };
