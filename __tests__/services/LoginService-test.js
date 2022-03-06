describe('Login Service', () => {
    it('return response success', async () => {
        jest.mock('../../src/services/ApiClient', () => (
            {
                __esModule: true,
                default: jest.fn(() => ({
                    get: jest.fn(),
                    post: jest.fn().mockResolvedValue({token: '123'})
                })),
            }
        ));
        //Babel dynamic import
        //npm install babel-plugin-dynamic-import-node --save-dev
        return import('../../src/services/LoginService').then(async (module) => {
            const result = await module.default().callLoginService('123', '123');
            expect(result).toEqual('123');
        });
    });
    it('return response failed', async () => {
        jest.mock('../../src/services/ApiClient', () => (
            {
                __esModule: true,
                default: jest.fn(() => ({
                    get: jest.fn(),
                    post: jest.fn().mockRejectedValue('Error')
                })),
            }
        ));
        return import('../../src/services/LoginService').then(async (module) => {
            try {
                await module.default().callLoginService('123', '123');
            } catch (e) {
                expect(e).toEqual('Error');
            }
        });
    });
})
