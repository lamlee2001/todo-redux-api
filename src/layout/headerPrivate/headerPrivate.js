import React from 'react';
import { Button, Typography, Tabs } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from '../../saga/auth/auth.actions';
import { isSignInSelector } from '../../saga/auth/auth.selector';

function HeaderPrivate() {
    const location = useLocation();
    const { Title } = Typography;
    const { TabPane } = Tabs;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSignIn = useSelector(isSignInSelector);
    return (
        <>
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX-SAGA</Title>
            <nav>
                <div className="nav-button">
                    <Tabs defaultActiveKey={location.pathname}>
                        <TabPane
                            tab={
                                <span>
                                    <Button>
                                        <Link to="/home">Home</Link>
                                    </Button>
                                </span>
                            }
                            key="/home"
                        ></TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Button className="selector-btn">
                                        <Link to="/addTodo">Add Todo</Link>
                                    </Button>
                                </span>
                            }
                            key="/addTodo"
                        ></TabPane>

                        <TabPane
                            tab={
                                <span>
                                    <Button className="selector-btn">
                                        <Link
                                            onClick={() => {
                                                localStorage.removeItem('login');
                                                dispatch(logOutRequest());
                                                isSignIn(false);
                                                navigate('/');
                                            }}
                                            to="/"
                                        >
                                            Log Out
                                        </Link>
                                    </Button>
                                </span>
                            }
                            key="/logout"
                        ></TabPane>
                    </Tabs>
                </div>

                <Outlet />
            </nav>
        </>
    );
}

export default HeaderPrivate;
