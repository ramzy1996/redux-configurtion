export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_BENIFICIARY":
      const addMembers = [...state.beneficiaryList, action.payload];
      return {
        ...state,
        beneficiaryList: addMembers,
      };
    case "DELETE_BENIFICIARY":
      const updatedMembers = state.beneficiaryList.filter(
        (mem) => mem.name !== action.payload.name
      );
      return {
        ...state,
        beneficiaryList: updatedMembers,
      };

    default:
      return state;
  }
}
