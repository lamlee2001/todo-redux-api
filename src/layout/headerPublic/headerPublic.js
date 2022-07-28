import React from 'react';
import { Button, Typography, Tabs } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

function HeaderPublic() {
    const location = useLocation();
    const { Title } = Typography;
    const { TabPane } = Tabs;
    return (
        <>
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX-SAGA</Title>
            <nav>
                <div className="nav-button">
                    <Tabs defaultActiveKey={location.pathname}>
                        <TabPane
                            tab={
                                <span>
                                    <Button className="selector-btn">
                                        <Link to="/signIn">Sign In</Link>
                                    </Button>
                                </span>
                            }
                            key="/signIn"
                        ></TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Button className="selector-btn">
                                        <Link to="/register">Register</Link>
                                    </Button>
                                </span>
                            }
                            key="/register"
                        ></TabPane>
                    </Tabs>
                </div>

                <Outlet />
            </nav>
        </>
    );
}

export default HeaderPublic;
