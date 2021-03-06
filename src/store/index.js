import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState = {};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];
const composedEnhancer = composeWithDevTools(...storeEnhancers);

const store = createStore(rootReducer, initialState, composedEnhancer);

if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
        module.hot.accept("../reducers/rootReducer", () => {
            const newRootReducer = require("../reducers/rootReducer").default;
            store.replaceReducer(newRootReducer);
        });
    }
}
export default store;
