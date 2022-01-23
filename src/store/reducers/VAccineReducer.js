const initalState = {
  registrant: [],
};

function reducer(state = initalState, action) {
  switch (action.type) {
    case "ADD_BENIFICIARY":
      const updatedMember = [...state.registrant, action.payload];
      return {
        ...state,
        registrant: updatedMember,
      };
    //   break;
    default:
      return state;
    //   break;
  }
}
export default reducer;
