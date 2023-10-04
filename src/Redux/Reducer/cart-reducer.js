
import{ADD_ITEM,REMOVE_ITEM,CLEAR_CART} from "../Constant/cart-constants";
const initialState={
    cartItem:[],
}
const reducer=(state=initialState,{type,payload})=>{
    switch(type){
          case ADD_ITEM:
            return{
                ...state,
                cartItem:[...state.cartItem,payload],
            };
            case REMOVE_ITEM:
                return{
                    ...state,
                    cartItem:state.cartItem.filter((item)=> item.id !== payload),
                };
                case CLEAR_CART: 
                return{
                    ...state,
                    cartItem:[],
                }; 

    }
    return state 



}
export default reducer;