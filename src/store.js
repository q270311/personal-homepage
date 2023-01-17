import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import portfolioReducer from './features/portfolioSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;