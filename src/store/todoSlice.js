const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state, action){
            console.log(action.payload,"payload-data")
            state.push(action.payload)
        },
        removeTodo(state, action) {
            return state.filter((val) => val.id !== action.payload);
        },
        checkTodo(state, action){
            action.payload.isCompleted = true
            console.log(action.payload.isCompleted,"check")
        },
      

    },
});

export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;