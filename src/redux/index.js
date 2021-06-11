import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import photosReducer from "./photos";
import imagesReducer from "./images";

    const logger = createLogger({
        diff: true,
        collapsed: true
    });

    const rootReducer = combineReducers({
        photos: photosReducer,
        images: imagesReducer
    });

    const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store;