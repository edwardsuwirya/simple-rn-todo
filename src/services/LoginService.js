import {useDeps} from "../utils/DependencyContext";

const LoginService = () => {
    const {apiClient,localStorage} = useDeps();
    const callLoginService = async (username, password) => {
        try {
            let data = await apiClient.post(`/login`, {
                username,
                password,
            });
            console.log(data);
            await localStorage.setData('token', data.token);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    return {
        callLoginService,
    }
}

export default LoginService;
