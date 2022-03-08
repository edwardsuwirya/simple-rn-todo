import clientService from "./ApiClient";
import LocalStorage from "../utils/LocalStorage";


const LoginService = () => {
    const callLoginService = async (username, password) => {
        try {
            let data = await clientService().post(`/login`, {
                username,
                password,
            });
            console.log(data);
            await LocalStorage().setData('token', data.token);
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
