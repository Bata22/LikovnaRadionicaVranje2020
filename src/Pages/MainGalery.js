/* import { Link } from '@material-ui/core'; */
import React from 'react';
import Galery from '../Componens/Galery';

import './MainGalery.css';


function MainGalery() {
    return (
        <div className="MainGalery" >

            <Galery/>
            <Galery/>
            <Galery/>

          {/*   <div className="MainGalery__h2">
                <h1>Dobro dosli u galerije umetnika likovne radionice</h1>
                <p>Odaberite jednu </p>
            </div>
            <div className="MainGalery__imgContainer">
               
                    <div className="Maingalery__imgGalerija">
                        <Link to="/galerije/standardna_galerija">
                            <h2>Standardna galerija</h2>
                                <img src="" alt="Galerija"/>
                                <p>Ovde mozete videti radove umetnika koji, su rađeni tokom cele godine.  </p>
                            
                        </Link>
                    </div>
                
                <Link to="/galerije/covid-19_galerija">
                    <div className="Maingalery__imgKovid galerija">
                        <h2>Covid-19 galerija</h2> 
                            <img src="" alt="Galerija kovid"/>
                            <p>Ovde mozete videti radove umetnika za vreme Kovid pandemije.  </p>
                        
                    </div>
                </Link>
                    
                
            </div> */}
            
            {/* Galerija  */}
            {/* Covid galerija link  */}
            
        </div>
    )
}

export default MainGalery
