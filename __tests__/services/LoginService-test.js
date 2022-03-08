jest.mock('../../src/utils/DependencyContext', () => {
    return {
        useDeps: jest.fn().mockReturnValue({
            apiClient: jest.fn(),
            localStorage: jest.fn()
        })
    }
})
import {useDeps} from "../../src/utils/DependencyContext";
import LoginService from "../../src/services/LoginService";

describe('Login Service', () => {

    it('should success return', async () => {
        let mockSetData = jest.fn()
        useDeps().apiClient.post = jest.fn().mockResolvedValue({token: '123'})
        useDeps().localStorage.setData = mockSetData
        await LoginService().callLoginService('dummyuser', 'dummypass')
        expect(mockSetData).toBeCalledWith('token', '123')
    })
    it('should failed return', async () => {
        useDeps().apiClient.post = jest.fn().mockRejectedValue('error')
        try {
            await LoginService().callLoginService('dummyuser', 'dummypass')
        } catch (e) {
            expect(e).toBe('error')
        }
    })
})
