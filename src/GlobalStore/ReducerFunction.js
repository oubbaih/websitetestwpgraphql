export const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "DROPDOWN_STATE":
      return {
        category: action.category || state.category,
        open: action.open,
      }
    case "MOBILE_MENU_OPEN":
      return {
        mobilemenuopen: !state.mobilemenuopen,
      }
    case "LATEST_CATEGORY_NAME":
      return {
        latestcategoryname: action.latestcategoryname,
      }
    default:
      return {
        ...state,
      }
  }
}
