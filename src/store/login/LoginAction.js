import {LOGIN, LOGOUT, SHOW_LOADING} from "../../utils/constants";

export function login(loginInfo) {
    return {
        type: LOGIN,
        payload: loginInfo
    }
}

export function logout() {
    return {
        type: LOGOUT,
    }
}
