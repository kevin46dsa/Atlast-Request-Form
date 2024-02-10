import React from 'react';
    import './App.css';
    
    /*
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Home from './Components/Home.jsx';
    //import Dark from "./Assets/Darkmodelogo.png"
    //import Light from "./Assets/Lightmodelogo.png"
    //import UnderConstruction from './Components/UnderConstruction/UnderConstruction';
    import Header from './Components/Header/Navbar.jsx'
    import Resume from './Components/Resume/Resume';
    import Contact from './Components/Contact/Contact';
    import Bookshelf2 from './Components/Bookshelf/Bookshelf2';
    import Photography from './Components/Photography/Photography';
    import Music from './Components/Music/Music';
    import About from './Components/About/About';
    import Projects from './Components/Projects/ProjectHome';
    import PageNotFound from './Components/Pagenotfound/Pagenotfound.jsx';
    import Blog from './Components/Blog/Blog.jsx';
    //import Footer from './Components/Footer/Footer';
    //import Character from './components/Character';
    //import Characterlistbypage from './components/Characterbypage';
    //import CharacterHistory from './components/Characterhistory';
    //import Comics from './components/Comics';
   // import Comicsbypage from './components/Comicsbypage';
    //import Stories from './components/Stories';
    //import Storiesbypage from './components/Storiesbypage';
    */
    import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Form from './Components/Form/Form';

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