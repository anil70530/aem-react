import { combineReducers } from "redux";
import productReducer from "./productR";
import cartReducer from "./shopCartR";

const appReducer=combineReducers({
    product:productReducer,
    cart:cartReducer
    
});
const Reducer=(state,action)=>{
    return appReducer(state,action);
}
export default Reducer;