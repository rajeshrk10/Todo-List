import React, { useState } from 'react'

export default function AddTask({onAdd}) //getting addTask function from app.js by passing the function as props for AddTask component
{
    const [text,setText]=useState('');// setting state for text
    const [day,setDay]=useState('');//setting state for day
    const [reminder,setReminder]=useState('');// setting state for reminder
    const onsubmit=(e)=>{
        e.preventDefault()
        if(!text)
        {
            alert('empty')
            return
        } 
        else{
            if(text.length<5)// setting validation for text
            {
                alert("length is short")
                setText('')
                setDay('')
                setReminder(false)
                return
            }
        }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
    }
  return (
    <div>
        <form className='add-form' onSubmit={onsubmit}>
            <div className='form-control'>
                <label className='form-control'>Task</label>
                <input type='text' placeholder='Add task' value={text} onChange={(e)=>setText(e.target.value)}/ >
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <div className=''>
                <input type='submit' value='save' className='btn'/>
            </div>
            
        </form>
    </div>
  )
}
