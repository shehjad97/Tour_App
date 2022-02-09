const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    city: undefined,
    distance: undefined
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        sateData: (state, action) => {
            state.city = action.payload.city;
            state.distance = action.payload.distance;
        }
    }
})
export const { sateData } = searchSlice.actions
export default searchSlice.reducer