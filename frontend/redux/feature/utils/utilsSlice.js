const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    dark: "hello",
    location: "/"

}
const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        setTheme: (state) => {
            state.dark = !state.dark
        },
        redirectToRight: (state, action) => {
            state.redirectToRight = action.payload
        }
    }
})
export const { setTheme, redirectToRight } = utilsSlice.actions;
export default utilsSlice.reducer