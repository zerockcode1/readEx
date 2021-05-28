import React from 'react';
import {useDispatch} from "react-redux";
import {changePage} from "./todoSlice";

const PageList = ({pageList, prev, start, end, next, page}) => {

    const dispatch = useDispatch()

    const pages = pageList.map(p => <button key={p}
                                            onClick={() => dispatch(changePage(p))  }>{p}</button>)

    return (
        <div>
            { prev ? <button  onClick={() => dispatch(changePage(start  -1)) }>PREV</button>:<></>}
            {pages}
            { next ? <button onClick={() => dispatch(changePage(end +1)) }>NEXT</button>:<></>}
        </div>
    );
};

export default PageList;