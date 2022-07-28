import React, { useState } from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import './todoForm.scss';
import { useDispatch } from 'react-redux';
import { addRequest } from '../../saga/Todo/todo.actions';
import { toast } from 'react-toastify';
import { Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { replace } from 'formik';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const btnAddTodo = () => {
        return dispatch(
            addRequest({ name: input }, () => {
                toast.success('Add Success');
                setInput('');
                navigate('/home', replace(true));
            }),
        );
    };

    return (
        <>
            <div className="todo-form">
                <>
                    <input
                        placeholder="ziết cái zì đó đê pạn chẻ"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="todo-input"
                    />
                    <CheckCircleOutlined onClick={btnAddTodo} className="todo-button edit" />
                </>
            </div>
            <Divider />
        </>
    );
}

export default TodoForm;
