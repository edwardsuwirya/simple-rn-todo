import {SHOW_ERROR, SHOW_LOADING} from "../../utils/constants";

export function showLoading(loading) {
    return {
        type: SHOW_LOADING,
        payload: loading
    }
}

export function showError(errorMessage) {
    return {
        type: SHOW_ERROR,
        payload: errorMessage
    }
}
