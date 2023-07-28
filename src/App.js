
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Layout/Navbar';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Login from './component/Users/Login';
import Showlist from './component/Users/Showlist';
import Updatelist from './component/Users/Updatelist';
import Delete from './component/Users/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/showlist' element={<Showlist/>}/>
          <Route path='/update/:bookId' element={<Updatelist/>}/>
          <Route path='/delete/:bookId' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
