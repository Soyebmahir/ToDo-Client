import "./App.css";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import SignUp from "./components/Authentication/SignUp/SignUp";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h2 className="text-3xl text-primary pt-2">Your To Do</h2>
      <div className="flex   items-center justify-center">


        <Routes>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="home" element={<RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>

          <Route path="/" element={<RequireAuth>
            <Home></Home>
          </RequireAuth>}></Route>

        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
