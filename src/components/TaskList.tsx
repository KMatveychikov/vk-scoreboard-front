import React, {useEffect, useState} from 'react';
import {ITask} from "../models/ITask";
import {store} from "../index";
import {Role} from "../models/Role";
import task from "./Task";

const TaskList = () => {
    const [tasks, setTasks] = useState<ITask[]>([])
    useEffect(() => {
        store.getUncompletedTasks().then(r => setTasks(store.tasks))
    })


    return (
        <div>
            {tasks.map( task =>
            <div key={task._id}>
                <span>{task.title}</span>
                <span>{task.text}</span>
                <span>{task.taskCategory}</span>
                <span>{task.score}</span>
                <button onClick={() => store.completeTask(task._id)}>Завершить задачу</button>
            </div>
            )}

        </div>
    );
};

export default TaskList;