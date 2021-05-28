import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, updateTodo} from "./todoSlice";

const TodoRead = () => {

    const dispatch = useDispatch()
    const currentTodo = useSelector(state => state.todo.current )

    console.log("currentTodo..........", currentTodo)

    const titleRef = useRef()
    const contentRef = useRef()



    if(!currentTodo) {
        return (
            <></>
        )
    }else {

        const updateFn = () => {

            const targetTodo = {
                tno: currentTodo.tno,
                title: titleRef.current.value,
                content: contentRef.current.value
            }

            dispatch(updateTodo(targetTodo))
        }

        return (
            <div>
                <h2>Todo Read  {currentTodo.tno}</h2>
                <div>
                    <input ref={titleRef} defaultValue={currentTodo.title}/>
                </div>
                <div>
                    <input ref={contentRef} defaultValue={currentTodo.title}/>
                </div>
                <div>
                    <button onClick={() => updateFn( )}>UPDATE</button>
                    <button onClick={() =>  dispatch(deleteTodo(currentTodo)) }>REMOVE</button>
                </div>
            </div>
        );
    }


};

export default TodoRead;