import React from 'react';
import TodoList from '../../components/TodoList/todoList';
import Find from '../../components/Find/find';

function Home() {
    return (
        <>
            <Find />
            <TodoList />
        </>
    );
}

export default Home;
