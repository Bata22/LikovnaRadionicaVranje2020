import React from 'react';
import './App.css';

import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Ovlasniku from './Pages/Ovlasniku';
import Login from './Pages/Login';
import Header from './Componens/Header';
import MainGalery from './Pages/MainGalery';
import Covid from './Pages/Covid';
import StandardnaGalerija from './Pages/StandardnaGalerija';


function App() {
  return (
    <Router>
      <div className="app__progressBar"></div>
        <div className="app">
       
      <Switch>
      <Route path="/galerije/covid-19_galerija">
          <Header/>
          <Covid/>
          
         </Route>
      <Route path="/galerije/standardna_galerija">
          <Header/>
          <StandardnaGalerija/>
          
         </Route>


      <Route path="/galerije">
          <Header/>
         
          <MainGalery/>
         </Route>
        

         <Route path="/o_vlasniku">
          <Header/>
         
          <Ovlasniku/>
         </Route>

         <Route path="/login">
           <Header/>
           

          <Login/>
         </Route>

         <Route path="/" exact>
            <Header/>
            
              <Home/>
         </Route>

      </Switch>
         
        










    
          
        
      </div>
    </Router>
      
        );
}

export default App;
