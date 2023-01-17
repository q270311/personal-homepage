import { call, put, delay } from "redux-saga/effects";
import { setProjects } from "./portfolioSlice";
import { getProjectsFromGithub } from ".././getProjectsFromGithub";

function* fetchProjectsFromGithubHandler() {
    try {
        yield delay(2000);
        const projects = yield call(getProjectsFromGithub); 
        console.log(projects) ;      
        yield put(setProjects(projects));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
}

export function* watchFetchProjects() {
    yield fetchProjectsFromGithubHandler();
}