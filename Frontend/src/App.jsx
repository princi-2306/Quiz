import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const App = () => {
  return (
    <div className="bg-[#2c1e4a]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/sign-up" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
