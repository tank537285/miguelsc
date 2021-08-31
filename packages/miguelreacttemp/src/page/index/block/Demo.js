import React from 'react';
function Demo({peopleNum,clickFun}) {
    return(
        <div>
            <div>在线人数{peopleNum}</div>
            <div onClick={clickFun}>点击更新</div>
        </div>
    )
}

export default Demo