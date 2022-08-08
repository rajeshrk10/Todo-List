//importing every components
import Header from './components/header' 
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
import {useState,useEffect} from 'react';
function App() {
  const[showAddTask,setShowAddTask]= useState(false)
  const [tasks,setTasks]=useState([])

//
useEffect(()=>{
    const getTasks= async()=>{
      const TaskFromServer= await fetchTasks()
      setTasks(TaskFromServer)
    }
  getTasks()
},[])


// fetching task one by one from server
const fetchTasks= async()=>{
  const res= await fetch('http://localhost:5000/tasks')
  const data= await res.json()
  return data
}

//fetching single task from server using specific id 
const singleTask= async (id)=>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data= await res.json()
  return data
}


// deleting a task using its id
const deleteTask= async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
  setTasks(tasks.filter((task)=>task.id!==id))//it has id of the array value and when we click the cross in UI the id of the component will assign in task.id and checking if the id and task.id is not equal and if it is it will remove, by using filter function.
}
// adding task in server
const addTask=async(task)=>{
     const res=await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(task),
     })
     const data= await res.json()
     setTasks([...tasks,data])
};


// setting reminder for task assigned in server
const toggleReminder=async(id)=>{
  const tasktoggle= await singleTask(id)
  const updatetoggle={...tasktoggle,reminder:!tasktoggle.reminder}
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json',
    },
    body: JSON.stringify(updatetoggle),
  })
  const data=await res.json()
  setTasks(tasks.map((task)=>task.id===id ? {...task, reminder : data.reminder}:task))
  console.log(id)
}

  return (
    <div className="container">
        <Header  onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):('NO More task to show')}
    </div>
  );// here we are rendering Header and Tasks , Tasks has properties tasks[has the array value mentioned in function app] and onDelete[deleteTask function]
}

export default App; //exporting the App functional component
