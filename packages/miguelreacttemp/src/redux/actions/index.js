const CHANGE_INFO="change_info";

const changeInfo=(data)=>{
    return {
        type:CHANGE_INFO,
        data
    }
}

const changeInfoDelay=()=>(dispatch,getstate)=>{
    setTimeout(()=>{
        dispatch(changeInfo({people:getstate().info.people+1}))
    },1000);
}




export {changeInfoDelay,changeInfo}
export {CHANGE_INFO}