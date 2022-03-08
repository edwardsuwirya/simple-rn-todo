import {useDispatch, useSelector} from "react-redux";
import {showError} from "../../src/store/app/AppAction";
import {Todo} from "../../src/screens/todo/Todo";
import {addTodo} from "../../src/store/todo/ToDoAction";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe('Todo Business Logic Test', () => {
    it('Should successfully add todo', async () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        const addTodoServiceMock = jest.fn();
        service.mockReturnValue({
            addTodoService: addTodoServiceMock.mockResolvedValue({id: '123'}),
        });

        await Todo(service).onSubmitTodo('dummytodo');
        expect(addTodoServiceMock).toBeCalledWith({"complete": false, "title": "dummytodo"});
        expect(mockedDispatch).toHaveBeenNthCalledWith(2, addTodo({
            "complete": false,
            "title": "dummytodo",
            "todoIndex": "123"
        }))

    })
    it('Should show error when service throw error', async () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        const addTodoServiceMock = jest.fn();
        service.mockReturnValue({
            addTodoService: addTodoServiceMock.mockRejectedValue({message: '401'}),
        });

        await Todo(service).onSubmitTodo('dummytodo');
        expect(mockedDispatch).toHaveBeenNthCalledWith(2, showError('401'));
    })
    it('Should show error when todo is empty', async () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        service.mockReturnValue({
            addTodoService: jest.fn()
        });

        await Todo(service).onSubmitTodo('');
        expect(mockedDispatch).toHaveBeenNthCalledWith(2, showError('Todo Name is required'));
    })
    it('Should dismiss error', () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        service.mockReturnValue({
            addTodoService: jest.fn(),
        });
        Todo(service).onDismissError();
        expect(mockedDispatch).toBeCalledWith(showError(''));
    })
    it('Should return todo with selected type', () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        service.mockReturnValue({
            addTodoService: jest.fn(),
        });
        const todos = [{
            title: '123',
            complete: false
        }, {
            title: '234',
            complete: true
        }, {
            title: '346',
            complete: true
        }]
        useSelector.mockImplementation(selector => {
            return selector({
                ToDoReducer: {
                    type: 'All',
                    todo: todos
                }
            });
        });
        const result = Todo(service).getVisibleTodos()
        expect(result.length).toBe(3);

        useSelector.mockImplementation(selector => {
            return selector({
                ToDoReducer: {
                    type: 'Complete',
                    todo: todos
                }
            });
        });
        const resultComplete = Todo(service).getVisibleTodos()
        expect(resultComplete.length).toBe(2);

        useSelector.mockImplementation(selector => {
            return selector({
                ToDoReducer: {
                    type: 'Active',
                    todo: todos
                }
            });
        });
        const resultActive = Todo(service).getVisibleTodos()
        expect(resultActive.length).toBe(1);
    })
})
