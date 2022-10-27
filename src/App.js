import React,{ useContext} from "react";
// import "./App.css";
import Home from "./Components/Home";
import RequestForm from "./Components/RequestForm";
import Signup from "./Components/Signup";
import Message from "./Components/Message";
import Login from "./Components/Login";
import AuthContext from "./store/auth-context";
import Navb from "./Components/Navb";
import {Routes,Route} from "react-router-dom";
import AddCourse from "./Components/AddCourse";
function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <main>
        {/* <Navb></Navb> */}

        {ctx.isLoggedIn && (
          <>
            <Navb></Navb>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/RequestForm" element={<RequestForm />} />
              <Route path="/AddCourse" element={<AddCourse />} />
              <Route path="/Message" element={<Message />} />
            </Routes>
          </>
        )}
        {!ctx.isLoggedIn && (
          <Routes>
            <Route path="/" element={<Login />}></Route>
            {/* <Routes><Route path='/' element={<Signup />}></Route> */}
            <Route path="/Signup" element={<Signup />}></Route>
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
