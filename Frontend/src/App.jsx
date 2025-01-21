import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import './App.css'
import TopHeader from './components/Layouts/TopHeader';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import BottomFooter from './components/Layouts/BottomFooter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <TopHeader/>
      <Header/>
      <Routes>
      <Route/>
      </Routes>
      <Footer/>
      <BottomFooter/>
    </Router>
  )
}

export default App
