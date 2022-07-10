import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, checkTodo } from '../store/todoSlice';
import Badge from './Badge';

const TodoList = () => {
    const data = useSelector((state) => state.todo);
    // console.log(data, "todolist")
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        // console.log("delete button", id)
            dispatch( removeTodo (id))
    }
    const handleCheck = (id) =>{
        console.log(id,"checkid")
        dispatch( checkTodo(id) );
    }
    return (
        <>

            {data.map((val) => {
                return (
                    <div className="container todo d-flex justify-content-between my-3">
                        <div className="form-check py-2">
                            <input type="checkbox" className='mx-2' onChange={()=>handleCheck(val.id)}/>
                            <label className="form-check-label">
                                {val.task}
                            </label>
                        </div>
                        <div className="icons py-2 d-flex">
                            <Badge />
                            <i className='fas fa-edit mx-3'></i>
                            <i className='fas fa-trash-alt' onClick={()=>handleDelete(val.id)}></i>
                        </div>
                    </div>
                )
            })}


        </>
    )
}

export default TodoList