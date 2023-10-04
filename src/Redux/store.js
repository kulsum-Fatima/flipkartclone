import {combineReducers, createStore} from 'redux';
import reducer from './Reducer/cart-reducer'; 



const rootReducer= combineReducers({
    reducer

})

export const store = createStore(rootReducer)