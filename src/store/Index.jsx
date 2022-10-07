import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './slices/article.slice'
import purchasesSlice from './slices/purchases.slice'
import isLoadingSlice from './slices/isLoading.slice'
import cartSlice from './slices/cart.slice'

export default configureStore({
    reducer: {
        isLoading : isLoadingSlice,
        article : articleSlice,
        purchases: purchasesSlice,
        cart: cartSlice,
    }
})
