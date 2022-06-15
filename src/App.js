
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';


function App() { 
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="orders" element={<Orders></Orders>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
