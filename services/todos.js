const axios  = require('axios')

const TODOS_API_URL = "https://jsonplaceholder.typicode.com/todos";

const getTODOSById =  async (id) => {
    return axios.get(`${TODOS_API_URL}/${id}`);
}

module.exports = {
    getTODOSById
}