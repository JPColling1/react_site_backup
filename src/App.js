import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboards from './pages/dashboards';
import Home from './pages';
import Tools from './pages/tools';
import WavViewer from './pages/wavViewer';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/dashboards' element={<Dashboards/>} />
        <Route path='/tools' element={<Tools/>} />
        <Route path='/wav_viewer' element={<WavViewer/>} />
    </Routes>
    </Router>
);
}
  
export default App;
