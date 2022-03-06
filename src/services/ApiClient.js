import axios from "axios";
import {API_URL} from "@env";
import {goToLogin} from "../navigation/NavigationHelper";
import {GlobalError, UnauthorizedError} from "../utils/AppError";
import LocalStorage from "../utils/LocalStorage";
import {logout} from "../store/login/LoginAction";
import store from "../store/store";

const client = axios.create({
    baseURL: API_URL,
});
// Interceptor akan berjalan ketika service membalikan response
// apabila terjadi server down, interceptor ini akan kena exception
// karena client == null / undefined
// oleh karenanya dibuatlah wrapper clientService dengan "meng-override" get & post axios
// lalu dibungkus try-catch
// Alternatif lain, menggunakan mekanisme cek network connectivity, menggunakan 3rd party library / buat utility sendiri

// Untuk debuggung install reactotron
// https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md
// npm i --save-dev reactotron-react-native
// Jalankan aplikasi reactotron
// Restart react-native
// Buat ReactotronConfig.js di utils
// Modifikasi App.js
// Pastikan debug mode terbuka
client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        store.dispatch(logout());
        goToLogin();
    }
    return Promise.reject(error);
});
axios.interceptors.request.use(async (config) => {
    // Do something before request is sent
    if (config.url !== '/login') {
        const token = await LocalStorage().getData('token');
        config.headers = {
            'Authorization': `Bearer ${token}`,
        }
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

const clientService = () => {
    const get = async (url) => {
        try {
            let result = await client.get(url);
            return result.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    throw new UnauthorizedError("Unauthorized")
                }
            } else {
                throw new GlobalError("Oops")
            }
        }
    }
    const post = async (url, params) => {
        try {
            let result = await client.post(url, params);
            return result.data;
        } catch (e) {
            if (e.response) {
                if (e.response.status === 401) {
                    throw new UnauthorizedError("Unauthorized")
                }
            } else {
                throw new GlobalError("Oops")
            }
        }
    }

    return {
        get,
        post
    }
}
export default clientService;
