import "./JiiraReplica.css";
import { useEffect, useState } from "react";
export default function JiiraReplica() {
    const [tasks, setTasks] = useState([]);
    const [todoTasks, setTodoTasks] = useState([]);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    useEffect(() => {
        const dummyTasks = [
            {
                taskId: 1,
                taskName: "task 1",
                taskState: "todo",
            },
            {
                taskId: 2,
                taskName: "task 2",
                taskState: "todo",
            },
            {
                taskId: 3,
                taskName: "task 3",
                taskState: "todo",
            },
            {
                taskId: 4,
                taskName: "task 4",
                taskState: "todo",
            },
            {
                taskId: 5,
                taskName: "task 5",
                taskState: "todo",
            },
            {
                taskId: 6,
                taskName: "task 6",
                taskState: "todo",
            },
        ];
        setTasks(dummyTasks);
    }, []);
    useEffect(() => {
        const divideTasksByState = () => {
            const todoFilter = tasks.filter(
                (task) => task.taskState === "todo"
            );
            setTodoTasks(todoFilter);
            const inProgressFilter = tasks.filter(
                (task) => task.taskState === "inProgress"
            );
            setInProgressTasks(inProgressFilter);
            const completedFilter = tasks.filter(
                (task) => task.taskState === "completed"
            );
            setCompletedTasks(completedFilter);
        };
        divideTasksByState();
    }, [tasks]);
    function handleTaskChange(selectedTask) {
        const updatedTasks = tasks.map((task) => {
            if (task.taskId === selectedTask.taskId) {
                if (task.taskState === "todo") task.taskState = "inProgress";
                else if (task.taskState === "inProgress")
                    task.taskState = "completed";
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <>
            <div className='container'>
                <div className='containerItem'>
                    <h3>to do</h3>
                    {todoTasks.map((todo) => (
                        <h4
                            key={todo.taskId}
                            onClick={() => handleTaskChange(todo)}
                        >
                            {todo.taskName}
                        </h4>
                    ))}
                </div>
                <div className='containerItem'>
                    <h3>in progress</h3>
                    {inProgressTasks.map((inProgress) => (
                        <h4
                            key={inProgress.taskId}
                            onClick={() => handleTaskChange(inProgress)}
                        >
                            {inProgress.taskName}
                        </h4>
                    ))}
                </div>
                <div className='containerItem'>
                    <h3>completed</h3>
                    {completedTasks.map((completed) => (
                        <h4
                            key={completed.taskId}
                            onClick={() => handleTaskChange(completed)}
                        >
                            {completed.taskName}
                        </h4>
                    ))}
                </div>
            </div>
        </>
    );
}
