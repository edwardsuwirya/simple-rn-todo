import {login} from "../../store/login/LoginAction";
import {useDispatch} from "react-redux";
import {goToScreen} from "../../navigation/NavigationHelper";
import {TODO_PATH} from "../../navigation/NavigationPath";
import {showError, showLoading} from "../../store/app/AppAction";

export const Login = (service) => {
    const dispatch = useDispatch();
    const {callLoginService} = service();
    const onAuthenticate = async (userName, password) => {
        try {
            dispatch(showLoading(true));
            await callLoginService(userName, password);
            dispatch(login({isLoggedIn: true}));
            goToScreen(TODO_PATH, true);
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }

    const onDismissError = () => dispatch(showError(''));
    return {
        onAuthenticate,
        onDismissError
    };
};


