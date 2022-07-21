import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import PrivateRoute from "./utils/PrivateRoute";
import { createContext, useReducer } from "react";

export const ContextGlobal = createContext();

const initialState = {
  name: null,
  isLogin: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogin: true,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

const Utama = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextGlobal.Provider
      value={{ contextState: count, contextDispatch: dispatch }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="quiz"
            element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextGlobal.Provider>
  );
};

export default Utama;
