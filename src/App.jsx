// STYLE IMPORT
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// LIBRARY IMPORT
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGE IMPORT
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Dashboard from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
