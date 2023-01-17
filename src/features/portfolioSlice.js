import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        projects: [],
    },
    reducers: {
        setProjects: (state, { payload }) => {
            state.projects = payload;
        },
    },    
});

export const selectPortfolioState = (state) => state.portfolio;
export const selectProjects = (state) => selectPortfolioState(state).projects;

export const { setProjects } = portfolioSlice.actions;
export default portfolioSlice.reducer;
