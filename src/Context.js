import data from "./data";
import { reducer } from "./reducer";
const { useContext, createContext, useReducer, useEffect } = require("react");

const countAdded = data.map((item) => ({ ...item, count: 1 }));

const AppContext = createContext();
const initialState = {
  items: countAdded,
  totalCount: 0,
  totalAmount: 0,
};
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { idToRemove: id } });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  const increaseDecreaseCount = (id, type) => {
    dispatch({ type: "INCREASE_DECREASE_COUNT", payload: { id, type } });
    dispatch({ type: "CALCULATE_TOTAL" });
  };

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, increaseDecreaseCount, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider, useAppContext };
