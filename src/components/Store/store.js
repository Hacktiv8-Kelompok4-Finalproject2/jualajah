import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productReducer, updateStoreQuantity } from '../Store/productReducer';
import loginReducer from '../Store/loginReducer';
import { addToCartReducer } from '../Store/cartReducer';

const rootReducer = combineReducers({
  updateStoreQuantity,
  productReducer,
  loginReducer,
  addToCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
