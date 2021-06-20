import axios from 'axios';
import cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';


axios.interceptors.request.use(
    (req) => {
        if (req.url === '/api/food' && cookies.get('token')) {
            const token = cookies.get('token');
            const authorization = token ? `Bearer ${token}` : token;
            req.headers = { Authorization: authorization, ...req.headers }
        }
        return req;
    },
    (err) => {
        if (err.message.include('TokenExpiredError')) {
            cookies.remove('token');
            let history = useHistory();
            history.push({
                pathname: "/ui/login"
            });
        }
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        if (res.config.code === 200 && res.config.url === '/api/login') {
            cookies.set('token', res.data);
        }
        return res;
    },
    (err) => {
        if (err.response.status === 419) {
            cookies.remove('token');
            let history = useHistory();
            history.push({
                pathname: "/ui/login"
            });
        }
        return Promise.reject(err);
    }
);