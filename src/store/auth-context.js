import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
  isLoggedIn: false,
  userId :null,
  onLogout: () => {},
  onLogin: (id) => {
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

  const loginHandler = (id) => {
    localStorage.setItem("userId", id);
    setIsLoggedIn(true);
    // console.log(id);
    if (id == "b0pSlIe") {
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
