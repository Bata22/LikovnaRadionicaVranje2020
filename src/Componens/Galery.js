import React from 'react';
import './Galery.css';

function Galery() {
    return (
        <div className="galery" >
            <div className="galery__container">
                <div className="galery__card">
                    <div className="galery__imgBx">
                        <img className="galery__img" src="https://i2.wp.com/files.123freevectors.com/wp-content/original/169733-shiny-abstract-pink-and-blue-background-vector-image.jpg?w=800&q=95" alt="s"/>

                        
                    </div>
                    <div className="galery__content">
                        <h2>Ime umetnika</h2>
                        <p> Kratak opis dela </p>
                    </div>
                </div>
                <div className="galery__card">
                    <div className="galery__imgBx">
                        <img className="galery__img" src="https://i2.wp.com/files.123freevectors.com/wp-content/original/169733-shiny-abstract-pink-and-blue-background-vector-image.jpg?w=800&q=95" alt="s"/>

                        
                    </div>
                    <div className="galery__content">
                        <h2>Ime umetnika</h2>
                        <p> Kratak opis dela </p>
                    </div>
                </div>
                <div className="galery__card">
                    <div className="galery__imgBx">
                        <img className="galery__img" src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" alt="s"/>

                        
                    </div>
                    <div className="galery__content">
                        <h2>Ime umetnika</h2>
                        <p> Kratak opis dela </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Galery;
