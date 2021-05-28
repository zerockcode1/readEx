import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPage = createAsyncThunk("todo/fetchPage", async (page) => {

    if(page === 0){
        return null;
    }

    const res = await axios.get("http://localhost:8080/todo/pages?page=" +  page)

    return res.data

})

export const addTodo = createAsyncThunk("todo/addTodo", async (todo) => {

    const res = await axios.post("http://localhost:8080/todo", todo)

    return res.data
})

export const readTodo = createAsyncThunk("todo/readTodo", async (tno) => {

    const res = await axios.get("http://localhost:8080/todo/"+tno)

    return res.data
})

export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (todo) => {

    const res = await axios.delete("http://localhost:8080/todo/" +todo.tno, {data:{...todo}})
})

export const updateTodo = createAsyncThunk("todo/updateTodo", async (todo) => {

    const res = await axios.put("http://localhost:8080/todo/"+ todo.tno, todo)

    return res.data

})

const todoSlice =createSlice({

    name:"todo",
    initialState: {
        dtoList:[],
        page:1,
        pageList:[],
        prev: false,
        next: false,
        current: null

    },
    reducers: {

        changePage: (state, action) => {

            console.log(action)
            state.page = action.payload
        }

    },
    extraReducers: {
        [fetchPage.fulfilled] : (state, action) => {

            if(!action.payload){
                state.page = 1
                return state
            }
            return {...action.payload}
        },
        [addTodo.fulfilled] : (state, action) => {
            state.page = 0
        },
        [readTodo.fulfilled]: (state, action) => {

            console.log("payload", action.payload)

            state.current = action.payload
        },
        [deleteTodo.fulfilled]: (state, action) => {

            state.current = null

            state.page = 0
        },

        [updateTodo.pending]: (state, action) => {

            state.current = null
            state.page = 0

        },


        [updateTodo.fulfilled]: (state, action) => {

            state.current = null

            state.page = 0

        }

    }
})

export const {changePage} = todoSlice.actions
export default todoSlice.reducer