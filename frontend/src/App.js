import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import All from './components/all';
import Create from './components/create';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Create/>}/>
        <Route exact path='/all' element = {<All/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
