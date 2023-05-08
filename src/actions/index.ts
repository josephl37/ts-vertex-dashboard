import axios from "axios";
import { Dispatch } from "redux";
import { getCurrentEpoch } from "../utils";

export const FETCH_DATA = "FETCH_DATA";
export const RESTRICT_USER = "RESTRICT_USER";
export const SET_LOADING = "SET_LOADING";

const base = "https://prod.vertexprotocol-backend.com";

export function fetchData(market: number, interval: number) {
  const epoch = getCurrentEpoch();
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });
    axios
      .post(
        `${base}/indexer`,
        {
          maker_statistics: {
            epoch: epoch,
            product_id: market,
            interval: interval,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({
          type: FETCH_DATA,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: SET_LOADING, payload: false });
        dispatch({
          type: RESTRICT_USER,
          payload: error,
        });
      });
  };
}
