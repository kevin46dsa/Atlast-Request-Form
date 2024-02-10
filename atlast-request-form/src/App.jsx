import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Form from './Components/Form/Form';
import Tickets from './Components/Tickets/Tickets';


function App() {
  return (
        <Router>
        {/*
        <div >
           
            <header>
             <Header/>
            </header>
            */}
            <div >
              <Routes>
                <Route path='/' element={<Form />} />
                <Route path="/Table" element={<Tickets/>} />
              </Routes>
            </div>
            {/*
            <footer>
              
            </footer>
           
          </div> */} 
        </Router>
        
      );
    };
    
    export default App;