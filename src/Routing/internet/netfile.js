import React, { useState } from "react";
import axios from "axios";
import { api } from "../api";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (email, password) => {
    return axios
      .post(api.auth.login, {
        email,
        password,
      })
      .then((res) => {
        setToken(res.data.key);
        localStorage.setItem("token", token)
        // localStorage.setItem("token", res.data.key)
      });
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token")
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
