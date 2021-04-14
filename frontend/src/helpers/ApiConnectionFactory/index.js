import axios from "axios"

const { REACT_APP_BACKEND_PROTOCOL, REACT_APP_BACKEND_HOST, REACT_APP_BACKEND_PORT } = process.env;

export function createBasicAxiosInstance() {
    return axios.create({
        baseURL: `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}/`
    });
}

const ApiConnectionFactory = {
    createBasicAxiosInstance
}

export default ApiConnectionFactory;