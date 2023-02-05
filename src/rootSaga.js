import { all } from "redux-saga/effects";
import { watchFetchProjects } from "./features/portfolioSaga";

export default function* rootSaga() {
    yield all([
        watchFetchProjects(),
    ]);
}