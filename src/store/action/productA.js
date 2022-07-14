import axios from "axios"
import { api } from "../../utils/api";
import { FETCH_ERROR,FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_REQUEST_BY_ID,FETCH_PRODUCT_CATEGORY,FETCH_PRODUCT_SORT_DSEC,FETCH_PRODUCT_SORT_ASC } from "../types";

export const getProduct = () => {
    return async(dispatch) => {
        await axios.get(api.getProduct).then(response => {
            dispatch({
                type: FETCH_PRODUCT_REQUEST,
                data: response.data || []
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                data: err.data
            })
        });
    }

}
export const getProductById = (id) => {

    return async(dispatch) => {
     
        await axios.get(api.getProductId(id)).then(response => {
            dispatch({
                type: FETCH_PRODUCT_REQUEST_BY_ID,
                data: response.data || []
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                data: err.data
            })
        });


    }

}
export const getProductCategory = () => {

    return async(dispatch) => {
        await axios.get(api.getCategory).then(response => {
            dispatch({
                type: FETCH_PRODUCT_CATEGORY,
                data: response.data || []
            });
        }).catch(err => {
            dispatch({
                type: FETCH_ERROR,
                data: err.data
            })
        });


    }

}


export const getProductBySortASC=(item)=>{
    return (dispatch) => {
            dispatch({
                type: FETCH_PRODUCT_SORT_ASC,
                data: []
            });
        }
    }

export const getProductBySortDESC=(item)=>{
    return (dispatch) => {
            dispatch({
                type: FETCH_PRODUCT_SORT_DSEC,
                data: []
            });
        }
    }

