import React,{ useContext} from "react";
import "./App.css";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import AuthContext from "./store/auth-context";
import {Routes,Route} from "react-router-dom";
function App() {
  const ctx = useContext(AuthContext);
  let routes; 

 
  
  // (
  //  {ctx.isLoggedIn && (<Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/Signup" element={<Signup />} />
  //   </Routes>) }
  // );
  return (
    
    <>
      <main>
        {/* {routes} */}
           {ctx.isLoggedIn && (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>) }
    {!ctx.isLoggedIn && (
    <Routes><Route path='/' element={<Login />}></Route>
    {/* <Routes><Route path='/' element={<Signup />}></Route> */}
    <Route path='/Signup' element={<Signup />}></Route>
    </Routes>
    )}
    {console.log(ctx.isLoggedIn)}
      </main>
      
      {/* {console.log(ctx.isLoggedIn)} */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      {/* <Home></Home> */}
    </>
  );
}

export default App;
