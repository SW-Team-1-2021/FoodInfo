import axios from 'axios';
import cookies from 'js-cookie';

axios.interceptors.request.use(
    (req) => {
        if (req.url.includes('/api/food') && cookies.get('token')) {
            const token = cookies.get('token');
            req.params = { token: token };
        }
        return req;
    },
    (err) => {
        if (err.response.data.message.include('TokenExpiredError')) {
            cookies.remove('token');
            window.location = '/ui/login';
        }
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    (res) => {
        if (res.status === 200 && res.config.url.includes('/api/login')) {
            cookies.set('token', res.data);
            window.location = '/ui/inicio';
        }
        return res;
    },
    (err) => {
        if (err.response.data.message.includes('TokenExpiredError')) {
            cookies.remove('token');
            window.location = '/ui/login';
        }
        return Promise.reject(err);
    }
);