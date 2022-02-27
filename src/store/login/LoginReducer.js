import {LOGIN, LOGOUT} from "../../utils/constants";

const initialState = {
    isLoggedIn: false,
    error: ''
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                error: '',
                isLoggedIn: action.payload
            }
        }
        case LOGOUT: {
            return {
                error: '',
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
}
export default LoginReducer;
