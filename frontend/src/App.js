import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Homepage from './components/Homepage/Homepage'
import Login from './components/login/Login';
import Register from './components/Register/Register';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/about/About';
function App() {
  
  return (
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route  path="/login" exact element={<Login />} />
        <Route path="register" exact element={<Register />} />
      </Routes>
      
    </div> 
  );
}

export default App;
