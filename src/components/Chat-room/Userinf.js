import React from 'react';
import {Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';
import {LeftOutlined} from '@ant-design/icons';
import { auth, db } from '../../Firebase/config';
import { AuthContext } from '../../Context/AuthProvider';

const UserStyle=styled.div`
    border-bottom: 1px solid white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    

    .username{
        color: white;
        margin-left: 5px;
    }
`;

export default function Userinf() {
    

    const {user:{
        displayName,
        photoURL
    }} = React.useContext(AuthContext);

    return (
        <UserStyle>
            
            <Button ghost onClick={()=>auth.signOut()}><LeftOutlined />Đăng xuất</Button>
            <div>
                <Avatar src={photoURL}>{photoURL?'' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className="username">{displayName}</Typography.Text>
            </div>  
        </UserStyle>
    )
}
