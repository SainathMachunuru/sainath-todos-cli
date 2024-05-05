import axios from 'axios';

const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTODOSById =  async (id) => {
    return axios.get(`${TODOS_API_URL}/${id}`);
}