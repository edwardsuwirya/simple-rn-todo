import clientService from "./ApiClient";

const ToDoService = () => {
    const addTodo = async (todo) => {
        try {
            let data = await clientService().post('/todos', {
                todo
            });
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    const getTodo = async () => {
        try {
            let data = await clientService().get('/todos');
            console.log(data);
            return data.todos;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    return {addTodo, getTodo}
}

export default ToDoService;
