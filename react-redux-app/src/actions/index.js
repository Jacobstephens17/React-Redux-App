import axios from 'axios';

export const FETCH_WANTED_START = "FETCH_WANTED_START";
export const FETCH_WANTED_FAIL = "FETCH_WANTED_FAIL";
export const FETCH_WANTED_SUCCESS = "FETCH_WANTED_SUCCESS";


export const getMostWanted = () => dispatch => {
    console.log('test ------------------')
    dispatch({ type:FETCH_WANTED_START});
    axios 
        .get('https://picsum.photos/200')
        .then((res) => {
            console.log('getRESULT --------------',res)
            dispatch({ type:FETCH_WANTED_SUCCESS, payload: res.config.url});
        })
        .catch(err => {
            dispatch({ type:FETCH_WANTED_FAIL, payload: err.res});
        });

}