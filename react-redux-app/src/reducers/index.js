import { FETCH_IMAGE_START, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAIL} from '../actions';

const initialState = {
    image:''
}
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_IMAGE_START):
            return({
                image: action.payload,
                isFetching:true,
                error:'',
            });
        case(FETCH_IMAGE_SUCCESS):
            return({
                ...state,
                image:action.payload,
                isFetching:false,
                error:'',
            });
        case(FETCH_IMAGE_FAIL):
            return({
                image:'',
                isFetching:false,
                error: action.payload,
            })
            default:
                return state

    }
}