import ApiConnectionFactory from "../../helpers/ApiConnectionFactory";

const URL = `alimento/`;

export function getAlimentoPorId(id) {
    const instance = ApiConnectionFactory.createBasicAxiosInstance();
    return instance.post(URL + id);
}

export function getAlimentos() {
    const instance = ApiConnectionFactory.createBasicAxiosInstance();
    return instance.get(URL);
}

export function postAlimento(alimento) {
    const instance = ApiConnectionFactory.createBasicAxiosInstance();
    return instance.post(URL, alimento);
}

//GET, POST, PUT, DELETE
const AlimentoAxios = {
    postAlimento,
    getAlimentoPorId,
    getAlimentos,
}

export default AlimentoAxios;