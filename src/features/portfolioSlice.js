import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: [],
    status: 'loading',
  },
  reducers: {
    fetchProjectsSuccess: (state, { payload }) => {
      state.projects = payload;
      state.status = 'success';
    },
    fetchProjectsError: (state) => {
      state.status = 'error';
    },
  },
});

export const { fetchProjectsSuccess, fetchProjectsError } = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectProjects = (state) => selectPortfolioState(state).projects;
export const selectStatus = (state) => selectPortfolioState(state).status;

export default portfolioSlice.reducer;
