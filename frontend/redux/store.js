import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import searchSlice from "./feature/Services/searchSlice";
import cartSlice from "./feature/cart/cartSlice";
import utilsSlice from "./feature/utils/utilsSlice";

export const store = configureStore({
    reducer: {
        utils: utilsSlice,
        cart: cartSlice,
        search: searchSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})