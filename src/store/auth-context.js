import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {
  },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAd, setIsLoggedInAd] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setIsLoggedInAd(false);
    navigate("/");
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    // console.log(email, password);
    if (email === "admin123@gmail.com" && password === "admin123") {
      setIsLoggedInAd(true);
    } 
  };

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
