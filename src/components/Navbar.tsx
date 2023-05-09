import React from 'react';
import {Link} from "react-router-dom";
import classes from '../styles/Navbar.module.css'
import {store} from "../index";
import {observer} from "mobx-react-lite";



const Navbar = observer(() => {
        const isAuth = store.isAuth
        if (isAuth) {
            return (
                <div className={ classes.navbar }>
                    <div>
                        <Link to="/tasks" className={ classes.navbar__links }>Задания</Link>
                        <Link to="/rating" className={ classes.navbar__links }>Рейтинги</Link>
                        <Link to="/profile" className={ classes.navbar__links }>Профиль</Link>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={ classes.navbar }>
                    <Link to="/login" className={ classes.navbar__links }>Войти</Link>
                    <Link to="/register" className={ classes.navbar__links }>Регистрация</Link>
                </div>
            );
        }
    }
);

export default Navbar;