import { CheckCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRequest, updateRequest } from '../../saga/Todo/todo.actions';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { replace } from 'formik';
import { userIdSelector } from '../../saga/auth/auth.selector';

function EditTodoForm(props) {
    const [newInput, setNewInput] = useState(props.edit ? props.edit.value : '');
    const dispatch = useDispatch();
    const id = useParams().id;
    const name = useParams().name;
    const navigagte = useNavigate();
    const userId = useSelector(userIdSelector);
    useEffect(() => {
        dispatch(fetchRequest('fetch Request'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        setNewInput(e.target.value);
    };
    const btnUpdate = () => {
        return dispatch(
            updateRequest({ _id: id, userId: userId, name: newInput }, () => {
                toast.success('Update Success!!!');
                navigagte('/home', replace(true));
            }),
        );
    };

    return (
        <>
            <div className="todo-form">
                <input
                    style={{ color: 'black' }}
                    placeholder={name}
                    value={newInput}
                    onChange={handleChange}
                    name="text"
                    className="todo-input edit"
                />
                <CheckCircleOutlined onClick={btnUpdate} className="todo-button edit" />
            </div>
        </>
    );
}

export default EditTodoForm;
