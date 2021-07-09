import API from './api-service'

const TodoService = {

    getAllTodos: async function () {
        API.get(`/all`).then(res => {
            // console.log(res.data[0].title);
            return res
        })
        return [];
    },

    insertNewTodo: async function (newTodo) {
        // console.log("Insert")
        await API.post(`/`, { newTodo })
            .then(res => {
                console.log(res.data);
            })
    },

    updateTodo: async function (id) {
        // console.log("Update")
        await API.put(`/${id}`)
            .then(res => {
                console.log(res.data);
            })
    },

    deleteTodo: async function (id) {
        // console.log("Insert")
        await API.delete(`/${id}`)
            .then(res => {
                console.log(res.data);
            })
    }
}

export default TodoService;