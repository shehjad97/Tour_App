const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    product: null
}
const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.product = action.payload
        },
        removeCart: (state) => {
            state.product = null
        }
    }

})

export const { setCart, removeCart } = cartSlices.actions
export default cartSlices.reducer