import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addTodo } from '../store/todoSlice'
import TodoList from './TodoList'

const Todo = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (task) {
            dispatch( addTodo({ id: nanoid(), task, isCompleted:false}) )
            setTask('')
        }
    }
    return (
        <>
            <div className='container mt-5'>
                <h1>Todo App</h1><hr />
                <div className="mb-3">
                    <input type="text" className="form-control" id="" placeholder="Add a todo..." value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Add Todo</button>
            </div>
            <div className='container mt-5'>
                <TodoList />
            </div>
        </>
    )
}

export default Todo
