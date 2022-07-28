import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest } from '../../saga/Todo/todo.actions';
import { addTodoSelector } from '../../saga/Todo/todo.selector';
import Todo from '../Todo/todo';
import './todoList.scss';

function TodoList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRequest('fetch Request'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const todoList = useSelector(addTodoSelector);
    return (
        <>
            <Row style={{ height: 'calc(100% - 40px)' }}>
                <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                    {todoList
                        ? todoList?.map((todo) => (
                              <Todo key={todo._id} id={todo._id} name={todo.name} userId={todo.userId} />
                          ))
                        : null}
                </Col>
            </Row>
        </>
    );
}

export default TodoList;
