import clientService from "./ApiClient";


const LoginService = () => {
    const callLoginService = async (username, password) => {
        try {
            let data = await clientService().post(`/login`, {
                username,
                password,
            });
            console.log(data);
            return data.token;
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
