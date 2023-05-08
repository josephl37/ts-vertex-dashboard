import { RESTRICT_USER } from "../actions";

interface RestrictAction {
  type: typeof RESTRICT_USER;
  payload: boolean;
}

const DEFAULT_STATE = false;

const restrictReducer = function (
  state = DEFAULT_STATE,
  action: RestrictAction
) {
  switch (action.type) {
    case RESTRICT_USER:
      return action.payload;
    default:
      return state;
  }
};

export default restrictReducer;
