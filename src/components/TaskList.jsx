import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import { useContext } from "react";


function TaskList() {
  const {tasks} = useContext(TaskContext);
  return (
    <div className="grid grid-cols-4 gap-2 ">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}

export default TaskList;
