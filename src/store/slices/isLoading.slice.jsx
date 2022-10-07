import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading:(state,action)=>{
            const isLoading = action.payload
            return isLoading

        }

    }
})

export const { setIsLoading } = mySlice.actions;

export default mySlice.reducer;
