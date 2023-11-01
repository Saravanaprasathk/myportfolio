
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Home from './Portfolio/Home';
import 'typewriter-effect/dist/core'
import { Contact } from './Portfolio/Contact';

import { Menu } from './menu';


function App() {
  return (

    <>

    
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
           
           
            <Route path='/Contact' element={<Contact/>}/>
          
          </Route>
        </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
