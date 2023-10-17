import axios from "axios";
import {  ERROR, LOADING, SUCCESS } from "./ActionType";

export const funFetchProduct =(search)=> (dispatch) => {
   let filter= search.replaceAll(",", "")
    dispatch({ type: LOADING })
    axios.get(`https://first-0kkt.onrender.com/products${filter}`)
        .then((res) => {
            // console.log(res.data)
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: ERROR })

        })

}
