import {LOGIN, LOGOUT} from "../../../src/utils/constants";
import LoginReducer from "../../../src/store/login/LoginReducer";

describe('Login Reducer', () => {
    it('should return object successfully when dispatch LOGIN', () => {
        const initialStateDummy = {
            isLoggedIn: false,
        };
        const actionDummy = {type: LOGIN, payload: true}
        const result = LoginReducer(initialStateDummy, actionDummy);
        expect(result.isLoggedIn).toBeTruthy();
    })
    it('should return object successfully when dispatch LOGOUT', () => {
        const initialStateDummy = {
            isLoggedIn: true,
        };
        const actionDummy = {type: LOGOUT}
        const result = LoginReducer(initialStateDummy, actionDummy);
        expect(result.isLoggedIn).toeFalsy();
    })
})
