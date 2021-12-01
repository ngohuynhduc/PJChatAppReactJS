import React from 'react'
import { Row, Col} from 'antd';
import ListRoom from './ListRoom';
import Userinf from './Userinf';
import styled from 'styled-components';



const StyleSidebar = styled.div`
    background: #3b5998;
    color: white;
    height: 100vh;
`;

export default function SideBar() {
    return (
        <StyleSidebar>
            <Row>
                <Col span={24}><Userinf /></Col>
                <Col span={24}><ListRoom /></Col>
            </Row>
        </StyleSidebar>
    )
}
