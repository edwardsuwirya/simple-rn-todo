describe('Todo Service', () => {
    it('return response success when add todo', async () => {
        jest.mock('../../src/services/ApiClient', () => (
            {
                __esModule: true,
                default: jest.fn(() => ({
                    get: jest.fn(),
                    post: jest.fn().mockResolvedValue({id: '123'})
                })),
            }
        ));
        //Babel dynamic import
        //npm install babel-plugin-dynamic-import-node --save-dev
        return import('../../src/services/TodoService').then(async (module) => {
            const result = await module.default().addTodo({});
            expect(result.id).toEqual('123');
        });
    });
    it('return response failed when add todo', async () => {
        jest.mock('../../src/services/ApiClient', () => (
            {
                __esModule: true,
                default: jest.fn(() => ({
                    get: jest.fn(),
                    post: jest.fn().mockRejectedValue('Error')
                })),
            }
        ));
        return import('../../src/services/TodoService').then(async (module) => {
            try {
                await module.default().addTodo({});
            } catch (e) {
                expect(e).toEqual('Error');
            }
        });
    });
})
