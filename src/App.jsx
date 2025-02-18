import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
