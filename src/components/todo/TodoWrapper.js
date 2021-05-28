import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPage} from "./todoSlice";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import TodoRead from "./TodoRead";

const TodoWrapper = () => {

    const dispatch = useDispatch()

    const page = useSelector(state => state.todo.page)

    useEffect(() => {
        console.log("fetchPage...........")
        dispatch(fetchPage(page))
    },[page])


    return (
        <div>
            <h1>{page}</h1>
            <TodoInput></TodoInput>
            <TodoList></TodoList>
            <TodoRead></TodoRead>
        </div>
    );
};

export default TodoWrapper;