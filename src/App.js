import React,{ useContext} from "react";
import "./App.css";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AuthContext from "./store/auth-context";
function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
        {/* {console.log(ctx.isLoggedIn)} */}
      </main>
      {/* {console.log(ctx.isLoggedIn)} */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <Home></Home> */}
    </>
  );
}

export default App;
