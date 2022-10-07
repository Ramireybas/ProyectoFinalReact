import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const mySlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
setProduct:(state,action)=>{
    const product = action.payload;
    return product;

}
    }
})
    
export const getArticleThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res=> dispatch(setProduct(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setProduct } = mySlice.actions;

export default mySlice.reducer;
