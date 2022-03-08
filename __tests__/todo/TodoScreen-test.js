import {fireEvent, render, waitFor} from "@testing-library/react-native";
import React from "react";
import {Login} from "../../src/screens/login/Login";
import {LoginScreen, ToDoScreen} from "../../src/screens";
import {useSelector} from "react-redux";
import {Alert} from "react-native";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe('Todo Screen', () => {
    it('renders correctly', () => {
        const todo = jest.fn();
        todo.mockReturnValue({
            onSubmitTodo: jest.fn(),
            getVisibleTodos: jest.fn(),
            onDismissError: jest.fn()
        });
        render(<ToDoScreen todo={todo}/>);
    });
    it('Should submit todo successfully', async () => {
        const todo = jest.fn();
        const onSubmitTodoMock = jest.fn();
        todo.mockReturnValue({
            onSubmitTodo: onSubmitTodoMock,
            getVisibleTodos: jest.fn(),
            onDismissError: jest.fn()
        });
        const {getAllByA11yHint, getByText} = render(
            <ToDoScreen todo={todo}/>
        )
        const inputs = getAllByA11yHint('input');
        fireEvent.changeText(inputs[0], 'dummytodo');
        fireEvent.press(getByText('Submit'));

        expect(onSubmitTodoMock).toBeCalledWith('dummytodo')
    });
    it('Should show error when error', async () => {
        const todo = jest.fn().mockReturnValue({
            onSubmitTodo: jest.fn(),
            getVisibleTodos: jest.fn(),
            onDismissError: jest.fn()
        });
        useSelector.mockImplementation(selector => {
            return selector({
                AppReducer: {
                    isLoading: false,
                    error: 'error',
                },
                ToDoReducer: {
                    type: 'ALL'
                }
            });
        });
        Alert.alert = jest.fn();
        render(
            <ToDoScreen todo={todo}/>
        )

        expect(Alert.alert.mock.calls.length).toBe(1)
    });
})
