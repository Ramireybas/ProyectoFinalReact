import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases:(state,action)=>{
            return action.payload
        }

    }
});
export const getpurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get/*method*/("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",getConfig())
        .then((res) => dispatch(/* action */ setPurchases(res.data.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {  setPurchases} = purchasesSlice?.actions;

export default purchasesSlice.reducer;
