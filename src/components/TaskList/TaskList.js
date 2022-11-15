import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../Task/Task'

export const TaskList = () => {
    const todos=useSelector((state)=>state.todos)
  return (
    <div id="container"> <ul>{todos.map(el=><Task key={el.id} el={el}/>)}</ul></div>
  )
}
