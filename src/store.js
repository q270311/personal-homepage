import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import portfolioReducer from './features/portfolioSlice';
import appReducer from './appSlice';

const sagaMiddleware= createSagaMiddleware();

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        app: appReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;