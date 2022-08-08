import { Task } from "./Task"
const Tasks=({tasks,onDelete,onToggle})=>{
  return (
    <div>{tasks.map((task,index)=>(<Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>))}</div>
  )
}//using map function we are passing the values from task[array] one by one

export default Tasks 