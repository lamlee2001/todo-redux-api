import axios from 'axios';

const createAxios = () => {
    const instance = axios.create({
        baseURL: 'https://a4ad-118-69-77-229.ap.ngrok.io/v1',
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
    });
    return instance;
};

export default createAxios;
