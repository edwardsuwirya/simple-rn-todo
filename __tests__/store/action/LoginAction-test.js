import {login} from "../../../src/store/login/LoginAction";
import {LOGIN} from "../../../src/utils/constants";

describe('Login Action', () => {
    it('should return object successfully', () => {
        const mockLoginInfo = 'Inf0'
        const result = login(mockLoginInfo);
        expect(result.type).toBe(LOGIN);
        expect(result.payload).toBe(mockLoginInfo);
    })
})
