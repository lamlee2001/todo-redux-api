import { Divider } from 'antd';
import React from 'react';
import Find from '../../components/Find/find';
import TodoList from '../../components/TodoList/todoList';

function ListTodo() {
    return (
        <>
            <Find />
            <Divider />
            <TodoList />
        </>
    );
}

export default ListTodo;
