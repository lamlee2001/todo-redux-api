import React from 'react';
import EditTodoForm from '../../components/EditTodo/editTodo.comp';

function EditTodo(id) {
    return (
        <>
            <EditTodoForm id={id} />
        </>
    );
}

export default EditTodo;
