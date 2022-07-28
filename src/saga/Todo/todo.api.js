import createAxios from '../../services';

const TODO_API = {
    fetch: async () => {
        return await createAxios().get('/todos?page=1&limit=30');
    },
    add: async (data) => {
        return await createAxios().post('/todo', data);
    },
    update: async (data) => {
        return await createAxios().put('/todo', data);
    },
    delete: async (id, userId) => {
        return await createAxios().delete(`/todo?_id=${id}`, { data: { userId: userId } });
    },
};
export default TODO_API;
