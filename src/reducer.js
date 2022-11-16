export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "REMOVE_ITEM":
      const { idToRemove } = action.payload;
      const tempItems1 = state.items.filter((item) => item.id !== idToRemove);
      return { ...state, items: tempItems1 };
    case "INCREASE_DECREASE_COUNT":
      const { id, type } = action.payload;
      const tempItems = state.items.map((item) => {
        if (item.id === id) {
          if (type === "inc") {
            item.count = item.count + 1;
          } else {
            item.count = item.count - 1;
          }
        }
        return item;
      });
      const filterItems = tempItems.filter((item) => item.count >= 1);
      return { ...state, items: filterItems };
    case "CALCULATE_TOTAL":
      const total = state.items.reduce(
        (accu, current) => {
          const totalCount = accu.totalCount + current.count;
          const totalAmount = accu.totalAmount + current.count * current.price;
          return { totalCount, totalAmount };
        },
        { totalCount: 0, totalAmount: 0 }
      );

      return {
        ...state,
        totalCount: total.totalCount,
        totalAmount: total.totalAmount.toFixed(2),
      };
    default:
      throw new Error("Action not supported yet");
  }
};
