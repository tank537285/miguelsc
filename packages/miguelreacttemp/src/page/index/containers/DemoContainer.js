import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Demo from "../block/Demo";
import {changeInfoDelay} from "../../../redux/actions";

function DemoContainer() {
    const counter = useSelector((state) => {
        return state.info.people;
    });
    const dispatch = useDispatch();
    return (<Demo clickFun={()=>{dispatch(changeInfoDelay());}} peopleNum={counter}></Demo>);
}

export default DemoContainer