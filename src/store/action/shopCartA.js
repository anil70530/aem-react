import { ADD_SHOPCART, DELETE_SHOPCART,DECREMENT_QTY } from "../types";
 
export const addCart=(item)=>{
   return (dispatch)=>{
      dispatch({
        type:ADD_SHOPCART,
         data:item
      })
   }
}
export const decreaseItem=(item)=>{
   return (dispatch)=>{
      dispatch({
        type:DECREMENT_QTY,
         data:item
      })
   }
}

export const deleteItem=(item)=>{
    return (dispatch)=>{
        dispatch({
          type:DELETE_SHOPCART,
           data:item
        })
     }
}