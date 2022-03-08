import {Login} from "../../src/screens/login/Login";
import {useDispatch} from "react-redux";
import {showError} from "../../src/store/app/AppAction";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
describe('Login Business Logic Test', () => {
    it('Should successfully login', async () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        const callLoginServiceMock = jest.fn();
        service.mockReturnValue({
            callLoginService: callLoginServiceMock.mockResolvedValue(),
        });

        await Login(service).onAuthenticate('dummyuser', 'dummypass');
        expect(callLoginServiceMock).toBeCalledWith('dummyuser', 'dummypass');
    })
    it('Should failed login', async () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        const callLoginServiceMock = jest.fn();
        service.mockReturnValue({
            callLoginService: callLoginServiceMock.mockRejectedValue({message: '401'}),
        });

        await Login(service).onAuthenticate('dummyuser', 'dummypass');
        expect(mockedDispatch).toHaveBeenNthCalledWith(2, showError('401'));
    })
    it('Should dismiss error', () => {
        const mockedDispatch = jest.fn();
        useDispatch.mockReturnValue(mockedDispatch);
        const service = jest.fn();
        service.mockReturnValue({
            callLoginService: jest.fn(),
        });
        Login(service).onDismissError();
        expect(mockedDispatch).toBeCalledWith(showError(''));
    })
})
