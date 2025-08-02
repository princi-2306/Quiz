import React from 'react'
import Home from './Pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuizPage from './Pages/QuizPage';
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <QuizPage/>
      {/* <Footer/> */}
    </div>
  );
}

export default App
