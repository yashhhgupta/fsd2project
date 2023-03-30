import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userId: null,
  onLogout: () => {},
  onLogin: (id) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAd, setIsLoggedInAd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.hasOwnProperty("userId")) {
      // setuserId(localStorage.getItem("userid"));
      let id = localStorage.getItem("userId");
      // console.log(id);
      if (id === "6425d26ba2fa9d00f2338fb0") {
        setIsLoggedInAd(true);
      } else {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    setIsLoggedInAd(false);
    navigate("/");
  };

  const loginHandler = useCallback((id) => {
    localStorage.setItem("userId", id);
    setIsLoggedIn(true);
    console.log(id);
    if (id === "6425d26ba2fa9d00f2338fb0") {
      setIsLoggedInAd(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        isLoggedInAd: isLoggedInAd,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
