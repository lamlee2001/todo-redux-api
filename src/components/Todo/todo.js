import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteRequest } from '../../saga/Todo/todo.actions';
import EditTodoForm from '../EditTodo/editTodo.comp';
import { userIdSelector } from '../../saga/auth/auth.selector';

export default function Todo({ name, id, userId }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userID = useSelector(userIdSelector);
    const btnDeleteTodo = () => {
        dispatch(
            deleteRequest({ id: id, userId: userID }, () => {
                toast.success('Delete Success');
            }),
        );
    };

    // eslint-disable-next-line no-unused-vars
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = () => {
        navigate(`/${id}/${name}`, { replace: true });
        setShow(!show);
    };

    if (show) {
        return <EditTodoForm edit={edit} id={id} setShow={setShow} />;
    }

    return (
        <div className="todo-row">
            <div>{name}</div>

            {userId === userID && (
                <div className="icons">
                    <DeleteOutlined
                        className="delete-icon"
                        onClick={btnDeleteTodo}
                        style={{ fontSize: 20, cursor: 'pointer' }}
                    />

                    <EditOutlined
                        className="edit-icon"
                        onClick={submitUpdate}
                        style={{ marginLeft: 10, fontSize: 20, cursor: 'pointer' }}
                    ></EditOutlined>
                </div>
            )}
        </div>
    );
}
