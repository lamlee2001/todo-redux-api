import { Col, Row, Input, Typography, Divider } from 'antd';

const { Search } = Input;

function Find() {
    return (
        <>
            <Row justify="center">
                <Col span={24}>
                    <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3 }}>Search</Typography.Paragraph>
                    <Search placeholder="input search text" />
                </Col>
            </Row>
            <Divider />
        </>
    );
}

export default Find;
