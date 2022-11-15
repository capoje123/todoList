import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, statusTask } from '../../js/actions/actionTodo'

export const Task = ({el}) => {
  const dispatch=useDispatch()
  return (
    <>
        <li onClick={()=>dispatch(statusTask(el.id))} className={el.isDone?'completed':''}><span><i onClick={()=>dispatch(deleteTask(el.id))} className="fa fa-trash"></i></span> {el.description} <i class="fa-solid fa-pen-to-square"></i></li>
    </>
  )
}
