import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import classes from '../styles/LoginForm.module.css';

const RegistrationForm = () => {
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div>
            
        </div>
    );
};

export default RegistrationForm;