import {useDeps} from "../../src/utils/DependencyContext";
import LoginService from "../../src/services/LoginService";
jest.mock('../../src/utils/DependencyContext', () => {
    return {
        useDeps: jest.fn().mockReturnValue({
            apiClient: {
                post: jest.fn()
            },
            localStorage: {
                setData: jest.fn()
            }
        })
    }
})
describe('Login Service', () => {

    it('should success return', async () => {
        let mockSetData = jest.fn()
        const deps = useDeps()
        deps.apiClient.post.mockResolvedValue({token: '123'})
        deps.localStorage.setData = mockSetData
        await LoginService().callLoginService('dummyuser', 'dummypass')
        expect(mockSetData).toBeCalledWith('token', '123')
    })
    it('should failed return', async () => {
        useDeps().apiClient.post.mockRejectedValue('error')
        try {
            await LoginService().callLoginService('dummyuser', 'dummypass')
        } catch (e) {
            expect(e).toBe('error')
        }
    })
})
