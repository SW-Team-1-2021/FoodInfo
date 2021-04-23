import axios from "axios"

const { 
    REACT_APP_BACKEND_PROTOCOL,
    REACT_APP_BACKEND_HOST,
    REACT_APP_BACKEND_PORT,
    REACT_APP_BACKEND_BASE_PATH
} = process.env;

export function createBasicAxiosInstance() {
    return axios.create({
        baseURL: `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}/${REACT_APP_BACKEND_BASE_PATH}`
    });
}

const ApiConnectionFactory = {
    createBasicAxiosInstance
}

export default ApiConnectionFactory;