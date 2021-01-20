import { FETCH_WANTED_START, FETCH_WANTED_SUCCESS, FETCH_WANTED_FAIL} from '../actions';

const initialState = {
    image:''
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_WANTED_START):
            return({
                ...state, 
                image: action.payload,
                isFetching:true,
                error:'',
            });
        case(FETCH_WANTED_SUCCESS):
            return({
                ...state,
                image:action.payload,
                isFetching:false,
                error:'',
            });
        case(FETCH_WANTED_FAIL):
            return({
                image:'',
                isFetching:false,
                error: action.payload,
            })
            default:
                return state

    }
}