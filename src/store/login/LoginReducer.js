import {LOGIN, LOGOUT} from "../../utils/constants";

const initialState = {
    isLoggedIn: false,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                ...action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
}
export default LoginReducer;
