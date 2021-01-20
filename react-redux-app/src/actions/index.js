import axios from 'axios';

export const FETCH_IMAGE_START = "FETCH_IMAGE_START";
export const FETCH_IMAGE_FAIL = "FETCH_IMAGE_FAIL";
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS";


export const getMostWanted = () => dispatch => {
    console.log('test ------------------')
    dispatch({ type:FETCH_IMAGE_START});
    axios 
        .get('https://picsum.photos/200/300')
        .then((res) => {
            console.log('getRESULT --------------',res)
            dispatch({ type:FETCH_IMAGE_SUCCESS, payload: res.config.url});
        })
        .catch(err => {
            dispatch({ type:FETCH_IMAGE_FAIL, payload: err.res.code});
        });

}