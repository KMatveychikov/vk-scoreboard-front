import React, {useEffect, useState} from 'react';
import {ITask} from "../models/ITask";
import {store} from "../index";
import classes from '../styles/Task.module.css'
import {Role} from "../models/Role";

const TaskList = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [addTaskFormVisibility, setAddTaskFormVisibility] = useState<boolean>(false)
    useEffect(() => {
        store.getUncompletedTasks().then(r => setTasks(store.tasks))
    })

    return (
        <div className={classes.taskList}>
            {tasks.map(task =>
                <div key={task._id} className={classes.task__item}>
                    <span className={classes.task__element}>{task.title}</span>
                    <span className={classes.task__element}>{task.text}</span>
                    <span className={classes.task__element}>{task.taskCategory}</span>
                    <span className={classes.task__element}>{task.score}</span>
                    <button className={classes.task__element} onClick={() => {
                        store.completeTask(task._id)
                        store.getUncompletedTasks().then(r => setTasks(store.tasks))
                    }}>Завершить задачу</button>
                </div>
            )}
        </div>
    );
};

export default TaskList;