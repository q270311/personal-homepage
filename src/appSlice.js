import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleThemeMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});
export const {
    toggleThemeMode,
} = appSlice.actions;

export const selectAppState = (state) => state.app;
export const selectThemeMode = (state) => selectAppState(state).darkMode;

export default appSlice.reducer;
