import React from 'react';

import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import {Route} from "react-router";
import RatingTable from "./components/RatingTable";
import TaskList from "./components/TaskList";
import RegistrationForm from "./components/RegistrationForm";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<LoginForm/>} path={"/login"}/>
                <Route element={<RegistrationForm/>} path={"/register"}/>
                <Route element={<RatingTable/>} path={"/rating"}/>
                <Route element={<TaskList/>} path={"/tasks"}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
