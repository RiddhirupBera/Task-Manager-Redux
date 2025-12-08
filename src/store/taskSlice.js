const {createSlice} = require("@reduxjs/toolkit");

const taskSlice = createSlice({
    name : "tasks",
    initialState : {
        taskList : []
    },
    reducers : {
        add(state,action){
            const updatedTaskList = state.taskList.concat(action.payload);
            return {...state,taskList : updatedTaskList};
        }
    }

});

export const {add} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;