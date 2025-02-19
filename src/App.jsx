import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/login/Login";
import Home from "./pages/Layout/home/Home";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
