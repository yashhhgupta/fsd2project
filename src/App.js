import React,{ useContext} from "react";
import Home from "./Components/Home";
import RequestForm from "./Components/RequestForm";
import Signup from "./Components/Signup";
import Message from "./Components/Message";
import Login from "./Components/Login";
import AuthContext from "./store/auth-context";
import SingleCourse from "./Components/SingleCourse";
import {Routes,Route} from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import Profile from "./Components/Profile";
import Error404 from "./Components/Error404";
import "./App.css";

function App() {
  const ctx = useContext(AuthContext);
  const course = {
    image: "https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg",
    title: "How to make a sandwich",
    description: "Learn how to make a sandwich",
    contentList: [
      "Step 1: Get bread",
      "Step 2: Get cheese",
      "Step 3: Get ham",
      "Step 4: Get butter",
      "Step 5: Put butter on bread",
      "Step 6: Put cheese on bread",
      "Step 7: Put ham on bread",
      "Step 8: Put bread on top of bread",
      "Step 9: Eat sandwich",
    ],
  }
  // console.log(ctx.isLoggedInAd);
  return (
    <>
      <main>
        {ctx.isLoggedIn && (
          <>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/RequestForm" element={<RequestForm />} />
              {ctx.isLoggedInAd && (
                <Route path="/AddCourse" element={<AddCourse />} />
              )}
              <Route path="/Message" element={<Message />} />
              <Route path="/Profile" element={<Profile />} />
              <Route
                path="/Course"
                element={<SingleCourse course={course} />}
              />
              <Route path="*" element={<Error404 />} />
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
