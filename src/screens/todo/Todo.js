import {useDispatch, useSelector} from "react-redux";
import {showError, showLoading} from "../../store/app/AppAction";
import {addTodo} from "../../store/todo/ToDoAction";
import {MandatoryError} from "../../utils/AppError";

export const Todo = (service) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.ToDoReducer.todo);
    const todoType = useSelector(state => state.ToDoReducer.type);
    const {addTodoService} = service();

    const onSubmitTodo = async (todoName) => {
        try {
            dispatch(showLoading(true));
            if (!todoName) {
                throw new MandatoryError('Todo Name is required')
            }
            let todo = {
                title: todoName,
                complete: false
            }

            let todoId = await addTodoService(todo);
            dispatch(addTodo(
                {...todo, todoIndex: todoId.id}
            ));
        } catch (e) {
            dispatch(showError(e.message));
        } finally {
            dispatch(showLoading(false));
        }
    }
    const getVisibleTodos = () => {
        switch (todoType) {
            case 'All':
                return todos
            case 'Complete':
                return todos.filter((t) => t.complete)
            case 'Active':
                return todos.filter((t) => !t.complete)
        }
    }

    const onDismissError = () => dispatch(showError(''));
    return {
        onSubmitTodo,
        getVisibleTodos,
        onDismissError,
    };
};


