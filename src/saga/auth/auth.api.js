import axios from 'axios';
import createAxios from '../../services';

const TODO_API = {
    registerUser: async (data) => {
        return await axios.post('https://a4ad-118-69-77-229.ap.ngrok.io/v1/auth/register', data);
    },
    loginUser: async (data) => {
        return await axios.post('https://a4ad-118-69-77-229.ap.ngrok.io/v1/auth/login', data);
    },
    getMe: async () => {
        return await createAxios().get('/me');
    },
};
export default TODO_API;
