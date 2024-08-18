import { useState } from 'react';
import { KnowLedger_backend } from 'declarations/KnowLedger_backend';
import Navbar from './components/Navbar';
import "./App.css"
import Sidebar from './components/SideBar';
function App() {
  

  return (
    <div className='main-container'>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
