import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import PageList from "./PageList";
import {readTodo} from "./todoSlice";

const TodoList = () => {


    const data = useSelector(state => state.todo)

    const dispatch = useDispatch()

    const readRequest = (tno) => {

        dispatch(readTodo(tno))

    }

    const list = data.dtoList.map( (t,i) => <li key={i} onClick={() => readRequest(t.tno)}>{t.tno} --- {t.title}</li> )


    return (
        <div>
            {list}
            <PageList {...data}></PageList>
        </div>
    );
};

export default TodoList;