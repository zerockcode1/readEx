import React, {useRef} from 'react';
import {addTodo} from "./todoSlice";
import {useDispatch} from "react-redux";

const TodoInput = () => {

    const titleRef = useRef()
    const contentRef = useRef()

    const dispatch = useDispatch()

    const save = () => {
        const todo = {title: titleRef.current.value, content: contentRef.current.value}

        dispatch(addTodo(todo))

    }

    return (
        <div>
            <input type={'text'} ref={titleRef}/>
            <input type={'text'} ref={contentRef}/>
            <button onClick={() => save()}>SAVE</button>
        </div>
    );
};

export default TodoInput;