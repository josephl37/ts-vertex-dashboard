import { FETCH_DATA } from "../actions";

interface MakerAction {
  type: typeof FETCH_DATA;
  payload: any; // Replace `any` with the actual type of the payload
}

const DEFAULT_STATE = {};

const makerReducer = function (state = DEFAULT_STATE, action: MakerAction) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default makerReducer;
