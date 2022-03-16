import {fireEvent, render} from "@testing-library/react-native";
import React from "react";
import {Login} from "../../src/screens/login/Login";
import {LoginScreen} from "../../src/screens";
import {Alert} from "react-native";
import {useSelector} from "react-redux";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe('Login Screen', () => {
    it('renders correctly', () => {
        const login = jest.fn();
        login.mockReturnValue({
            onAuthenticate: jest.fn(),
            onDismissError: jest.fn()
        });
        render(<LoginScreen login={login}/>);
    });
    it('Should Login successfully', async () => {
        const login = jest.fn();
        const onAuthenticateMock = jest.fn();
        login.mockReturnValue({
            onAuthenticate: onAuthenticateMock,
            onDismissError: jest.fn()
        });
        const {getAllByA11yHint, getByText} = render(
            <LoginScreen login={login}/>
        )
        const inputs = getAllByA11yHint('input');
        fireEvent.changeText(inputs[0], 'dummyuser');
        fireEvent.changeText(inputs[1], 'dummypass');
        fireEvent.press(getByText('Login'));

        expect(onAuthenticateMock).toBeCalledWith('dummyuser', 'dummypass')
    });
    it('Should show error when error', async () => {
        const login = jest.fn().mockReturnValue({
            onAuthenticate: jest.fn(),
            onDismissError: jest.fn()
        });
        useSelector.mockImplementation(selector => {
            return selector({
                AppReducer: {
                    isLoading: false,
                    error: 'error',
                }
            });
        });
        Alert.alert = jest.fn();
        render(
            <LoginScreen login={login}/>
        )

        expect(Alert.alert.mock.calls.length).toBe(1)
    });
})
