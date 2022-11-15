import { ADD_TASK, DELETE_TASK , STATUS_TASK} from "../const/const"

export const addTask=(newTask)=>{

    return{type:ADD_TASK,payload:newTask}
}
export const deleteTask=(idDelete)=>{

    return{type:DELETE_TASK,payload:idDelete}
}
export const statusTask=(id)=>{

    return{type:STATUS_TASK,payload:id}
}
