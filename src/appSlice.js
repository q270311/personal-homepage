import { createSlice } from "@reduxjs/toolkit";
import {saveThemeInLocalStorage,getThemeFromLocalStorage} from "./themeLocalStorage";

const appSlice = createSlice({
    name: "app",
    initialState: {
        darkMode: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleThemeMode: (state) => {
            state.darkMode = !state.darkMode;
            saveThemeInLocalStorage(state.darkMode);
        },
    },
});
export const {
    toggleThemeMode,
} = appSlice.actions;

export const selectAppState = (state) => state.app;
export const selectThemeMode = (state) => selectAppState(state).darkMode;

export default appSlice.reducer;
