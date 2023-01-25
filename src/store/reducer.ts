import * as actionTypes from "./actionTypes";

const initialState: PageState = {
  pages: [
    {
      id: "/pagenumber1",
      title: "Page 1",
    },
    {
      id: "/page2",
      title: "Page 2",
    },
    {
      id: "/",
      title: "Main Page",
    },
  ],
};

const reducer = (
  state: PageState = initialState,
  action: PageAction
): PageState => {
  switch (action.type) {
    case actionTypes.FETCH_PAGE:
      return state;
  }
  return state;
};

export default reducer;
