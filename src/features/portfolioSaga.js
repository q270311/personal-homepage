import { call, put, delay } from "redux-saga/effects";
import { fetchProjectsSuccess, fetchProjectsError } from "./portfolioSlice";
import { getProjectsFromGithub } from ".././getProjectsFromGithub";

function* fetchProjectsFromGithubHandler() {
    try {
        yield delay(2000);
        const projects = yield call(getProjectsFromGithub);
        yield put(fetchProjectsSuccess(projects));        
    } catch (error) {
        yield put(fetchProjectsError());
    }
}

export function* watchFetchProjects() {
    yield fetchProjectsFromGithubHandler();
}