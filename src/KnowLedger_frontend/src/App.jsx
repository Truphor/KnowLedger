import { KnowLedger_backend } from "declarations/KnowLedger_backend";
import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="app">
     <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/page1" element={<Sidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
