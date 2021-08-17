import { PROFILE_SET_NAME, PROFILE_DROP_NAME, PROFILE_TOGGLE_SHOW } from "./actionTypes"

const initialState = {
    show: false,
    name: 'no name'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_TOGGLE_SHOW): {
            return {
                ...state,
                show: !state.show
            }   
        };
        case (PROFILE_DROP_NAME): {
            return {
                ...state,
                name: '',
            };
        }
        case (PROFILE_SET_NAME): {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
} 