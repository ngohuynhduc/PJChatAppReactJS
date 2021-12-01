import React, { useEffect, useState } from 'react';
import {Spin} from 'antd';
import { useNavigate } from 'react-router';
import { auth } from '../Firebase/config';

export const AuthContext = React.createContext();
export default function AuthProvider({children}) {
    const navigate=useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    React.useEffect(()=>{
        const unsubcribed=auth.onAuthStateChanged((user)=>{
            console.log({user});
            if (user)
            {
                const { displayName, email, uid, photoURL} =user
                setUser({displayName, email, uid, photoURL});
                setisLoading(false);
                navigate('/');
                return;
            }
            setisLoading(false);
            navigate('/login');
        });

        return ()=>{
            unsubcribed();
        }
    },[navigate])
    return (
        <AuthContext.Provider value={{user}}>
            {isLoading ? <Spin/> :children}
        </AuthContext.Provider>
            
    )
}
