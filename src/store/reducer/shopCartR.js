import { ADD_SHOPCART, DELETE_SHOPCART, DECREMENT_QTY } from "../types";

const initialState = {
    addedItems: [],
    total: 0

};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOPCART:
            
            let addedItem = action.data
            let existed_item = state.addedItems.find(item => action['data'].id === item.id)
            if (existed_item) {
                let res = state.addedItems.map(result => { return { ...result } });
                let getIndex = res.findIndex(item => action['data'].id === item.id)
                let quantity = action['data'].quantity+1;
                let itemList= {...state.addedItems[getIndex], quantity};
                return {
                    ...state,
                    addedItems: state.addedItems.map((content,idx)=>content.id===action['data'].id?{...content,...itemList}:content),
                    total: state.total + action['data'].price
                }
            }
            else {
                let newTotal = state.total + action['data'].price
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal
                }
            }
        case DECREMENT_QTY:
            let exi_item = state.addedItems.find(item => action['data'].id === item.id)
            if (exi_item) {
                let res = state.addedItems.map(result => { return { ...result } });
                let getIndex = res.findIndex(item => action['data'].id === item.id)
                let itemList =  { ...state.addedItems[getIndex], quantity: res[getIndex].quantity-1 } ;
                return {
                    ...state,
                    addedItems:state.addedItems.map((content,idx)=>content.id===action['data'].id?{...content,...itemList}:content),
                    total: state.total - action['data'].price
                }
            }else{
                return null;
            }


        case DELETE_SHOPCART:
            
            let item = state.addedItems.find(item => item.id === action.data.id);
            let totalItemPrice = item.quantity * item.price;
            return {
                ...state,
                addedItems: state.addedItems.filter(item => item.id !== action.data.id),
                total: state.total - totalItemPrice
            }
        default:
            return state;

    }
}
export default cartReducer;