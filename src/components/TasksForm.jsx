import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TasksForm() {

    const [title, setTitle] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const {createTask} = useContext(TaskContext);

    const handleSubmit =(e)=>{
        e.preventDefault();
        createTask(title,descripcion)
        setTitle('');
        setDescripcion('');
    }
    


  return (
    <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2" placeholder="Escriba una tarea" onChange={(e)=>setTitle(e.target.value)} value={title}/>
      <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Descripcion de la tarea" onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>

  );
}

export default TasksForm;
