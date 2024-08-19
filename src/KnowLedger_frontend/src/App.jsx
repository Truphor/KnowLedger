import { KnowLedger_backend } from "declarations/KnowLedger_backend";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enrolled" element={<Sidebar />} />
          <Route path="/exam" element={<Sidebar />} />
          <Route path="/profile" element={<Sidebar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
