import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/login' element={ <Login/>}/>
       </Routes>
      </Navbar>
    </>
  );
}

export default App;
