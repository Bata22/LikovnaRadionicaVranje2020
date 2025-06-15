import React from 'react';
import './Home.css';


import BackgoundImage from '../Assets/Img/BackgoundImage.png';
import Galerija from '../Assets/Img/Zagaleriju.png';
import KovidGalerija from '../Assets/Img/Covid-19galerija.png';
import Vesna from '../Assets/Img/Vesna.jpg';







function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <div className="home__box">
                    <div className="home__imgBx">
                        <img className="home__bi" src={BackgoundImage} alt="slika"/>
                    </div>
                    <div className="home__contentBx">
                        <div>
                         <h2 className="home__text" >Likovna radionica narodnog univerziteta </h2>
                         <p className="home__p" >
                                Pored toga što omogućava kompletno upoznavanje sa svim vidovima likovnog izražavanja (slikarstvo, vajarstvo, grafika...), pre svega vrši pripreme za polaganje prijemnih ispita za srednje umetničke škole, fakultete umetnosti i arhitekture.
                                Najveći uspeh Likovne radionice je svakako uspeh polaznika na prijemnim ispitim. Od 1997. godine, od kada Radionica postoji dosada je željene fakultete upisalo 198 polaznika. Mnogi od njih su završili fakultete i sada su istaknuti mladi umetnici.
                                Za izuzetne rezultate u oblasti kulture, Likovna radionica je dobila Sedmoseptembarsku nagradu 2007. godine.
                                Ovo je dvadeseta tradicionalna izložba radova polaznika Likovne radionice, i ove godine obeležavamo i proslavljamo dvadeset godina rada i postojanja.
                                Zahvaljujući saradnji sa Nevladinom organizacijom – Indigo iz Niša u Likovnoj radionici svoje crtačko umeće usavršavaju i edukuju se i četiri devojke iz Avganistana, i njihovi radovi su prezentovani na ovoj izložbi.
                                I ovog puta, kao i na prošle tri izložbe, sa nama svoje radove izlažu i deca sa posebnim potrebama iz dnevnog boravka-Maštolend. Oni se sa nama u Radionici druže i crtaju svakog prvog ponedeljka u mesecu. Reč je o trajnoj saradnji kojoj se mnogo radujemo i koju ćemo negovati, jer samo inkluzija ima potencijal da umanji strahove i izgradi prijateljstvo, poštovanje i razumevanje.
                                Svi mi zajedno stvaramo radi lepšeg i savršenijeg sveta, sveta ljubavi!
                                Ako si talentovan, voliš da crtaš i ako tražiš svoje mesto pod suncem, dođi i postani član jedne velike kreativne porodice. Naša vrata su svima širom otvorena. 
                                Pridruži nam se!!!
                                Diplomiran islikar,
                            Voditelj Likovne radionice
                              Vesna Marinković Stanković


                        </p>
                        </div>

                    </div>
                </div>
                <div className="home__box">
                    <div className="home__imgBx">
                        <img className="home__bi"  src={Vesna} alt="slika"/>
                    </div>
                    <div className="home__contentBx">
                        <div>
                            <h2 className="home__text" >Biografija vlasnika</h2>
                            <p className="home__p" >
                            Vesna Marinkovic Stankovic
                            Rođena je 1962. godine u Nišu. Završila je srednju umetničku školu „Đorđe Krstić“ u Nišu. Diplomirala je 1987.godine u klasi M.V. Mirskog na odseku za primenjeno slikarstvo fakulteta primenjenih umetnosti u Beogradu. Član je uluva-a. Živi i radi u Vranju kao voditelj Likovne radionice Narodnog Univerziteta. Likovna radionica je 1997. godine dobila nagradu 7. septembar za izuzetne doprinose u razvoju kulture grada Vranja. 
                            Samostalno je izlagala: 1987.  Beograd - Galerija SDK, 1989. Vranje - galerija Kulturnog centra,  2000. Vranje - galerija Narodnog Univerziteta, 2002.  Vranjska banja „Sofka“, 2002. Vladičin Han - galerija Kulturnog centra, 2004.  Pirot - galerija „Čedomir Krstić“, 2005. Vranje - galerija Narodnog Univerziteta, 2006. Vranje - galeriji Narodnog Univerziteta 2009. u galeriji Narodnog Univerziteta, 2012. Vranje - galerija Narodnog Univerziteta , 2018. Vranje - galerija Narodnog Muzeja retrospektivna izložba „Magični Svet“ , 2018. Vranje - galerija  Narodnog Univerziteta izložba „Magični Svet“.
                                Izlagala je na preko devedeset grupnih izložbi i na više bijenala od kojih su neka imala međunarodni karakter.
                                <br/>
                                                                 Adresa: Vranje,Cara Dušana 45/1
                                                                 <br/>
                                                                 Telefon: 017/422-021,064/822-8214 
                                                                 <br/>
                                                                 E-mail: stankovic09@gmail.com
                    


                            </p>
                        </div>
                    </div>
                </div>
                <div className="home__box">
                    <div className="home__imgBx">
                        <img className="home__bi"  src={Galerija} alt="slika"/>
                    </div>
                    <div className="home__contentBx">
                        <div>
                            <h2 className="home__text" > Galerija umetnika </h2>
                            <p className="home__p" >
                                Galerija umetnika
                    {/* Images from upolad last one goes front */}


                            </p>
                        </div>
                    </div>
                </div>
                <div className="home__box">
                    <div className="home__imgBx">
                        <img className="home__bi"  src={KovidGalerija} alt="slika"/>
                    </div>
                    <div className="home__contentBx">
                        <div>
                            <h2 className="home__text" >Kovid Galerija </h2>
                            <p className="home__p" >
                                Kovid galerija
                                {/* Images from upolad last one goes front */}


                            </p>
                        </div>
                    </div>
                </div>
              
            </div>
            
            
             
                   
                        
                  

              

          

           

      {/*   <ButtonImg/> */}
      {/*   <Images/> */}
      {/*   <Images/> */}
      {/*   <Footer/> */}
        </div>
    )
}

export default Home;
