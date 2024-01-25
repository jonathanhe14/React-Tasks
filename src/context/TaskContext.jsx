import { createContext,useState,useEffect } from "react";
import {data} from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    setTasks(data)
  },[])

  //Funcion para guardar nuevas tareas
  function createTask(taskTitle, taskDescripcion) {
    setTasks([
      ...tasks,
      {
        name: taskTitle,
        id: tasks.length,
        descripcion: taskDescripcion,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask
  }}>{props.children}</TaskContext.Provider>;
}
