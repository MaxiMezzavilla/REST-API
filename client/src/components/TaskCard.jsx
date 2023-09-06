import {useNavigate} from "react-router-dom";
import { TasksPage } from "../pages/TasksPage";

export function TaskCard({ task }) {

    const navigate = useNavigate()

    return(
        <div 
            className="bg-zinc-700 p-3 hover:bg-zinc-500
            hover: cursor-pointer rounded-lg"
            onClick= {() => {
                navigate('/tasks/' + task.id)
            }}>
                
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p className="text-slate-400">{task.description}</p>
            <hr></hr>
        </div>
    )
}
