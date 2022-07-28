import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';
import TodoForm from '../../components/TodoForm/todoForm';
import TodoList from '../../components/TodoList/todoList';

function AddTodo() {
    return (
        <>
            <TodoForm />
            <TodoList />
        </>
    );
}

export default AddTodo;
