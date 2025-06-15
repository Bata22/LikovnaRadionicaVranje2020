import React, { useState } from 'react';


import './Login.css';
import FB from '../Assets/Img/facebook.png';
import TW from '../Assets/Img/twitter.png';
import IG from '../Assets/Img/instagram.png';
import LN from '../Assets/Img/linkedin.png';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';






function Login() {

function toggleForm() {
     document.querySelector('.login__imgBtn')
        document.querySelector('.login__cont').classList.toggle('s-signup');
     }
     const history = useHistory();
     const [email, setEmail]=useState('');
     const [password, setPassword]=useState('');
     const [userName, setUserName]=useState('');
     const logIn = e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) =>{
 
                    history.push("/");
                   

            })
            .catch (error => alert(error.message))
            

    }
   
    const register = e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then ((auth)=>{
            console.log(auth);
            if (auth){
                history.push("/");
            }
            
        })
        .catch (error => alert(error.messsage))
    }
    
    
 
        
    return (
        
           
        <div className="login">
            
            <div className="login__cont">
                <div className="login__form signIn">
                    
                    <h2>Uloguj se </h2>
                    <form>
                    <label>
                        <span>Email Adresa</span>
                        <input type="email" placeholder="Unesite svoj mail"  />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="password"  />
                    </label>
                        <button className="login__submit button" type="submit" onClick={logIn} >Uloguj se</button>
                        <p className="login__forgotPass pass" >Zaboravili ste lozinku ?</p>
                        </form>
                        <div className="login__socialMedia">
                            <ul>
                                <li>
                                    <img src={FB} alt="Facebook logo pic"/>
                                    <img src={TW} alt="twitter logo pic"/>
                                    <img src={IG} alt="Instagram logo pic"/>
                                    <img src={LN} alt="Linked id logo pic"/>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className="login__subCont">
                    <div className="login__img">
                        <div className="login__imgText login__mUp">
                            <h2>Nov ovde ?</h2>
                            <p>Registuj se i pronađi veliku količinu novih prilika!</p>
                        </div>
                        <div className="login__imgText login__mIn">
                            <h2>Jedan od nas ? </h2>
                            <p>Ako si već jedan od nas, samo se uloguj. Čekamo te !</p>
                        </div>
                        <div onClick={toggleForm}  className="login__imgBtn">
                            <span  className="login__mUp">Registruj se</span>
                            <span className="login__mIn">Ulogujte se</span>
                        </div>
                    </div>
                    <div className="login__form singUp">
                        <h2>Registuj se</h2>
                        <form>
                        <label>
                            <span>Ime</span>
                            <input type="text" value={userName} onChange={e=> setUserName(e.target.value)}/>
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" value={password} onChange={e=> setPassword(e.target.value)}  />
                        </label>
                        <label>
                            <span>Potvrdite password</span>
                            <input type="password"    />
                        </label>
                        <label>
                            <button type="submit"  onClick={register} className="login__submit button">Registruj se sada</button>
                        </label>
                        </form>
                    </div>
                </div>
            </div> 
            
         
           
        </div>
        
        
       
            
        
    )
}

export default Login;
