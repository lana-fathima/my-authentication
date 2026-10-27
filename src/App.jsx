import { Route, Routes } from "react-router-dom";
import Context from "./context/Context";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Context>
  );
}

export default App;

