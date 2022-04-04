import './App.css';
import { Routes, Route } from "react-router-dom";
import './fonts/Marlboro.ttf';
import { Home, Breakfast, Dinner, Lunch, Pictures } from './pages';

function App() {
  //Neil
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/breakfast' element={<Breakfast />}/>
        <Route path='/lunch' element={<Lunch />}/>
        <Route path='/dinner' element={<Dinner />}/>
        <Route path='/pictures' element={<Pictures />}/>
      </Routes>
    </div>
  );
}

export default App;
