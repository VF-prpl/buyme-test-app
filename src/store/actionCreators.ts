import * as actionTypes from "./actionTypes";

export function simulateHttpRequest(action: PageAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function fetchPage() {
  const action: PageAction = {
    type: actionTypes.FETCH_PAGE,
  };

  return simulateHttpRequest(action);
}
