import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import makerReducer from "./makerReducer";
import restrictReducer from "./restrictReducer";
import loadingReducer from "./loadingReducer";

interface AppState {
  data: ReturnType<typeof makerReducer>;
  restrict: boolean;
  loading: ReturnType<typeof loadingReducer>;
}

const rootReducer = combineReducers<AppState>({
  data: makerReducer,
  restrict: restrictReducer,
  loading: loadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
