import React from 'react';
import { Row, Col, Button, Typography} from 'antd';
import { FacebookFilled, MessageFilled, GoogleSquareFilled } from '@ant-design/icons';
import firebase,{ auth, db } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { addDocument, generateKeywords } from '../../Firebase/service';



const fbProvider = new firebase.auth.FacebookAuthProvider();
const {Title}=Typography;
export default function Login() {

    const hdlFBlogin= async () =>{
        const {additionalUserInfo,user} = await auth.signInWithPopup(fbProvider);

        if(additionalUserInfo?.isNewUser){
            addDocument('users',{
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName)
            });
        }
    };
    return (
        <div className="App">
            <Row justify='center' style={{ height: 1000}}>
                <Col span={8}>
                    <Title style={{textAlign:"center"}} level={1}>
                        ChatRum <MessageFilled style={{ fontSize: '200%'}}/>
                    </Title>
                <Button style={{ justifyContent: 'center'}} onClick={hdlFBlogin}><FacebookFilled/> Đăng nhập bằng Facebook </Button><br/>
                <Button style={{ justifyContent: 'center', marginTop: 5}}><GoogleSquareFilled/> Đăng nhập bằng Google </Button>
                </Col>
            </Row>

        </div>
    )
}
