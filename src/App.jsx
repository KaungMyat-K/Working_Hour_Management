import { Route, Routes } from "react-router-dom";
import "./App.css";

import LayoutPage from "./pages/home/Layout";
import Home from "./pages/home/daily_task/index";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<LayoutPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
