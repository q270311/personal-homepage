import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        projects: [],
        loading: true,
        error: false,
    },
    reducers: {
        fetchProjectsSuccess: (state, { payload }) => {
            state.projects = payload;
            state.loading = false;
        },
        fetchProjectsError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchProjectsSuccess,
    fetchProjectsError,
} = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectProjects = (state) => selectPortfolioState(state).projects;
export const selectStatus = (state) => selectPortfolioState(state).loading;
export const selectError = (state) => selectPortfolioState(state).error;

export default portfolioSlice.reducer;
