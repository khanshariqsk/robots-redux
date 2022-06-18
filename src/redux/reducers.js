import { SEARCH_ROBOTS, UPDATE_ROBOTS_FAILURE, UPDATE_ROBOTS_PENDING, UPDATE_ROBOTS_SUCCESS } from "./constants"

const initialState = {
    searchField:"",
    robots:[],
    isPending:true,
    error:''
}

const robotsReducers = (state=initialState,action={}) =>{
    switch(action.type) {
        case SEARCH_ROBOTS:
            return {
                ...state,
                searchField:action.payload
            }
        case UPDATE_ROBOTS_PENDING:
            return {
                ...state,
                isPending:true
            }
        case UPDATE_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending:false,
                robots:action.payload
            }
        case UPDATE_ROBOTS_FAILURE:
            return {
                ...state,
                isPending:false,
                error:action.payload
            }
        default:
            return state
    }

}

export default robotsReducers;
