import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes";
import { AUTHORS } from '../../constants';

const initialState = {
        chat1: {
          messages: [{ text: 'Hello', author: AUTHORS.human, id: 'chat1-1'}],
          name: 'Chat 1',
          id: 'chat1'
        },
        chat2: {
          messages: [{ text: 'Hi', author: AUTHORS.human, id: 'chat2-1'}],
          name: 'Chat 2',
          id: 'chat2'
        },
          chat3: {
          messages: [],
          name: 'Chat 3',
          id: 'chat3'},
      };

      export const chatsReducer = (state = initialState, {type, payload}) => {
          switch (type) {
              case ADD_CHAT: {
                  return {
                    ...state,
                    [payload.chatId]: {
                        name: payload.name,
                        id: payload.chatId,
                        messages: []
                    },
                  };
              }
              case DELETE_CHAT: {
                const newState = { ...state };
                delete newState[payload];
                return newState;
            }
              case SEND_MESSAGE: {
                return {
                  ...state,
                  [payload.chatId]: {
                    ...state[payload.chatId],
                      messages: [...state[payload.chatId].messages, payload.message]
                  },
                };
            }
              default:
                  return state;
          }
      };

