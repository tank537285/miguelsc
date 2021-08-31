import {CHANGE_INFO} from "../actions";

const initialState={
    people:0,
};
const info=(state=initialState,action)=>{
    switch (action.type){
        case CHANGE_INFO:
            return action.data;
        default:
            return state
    }
}

export default info