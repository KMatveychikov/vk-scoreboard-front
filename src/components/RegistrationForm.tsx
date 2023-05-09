import React, {useContext, useState} from 'react';
import {Context} from "../index";
import classes from '../styles/Form.module.css';

const RegistrationForm = () => {
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <div className={classes.loginForm}>
            <input
                className={classes.login__items}
                onChange={e => setUserName(e.target.value)}
                value={userName}
                type="text"
                placeholder='Имя'
            />
            <input
                className={classes.login__items}
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                className={classes.login__items}
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.registration(userName, email,password)} className={classes.login__items}>
                Регистрация
            </button>
        </div>
    );
};

export default RegistrationForm;