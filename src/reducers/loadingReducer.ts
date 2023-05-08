import { SET_LOADING } from "../actions";

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

type LoadingActionTypes = SetLoadingAction;

const DEFAULT_STATE = null;

const loadingReducer = function (
  state: boolean | null = DEFAULT_STATE,
  action: LoadingActionTypes
): boolean | null {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
