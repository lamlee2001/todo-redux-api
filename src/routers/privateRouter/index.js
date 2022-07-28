import { Routes, Route } from 'react-router-dom';
import SignIn from '../../page/signIn/signIn';
import AddTodo from '../../page/addTodo/addTodo';
import EditTodo from '../../page/editTodo/editTodo';
import Home from '../../page/home/home';
import NotFound from '../../page/notFound/notFound';

const PrivateRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}>
                <Route path="home" element={<Home />} />
            </Route>

            <Route path="addTodo" element={<AddTodo />} />
            <Route path=":id/:name" element={<EditTodo />} />
            <Route path="logout" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default PrivateRouter;
